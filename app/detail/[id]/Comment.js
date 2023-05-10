'use client'
import { useEffect, useState } from "react";

export default function Comment(props){

    let [comment, setComment] = useState('')
    let [data, setData] = useState([])

    useEffect(()=> {
        fetch('/api/comment/list?id=' + props._id, {method: "GET"}).then(r=>r.json())
        .then((result)=>{
            setData(result)
            console.log(data)
        })
    }, [])

    return (
      <div>
        <hr></hr>

        <div>
          <input onChange={(e)=>{ setComment(e.target.value)}}/>
          <button onClick={()=>{
            console.log(comment)
            fetch('/api/comment/new' , {
                method : 'POST', 
                body : JSON.stringify({comment : comment, _id : props._id })})
            alert('작성 완료')
          }}>작성</button>
        </div>
        <hr></hr>
        <div>댓글 목록</div>
        {data.length > 0 ? data.map((v, i)=>{
                return (<p key={i}>{v.content}</p>)}) : '댓글 없음'}
      </div>
    );
}
