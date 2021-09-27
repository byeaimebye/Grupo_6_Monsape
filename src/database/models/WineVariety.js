module.exports = (sequelize, DataTypes) => {
    let alias = "WineVariety";
    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        wines_id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            references: {
                model: "wine",
                key: "id"
            }
        },
        variety_id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            references: {
                model: "Variety",
                key: "id"
            }
        }
    };
    let config = {
        tableName: "wines_varieties",
        timestamps: false
    };
    const WineVariety = sequelize.define(alias,cols,config);

    WineVariety.associate = models => {
        WineVariety.belongsTo(models.Wine,{
            foreignKey: "wines_id", //Acá deberia ir wine_id en singular, pero en la DB está distinto.
        })
        WineVariety.belongsTo(models.Variety,{
            foreignKey: "variety_id",
        })
    }

    return WineVariety;
}