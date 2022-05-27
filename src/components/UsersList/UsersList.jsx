import './UsersList.css';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const UsersList = () => {   
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);  

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

  const sort = () => {
    let sortArr = [...items]
    setItems(sortArr.sort((a, b) => a.address.city > b.address.city ? 1 : -1));     
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (     
      <div className='right-block'>
          <p className='listTitle'>Список пользователей</p>         
          {items.map(item => (
          <div className='card' key={item.id}>
              <div className='card__info'>
                  <div>ФИО: <span className='card__data'>{item.name}</span></div>
                  <div>город: <span className='card__data'>{item.address.city}</span></div>
                  <div>компания: <span className='card__data'>{item.company.name}</span></div>                          
              </div>  
              <div className='card__more'>
                <NavLink key={item.id} to={`/profile/${item.id}`}>
                  <span>Подробнее</span>
                </NavLink>               
              </div>                                      
          </div>
          ))}
          <div className='quantityUsers'>Найдено {items.length} пользователей</div>                    
      </div>     
    );  
  }    
}

export default UsersList;