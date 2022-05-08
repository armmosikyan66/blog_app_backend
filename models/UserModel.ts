const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    email: {
        unique: true,
        required: true,
        type: String,
    },
    fullName: {
        required: true,
        type: String,
    },
    username: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    confirmHash: {
        required: true,
        type: String,
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    location: String,
    about: String,
    website: String,
    tweets: [{type: Schema.Types.ObjectId, ref: 'Tweet'}],
}, {timestamps: true,});

const UserModel = model('User', UserSchema);

export default UserModel;