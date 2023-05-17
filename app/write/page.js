import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import WriteForm from "./WriteForm"

export default async function Write() {
  // let session = await getServerSession(authOptions)
  // if (!session) {
  //   return (
  //     <div>
  //       <h4>로그인 후 작성이 가능</h4>
  //     </div>
  //   );
  // } else {
    return (
      <div className="list-bg">
        <WriteForm/>
      </div>
    );
  // } 
}