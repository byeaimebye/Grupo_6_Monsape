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
    const Collection = sequelize.define(alias,cols,config);

    Collection.associate = models => {
        Collection.hasMany(models.Wine, {
            as: "wines",
            foreignKey: "collection_id"
        })
    }

    return Collection;
}