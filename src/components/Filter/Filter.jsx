import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, setSerch } from 'redux/filterSlice';
import ss from './Filter.module.css';
export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const filterID = nanoid();
  return (
    <>
      <label htmlFor={filterID} className={ss.find}>
        Find contac by name
        <input
          className={ss.input_search}
          type="text"
          value={filterValue}
          name="filter"
          onChange={e => dispatch(setSerch(e.target.value))}
          id={filterID}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
