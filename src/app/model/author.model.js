const { DataTypes, Model } = require('sequelize');

class Author extends Model {}

module.exports = (sequelize) => {
  Author.init(
    {
      id: {
        type: DataTypes.UUID, // Use UUID for primary key
        defaultValue: DataTypes.UUIDV4, // Automatically generate UUID
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      profile_pic: {
        type: DataTypes.TEXT,
        allowNull: true, // Optional
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true, // Optional
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Default to current timestamp
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      modelName: 'Author', // Name of the model
      tableName: 'authors', // Name of the table in the database
      timestamps: false, // Disable Sequelize's automatic timestamps
    }
  );

  return Author;
};