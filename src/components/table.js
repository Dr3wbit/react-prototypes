import React from 'react';

export default (props) => {
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Andrew</td>
                    <td>Math</td>
                    <td>99</td>
                </tr>
                <tr>
                    <td>Brett</td>
                    <td>Science</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Bora</td>
                    <td>History</td>
                    <td>77</td>
                </tr>
            </tbody>
        </table>
    )
}

// const tableRows = props.data.map((item, index) => {
//     console.log(item);
//     return;
// });