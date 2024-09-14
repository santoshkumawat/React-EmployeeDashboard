import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/apiService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getEmployees();
                setEmployees(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch employees.');
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.employeeId}>
                        {employee.firstName} {employee.lastName} - {employee.jobTitle}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
