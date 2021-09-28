module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        fullname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        tel:{
            type: DataTypes.STRING(20)
        },
        rol: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        dni:{
            type: DataTypes.STRING(10)
        },
        avatar:{
            type: DataTypes.STRING(100)
        },
        cp: {
            type: DataTypes.STRING(10)
        }
    }
    let config = {
        tableName:"users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config)

    User.associate = models => {
        User.hasMany(models.Cart,{
            as: "user_cart",
            foreignKey: "user_id"
        })} 
        return User;
    }

