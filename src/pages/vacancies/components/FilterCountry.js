import React, { Component } from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'chocolate', label: 'Украина' },
  { value: 'strawberry', label: 'Россия' },
  { value: 'vanilla', label: 'Латвия' }
];
 
export default class FilterCountry extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;
 
    return (
      <div className="filter-country-block">
        <p>Страна</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-country">
              <Select className="mt-10"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
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