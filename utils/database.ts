import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let cachedClient;

async function connectDB() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    // 디비를 연결한 뒤에 시간이 흐른 뒤에 디비 연결을 닫음 시간은 1분
    setTimeout(() => {
      client.close();
    }, 1000 * 60);

    cachedClient = client;

    return cachedClient;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { connectDB };
