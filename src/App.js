import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';


function App() {


  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Link to="/">홈 </Link>
      <br></br>
      <Link to="/detail/0">상세페이지</Link>


      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">



            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  <Routes>
    <Route path='/' element={
    <>

      <div className='main-bg'>
      </div>
      <div className="container">

      <button onClick={() => {
        let copy = [...shoes].sort((a, b) => a.title.localeCompare(b.title));
        setShoes(copy);
      }}>가나다순 정렬버튼</button>

        <div className="row">
          {
            shoes.map((a, i)=>{
              return(
                <Card shoes={shoes[i]} i={i} ></Card>
                
              )
            })
          }
      </div>
      </div>
          <button onClick={() => {
           axios.get('https://codingapple1.github.io/shop/data2.json').
           then((data)=>{
            let copyadd = [...shoes, ...(data.data)];
            setShoes(copyadd);
           })
          }}>더보기</button>

    </>
  }/>
  
    <Route path="/detail/:id" element={<Detail shoes = {shoes}/>}/>
    <Route path='/cart' element = {<Cart/>} />
  </Routes>
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

