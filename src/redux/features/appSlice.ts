import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "@/redux/store";


export interface initialStateProps {
    lang: string
}

const initialState: initialStateProps = {
    lang: 'ru'
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeLang: (state, action: PayloadAction<string>) => {
            state.lang = action.payload
        },
    }
})

export const {changeLang} = appSlice.actions
export const selectApp = (state: AppState) => state.appReducer
export default appSlice.reducer