import axios from 'axios'


const API_URL = 'http://localhost:5000/api/goals/' 

//Create user Goal
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.post(API_URL, goalData, config)
    
    return response.data
    
}

//Get user Goal
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.get(API_URL, config)
    console.log(response.data)
    return response.data
    
}

//Delete user Goal
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.delete(API_URL + goalId, config)
    console.log(token)
    return response.data
    
}

//Delete user Goal
const updateGoal = async (goalData, goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.put(API_URL + goalId, goalData, config)
    console.log(response.data)
    return response.data
    
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
    updateGoal
}

export default goalService