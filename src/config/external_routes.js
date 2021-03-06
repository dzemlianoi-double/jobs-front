const external_routes = {
  basic_conf: 'basic_configurations',
  vacancies_last: 'vacancies/last',
  vacancies_list: 'vacancies',
  services: 'services',
  service: function (id) {
    return `services/${id}`;
  },
  create_claim: 'claims',
  vacancy: function(id) {
    return `vacancies/${id}`;
  }
};

export default external_routes;
