import React from 'react';
import Table from './table';

const students = [
    {
        name: 'Dan',
        course: 'Codemaster',
        grade: 100
    },
    {
        name: 'Sam',
        course: 'Psychology',
        grade: 2
    },
    {
        name: 'Corey',
        course: 'Fishing',
        grade: 87
    }
  ];

export default () => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}