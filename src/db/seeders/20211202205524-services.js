
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {
        port: 3001,
        host: '127.0.0.1',
        path: 'history',
        token: 'historysecret',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        port: 3002,
        host: '127.0.0.1',
        path: 'subscriptions',
        token: 'sibscribesecret',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        port: 3000,
        host: '127.0.0.1',
        path: 'users',
        token: 'usersecret',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        port: 3005,
        host: '127.0.0.1',
        path: 'videos',
        token: 'videosecret',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Services', null, {});
  },
};
