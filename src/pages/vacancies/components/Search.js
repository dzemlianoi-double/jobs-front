import React from 'react';

const Search = () => {
  return (
    <div className='row'>
      <div className='col-md-12 mu-vacancies-search'>
        <T.span text="vacancies.vacancy" />
        <input />
        <button className="ml-25 btn btn-lg">{T.translate('vacancies.find')}</button>
      </div>
    </div>
  );
};

export default Search;