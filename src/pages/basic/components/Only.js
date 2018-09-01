import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  if: PropTypes.bool,
  skipDiv: PropTypes.bool,
  children: PropTypes.node,
};
const Only = props => {
  return props['if']
    ? (props['skipDiv']
      ? props.children
      : <div>{props.children}</div>)
    : null;
};

Only.propTypes = propTypes;

export default Only;
