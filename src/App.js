import './App.css';
import Todo from './components/todo/Todo';
import Auth from './components/Auth';
import {Routes, Route, Navigate} from "react-router-dom"
import { Provider } from 'react-redux';

import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='*' element={<Navigate to="/login"/>}/>

     </Routes>
      </Provider>
    

    </div>
  );
}

export default App;
