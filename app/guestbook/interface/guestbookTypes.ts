import { Session } from "next-auth";
import { GuestbookList } from "../../../pages/api.interface";

export interface ListItemProps {
    session: Session | null;
    guestbookList: GuestbookList[];
}
