import React from 'react';
import CountTo from 'react-count-to';
import PropTypes from 'prop-types';

const propTypes = {
  to: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  faClassName: PropTypes.string.isRequired,
};

const defaultProps = {
  speed: 5000
};

const CounterSection = ({to, text, faClassName, speed}) => {
  const fn = value => <div className="counter-value" data-count={value}>{value}</div>;
  return (
    <div className="col-md-4 col-sm-6">
      <div className="mu-single-counter">
        <span className={`fa fa-${faClassName}`}></span>
        <div className="mu-single-counter-content">
          <CountTo to={to} speed={speed}>{fn}</CountTo>
          {/* <div className="counter-value" data-count="250">0</div> */}
          <h5 className="mu-counter-name">{text}</h5>
        </div>
      </div>
    </div>
  );
};

CounterSection.propTypes = propTypes;
CounterSection.defaultProps = defaultProps;

export default CounterSection;