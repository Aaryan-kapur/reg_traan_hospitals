const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/traan", {
    useNewUrlParser: true
})

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"))
db.once("open", (callback) => console.log("Success"))

let Schema = mongoose.Schema

let nameSchema = new Schema({
    name: String,
    sector:String,
    emergency: String,
    enquiry: String,
    numberAmbulances: String,
    range: String,
    hospitalRegNo: String,
    nodalName: String,
    nodalNumber: String,
    nodalEmail: String,
    hospitalAddress: String
}, {
    collection: 'hospital',
})

nameSchema.plugin(uniqueValidator)

let hospital = mongoose.model("hospital", nameSchema)

module.exports.hospital = hospital
