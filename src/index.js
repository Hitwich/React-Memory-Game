import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/index/index'
import App from './pages/MemoryCard/App';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { store } from './store/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <Provider store={store}>
  <BrowserRouter>
      <Routes>
          <Route path='/memory-card' element={<App/>}/>
          <Route path='/' element={<Index/>}/>


      </Routes>
        <GlobalStyle/>
  </BrowserRouter>
  </Provider>
);

