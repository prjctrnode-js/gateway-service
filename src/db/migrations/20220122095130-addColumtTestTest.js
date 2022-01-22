
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn(
      'Services',
      'TestTest',
      Sequelize.STRING
    ),

  down: async (queryInterface) => queryInterface.removeColumn(
      'Todo',
      'completed'
    )
  
};
