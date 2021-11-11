module.exports = (sequelize, DataTypes)=>{
    const alias = "Cart";
    const cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        }
    };
    const config = {
        tableName: "carts",
        timestamps: false
    };
    
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = models => {
        Cart.belongsTo(models.User,{
            as: "users",
            foreignKey: "user_id"
        })
        Cart.belongsTo(models.Ticket,{
            as: "tickets",
            foreignKey: "cart_id"
        })
    }

    return Cart;
};