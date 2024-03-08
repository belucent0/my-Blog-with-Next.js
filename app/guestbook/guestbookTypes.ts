import { Session } from "next-auth";

export interface GuestbookList {
  _id: string;
  content: string;
  authorName: string;
}

export interface ListItemProps {
  session: Session | null;
  userName: string | undefined | null;
  guestbookList: GuestbookList[];
}
