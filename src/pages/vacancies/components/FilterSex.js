import React, { Component } from 'react';

export default class FilterCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 2, max: 2000 }
    };
  }
  render(){
    return (
      <div className="filter-sex-block">
      <p>Пол</p>
      <div className="row">
        <div className="col-md-12">
          <div className="filter-sex">
            <div className="row">
              <div className="col-md-12">
                <label>
                  <input type="checkbox" />
                  <span>Любой</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">                    
                <label>
                  <input type="checkbox" />
                  <span>Мужчина</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">                    
                <label >
                  <input type="checkbox" />
                  <span>Женщина</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">                    
                <label >
                  <input type="checkbox" />
                  <span>Семья</span>
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