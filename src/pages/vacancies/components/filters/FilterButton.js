import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired
};

const FilterButton = ({ isDisabled, action }) => {
  return (
    <div className="row">
      <div className="col-md-12 mt-25 apply">
        { !isDisabled && <button onClick={action}>Применить</button>}
        { isDisabled && <button disabled className="filter-disabled-button">Применено</button> }
      </div>
    </div>
  );
};

FilterButton.propTypes = propTypes;

export default FilterButton;

