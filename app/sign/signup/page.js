export default function SignUp(req, res){
    return (
        <div>
            <h4>회원가입</h4>
            <form action="/api/user/new" method="POST">
                <input name="id" placeholder="아이디"/>
                <input name="password" placeholder="비밀번호"/>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}