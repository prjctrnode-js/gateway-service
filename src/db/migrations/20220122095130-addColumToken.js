module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('Services', 'token', Sequelize.STRING),

  down: async (queryInterface) =>
    queryInterface.removeColumn('Services', 'token'),
};
