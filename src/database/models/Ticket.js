module.exports = (sequelize, DataTypes)=>{
    const alias = "Ticket";
    const cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        total: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        }
    };
    const config = {
        tableName: "tickets",
        timestamps: true
    };

    const Ticket = sequelize.define(alias, cols, config);

    Ticket.associate = models => {
        Ticket.belongsTo(models.Cart,{
            as: "cart",
            foreignKey: "cart_id"
        })
    }
    return Ticket;
}