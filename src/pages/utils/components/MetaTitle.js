import React from 'react';
import MetaTags from 'react-meta-tags';
import T from '../../../store/translations';
import PropTypes from 'prop-types';
import worker_logo from '../../../assets/images/worker_logo.png';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const metaTitle = ({ title }) => {
  const baseTitle = T.translate(`seo.title.${title}`);
  const finalTitle = baseTitle.includes('seo.title') ? title : baseTitle;
  return (
    <div className="wrapper">
      <MetaTags>
        <title>{finalTitle} | Worker.dp.ua</title>
        <meta name="description" content="Worker.dp.ua - сайт поиска работы №1 за границей" />
        <meta property="og:image" content={worker_logo} />
      </MetaTags>
    </div>
  );
};

metaTitle.propTypes = propTypes;


export default metaTitle;
