const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const {MongoClient} = require("mongodb");
const url ='mongodb+srv://itsaparnam_db_user:gzRfWavofxzdmy6G@cluster0.jgb615d.mongodb.net/';
const client = new MongoClient(url);
const dbName = 'helloworld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());