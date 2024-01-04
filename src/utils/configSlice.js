import { createSlice } from '@reduxjs/toolkit'


const configSlice = createSlice({
	name: 'config',
	initialState: { lng: 'english' },
	reducers: {
		changeLanguage: (state, action) => {
			state.lng = action.payload
		}
	}
});

export const { changeLanguage } = configSlice.actions

export default configSlice.reducer