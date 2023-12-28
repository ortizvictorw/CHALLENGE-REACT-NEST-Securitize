import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiService from '../../services/axios.sevices';
import { Link, useHistory } from 'react-router-dom';
import Loading from '../spinner/spinner';
import { toast } from 'react-toastify';

export function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory()

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
      history.push('home')
      toast(`Welcome! ${response.data.user.username}`)
    } catch (error) {
      toast(`'Error fetching data:' ${error}`)
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="d-flex row">    
    <Form onSubmit={handleSubmit} className='col-8 mx-auto'>
      <Form.Group className="mb-3 "  controlId="formBasicFirstName">
        <Form.Control
          type="text"
          className='my-3'
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        <Form.Control
          type="text"
          className='my-3'
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} />
        <Form.Control
          type="number"
          className='my-3'
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)} />
        <Form.Control
          type="email"
          className='my-3'
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <Form.Control
          type="text"
          className='my-3'
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <Form.Control
          type="password"
          className='my-3'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} disabled={loading} className='col-12'>
        {loading ? <Loading /> : 'Register'}
      </Button>
    </Form>
    <div className='my-4 col-12'>
        Do you already have an account? {''}
        <Link style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} to='/' aria-activedescendant='' >
          Enter here
        </Link>
      </div>
    </div>
  );
}
