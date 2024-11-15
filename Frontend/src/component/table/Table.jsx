import React, { useState } from 'react';
import { Table as BootstrapTable, Form, InputGroup } from 'react-bootstrap'; 
import { data } from './tableData';

const ContactTable = () => {
    const [search, setSearch] = useState('')
    console.log(setSearch);
    
  return (
    <div className="container my-5">
      <h1>Contact Keeper</h1>
      <Form>
        <InputGroup className='my-3'>
            <Form.Control placeholder='Search contacts' onChange={(e)=> setSearch(e.target.value)}/>
        </InputGroup>
      </Form>
      <BootstrapTable bordered>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        {
            data.map((item) =>(
                <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
            ))
        }
         
        </tbody>
      </BootstrapTable>
    </div>
  );
}

export default ContactTable;
