import { connect } from "react-redux"
import { userLogin } from "../redux/loginReducer"
import MainPage from "./MainPage"

let mapStateToProps = (state) => {
   return {
      authData: state.loginPage.authData,
      isUserLogin: state.loginPage.isUserLogin
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      userLogin: (payload) => {
         dispatch(userLogin(payload))
      }
   }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageContainer