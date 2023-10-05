import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGODB_URL

const client = new MongoClient(uri!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let cachedClient

async function connectDB() {
  if (cachedClient) {
      return cachedClient;
  }

  try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Connected to MongoDB!");

      cachedClient = client;
      
      return cachedClient;
  } catch (err) {
      console.error(err);
      throw err;
  }
}

export { connectDB };