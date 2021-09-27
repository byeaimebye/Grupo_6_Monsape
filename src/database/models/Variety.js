module.exports = (sequelize, DataTypes) => {
    let alias = "Variety";
    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        tableName: "varieties",
        timestamps: false
    };
    const Variety = sequelize.define(alias,cols,config);

    Variety.associate = models => {
        Variety.belongsToMany(models.Wine,{
            as: "wines",
            through: "wines_varieties",
            foreignKey: "variety_id",
            otherKey: "wines_id", //Acá deberia ir wine_id en singular, pero en la DB está distinto.
            timestamps: false
        })
    }

    return Variety;
}