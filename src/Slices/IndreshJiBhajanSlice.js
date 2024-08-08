import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const FetchIndreshJiBhajans = createAsyncThunk('FetchIndreshJiBhajans', async () => {
    try {
        const response = await fetch('music_data/Data.json'); // Make sure the path is correct
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data[1];


    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});

const IndreshJiBhajanSlice = createSlice({
    name: 'indreshji_bhajan',
    initialState: {
        isLoading: false,
        isError: false,
        items: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchIndreshJiBhajans.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(FetchIndreshJiBhajans.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
            .addCase(FetchIndreshJiBhajans.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.items = action.payload; // action.payload should be the JSON data
            });
    }
});

export default IndreshJiBhajanSlice.reducer;
