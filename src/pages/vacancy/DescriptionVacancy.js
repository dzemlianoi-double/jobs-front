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
      <p><b>{T.translate('vacancy.description_vacancy')}</b></p>
      <Only if={!!duties}>
        <p>{duties}</p>
        <T.span text="vacancy.duties" />
      </Only>
      <Only if={!!requirments}>
        <p>{requirments}</p>
        <T.span text="vacancy.requirments" />
      </Only>
      <Only if={!!schedule}>
        <p>{schedule}</p>
        <T.span text="vacancy.schedule" />
      </Only>
      <Only if={!!accommodation}>
        <p>{accommodation}</p>
        <T.span text="vacancy.accommodation" />
      </Only>
      <Only if={!!info}>
        <p className="info-vacancy">{info}</p>
      </Only>
    </div>
  );
};

DescriptionVacancy.propTypes = propTypes;

export default DescriptionVacancy;
