import api from '../api'
import authHeader from './auth.header'

function login(email,password){
  return api.post('/user/login',{email,password})
  .then(res=>{
    if(res.data.token){
      localStorage.setItem('rpgeek_jwt_token',res.data.token)
    }
    return res.data
  }, reason=>{throw new Error('Utilizador Invalido')})
}

function logout(){
  localStorage.removeItem('rpgeek_jwt_token')
}

function getCurrentUser(){
  let user={}
  api.get(`/user/current`,authHeader).then(res=>{
    user=res.data
  })

  if(user.data?.success===false){
    localStorage.removeItem('rpgeek_jwt_token')
    return null
  }

  return  localStorage.getItem('rpgeek_jwt_token')//JSON.parse()
}

export {login, getCurrentUser, logout}