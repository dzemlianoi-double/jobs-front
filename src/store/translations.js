import T from 'i18n-react';
const translations = require(`../translations/${process.env.DEFAULT_LOCALE}.json`);

T.setTexts(translations);

export default T;
