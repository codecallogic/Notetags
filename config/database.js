const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Your connected to ${db.host} at ${db.port}`)
})