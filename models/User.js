const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    betsCreated: [{type: mongoose.Schema.Types.ObjectId, ref: "Bet"}]

})

const User = mongoose.model('User', userSchema);

module.exports = User;