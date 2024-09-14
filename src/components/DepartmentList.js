import React, { useState, useEffect } from 'react';
import { getDepartments } from '../services/apiService';

const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const data = await getDepartments();
                setDepartments(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch departments.');
                setLoading(false);
            }
        };

        fetchDepartments();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Department List</h1>
            <ul>
                {departments.map(department => (
                    <li key={department.departmentId}>
                        Department ID: {department.departmentId} - Name: {department.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DepartmentList;
