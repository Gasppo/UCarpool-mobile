import axios from 'axios';
import { Vehicle, VehicleMake, VehicleType } from '../../../../types/prisma';
import { API_URL } from '../../../../utils/constants';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type GetModelsResponse = { id: number; model: string; make: string; type: string; }
export type PostVehicleBody = { modelId: number; licensePlate: string; driverId: string; maxPassengers: number; };

export type DeleteVehicleResponse = {
    id: string;
    driverId: string;
    driverName: string;
    VehicleModel: {
        VehicleMake: {
            make: string;
        };
        model: string;
        VehicleType: {
            type: string;
        };
    };
    licensePlate: string;
    maxPassengers: number;
}

export async function getVehicleModels(selectedVehicleMake: number, selectedVehicleType: number) {
    const vehicleModels = await axios.get<GetModelsResponse[]>(`${API_URL}/vehicles/models?makeId=${selectedVehicleMake}&typeId=${selectedVehicleType}`);
    if (vehicleModels.status === 200) {
        return vehicleModels.data
    }
    else {
        throw new Error(vehicleModels.statusText)
    }
}

export async function getVehicleTypes() {
    const vehicleTypes = await axios.get<VehicleType[]>(`${API_URL}/vehicles/types`);
    if (vehicleTypes.status === 200) {
        return vehicleTypes.data
    }
    else {
        throw new Error(vehicleTypes.statusText)
    }
}
export async function getVehicleMakes() {

    const vehicleMakes = await axios.get<VehicleMake[]>(`${API_URL}/vehicles/makes`);
    if (vehicleMakes.status === 200) {
        return vehicleMakes.data
    }
    else {
        throw new Error(vehicleMakes.statusText)
    }
}


export async function postNewVehicle(vehicleData: PostVehicleBody) {
    const response = await axios.post<Vehicle>(`${API_URL}/vehicles`, vehicleData);
    console.log(response)
    if (response.status === 201) {
        return response.data
    }
    else {
        throw new Error('Error posteando vehiculo a servidor')
    }
}



function isAlpha(c: string) {
    const alphas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return (alphas.indexOf(c) !== -1);
}

function isDigit(c: string) {
    const digits = '0123456789';
    return (digits.indexOf(c) !== -1);
}

export function isValidLicensePlate(value: string) {
    let licenseType;
    if (value.length === 6) {
        licenseType = 'old'
    }
    else if (value.length === 7) {
        licenseType = 'new'
    }
    else {
        return false;
    }
    switch (licenseType) {
        case 'old':
            for (let i = 0; i < value.length; i++) {
                if (i < 3 && !isAlpha(value.charAt(i))) {
                    return false
                }
                if (i > 2 && !isDigit(value.charAt(i))) {
                    return false
                }
            }
            return true;
        case 'new':

            for (let i = 0; i < value.length; i++) {
                if (i < 2 && !isAlpha(value.charAt(i))) {
                    return false
                }
                if (i > 2 && i < 5 && !isDigit(value.charAt(i))) {
                    return false
                }
                if (i > 4 && !isAlpha(value.charAt(i))) {
                    return false
                }
            }
            return true;
    }
}


export function generatePassengersIcons(capacity: number) {
    const icons = []
    for (let i = 0; i < capacity; i++) {
        icons.push(<Icon name={'account'} size={16} style={{ color: 'grey' }} key={i + '_'} />)
    }
    return icons
}

export async function deleteVehicle(driverId: string, vehicleId: string) {

    const deleteRequest = await axios.delete<DeleteVehicleResponse>(`${API_URL}/vehicles?driverId=${driverId}&id=${vehicleId}`);
    console.log(deleteRequest.data)
    if (deleteRequest.status === 200) {
        return deleteRequest.data
    }
    else {
        throw new Error(deleteRequest.statusText)
    }
}
