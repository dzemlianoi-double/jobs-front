const internal_routes = {
  home: '/',
  about_us: '/about_us',
  services: '/services',
  vacancies: '/vacancies',
  contacts: '/contacts',
  vacancy: function(id = null) {
    return id ? `/vacancy/${id}` : '/vacancy/:id'; 
  }
};

export default internal_routes;
