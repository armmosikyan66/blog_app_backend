import { connect, connection } from "mongoose";

connect('mongodb+srv://Arman:Armmosikyan2005@cluster0.hugd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log("database has benn connected")
});

connection.on('error', console.error.bind(console, 'connection error'));

export default connection