
const invoiceSchema = (sequelize:any, DataTypes:any) =>
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
  // allowNull:false
  }
});

export default invoiceSchema;
