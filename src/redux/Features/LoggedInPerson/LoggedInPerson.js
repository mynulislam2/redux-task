import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    pass: ""
}

const LoggedInPerson = createSlice({
    name: "LoggedInPerson",
    initialState,
    reducers: {
        StorePerson: (state, action) => {

            return {
                email: action.payload.email,
                pass: action.payload.password
            }
        }
    }
})

console.log(LoggedInPerson)
export const { StorePerson } = LoggedInPerson.actions
export default LoggedInPerson.reducer