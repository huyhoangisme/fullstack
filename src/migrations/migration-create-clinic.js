'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('clinics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.STRING
            },
            contentMarkdown: {
                type: Sequelize.TEXT('long'),
            },
            contentHTML: {
                type: Sequelize.TEXT('long'),
            },
            image: {
                type: Sequelize.BLOB('long')
            },
            name: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('clinics');
    }
};