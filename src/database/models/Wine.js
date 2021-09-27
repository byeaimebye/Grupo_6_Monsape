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
        },
        colection_id :{
            type: DataTypes.INTEGER(11),
            allowNull: false
          },
        category_id :{
          type: DataTypes.INTEGER(11),
          allowNull: false
        }
    }

    let config = {
        tableName: 'wines',
        timestamps: false
    }
    const Wine = sequelize.define(alias, cols, config)

    Wine.associate = models => {
        Wine.belongsTo(models.Category,{
           as: "categories",
           foreignKey: "category_id"
        })
        Wine.belongsTo(models.Colection,{
        as: "colections",
        foreignKey: "colection_id"
        })

        Wine.belongsToMany(models.Variety,{
            as: "varieties",
            through: "wines_varieties",
            foreignKey: "wines_id", //Acá deberia ir wine_id en singular, pero en la DB está distinto.
            otherKey: "variety_id",
            timestamps: false
        })
    }

    return Wine;
}