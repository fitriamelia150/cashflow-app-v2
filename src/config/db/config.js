const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://MyDB:abcd123@cluster0.z9nxfkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

await client.connect();

const dbName = "cashflow-apps";
const database = client.db(dbName);