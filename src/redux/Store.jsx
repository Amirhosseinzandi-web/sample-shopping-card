import {configureStore} from "@reduxjs/toolkit"
import cart from "./CartSlice"


const store = configureStore({
    reducer : {
        app : cart
    }
})

export default store