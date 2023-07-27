const { Schema, model } = require('mongoose');

const Product = new Schema(
    {
        type: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 10,
        },
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = model("Product", Product);