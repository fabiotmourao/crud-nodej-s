const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Profile = require('./Profile');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  profile_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'profiles',
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: true,
});

User.belongsTo(Profile, { foreignKey: 'profile_id' });
Profile.hasMany(User, { foreignKey: 'profile_id' });

module.exports = User;
