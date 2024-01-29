import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import {
    loginReducer,
    registerReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userUpdateReducer
} from './reducers/userReducers'
import { addOrderReducer, getOrderReducer } from './reducers/orderReducers'
import { thunk } from 'redux-thunk'

const reducer = combineReducers({
  userLogin: loginReducer,
  userRegister: registerReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userUpdateProfile: userUpdateProfileReducer,
  addOrder: addOrderReducer,
  getOrder: getOrderReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  // composeWithDevTools(applyMiddleware(...middleware))
)

export default store
