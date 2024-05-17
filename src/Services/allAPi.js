import { commonAPI } from "./commonApi"
import { SERVER_URL } from "./serverURL"

// Add task
export const uploadNewTaskAPI =async(task)=>{
    return await commonAPI("POST",`${SERVER_URL}/alltasks`,task)
}

// get all task
export const getAllTaskAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/alltasks`,"","")
}

// Update task
export const updateTaskAPI = async (id,task)=>{
    return await commonAPI("PUT",`${SERVER_URL}/alltasks/${id}`,task,"")
}

// Delete Task
export const deleteTaskAPI=async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/alltasks/${id}`,{},"")
}