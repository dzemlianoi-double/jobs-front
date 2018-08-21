const external_routes = {
  basic_conf: '/basic_configurations',
  vacancies_last: '/vacancies/last',
  vacancies_list: '/vacancies',
  services: '/services',
  vacancy: function(id) {
    return `/vacancies/${id}`;
  }
};

export default external_routes;
