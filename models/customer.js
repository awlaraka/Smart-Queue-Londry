'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Customer extends Model {

    static associate(models) {

      Customer.hasMany(models.Order, {
        foreignKey: 'customer_id'
      });

    }

  }

  Customer.associate = function(models) {

    Customer.hasMany(
        models.Order,
        {
            foreignKey: 'customer_id'
        }
    );

};

  Customer.init({

    name: DataTypes.STRING,

    phone: DataTypes.STRING,

    telegram_username: DataTypes.STRING,

    telegram_chat_id: DataTypes.STRING,

    address: DataTypes.TEXT

  }, {

    sequelize,

    modelName: 'Customer',

  });

  return Customer;

};