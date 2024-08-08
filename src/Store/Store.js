import { configureStore } from "@reduxjs/toolkit";
import KanhaBhajanSlice from "../Slices/KanhaBhajanSlice";
import IndreshJiBhajanSlice from "../Slices/IndreshJiBhajanSlice";

const Store = configureStore({
    reducer: {
        'kanha_bhajan': KanhaBhajanSlice,
        'indreshji_bhajan' : IndreshJiBhajanSlice
    }
})
export default Store