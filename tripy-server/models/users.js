/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    'id': {
      type: DataTypes.UUIDV4,
      allowNull: false,
      comment: '',
      primaryKey: true
    },
    'user_name': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'first_name': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'last_name': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'password': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'email': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'phone': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: ''
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'tripy'
  });
};
