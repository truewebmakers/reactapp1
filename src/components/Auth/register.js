 

import React from 'react'
import { Sidenav } from './sidenav'
import { Link } from 'react-router-dom'
 

export const Register = () => {
  return (
    <section className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div className="card border border-light-subtle rounded-3 shadow-sm">
            <div className="card-body p-3 p-md-4 p-xl-5">
              <div className="text-center mb-3 d-none">
                <a href="#!">
                  <img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57"/>
                </a>
              </div>
              <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign Up </h2>
              <form action="#!">
                <div className="row gy-2 overflow-hidden">
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="fname" className="form-control" name="fname" id="fname" placeholder="Jhon" required=""/>
                      <label for="fname" className="form-label">First name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="fname" className="form-control" name="lname" id="lname" placeholder="Smith" required=""/>
                      <label for="fname" className="form-label">Last name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required=""/>
                      <label for="email" className="form-label">Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" name="password" id="password" value="" placeholder="Password" required=""/>
                      <label for="password" className="form-label">Password</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex gap-2 justify-content-between">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe"/>
                        <label className="form-check-label text-secondary" for="rememberMe">
                          Keep me logged in
                        </label>
                      </div>
                      <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid my-3">
                      <button className="btn btn-primary btn-lg" type="submit">Log in</button>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="m-0 text-secondary text-center">You already have account?  
                      <Link to='/login' className="link-primary text-decoration-none"> Sign In</Link>
                      
                      </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     </section>
    
  )
}
