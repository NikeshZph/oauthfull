import React from 'react';


const getaaa=document.cookie
console.log(getaaa)
const WelcomePage = () => {
    // Dummy data for the health insurance section
    const healthInsuranceData = [
        { memberID: 101, name: 'John Doe', age: 35, plan: 'Gold', premium: '$500' },
        { memberID: 102, name: 'Jane Smith', age: 42, plan: 'Silver', premium: '$400' },
        { memberID: 103, name: 'Michael Johnson', age: 28, plan: 'Bronze', premium: '$300' },
        { memberID: 104, name: 'Emily Davis', age: 39, plan: 'Gold', premium: '$550' }
    ];

    return (
        <div className="welcome-page">
            <h1>Welcome to Zakipoint Health</h1>
            <div className="health-insurance-section">
                <h2>Health Insurance Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Member ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Plan</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {healthInsuranceData.map(member => (
                            <tr key={member.memberID}>
                                <td>{member.memberID}</td>
                                <td>{member.name}</td>
                                <td>{member.age}</td>
                                <td>{member.plan}</td>
                                <td>{member.premium}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WelcomePage;
