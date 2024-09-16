const mongoose = require('mongoose');

function connect(){
    mongoose.connect("mongodb+srv://indranilchakraborty692:zJiL4UV4Klemk08k@cluster0.1wu6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/moneyApp")
    .then(()=>{console.log("DB connected successfully!")})
    .catch((err)=>{
        console.log("DB CONNECTION ISSUES");
        console.log(err);
        process.exit(1);
    })
}



// mongoose.connect("mongodb+srv://indranilchakraborty692:zJiL4UV4Klemk08k@cluster0.1wu6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/moneyApp")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
	User,
    Account,
    connect
};