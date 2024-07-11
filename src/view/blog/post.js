'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from'react-router-dom'
import api from '../../utils/api'
import { getCurrentUser } from '../../utils/auth/auth.service'

function Post() {
  const {postId} = useParams()
  const [post, setPost] = useState()

  useEffect(() => {
    api.get(`/post/get/${postId}`)
    .then((res) => {
      setPost(res.data)
    })
    .catch((err) => {
      alert(`Error: ${err}` )
    })

  }, [postId])

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
                <div class="input-group mb-3">
                  <input type="text" class="form-control bg-dark border-warning text-white input-dark" placeholder="Deixe seu comentário" aria-label="Deixe seu comentario" aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-warning" type="button">Button</button>
                  </div>
                </div>
              )}

              <ul className='border border-secondary p-4 d-flex flex-column gap-4'>
                <li className='bg-secondary d-flex flex-column p-2 rounded'>
                  <span className='d-flex align-items-center gap-2'>
                    <img src="" alt=""  className="bg-primary " width={40} height={40} style={{borderRadius:"50%"}}/>
                    <p className='m-0'>Nome do Comentário</p>
                  </span>
                  <p>UM Comentário</p>
                </li>
              </ul>
            </section>
          </>
        )
      }
    </>
  )
}

export default Post
