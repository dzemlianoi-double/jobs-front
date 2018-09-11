import React from 'react';
import PropTypes from 'prop-types';

import T from '../../store/translations';
import Only from '../basic/components/Only';

const propTypes = {
  info: PropTypes.string.isRequired,
  requirments: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  accommodation: PropTypes.string.isRequired,
  duties: PropTypes.string.isRequired,
};

const DescriptionVacancy = ({ duties, requirments, schedule, accommodation, info }) => {
  return (
    <div className="about-vacancy">
      <Only if={!!info}>
        <T.span text="vacancy.description_vacancy" className="caption-description" />
        <p className="main">{info}</p>
      </Only>
      <Only if={!!duties}>
        <T.span text="vacancy.duties" className="caption-description" />
        <p className="main"> {duties}</p>
      </Only>
      <Only if={!!requirments}>
        <T.span text="vacancy.requirments" className="caption-description" />
        <p className="main"> {requirments}</p>
      </Only>
      <Only if={!!schedule}>
        <T.span text="vacancy.schedule" className="caption-description" />
        <p className="main"> {schedule}</p>
      </Only>
      <Only if={!!accommodation}>
        <T.span text="vacancy.accommodation" className="caption-description" />
        <p className="main"> {accommodation}</p>
      </Only>
    </div>
  );
};

DescriptionVacancy.propTypes = propTypes;

export default DescriptionVacancy;
