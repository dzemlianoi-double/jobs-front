import React from 'react';
import PropTypes from 'prop-types';

import T from '../../store/translations';
import Only from '../basic/components/Only';
import _ from 'lodash';

const propTypes = {
  info: PropTypes.string.isRequired,
  requirments: PropTypes.string,
  schedule: PropTypes.string,
  accommodation: PropTypes.string,
  duties: PropTypes.string,
};

const DescriptionVacancy = ({ duties, requirments, schedule, accommodation, info }) => {
  return (
    <div className="about-vacancy">
      <Only if={!_.isEmpty(info)}>
        <T.span text="vacancy.description_vacancy" className="caption-description" />
        <p className="main">{info}</p>
      </Only>
      <Only if={!_.isEmpty(duties)}>
        <T.span text="vacancy.duties" className="caption-description" />
        <p className="main"> {duties}</p>
      </Only>
      <Only if={!_.isEmpty(requirments)}>
        <T.span text="vacancy.requirments" className="caption-description" />
        <p className="main"> {requirments}</p>
      </Only>
      <Only if={!_.isEmpty(schedule)}>
        <T.span text="vacancy.schedule" className="caption-description" />
        <p className="main"> {schedule}</p>
      </Only>
      <Only if={!_.isEmpty(accommodation)}>
        <T.span text="vacancy.accommodation" className="caption-description" />
        <p className="main"> {accommodation}</p>
      </Only>
    </div>
  );
};

DescriptionVacancy.propTypes = propTypes;

export default DescriptionVacancy;
