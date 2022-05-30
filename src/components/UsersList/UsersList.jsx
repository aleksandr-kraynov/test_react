import './UsersList.css';

import { NavLink } from 'react-router-dom';

const UsersList = (props) => {   
  
  if (props.error) {
    return <div>Ошибка: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (     
      <div className='right-block'>
          <p className='listTitle'>Список пользователей</p>         
          {props.items.map(item => (
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
          <div className='quantityUsers'>Найдено {props.items.length} пользователей</div>                    
      </div>     
    );  
  }    
}

export default UsersList;