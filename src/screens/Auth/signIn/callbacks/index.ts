import axios, { AxiosError } from 'axios';
import { API_URL } from '../../../../utils/constants';

export const getRequestCode = async (email: string, type: string) => {
    const response = await axios.get(`${API_URL}/users/requestCode?email=${email}&type=${type}`, { timeout: 15000 });
    if (response.status === 200) {
        return response.data
    }
    else {
        throw new Error('Error obteniendo código')
    }
}


export const parseLoginError = (error: AxiosError) => {
    try {
        switch (error?.response?.status) {
            case 0:
                return 'No hay respuesta del servidor'
            case 200:
                return 'OK'
            case 400:
                return 'Formato inválido'
            case 401:
                return 'No hay un usuario que coincida con las credenciales'
            case 500:
                return 'Error de servidor'
            default:
                return 'Error genérico'
        }
    }
    catch (e) {
        console.log(e)
        return 'Error general de inicio de sesión'
    }
}
