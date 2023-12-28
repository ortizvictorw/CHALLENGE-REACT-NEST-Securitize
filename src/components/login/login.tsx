import { FunctionComponent, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiService from '../../services/axios.sevices';
import { Link, useHistory } from 'react-router-dom';
import Loading from '../spinner/spinner';
import { toast } from 'react-toastify';
import { useUserContext, useUserToggleContext } from '../../provider/userProvider';

export const Login: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory()
  const setUser = useUserToggleContext()
  const user = useUserContext()

  useEffect(() => {
    !user && history.push('login')
  }, [history, user])

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await apiService.post('/auth/login', { username: email, password });
      setUser(response.data)
      toast(`Welcome! ${response.data.user.username}`)
      history.push('home')
    } catch (error) {
      toast(`'Error fetching data:' ${error}`)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex row">
      <Form onSubmit={handleSubmit} className="col-12">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email / Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-3"
          />
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} disabled={loading} className='col-12'>
          {loading ? <Loading /> : 'Login'}
        </Button>
        <div className='my-4 col-12'>
          You do not have an account? {''}
          <Link style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} to='/register'>
            Sign up here
          </Link>
        </div>
      </Form>
    </div>
  );
}
