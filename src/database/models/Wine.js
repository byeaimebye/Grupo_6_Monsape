module.exports = (sequelize, DataTypes) => {
    let alias = 'Wine';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        discount:{
            type: DataTypes.DECIMAL(10,2)
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        pairing: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER(11)
        },
        totalAcidity:{
            type: DataTypes.STRING(15),
            allowNull: false
        },
        residualSugar:{
            type: DataTypes.STRING(10),
            allowNull: false
        },
        alcoholContent:{
            type: DataTypes.STRING(25),
            allowNull: false
        },
        image:{
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        tableName: 'wines',
        timestamps: false
    }

    const Wine = sequelize.define(alias, cols, config)
    return Wine;
}