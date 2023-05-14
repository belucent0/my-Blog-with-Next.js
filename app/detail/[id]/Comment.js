'use client'
import { useEffect, useState } from "react";

export default function Comment(props){

    let [comment, setComment] = useState('')
    let [showComment, updateComment] = useState([])

    useEffect(()=> {  //list.js에서 조회
        fetch('/api/comment/list?id=' + props._id, {method: "GET"})
        .then(res=>res.json())
        .then((result)=>{
            updateComment(result)})
    }, [showComment]) 

    const addComment = () =>{
        fetch('/api/comment/new' , {
            method : 'POST', 
            body : JSON.stringify({comment : comment, _id : props._id })})
            .then(res=>res.json())
            .then((newResult)=>{
                updateComment(newResult) //새 댓글 목록
            })
        setComment('') // 댓글 작성 후 입력란 초기화
    }

    return (
      <div>
        <hr></hr>
        <div>
          <input value={comment} onChange={(e)=>{ setComment(e.target.value)}}/> 

          <button onClick={addComment}>작성</button>
        </div>
        <hr></hr>
        <div>댓글 목록</div>
        <hr></hr>
        {
        showComment.length > 0 ?
        showComment.map((v, i)=>{
                return (
                <div key={i}>
                    <div>{v.author_name}</div>
                    <div>{v.content}</div>
                    <hr></hr>
                </div>)}
                ) : '댓글 없음'}
      </div>
    );
}
