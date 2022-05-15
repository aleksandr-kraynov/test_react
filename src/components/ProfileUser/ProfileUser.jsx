import './ProfieUser.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ProfileUser = () => {   
    const {id} = useParams();    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
    }, [id])  

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className='right-block'>
                <div className='right-block__top'>
                    <p className='listTitle'>Профиль пользователя</p>                     
                    <NavLink key={item.id} to={`/profile/${item.id}/edit`}>
                        <button className='btn btn-blue right-block__top-btn'>Редактировать</button> 
                    </NavLink>  
                </div>                          
                <div className='profile-user__area'>                
                    <label>Name:</label>
                        <input value={item.name}></input>
                    <label>User name:</label>
                        <input value={item.username}></input>
                    <label>E-mail:</label>
                        <input value={item.email}></input>
                    <label>Street:</label>  
                        <input value={item.address.street}></input>              
                    <label>City:</label>
                        <input value={item.address.city}></input>
                    <label>Zip code:</label>
                        <input value={item.address.zipcode}></input>
                    <label>Phone:</label>
                        <input value={item.phone}></input>
                    <label>Website:</label>
                        <input value={item.website}></input>
                    <label>Comment:</label>
                        <textarea></textarea>                 
                </div>  
                <div className="right-block__send">
                    <button className='btn btn__send'>Отправить</button>
                </div>        
            </div>       
        );
    }
}

export default ProfileUser;