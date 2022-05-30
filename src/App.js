import React, { useState, useEffect } from 'react';
import './App.css';
import UsersList from './components/UsersList/UsersList';
import ProfileUser from './components/ProfileUser/ProfileUser';
import { Routes, Route} from 'react-router-dom';

function App() {  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]); 
  const [toggle, setToggle] = useState(true); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },         
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])    

  let sortArr = [...items]

  const sortCity = () => { 
    setToggle(!toggle);    
    if (toggle === true) {
      setItems(sortArr.sort((a, b) => a.address.city > b.address.city ? 1 : -1));
    } else {
      setItems(sortArr.sort((a, b) => a.address.city > b.address.city ? -1 : 1));
    }
  }

  const sortCompany = () => {  
    setToggle(!toggle);  
    if (toggle === true) {
      setItems(sortArr.sort((a, b) => a.company.name > b.company.name ? 1 : -1));
    } else {
      setItems(sortArr.sort((a, b) => a.company.name > b.company.name ? -1 : 1));
    }
  }

  return (
    <div className='wrapper'>
      <div className='left-block'>
          <p>Сортировка</p>
          <button className='btn btn-blue' onClick={sortCity}>по городу</button>
          <button className='btn btn-blue' onClick={sortCompany}>по компании</button>
      </div>
      <Routes>         
          <Route path='/*' element={<UsersList error={error} isLoaded={isLoaded} items={items}/>} />
          <Route path='/profile/:id' element={<ProfileUser />} />              
      </Routes>      
  </div>  
  );
}

export default App;