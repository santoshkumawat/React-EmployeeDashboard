import React from 'react';
import EmployeeList from './components/EmployeeList';
import SalaryList from './components/SalaryList';
import DepartmentList from './components/DepartmentList';

function App() {
    return (
        <div className="App">
            <EmployeeList />
            <SalaryList />
            <DepartmentList />
        </div>
    );
}

export default App;
