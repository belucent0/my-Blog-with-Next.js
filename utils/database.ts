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

export async function connectDB() {
    if (cachedClient) {
        return cachedClient;
    }

    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("=====DB 연결 성공=====");

        cachedClient = client;

        return cachedClient;
    } catch (err) {
        console.error(err);
        throw new Error("DB 연결에 실패했습니다.");
    } finally {
        setTimeout(
            () => {
                client.close();

                cachedClient = null;

                console.log("DB 연결이 해제되었습니다.");
            },
            1000 * 3 * 1,
        );
    }
}
