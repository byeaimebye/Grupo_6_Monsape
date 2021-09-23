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

    return Variety;
}