import React from 'react'
import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { getDatabase, ref, set,push, get } from "firebase/database";
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';


export default function Posts() {
  const [title, setTitle] = useState();
  const [post, setPost] = useState();
  const [posts,setPosts] = useState([]);
  const { currentUser } = useAuth();

  useEffect((()=>{
    let url = "http://127.0.0.1:8000/createorgetpost";
    const requestOptions = {
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }
    fetch(url,requestOptions)
    .then((res)=>res.json())
    .then((response)=>{
      // console.log('res',response);
      setPosts(response.data)
    })
  }),[post]);
  const handlePost = async (e)=>{
    e.preventDefault();
    let url = "http://127.0.0.1:8000/createorgetpost";
    let postInfo = {
      title: title,
      details: post,
    };
   const requestOptions = {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(postInfo),
   };
    fetch(url,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => console.log('data',data));
  }
  
  return (
    <>
      <Form action="post" onSubmit={handlePost}>
        <Form.Group>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            onInput={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="post"
            placeholder="Write something"
            onInput={(e) => setPost(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" className="btn btn-sm">
            Post
          </Button>
        </Form.Group>
      </Form>
      
      {
        posts.map((p,index)=>(
          <>
            {p.title} {p.details}
          </>
        ))
      }
    </>
  );
}
