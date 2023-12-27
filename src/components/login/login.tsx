import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiService from '../../services/axios.sevices';
import { Link } from 'react-router-dom';
import Loading from '../spinner/spinner';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await apiService.post('/auth/login', { username: email, password });
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <><Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email / Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} disabled={loading}>
        {loading ? <Loading /> : 'Login'}
      </Button>
    </Form>
      <p className='my-4'>
        You do not have an account? {''}
        <Link style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} to='/register'>
          Sign up here
        </Link>
      </p></>
  );
}
