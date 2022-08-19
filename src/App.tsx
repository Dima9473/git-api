import './App.css';
import { Routes, Route, } from 'react-router-dom'
import UserInfo from './components/Git/UserInfo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserInfo />} />
    </Routes>
  );
}

export default App;
