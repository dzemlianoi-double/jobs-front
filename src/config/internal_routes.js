const internal_routes = {
  home: '/',
  about_us: '/about_us',
  services: '/services',
  service: function (id = null) {
    return id ? `/service/${id}` : '/service/:id';
  },
  vacancies: '/vacancies',
  contacts: '/contacts',
  vacancy: function(id = null) {
    return id ? `/vacancy/${id}` : '/vacancy/:id'; 
  }
};

export default internal_routes;
