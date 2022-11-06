import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Store from './Store';
import ItemPage from './ItemPage';
import About from './About';
import {useState, useEffect} from 'react';
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let response = await fetch('https://fakestoreapi.com/products/category/electronics?limit=5');
      if(response.ok) {
        response = await response.json();
        console.log(response);
        setItems(response);
      }
    }
    getItems();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='store' >
            <Route index element={<Store 
              items={items}
            />} />
            <Route path=':id' element={<ItemPage />} />
          </Route>
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
