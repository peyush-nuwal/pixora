import axios from "axios";

const API_KEY = "wxil5ewq6h13ebfm7";
const BASE_URL = "https://techhk.aoscdn.com"
const MAXIMUM_TRIES = 10


export const enhancedImageApi = async (file) => {

    try {
        const taskId = await uploadImage(file);
        console.log("image uploaded : Task ID:", taskId);

        const imageData = await pollingForImage(taskId);
       
        return imageData?.image;
    } catch (error) {
        console.error("Error enhancing image:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}


const uploadImage = async (file) => {

    //code to upload image to the server
    const formData = new FormData()
    formData.append("image_file", file);

    const res = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        }
    })

    const taskId = res?.data?.data?.task_id;

    return taskId;
}

const fetchImage = async (taskId) => {

    //fetch enhanced image from the server
    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY": API_KEY,
        }
    })
     
    if(!data.data) console.log('error while fetching image')
        const imgUrl=data?.data
    return imgUrl


}



const pollingForImage = async (taskId, retries=0) => {
     const result=await fetchImage(taskId)
    
     if(result.state==4){
         
         if (retries >= MAXIMUM_TRIES){
            console.log("max retries reached")
            
        }
        await new Promise(resolve => setTimeout(resolve, 2000))
        return await pollingForImage(taskId, retries+1)
     }

     return result
}