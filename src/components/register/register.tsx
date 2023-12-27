import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiService from '../../services/axios.sevices';
import { Link } from 'react-router-dom';
import Loading from '../spinner/spinner';

export function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await apiService.post('/users/register', {
        firstName,
        lastName,
        age: parseInt(age),
        email,
        username,
        password,
      });
      setResponseData(response.data);

    } catch (error) {
      console.error('Error registering user:', error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <><Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Control
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Control
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} disabled={loading}>
        {loading ? <Loading /> : 'Register'}
      </Button>
    </Form><p className='my-4'>
        Do you already have an account? {''}
        <Link style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} to='/' >
          Enter here
        </Link>
      </p></>
  );
}
