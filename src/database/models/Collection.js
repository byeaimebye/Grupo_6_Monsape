module.exports = (sequelize, DataTypes) => {
    let alias = "Collection";
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
        tableName: "collections",
        timestamps: false
    };
    const Colection = sequelize.define(alias,cols,config);

    Colection.associate = models => {
        Colection.hasMany(models.Wine, {
            as: "wines",
            foreignKey: "collection_id"
        })
    }

    return Collection;
}