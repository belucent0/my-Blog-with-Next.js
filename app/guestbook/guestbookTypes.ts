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
  
export type ListItemProps = {
    session : Session;
    userName: string;
    guestbookList: GuestbookList[];
  };