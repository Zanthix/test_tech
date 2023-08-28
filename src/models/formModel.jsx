const mongoose = require('mongoose');
const MongooseErrors = require('mongoose-error');
const uniqueValidator = require('mongoose-unique-validator');

const formSchema = mongoose.Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telephone: {type: Number, required: true, unique: true},
    adresse: {type: String, required: true},
    ville: {type: String, required: true},
    commentaire:{type: String, required: true}
});

formSchema.plugin(MongooseErrors);
formSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Formulaire', formSchema);