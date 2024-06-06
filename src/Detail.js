import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { addItem } from "./store";
import { useDispatch } from "react-redux";



function Detail (props){

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){ return x.id ==id });
    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState('');
    let [tab, setTab] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      if( input && isNaN(input)) {
        window.alert('경고: 숫자만 입력하세요.');
      }
    }, [input]);

    id = parseFloat(id);

    useEffect(()=>{
      setTimeout(()=>{ setAlert(false) },2000)
    })

    
    return(
<div className="container">
    {
    alert == true 
    ? <div className="alert alert-warning">
      2초 이내 구매시 할인
      </div>
      : null
      }
  <div className="row">
    <div className="col-md-6">
      <img src={"https://codingapple1.github.io/shop/shoes"+ [id+1] + ".jpg"} width="100%" />
    </div>
    <div className="col-md-6">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}</p>
      <button className="btn btn-danger" onClick={() =>
        { navigate('/Cart');
        dispatch(addItem({id:1, name: "Red Knit", count:1 }));
        }
      }>주문하기</button> 
    </div>
  </div>
  <Nav variant="tabs" defaultActiveKey="link0">
    <Nav.Item>
        <Nav.Link eventKey="link0" onClick={() => {setTab(0)}}>버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link1" onClick={() => {setTab(1)}}>버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link2" onClick={() => {setTab(2)}}>버튼2</Nav.Link>
    </Nav.Item>
  </Nav>
  
  <TabContent tab = {tab}/>
  </div> 
  )

}

function TabContent(props){
    if(props.tab == 0){
        return <div>내용0</div>
    }
    if(props.tab == 1){
        return <div>내용1</div>
    }
    if(props.tab == 2){
        return <div>내용2</div>
    }
}

export default Detail;