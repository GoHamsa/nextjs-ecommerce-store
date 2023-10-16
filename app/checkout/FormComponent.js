'use client';
import { useState } from 'react';

export default function FormComponent() {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
  });
  const [userDetailErrors, setUserDetailErrors] = useState([]);
  async function onSubmit(event) {
    event.preventDefault();
    const errors = [];
    if (userDetails.firstName === '') {
      errors.push('Firstname is empty');
    }
    if (userDetails.lastName === '') {
      errors.push('Lastname is empty');
    }
    setUserDetailErrors(errors);
  }
  return (
    <div>
      <pre>{JSON.stringify(userDetails)}</pre>
      <form onSubmit={onSubmit}>
        <ul>
          <li>
            <input
              onChange={(event) =>
                setUserDetails({
                  firstName: event.currentTarget.value,
                  lastName: userDetails.lastName,
                })
              }
              type="text"
              name="firstName"
            />{' '}
            First Name
          </li>
          <li>
            <input
              type="text"
              name="lastName"
              onChange={(event) =>
                setUserDetails({
                  firstName: userDetails.firstName,
                  lastName: event.currentTarget.value,
                })
              }
            />{' '}
            Last Name
          </li>
          <li>
            <button type="submit">Submit</button>{' '}
          </li>
        </ul>
      </form>
      <ul>
        {userDetailErrors.map((error) => (
          <li key={error}> {error} </li>
        ))}
      </ul>
    </div>
  );
}
