/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test', {
    'id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '',
      primaryKey: true
    },
    'name': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: ''
    }
  }, {
    sequelize,
    tableName: 'test',
    schema: 'tripy'
  });
};
