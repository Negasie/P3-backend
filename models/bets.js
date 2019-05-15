const mongoose = require("mongoose");

const betSchema = new mongoose.Schema({
    game: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },
    odds: {
        type: String,
        required: true,
    }
})

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;