const LOGIN_SUCCESS = 'loginReducer/LOGIN_SUCCESS'

let initialState = {
   authData: {
      login: 'developer21',
      password: '123456'
   },
   isUserLogin: false
}

const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_SUCCESS:
         return {
            ...state,
            isUserLogin: action.payload
         }
      default:
         return state
   }
}

export const userLogin = (payload) => ({ type: LOGIN_SUCCESS, payload })

export default loginReducer