import { combineReducers } from "redux";

import counter from './reducers/counter'
import user from './reducers/user'

const allReducers = combineReducers({
    counter,
    user,
})

export default allReducers;