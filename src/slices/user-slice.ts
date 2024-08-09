import { UserRedux } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    id:            number;
    email:         string;
    full_name:     string;
    image_profile: string;
    role:          number;
}

const initialState: UserState = {
    id: 0,
    email: "",
    full_name: "",
    image_profile: "",
    role: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUserInfo: (state, action: PayloadAction<UserRedux>) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.full_name = action.payload.first_name + " " + action.payload.last_name
            state.image_profile = action.payload.image_profile
            state.role = action.payload.groups[0]
        },
        logout: (state) => {
            state.id = 0
            state.email = ""
            state.full_name = ""
            state.image_profile = ""
            state.role = 0
        }
    },
})

export const { logout, saveUserInfo } = userSlice.actions

export default userSlice.reducer