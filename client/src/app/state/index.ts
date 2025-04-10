import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface InitialStateType {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateType = {
    isSidebarCollapsed: false,
    isDarkMode: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapse: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
});

export const { setIsSidebarCollapse, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;