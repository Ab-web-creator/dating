const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envPath });

const BACKUP_PATH = path.resolve(__dirname, 'backup');

const currentDateTime = new Date().toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/[\/,:\s]/g, '-');
const timestampedDir = path.join(BACKUP_PATH, currentDateTime);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function exportCollections() {
    try {
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();

        // Ensure backup and timestamped directories exist
        if (!fs.existsSync(BACKUP_PATH)) {
            fs.mkdirSync(BACKUP_PATH);
        }
        if (!fs.existsSync(timestampedDir)) {
            fs.mkdirSync(timestampedDir);
        }

        for (const collection of collections) {
            const data = await db.collection(collection.name).find({}).toArray();
            fs.writeFileSync(path.join(timestampedDir, `${collection.name}.json`), JSON.stringify(data, null, 2));
        }

        console.log('Export completed successfully in directory:', timestampedDir);
    } catch (error) {
        console.error(`Error exporting collections: ${error.message}`);
    } finally {
        mongoose.connection.close();
    }
}

mongoose.connection.on('open', exportCollections);
