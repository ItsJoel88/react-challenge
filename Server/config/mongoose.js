const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(`mongodb+srv://new-user_31:${process.env.PASSWORD_MONGO}@cluster0-96gdk.gcp.mongodb.net/react-countries?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
        if (err) console.log(err)
        else console.log('Connected to database')
    })
}
