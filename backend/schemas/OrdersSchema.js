const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qny: Number,
    price: Number,
    mode: String,
});

module.exports = {OrdersSchema};