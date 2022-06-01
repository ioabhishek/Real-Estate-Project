import { Link } from "react-router-dom";
const SignIn=()=>{
  return(<>
  <div className="form-container">
        <div className="parent-container">
        <form className="login-form"><br />
          <h1 className="logo">Logo</h1>
          <p>Enter your credentials to access your account</p><br /><br />
          <div className="mb-3">
            {/* <label htmlFor='exampleInputEmail1' className="form-label"> </label> */}
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="User ID"
            />
          </div><br />
          <div className="mb-3">
            {/* <label htmlFor='exampleInputPassword1' className="form-label"></label> */}
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div><br /><br />
          <Link to="/homepage">
          <button type="submit" className="btn-primary">
            Sign In
          </button></Link>
          <br /><br />
          <Link to='/register'>
          <button type="submit" className="btn-light">
            Sign Up
          </button></Link>
        </form>
        <br /><br />
        <div className="bottom-container">
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
      </div>
  </>)
}
export default SignIn;