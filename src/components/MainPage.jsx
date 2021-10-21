import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'

const MainPage = (props) => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState(null)
   const [disable, setDisable] = useState(true)

   useEffect(() => {
      if (login === props.authData.login && password === props.authData.password) {
         setDisable(false)
      }
   }, [login, props.authData.login, props.authData.password, password])

   function loginHandler() {
      props.userLogin(true)
   }

   if (props.isUserLogin) return <Redirect to={{ pathname: '/profile', state: { login: props.authData.login } }} />

   return (
      <div className="mainpage">
         <div className="login">
            <div className="login__header">
               <h2>Please log in</h2>
            </div>
            <div className="login__form">
               <form>
                  <div className="login__input">
                     <input
                        id="login-input"
                        type="text"
                        placeholder="Your login"
                        onChange={(e) => setLogin(e.target.value)}
                     />
                  </div>
                  <div className="login__password">
                     <input
                        id="login-password"
                        type="password"
                        placeholder="Your password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
                  <button
                     type="button"
                     className="button button-submit"
                     disabled={disable}
                     onClick={loginHandler}
                  >Submit</button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default MainPage