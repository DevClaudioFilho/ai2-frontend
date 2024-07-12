export default function authHeader() {
  const token= localStorage.getItem('rpgeek_jwt_token')

  if(token) {
   return { Authorization: `Bearer ${token}` }
  }
  else{
    return {}
  }
}