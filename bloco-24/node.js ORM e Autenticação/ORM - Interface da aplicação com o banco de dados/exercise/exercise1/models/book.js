'use strict';
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    pageQuantity: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    tableName: 'books',
    modelName: 'book',
  });
  return book;
};