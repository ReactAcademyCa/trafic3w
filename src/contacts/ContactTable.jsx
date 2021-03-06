import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt /*, faTrashAlt */ } from '@fortawesome/free-solid-svg-icons';

const ContactTable = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <Link to={`/contact/${contact.id}`}>
                <Button color='primary'>
                  <FontAwesomeIcon icon={faPenAlt} />
                </Button>
              </Link>
            </td>
            <td className='align-middle'>{contact.firstName}</td>
            <td className='align-middle'>{contact.lastName}</td>
            <td className='align-middle'>
              {/* <Button color="danger" onClick={() => null}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactTable;
