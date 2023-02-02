import axios from 'axios';
import { API_URL } from '../../../../utils/constants';

export const setSurveyCompleted = async (userId: string) => {
    if (!userId) { throw new Error('User not defined') }
    console.log('setting survey as completed')
    const response = await axios.put(`${API_URL}/users?id=${userId}`, { completedSurvey: true }, { timeout: 15000 });
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error actualizando realización de encuesta')
    }
}
