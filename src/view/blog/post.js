'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from'react-router-dom'
import api from '../../utils/api'
import { getCurrentUser } from '../../utils/auth/auth.service'
import authHeader from '../../utils/auth/auth.header'

function Post() {
  const {postId} = useParams()

  const [post, setPost] = useState()
  const [comment,setComment] = useState()
  const [newComment,setNewComment] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    api.get(`/post/get/${postId}`)
    .then((res) => {
      setPost(res.data)
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    })

  }, [postId])

  useEffect(() => {
    api.get(`/comment/post/${postId}`)
    .then((res) => {
      setComment(res.data)
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    })
  }, [postId])

  useEffect(() => {
    api.get(`/user/current`, {headers: authHeader()})
    .then((res) => {
      setUser(res.data)
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    })

  }, [postId])
  
  async function handlerSubmitValues(event){
    try {
      const data ={
      	comment: newComment,
        postId,
        userId: user.id,
      }
      await api.post(`/comment/create`,data )
    } catch (error) {
      console.log(error)
      alert("🤯 Seu comentario nao foi cadastrado !!!")
    }
    event.preventDefault()
  }

  return (
    <>
      {post && 
        (
          <>
            <img src={post.banner_image} alt="" className='w-100'                 
              style={{
                height: '70vh',
                objectFit: 'cover',
              }}
            />
            <section className="container mt-4 text-white">
                <span className=' text-center'>
                  <h1 className="title text-warning">
                    {post.title}
                  </h1>
                  <p>Autor: {post.autor}</p>
                </span>
                <p className='display-linebreak'>
                  {post.text}
                </p>
            </section>

            <section className="container mt-4 text-white border-2 rounded">
              <h1 className="title text-warning">Comentarios</h1>

              {getCurrentUser()&&(
                <form className="input-group mb-3" onSubmit={handlerSubmitValues}>
                  <input 
                    type="text" 
                    className="form-control bg-dark border-warning text-white input-dark" 
                    placeholder="Deixe seu comentário" 
                    aria-label="Deixe seu comentario" 
                    aria-describedby="basic-addon2"
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-warning" type="submit">Button</button>
                  </div>
                </form>
              )}

              <ul className='border border-secondary p-4 d-flex flex-column gap-4'>
              {comment && comment.map((comment) => (
                <li key={comment.id} className='bg-secondary d-flex flex-column p-2 rounded'>
                  <span className='d-flex align-items-center gap-2'>
                    <img src={comment.user.avatar?comment.user.avatar: "https://th.bing.com/th/id/OIP.PT_eYfdZc55ShZAIiFn9jAHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7"} alt=""  className="bg-primary " width={40} height={40} style={{borderRadius:"50%"}}/>
                    <p className='m-0'>{comment.user.name}</p>
                  </span>
                  <p>{comment.comment}</p>
                </li>
              ))}
              </ul>
            </section>
          </>
        )
      }
    </>
  )
}

export default Post
