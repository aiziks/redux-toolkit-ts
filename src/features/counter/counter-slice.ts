// DUCKS pattern
import {createSlice , PayloadAction} from '@reduxjs/toolkit';

interface counterState{
    value:number;
}

const initialState: counterState = {
    value : 0,
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        //increment
        incremented(state){
            // its ok to do this becos immer makes it immutable under the hood
            state.value++;
        },
        amountAdded(state , action:PayloadAction<number>){
            state.value += action.payload;
        }

        //decrement
        //reset
    }
})

export const {incremented , amountAdded} = counterSlice.actions;
export default counterSlice.reducer;

