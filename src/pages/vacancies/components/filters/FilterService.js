import React, { Component } from 'react';

export default class FilterService extends Component {
  render(){
    return (
      <div className="filter-service-block">
        <p>Специальности</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-service">
              <ul className="filter-list">
                <li>
                  <div className="row">
                    <div className="col-md-12">
                      <label>
                        <input type="checkbox" />
                        <span>php developer</span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-12">                    
                      <label>
                        <input type="checkbox" />
                        <span>Js developer</span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-12">                    
                      <label >
                        <input type="checkbox" />
                        <span>swift developer</span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-12">                    
                      <label >
                        <input type="checkbox" />
                        <span>C+ developer</span>
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="row">
                <div className="col-md-12 apply">
                  <button>применить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}