'use client'

import React, { useState } from 'react'
import { login }from '../../utils/auth/auth.service'
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';

function NewUser() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  async function HandleCreateUser(event) {
    event.preventDefault();
    setMessage("");
    setLoading(true);
    api.post("/user/register",{name,email, password})
      .then((res) => {
        if (res === "" || res === false) {
          setMessage("A criação falhou.");
          setLoading(false);
        }
        else {
          navigate("/login");
        }
      })
      .catch((error) => {
        setMessage("A criação falhou.");
        setLoading(false);
      });
    }
    

  return (
    <main className='d-flex justify-content-center align-items-center h-100' style={{minHeight:'100vh',backgroundImage:'url(https://th.bing.com/th/id/R.b1a65306b61704700c06976a4d1cf852?rik=3j9Ofz6%2b9oqggg&pid=ImgRaw&r=0)'}}>
      <form  className="form-signin p-4 bg-white w-100 h-50 rounded" style={{maxWidth:'400px'}} onSubmit={HandleCreateUser}>
        <img className="mb-4" src="/assets/logo.png" alt="" width="200" height="57" style={{marginLeft:'auto !important',marginRight:'auto !important'}}/>
        <h1 className="h3 mb-4 fw-normal">Crie seu user</h1>

        <div className="form-floating mb-4">
          <input 
            type="text" 
            className="form-control" 
            id="floatingInput" 
            placeholder="John Doo"
            value={name}
            onChange={(value) => setName(value.target.value)}
          />
          <input 
            type="email" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name@example.com"
            value={email}
            onChange={(value) => setEmail(value.target.value)}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-4">
          <input 
            type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password"
            value={password}
            onChange={(value) => setPassword(value.target.value)}
          />
          <label htmlFor="floatingPassword">Senha</label>
        </div>
        <button className="w-100 btn btn-lg btn-warning" type="submit">Criar user</button>
      </form>
    </main>
  )
}

export default NewUser
