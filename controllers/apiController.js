function index(req, res) {
  res.json({
    message: 'Welcome to Jibe!',
    documentation_url: 'https://github.com/sf-wdi-41-homework/project-1-beth-tucker',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

module.exports = {
  index: index
}
