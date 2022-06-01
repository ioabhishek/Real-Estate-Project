import { Link } from "react-router-dom";
const SignUp=()=>{
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
          </div><br />
          <div className="mb-3">
            {/* <label htmlFor='exampleInputPassword1' className="form-label"></label> */}
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
            />
          </div><br /><br />
         <Link to='/' ><button type="submit" className="btn-primary">
            Sign Up
          </button></Link>
          <br /><br />
          {/* <button type="submit" className="btn-light">
            Sign Up
          </button> */}
        </form>
        <br /><br />
        <div className="bottom-container">
          <p>
            <Link to='/'>Sign In</Link>
          </p>
        </div>
      </div>
      </div>
  </>)
}
export default SignUp;