import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const FetchKanhaBhajans = createAsyncThunk('FetchKanhaBhajans', async () => {
    try {
        const response = await fetch('music_data/Data.json'); // Make sure the path is correct
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        return data;


    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});

const KanhaBhajanSlice = createSlice({
    name: 'kanha_bhajan',
    initialState: {
        isLoading: false,
        isError: false,
        items: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchKanhaBhajans.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(FetchKanhaBhajans.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
            .addCase(FetchKanhaBhajans.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.items = action.payload; // action.payload should be the JSON data
            });
    }
});

export default KanhaBhajanSlice.reducer;
