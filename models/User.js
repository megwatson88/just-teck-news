const {Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');

//create our USer model 
class User extends Model {}

//define table columns and configuration 
User.init(
    {
        //table definitions go here 
        //define an id column 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.String, 
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        //table configuration options go here 
         // pass in our imported sequelize connection (the direct connection to our database) sequelize,
    sequalize,
    // don't automatically create createdAt/updatedAt timestamp fields 
    timestamps: false,
    // don't pluralize name of database table 
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`) 
    underscored: true,
    // make it so our model name stays lowercase in the database 
    modelName: 'user'
    }
);

module.exports = User; 