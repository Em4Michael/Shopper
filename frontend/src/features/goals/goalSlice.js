import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import goalService from './goalService'


const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//create new Goal
export const createGoal = createAsyncThunk('goals/create', async (goalData, thunkAPI) =>
{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await goalService.createGoal(goalData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.messgae) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Get All Goal
export const getGoals = createAsyncThunk('goals/getAll', async (_, thunkAPI) =>
{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await goalService.getGoals(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.messgae) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Delete user Goal
export const deleteGoal = createAsyncThunk('goals/delete', async (id, thunkAPI) =>
{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await goalService.deleteGoal(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.messgae) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Update user Goal
export const updateGoal = createAsyncThunk('goals/update', async (goalData, id, thunkAPI) =>
{
    try{
        const token = thunkAPI.getState().auth.user.token
        return await goalService.updateGoal(goalData, id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.messgae) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isErrors = false
            state.isSuccess = false
            state.messgae = ''
        }
    },

        extraReducers: (builder) => {
            builder
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                // state.user = null
            })
            .addCase(deleteGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = state.goals.filter((goal) => goal._id !== action.payload.id)
            })
            .addCase(deleteGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                // state.user = null
            })
            .addCase(updateGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(updateGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                // state.user = null
            })
        },
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer