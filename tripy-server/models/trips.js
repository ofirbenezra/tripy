/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trips', {
    'id': {
      type: DataTypes.UUIDV4,
      allowNull: false,
      comment: '',
      primaryKey: true
    },
    'name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: ''
    },
    'start_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: ''
    },
    'end_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: ''
    }
  }, {
    sequelize,
    tableName: 'trips',
    schema: 'tripy'
  });
};
