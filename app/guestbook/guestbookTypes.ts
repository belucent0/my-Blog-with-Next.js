export interface User {
    name?: string;
    email?: string;
    image?: string;
}
  
export interface Session {
    user: User | undefined;
}

export interface GuestbookList {
    _id : string;
    content: string;
    authorName: string;
  }
  
export interface ListItemProps {
    session : Session | null;
    userName: string | undefined | null
    guestbookList: GuestbookList[];
  };