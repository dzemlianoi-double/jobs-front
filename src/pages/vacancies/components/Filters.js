import React, { Component } from 'react';

export default class Filters extends Component {
  render(){
    return (
      <div className='col-md-3 padding-0'>
        <div className='mu-filter'>
          <div className="row">
            <div className="col-md-12">
              <div className="filter-salary">
                <p>Заработная плата</p>
                <div className="block-salary">
                  <div className="row">
                    <div className="col-md-6">
                      <input />
                    </div>
                    <div className="col-md-6">
                      <input />
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-experience-block">
                <p>Опыт Работы</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="filter-experience">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
