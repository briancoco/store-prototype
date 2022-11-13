import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Store from './Store';
import ItemPage from './ItemPage';
import About from './About';
import Login from './Login';
import Cart from './Cart';
import {useState, useEffect} from 'react';
function App() {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cart, setCart] = useState([]);

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

  const authLogin = async (e) => {
    
    e.preventDefault();
    //need to call api endpoint for auth user login
    let response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      mode: 'no-cors'
    })
    setUsername('');
    setPassword('');
    
    response = await response.json();
    console.log(response);
  }

  const addCart = (item) => {
    //first need to check if item id already exists in our cart
    //can use map to iterate thru every cart item each time checking if
    //item matches, if yes then simply increment the quantity
    //otherwise need to add a whole new item

    const newCart = [];
    let itemFound = false;
    cart.forEach((product) => {
      if(product.id === item.id) {
        newCart.push({...product, quantity: product.quantity + 1});
        itemFound = true;
      } else {
        newCart.push(product);
      }
    })
    if(!itemFound) {
      newCart.push({...item, quantity: 1});
    }
    setCart(newCart);
  }

  const deleteCart = (id) => {
    const newCart = [];
    cart.forEach((item) => {
      if(item.id === id) {
        if(item.quantity > 1) {
          newCart.push({...item, quantity: item.quantity - 1});
        }
      } else {
        newCart.push(item);
      }
    })
    setCart(newCart);
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='store' >
            <Route index element={<Store 
              items={items}
            />} />
            <Route path=':id' element={<ItemPage 
              items={items}
              addCart={addCart}
            />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login 
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            authLogin={authLogin}
          />} />
          <Route path='cart' element={<Cart 
            cart={cart}
            deleteCart={deleteCart}
          />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
