import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js'


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div>
          <div className="main-bg">
          <button onClick={()=>{
            let copy = [...shoes].sort((a,b)=> a.title.localeCompare(b.title));
            setShoes(copy);
          }}>가나다순정렬</button>
          </div>

        <div className="container">
          <div className="row">
            {
              shoes.map((a, i)=>{
                return(<Card shoes={shoes[i]} i={i}></Card>
                )
              })
            }
          </div>
        </div>
        <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과)=>{
           console.log(결과.data)
           let copy = [...shoes, ...결과.data];
           setShoes(copy);
          })
        }}>상품더보기</button>

        </div>}/>

      <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <div></div>
      <Link to="/">홈</Link>
      <div></div>
      <Link to="/detail/0">상세페이지</Link>

      
    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}


export default App;