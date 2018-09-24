import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  requestVacancies,
  openVacancyModal,
  closeVacancyModal,
  saveVacancy,
  updateFilters,
  customSearch,
  resetSearch,
  resetAllFilters,
  changeOrder
} from '../actions';

import filteredVacancies from '../support/filters';

import Search from './search';
import Filters from './filters';
import Vacancy from './Vacancy';
import BasicInfo from './BasicInfo';
import VacancyModal from './VacancyModal';
import MetaTitle from '../../utils/components/MetaTitle';

class Vacancies extends Component {
  static propTypes = {
    requestVacancies: PropTypes.func.isRequired,
    openVacancyModal: PropTypes.func.isRequired,
    closeVacancyModal: PropTypes.func.isRequired,
    saveVacancy: PropTypes.func.isRequired,
    vacancies: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    modalVacancy: PropTypes.object.isRequired,
    onFilterUpdate: PropTypes.func.isRequired,
    customSearch: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired,
    onResetAllFilters: PropTypes.func.isRequired,
    changeOrder: PropTypes.func.isRequired,
    order: PropTypes.string
  }

  componentDidMount() {
    this.props.requestVacancies();
  }

  get averageSalary() {
    if (!this.filteredVacancies.length) { return 0; }
    return _.meanBy(this.filteredVacancies, (vacancy) => vacancy.salary_min).toFixed(0);
  }

  get choosenOrder() {
    switch(this.props.order) {
    case 'hot': return [['hot'], ['desc']];
    case 'date': return [['created_at'], ['desc']];
    case 'salary': return [['salary_min'], ['desc']];
    case 'name_asc': return [['title'], ['asc']];
    case 'name_desc': return [['title'], ['desc']];
    default: return [['hot'], ['desc']];
    }
  }

  get resultVacancies() {
    return _.orderBy(this.neededVacancies, ...this.choosenOrder);
  }

  get neededVacancies() {
    return this.props.filters.used.search ? this.searchableVacancies : this.filteredVacancies;
  }

  get searchableVacancies() {
    return this.props.vacancies.filter(vacancy => vacancy.title.includes(this.props.filters.used.search));
  }

  get filteredVacancies() {
    return filteredVacancies(this.props.vacancies, this.props.filters.used);
  }

  get renderVacancies() {
    return this.resultVacancies.map((vacancy) => {
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
    const { modalVacancy, closeVacancyModal, saveVacancy, vacancies, filters, onFilterUpdate, customSearch,
      resetSearch, onResetAllFilters, order, changeOrder } = this.props;
    return (
      <section className='mu-vacancies'>
        <MetaTitle title="vacancies" />
        <VacancyModal modalVacancy={modalVacancy} closeVacancyModal={closeVacancyModal} saveVacancy={saveVacancy} />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='mu-vacancies-area'>
                <Search vacancies={vacancies} customSearch={customSearch} resetSearch={resetSearch} search={filters.used.search} />
                <div className='row main'>
                  <Filters onFilterUpdate={onFilterUpdate} vacancies={vacancies} filters={filters} onResetAllFilters={onResetAllFilters} />
                  <div className='col-md-9 padding-0'>
                    <BasicInfo count={this.resultVacancies.length} averageSalary={this.averageSalary} order={order} changeOrder={changeOrder} />
                    {this.renderVacancies}
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
    order: store.vacancies.order,
    modalVacancy: store.vacancies.modalVacancy,
    filters: store.vacancies.filters
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    requestVacancies: () => dispatch(requestVacancies()),
    saveVacancy: () => dispatch(saveVacancy()),
    openVacancyModal: (vacancy) => dispatch(openVacancyModal(vacancy)),
    closeVacancyModal: () => dispatch(closeVacancyModal()),
    onFilterUpdate: (changedData) => dispatch(updateFilters(changedData)),
    customSearch: (text) => dispatch(customSearch(text)),
    resetSearch: () => dispatch(resetSearch()),
    onResetAllFilters: () => dispatch(resetAllFilters()),
    changeOrder: (order) => dispatch(changeOrder(order))
  };
}

export default connect(select, mapPropsToDispatch)(Vacancies);
