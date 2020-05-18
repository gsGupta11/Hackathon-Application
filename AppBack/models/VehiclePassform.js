var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var cform = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    vehicleno: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    adhar: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    pin: {
        type: Number,
        required: true,
    },
    fromplace: {
        type: String,
        required: true,
    },
    toplace: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    fromdate: {
        type: String,
        required: true,
    },
    todate: {
        type: String,
        required: true,
    },
    vtype: {
        type: String,
        required: true,
    },
})
var CurfewForm = mongoose.model("vehiclePassform", cform);
module.exports = CurfewForm;