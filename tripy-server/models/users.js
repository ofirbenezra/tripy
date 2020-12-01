/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    'id': {
      type: DataTypes.UUIDV4,
      allowNull: false,
      comment: '',
      primaryKey: true
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
    'email': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'phone': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: ''
    },
    'user_name': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'password': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'status': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: ''
    },
    'free_from': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: ''
    },
    'free_until': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: ''
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'tripy'
  });
};
