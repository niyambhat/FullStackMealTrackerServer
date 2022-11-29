import { MongoClient } from 'mongodb';

const DB_NAME = 'meal-tracker';
const uri ="mongodb+srv://systemadmin:admin@cluster0.yn9luqx.mongodb.net/?retryWrites=true&w=majority"

export const db = {
    _dbClient: null,
    connect: async function() {
        const client = await MongoClient.connect(uri, {
            maxPoolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this._dbClient = client;
        console.log("connected")
    }, 
    getConnection: function() {
        if (!this._dbClient) {
            console.log('You need to call the connect() function first!');
            process.exit(1);
        }
        return this._dbClient.db(DB_NAME);
    },
}