
const invoiceSchema = (sequelize, DataTypes) =>
sequelize.define("nawrsq", {
  items: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  notes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  status:{
    type:DataTypes.STRING,
    defaultValue: "Outstanding",
    allowNull:false

  },
  email:{
  type: DataTypes.STRING,
  isEmail: true, 

  }
});

export default invoiceSchema;
