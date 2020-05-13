const { Schema, model } = require('mongoose')

const DevSchema = new Schema({

    name: {
        type: String, //tipo da variável
        required: true, //Obrigatória
    },

    user: {
        type: String,
        required: true
    },

    bio: String,

    avatar: {
        type: String,
        required: true
    },

    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],

    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
}, {
    timestamps: true //é para anotar o data/hora da criação e atualização dos objetos
});

module.exports = model('Dev', DevSchema);