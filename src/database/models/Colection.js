module.exports = (sequelize, DataTypes) => {
    let alias = "Colection";
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
        tableName: "colections",
        timestamps: false
    };
    const colection = sequelize.define(alias,cols,config);

    return colection;
}