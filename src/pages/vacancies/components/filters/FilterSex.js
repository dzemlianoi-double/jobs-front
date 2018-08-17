import React, { Component } from 'react';

export default class FilterSex extends Component {
  state = {
    value: { min: 2, max: 2000 }
  };
  render(){
    return (
      <div className="filter-sex-block">
        <p>Пол</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-sex">
              <ul className="filter-list">
                <li>
                  <div className="row">
                    <div className="col-md-12">
                      <label>
                        <input type="checkbox" />
                        <span>Любой</span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-12">                    
                      <label>
                        <input type="checkbox" />
                        <span>Мужчина</span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-12">                    
                      <label >
                        <input type="checkbox" />
                        <span>Женщина</span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-12">                    
                      <label >
                        <input type="checkbox" />
                        <span>Семья</span>
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