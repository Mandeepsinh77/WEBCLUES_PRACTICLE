// DisplayData.js
import React from 'react';

function DisplayData({ fetchedData }) {

    function truncateString(str, maxLen) {
        return str.length > maxLen ? `${str.substring(0, maxLen)}...` : str;
    }
    return (
        <div className="data-display">
            <h2>Fetched Data</h2>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchedData.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <div className="password-container">
                                    {item.password}
                                </div>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default DisplayData;
