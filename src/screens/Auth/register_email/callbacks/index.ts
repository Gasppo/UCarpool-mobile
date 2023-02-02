import axios from 'axios';
import { API_URL } from '../../../../utils/constants';

export const getRequestCode = async (email: string, type: string) => {
    const response = await axios.get(`${API_URL}/users/requestCode?email=${email}&type=${type}`, { timeout: 15000 });
    console.log(response)
    if (response.status === 200) {
        return response.data
    }
    else {
        console.log(response.data)
        throw new Error('Error obteniendo código')
    }

}
