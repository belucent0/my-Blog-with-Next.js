export default function Register() {
    return (
      <div>
          <form method="POST" action="/api/auth/signup">
            <input name="name" type="text" placeholder="이름" /> 
            <input name="email" type="text" placeholder="이메일" />
            <input name="password" type="password" placeholder="비밀번호" />
            <input name="pwconfirm" type="password" placeholder="비밀번호 확인" />
            <button type="submit">ID/PW 가입요청</button>
          </form>
      </div>
    )
  }

