import Link from "next/link";

export default function SignUp(req, res){
    return (
        <div>
            <h4>로그인</h4>
            <form action="/list" method="POST">
                <input name="id" placeholder="아이디"/>
                <input name="password" placeholder="비밀번호"/>
                <Link href={''}/>
                <button type="submit">로그인</button>
            </form>
            <Link href={'/sign/signup'}>
                <button type="submit">회원가입</button>
            </Link>
            
        </div>
    )
}