export default function Write(req, res){
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/test" method="POST">
                <label for="name">제목:</label>
                <div><input type="text" name="title"></input></div>
                <label for="name">내용:</label>
                <div><input type="text" name="content"></input></div>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}