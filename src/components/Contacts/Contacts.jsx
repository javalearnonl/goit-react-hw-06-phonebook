import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContactsValue } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import ss from './Contacts.module.css';
import { getFilterValue } from 'redux/filterSlice';
export const Contacts = () => {
  const contacts = useSelector(getContactsValue);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul>
        {filterContacts.map(({ name, id, number }) => {
          return (
            <li key={id} className={ss.list}>
              {name}: {number}
              <button
                className={ss.button_delete}
                key={id}
                type="button"
                onClick={() => handleDelete(id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
