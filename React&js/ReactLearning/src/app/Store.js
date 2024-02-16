import {configureStore} from '@reduxjs/toolkit'
import taskReducer from '../TaskManager/TaskSlice'
export const store = configureStore({
reducer:{
    tasks:taskReducer
}
})