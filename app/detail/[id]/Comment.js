'use client'
import { useEffect, useState } from "react";

export default function Comment(props){

    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    let [showComment, updateComment] = useState([])

    // useEffect(()=> {
    //     fetch('/api/comment/list?id=' + props._id, {method: "GET"}).then(r=>r.json())
    //     .then((result)=>{
    //         setData(result)}) //state 변경 함수
    // }, [])

    return (
      <div>
        <hr></hr>
        <div>
          <input onChange={(e)=>{ setComment(e.target.value)}}/>

          <button onClick={() =>{
        fetch('/api/comment/new' , {
            method : 'POST', 
            body : JSON.stringify({comment : comment, _id : props._id })})
            .then(r=>r.json())
            .then((newresult)=>{
                updateComment(newresult)
            })
        alert('작성 완료')
      }}>작성</button>
        </div>
        <hr></hr>
        <div>댓글 목록</div>
        {
        showComment.length > 0 ?
        showComment.map((v, i)=>{
                return (
                <p key={i}>
                    <div>{v.author_name}</div>
                    <div>{v.content}</div>
                </p>)}
                ) : '댓글 없음'}
      </div>
    );
}
