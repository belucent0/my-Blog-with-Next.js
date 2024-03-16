import { GuestbookList } from "../../../app/(board)/guestbook/ui/ListItems";
import { connectDB } from "../../../utils/database";

export default async function getMessages(): Promise<GuestbookList[]> {
    const db = (await connectDB()).db("forum");

    let data: GuestbookList[] = await db.collection("guestbook").find().sort({ _id: -1 }).toArray();

    if (data.length === 0) {
        return [];
    }

    data = data.map(value => {
        value._id = value._id.toString();
        return value;
    });

    return data;
}
