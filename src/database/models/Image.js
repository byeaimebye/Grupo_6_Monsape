module.exports = (sequelize, DataTypes) => {
    let alias = 'Image';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        wine_id:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "images",
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config)
    Image.associate = models => {
        Image.belongsTo(models.Wine,{
            as: "wines",
            foreignKey: "wine_id"
        })
    }
    return Image;
}