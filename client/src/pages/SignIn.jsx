import { Link } from "react-router-dom";



export default function SignIn() {
  return (
    <div className="h-screen">
      <Link to={'/sign-up'} className="text-center">Go Sign up</Link>
    </div>
  )
}
