/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userTrips', {
    'user_id': {
      type: DataTypes.UUIDV4,
      allowNull: false,
      comment: '',
      primaryKey: true,
      references: {
        model: {
          tableName: 'users',
          schema: 'tripy'
        },
        key: 'id'
      },
      unique: true
    },
    'trip_id': {
      type: DataTypes.UUIDV4,
      allowNull: false,
      comment: '',
      references: {
        model: {
          tableName: 'trips',
          schema: 'tripy'
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'userTrips',
    schema: 'tripy'
  });
};
