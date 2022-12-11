import React from 'react';
import { Table } from 'react-bootstrap';

const Section = (props) => {
    // console.log(props);
    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>First Name</th>
          <th>Age</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.lastName}</td>
          <td>{props.age}</td>
          <td>{props.id}</td>
        </tr>
       
      </tbody>
    </Table>
        </div>
    );
};

export default Section;