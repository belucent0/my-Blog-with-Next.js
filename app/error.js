'use client'

export default function Error({error, reset}) {
    return (
        <div>
        <h4>오류 발생, 관리자에게 문의하세요</h4>
        <button onClick={()=> reset()}>버튼</button>
        </div>
    )
}