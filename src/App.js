import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './pages/home';
import SinglePage from './pages/single';

import './App.css'
import { PostContextProvider } from './context/postContext';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <PostContextProvider>
        <Routes>
          <Route path='/single/:id' element={<SinglePage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>

      </PostContextProvider>
    </BrowserRouter>
  );
}

export default App;
