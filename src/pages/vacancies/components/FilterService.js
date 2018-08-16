import React, { Component } from 'react';

export default class FilterService extends Component {
  render(){
    return (
      <div className="filter-service-block">
        <p>Специальности</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-service">
              <div className="row">
                <div className="col-md-12">
                  <label>
                    <input type="checkbox" />
                    <span>service</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}