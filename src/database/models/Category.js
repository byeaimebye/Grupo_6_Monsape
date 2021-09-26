module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    };
    let config = {
        tableName: "categories",
        timestamps: false
    };
    const Category = sequelize.define(alias,cols,config);

    Category.associate = models => {
        Category.hasMany(models.Wine,{
            as: "wines",
            foreignKey: "category_id"
        })
    }

    return Category;
}