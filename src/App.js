import { Route, Routes } from 'react-router-dom';
import { AddTodo, UpdateTodo } from './components';
import { Home } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddTodo />} />
        <Route path='/update' element={<UpdateTodo />} />
      </Routes>
    </>
  );
}

export default App;
