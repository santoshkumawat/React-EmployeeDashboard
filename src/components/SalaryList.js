import React, { useState, useEffect } from 'react';
import { getSalaries } from '../services/apiService';

const SalaryList = () => {
    const [salaries, setSalaries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSalaries = async () => {
            try {
                const data = await getSalaries();
                setSalaries(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch salaries.');
                setLoading(false);
            }
        };

        fetchSalaries();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Salary List</h1>
            <ul>
                {salaries.map(salary => (
                    <li key={salary.id}>
                        Employee ID: {salary.employee.id} - Base Salary: {salary.baseSalary} - Pay Period: {salary.payPeriod}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SalaryList;
