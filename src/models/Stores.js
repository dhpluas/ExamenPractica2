const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Storeid:{
        type: Number,
        required: true
    },
    Store_Area:{
        type: Number,
        required: true
    },
    Items_Available:{
        type: Number,
        required: true
    },
    
    Daily_Customer_Count:{
        type: Number,
        required: true
    },
    Store_Sales:{
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("Stores", userSchema);