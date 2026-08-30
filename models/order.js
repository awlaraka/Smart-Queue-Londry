'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Order extends Model {

    static associate(models) {

      Order.belongsTo(models.Customer, {
        foreignKey: 'customer_id'
      });

    }

  }
  
  Order.associate = function(models) {

    Order.belongsTo(
        models.Customer,
        {
            foreignKey: 'customer_id'
        }
    );

};

  Order.init({

    queue_code: DataTypes.STRING,

    customer_id: DataTypes.INTEGER,

    weight: DataTypes.FLOAT,

    price_per_kg: DataTypes.INTEGER,

    total_price: DataTypes.INTEGER,

    date_in: DataTypes.DATE,

    date_finished: DataTypes.DATE,

    status: DataTypes.STRING

  }, {

    sequelize,

    modelName: 'Order',

  });

  return Order;

};