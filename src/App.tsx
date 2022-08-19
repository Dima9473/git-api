import './App.css';
import { Routes, Route, } from 'react-router-dom'
import GitRepos from './components/GitRepos/GitRepos';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GitRepos />} />
    </Routes>
  );
}

export default App;
