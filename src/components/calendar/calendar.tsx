import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import apiService from "../../services/axios.sevices";
import Loading from "../spinner/spinner";
import { LocalStorageService } from "../../services/storage";
import { toast } from "react-toastify";

export const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    setUserData(LocalStorageService.getData('USER-DATA'))
  }, [])
  

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = { date: selectedDate, phoneNumber };

      const headers = {
        Authorization: `Bearer ${userData.accessToken}`, 
        'Content-Type': 'application/json', 
      };

      const response = (await apiService.post('/reservations', data,{ headers }));

      if (response.data) {
        toast(`Successful reservation!`)
      } else {
        toast('reservation error');
      }
    } catch (error) {
      toast('System error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex row">
      <h2>Select a date to visit</h2>
      <Form className="col-12" onSubmit={handleSubmit}>
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Control
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleDateChange(new Date(e.target.value))
            }
            className="my-3"
          />
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="my-3 col-12"
          size="lg"
          type="submit"
          disabled={loading}
        >
          {loading ? <Loading /> : 'Reserve'}
        </Button>
      </Form>
    </div>
  );
};
