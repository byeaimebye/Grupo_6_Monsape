module.exports = (sequelize, DataTypes) => {
    let alias = "WineVariety";
    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        wine_id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            references: {
                model: "Wine",
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
            foreignKey: "wine_id",
        })
        WineVariety.belongsTo(models.Variety,{
            foreignKey: "variety_id",
        })
    }

    return WineVariety;
}