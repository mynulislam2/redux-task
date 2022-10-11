import { createSlice } from "@reduxjs/toolkit";

const initialState={
email:"",
pass:""
}

const LoggedInPerson=createSlice({
name:"LoggedInPerson",
initialState
})

console.log(LoggedInPerson)
export default LoggedInPerson.reducer