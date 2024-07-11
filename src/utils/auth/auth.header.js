export default function authHeader() {
  const user= JSON.parse(localStorage.getItem('rpgeek_jwt_token'))

  if(user && user.token) {
   return { 'Authorization': `Bearer ${user.token}` }
  }
  else{
    return {}
  }
}