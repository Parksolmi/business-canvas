import {Routes, Route} from 'react-router-dom';
import './App.css';
import MemberListPage from './pages/MemberListPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MemberListPage/>}/>
    </Routes>
  );
}

export default App;
