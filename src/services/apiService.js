import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getEmployees = async () => {
    try {
        const response = await axios.get(`${API_URL}/employees`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

export const getSalaries = async () => {
    try {
        const response = await axios.get(`${API_URL}/salary`);
        return response.data;
    } catch (error) {
        console.error('Error fetching salaries:', error);
        throw error;
    }
};

export const getDepartments = async () => {
    try {
        const response = await axios.get(`${API_URL}/departments`);
        return response.data;
    } catch (error) {
        console.error('Error fetching departments:', error);
        throw error;
    }
};
