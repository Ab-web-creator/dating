const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv')

const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envPath });

const BACKUP_PATH = path.resolve(__dirname, 'backup');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function dropAllCollections() {
    try {
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();

        for (const collection of collections) {
            await db.collection(collection.name).drop();
            console.log(`Dropped collection: ${collection.name}`);
        }

        console.log('All collections dropped successfully');
    } catch (error) {
        console.error(`Error dropping collections: ${error.message}`);
    } finally {
        mongoose.connection.close();
    }
}

mongoose.connection.on('open', dropAllCollections);
