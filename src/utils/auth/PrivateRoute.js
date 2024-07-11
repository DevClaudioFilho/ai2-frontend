import { Navigate, Route } from "react-router-dom"
import {getCurrentUser} from "./auth.service"

export default function PrivateRoute({element: Element, ...rest}){
  return (
    <Route
      {...rest}
      element={getCurrentUser() ? <Element />: <Navigate to='/login' replace/>}
    />
  )
}