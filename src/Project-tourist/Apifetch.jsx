import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './api.css';
import Newalert from '../Alert/Newalert';

const Apifetch = () => {

  const [idel, setIdel] = useState([]);


  const [inputId, setInputId] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [inputDate, setInputDate] = useState('');

  const [call, setcall] = useState(false)

  const toastcall = () => {
    setcall(!call)
  }



  const handleInputChange = (e, inputType) => {
    const inputValue = e.target.value;

    switch (inputType) {
      case 'id':
        setInputId(inputValue);
        break;
      case 'name':
        setInputName(inputValue);
        break;
      case 'email':
        setInputEmail(inputValue);
        break;
      case 'location':
        setInputLocation(inputValue);
        break;
      case 'date':
        setInputDate(inputValue);
        break;
      default:
        break;
    }
  };



  const fecthdata = async () => {
    try {
      let res = await axios.get('http://restapi.adequateshop.com/api/Tourist?page=2');
      setIdel(res.data.data);
    } catch (err) {
      console.error('Error to fetch dataaaaaaa :', err);
    }
  };




  const handladd = async () => {
    try {
      let newData = { id: inputId, tourist_name: inputName, tourist_email: inputEmail, tourist_location: inputLocation, createdat: inputDate };

      console.log('mmnmm,,m,mmnmmmm', newData);

      await axios.post('http://restapi.adequateshop.com/api/Tourist', newData);
      fecthdata();
      setInputId('');
      setInputName('');
      setInputEmail('');
      setInputLocation('');
      setInputDate('');
    } catch (err) {
      console.error('Error adding data:', err);
      <p>Failded to do ur Api{err.message}</p>
    }
  };

  useEffect(() => {
    fecthdata();
  }, []);

  return (
    <div>
      <table className="simple-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {idel.map((dd, index) => (
            <tr key={index}>
              <td>{dd.id}</td>
              <td>{dd.tourist_name}</td>
              <td>{dd.tourist_email}</td>
              <td>{dd.tourist_location}</td>
              <td>{dd.createdat}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <input value={inputId} onChange={(e) => handleInputChange(e, 'id')} placeholder="ID" />
      <input value={inputName} onChange={(e) => handleInputChange(e, 'name')} placeholder="Name" />
      <input value={inputEmail} onChange={(e) => handleInputChange(e, 'email')} placeholder="Email" />
      <input value={inputLocation} onChange={(e) => handleInputChange(e, 'location')} placeholder="Location" />
      <input value={inputDate} onChange={(e) => handleInputChange(e, 'date')} placeholder="Date" />


      {call &&
        <Newalert />
      }
      <button onClick={toastcall} className='Toast-call'>
        <button onClick={handladd} className='Toast-call'>ADD{!call}
         </button>
      </button>
    </div>




  );
};

export default Apifetch;
