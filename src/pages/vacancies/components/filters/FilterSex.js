import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const sex = [
  {
    value: 'Any',
    title: 'Любой'
  },
  {
    value: 'Male',
    title: 'Мужчина'
  },
  {
    value: 'Female',
    title: 'Женшина'
  },
  {
    value: 'Family',
    title: 'Семья'
  },
];

export default class FilterSex extends Component {
  static propTypes = {
    onFilterUpdate: PropTypes.func.isRequired
  }

  state = {
    chosenSexes: []
  }

  onSexUpdate = () => {
    this.props.onFilterUpdate({ sex_list: this.state.chosenSexes });
  }

  onChangeSex = (e, value) => {
    if (e.target.value == 'Any' && e.target.checked) {
      this.setState({ chosenSexes: ['Any'] });
    }else if (e.target.checked) {
      let chosenSexes = _.filter([value, ...this.state.chosenSexes], (sex) => sex != 'Any' );
      this.setState({ chosenSexes: chosenSexes });
    }else {
      this.setState({ chosenSexes: _.filter(this.state.chosenSexes, (sex) => sex != value) });
    }
  }
  renderCheckboxes() {
    return _.map(sex, (option) => {
      return (
        <li>
          <div className="row">
            <div className="col-md-12">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.chosenSexes.includes(option.value)}
                  value={option.value}
                  onChange={(e) => this.onChangeSex(e, option.value)}
                />
                <span>{option.title}</span>
              </label>
            </div>
          </div>
        </li>
      );
    });
  }

  render(){
    return (
      <div className="filter-sex-block">
        <p>Пол</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-sex">
              <ul className="filter-list">
                {this.renderCheckboxes()}
                <div className="row">
                  <div className="col-md-12 apply">
                    <button onClick={this.onSexUpdate}>Применить</button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}