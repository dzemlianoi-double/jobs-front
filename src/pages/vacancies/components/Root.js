import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { requestVacancies, openVacancyModal, closeVacancyModal, saveVacancy } from '../actions';
import filteredVacancies from '../support/filters';
import Search from './Search';
import Filters from './filters';
import Vacancy from './Vacancy';
import BasicInfo from './BasicInfo';
import VacancyModal from './VacancyModal';

class Vacancies extends Component {
  static propTypes = {
    requestVacancies: PropTypes.func.isRequired,
    openVacancyModal: PropTypes.func.isRequired,
    closeVacancyModal: PropTypes.func.isRequired,
    saveVacancy: PropTypes.func.isRequired,
    vacancies: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    modalVacancy: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.requestVacancies();
  }

  get averageSalary() {
    if (!this.filteredVacancies.length) { return 0; }
    return _.meanBy(this.filteredVacancies, (vacancy) => vacancy.salary_min).toFixed(0);
  }

  get filteredVacancies() {
    return filteredVacancies(this.props.vacancies, this.props.filters);
  }

  get renderFilteredVacancies() {
    return this.filteredVacancies.map((vacancy) => {
      return (
        <Vacancy 
          key={vacancy.id}
          vacancy={vacancy}
          openVacancyModal={this.props.openVacancyModal}
        />
      );
    });
  }

  render () {
    const { modalVacancy, closeVacancyModal, saveVacancy } = this.props;
    return (
      <section className='mu-vacancies'>
        <VacancyModal modalVacancy={modalVacancy} closeVacancyModal={closeVacancyModal} saveVacancy={saveVacancy} />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='mu-vacancies-area'>
                <Search />
                <div className='row main'>
                  <Filters />
                  <div className='col-md-9 padding-0'>
                    <BasicInfo count={this.filteredVacancies.length} averageSalary={this.averageSalary} />
                    {this.renderFilteredVacancies}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function select(store) {
  return {
    vacancies: store.vacancies.list,
    modalVacancy: store.vacancies.modalVacancy,
    filters: store.vacancies.filters.used
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    requestVacancies: () => dispatch(requestVacancies()),
    saveVacancy: () => dispatch(saveVacancy()),
    openVacancyModal: (vacancy) => dispatch(openVacancyModal(vacancy)),
    closeVacancyModal: () => dispatch(closeVacancyModal())
  };
}

export default connect(select, mapPropsToDispatch)(Vacancies);