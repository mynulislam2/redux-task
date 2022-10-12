import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    pass: "",
}

const LoggedInPerson = createSlice({
    name: "LoggedInPerson",
    initialState,
    reducers: {
        StorePerson: (state, action) => {

            return {
                email: action.payload.email,
                pass: action.payload.password,
            }
        },
        ShowDetail: (state, action) => {
            return {
                ...state,
                isShowDetails: action.payload.isShowDetails
            }
        }

    }
})

export const { StorePerson, ShowDetail } = LoggedInPerson.actions
export default LoggedInPerson.reducer