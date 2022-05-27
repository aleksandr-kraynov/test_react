import './App.css';
import UsersList from './components/UsersList/UsersList';
import ProfileUser from './components/ProfileUser/ProfileUser';
import { Routes, Route} from 'react-router-dom';

function App() {  
  return (
    <div className='wrapper'>
      <div className='left-block'>
          <p>Сортировка</p>
          <button className='btn btn-blue'>по городу</button>
          <button className='btn btn-blue'>по компании</button>
      </div>
      <Routes>         
          <Route path='/*' element={<UsersList />} />
          <Route path='/profile/:id' element={<ProfileUser />} />              
      </Routes>      
  </div>  
  );
}

export default App;