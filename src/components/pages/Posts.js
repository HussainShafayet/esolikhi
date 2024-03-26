import React from 'react'
import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import moment from 'moment';


export default function Posts() {
  const [title, setTitle] = useState();
  const [post, setPost] = useState();
  const [posts,setPosts] = useState([]);
  const { currentUser } = useAuth();

  useEffect((()=>{
    let url = "http://localhost:8000/posts";
    const requestOptions = {
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }
    fetch(url,requestOptions)
    .then((res)=>res.json())
    .then((response)=>{
      //console.log('res',response);
      setPosts(response.reverse())
    })
  }),[]);
  const handlePost = async (e)=>{
    e.preventDefault();
    let url = "http://localhost:8000/posts";
    let postInfo = {
      "id": posts.length + 1,
      title: title,
      details: post,
      addedDateTime: new Date(),
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
      .then((data) => {
        setPosts([data, ...posts,]);
      });
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
      {/*  */}
      {
        posts.map((p,index)=>(
          <>
            <div className='card mb-3' key={index}>
              <img className='card-img-top' src={require("../../assets/images/sampleImg.jpg")} alt="img" />
              <div className='card-body' >
                <h4 className='card-titel'>{p.title}</h4>
                <p className='card-text'>{p.details}</p>
                <p className='card=text'>
                  <small className='text-muted'>Last update {moment(p.addedDateTime).fromNow()}</small> 
                </p>
              </div>
            </div>
          </>
        ))
      }
    </>
  );
}
