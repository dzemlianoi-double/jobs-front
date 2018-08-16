import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { requestVacancies } from '../actions';
import PropTypes from 'prop-types';
import Search from './Search';
import Filters from './Filters';
import Vacancy from './Vacancy';
import BasicInfo from './BasicInfo';

class Vacancies extends Component {
  static propTypes = {
    requestVacancies: PropTypes.func.isRequired,
    vacancies: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.requestVacancies();
  }

  get averageSalary() {
    return _.meanBy(this.props.vacancies, (vacancy) => vacancy.salary_min);
  }

  render () {
    return (
      <section className='mu-vacancies'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='mu-vacancies-area'>
                <Search />
                <div className='row main'>
                  <Filters />
                  <div className='col-md-9 padding-0'>
                    <BasicInfo count={this.props.vacancies.length} averageSalary={this.averageSalary} />
                    {this.props.vacancies.map((vacancy => <Vacancy key={vacancy.id} vacancy={vacancy} />))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
      </section>
    );
  }
}

function select(store) {
  return {
    vacancies: store.vacancies.list
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    requestVacancies: () => dispatch(requestVacancies())
  };
}

export default connect(select, mapPropsToDispatch)(Vacancies);