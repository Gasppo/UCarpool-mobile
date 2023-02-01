import axios from 'axios';
import {API_URL} from '../../../utils/constants'

export const signUpUser = async (signUpData) => {
    console.log('signing up')
    const response = await axios.post(`${API_URL}/users/register`, signUpData);
    if (response.status === 200 || response.status === 201){
        console.log(response.data)
        return response.data;
    }
}