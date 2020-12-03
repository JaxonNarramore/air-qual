'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('cities', 'state', Sequelize.STRING);
  },
  down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumns('cities', 'state');
  }
}; 
