import {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import {addItem} from './store';
import { useDispatch} from 'react-redux';

function Detail(props){

    let {id} = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let[alert, alert변경] = useState(true);
    let[inputValue,setInputValue] = useState("");
    let[탭,탭변경] = useState(0);

    useEffect(()=>{
        setTimeout(()=> {alert변경(false) }, 2000)
    }, []);

    useEffect(() =>{
        if(inputValue && isNaN(inputValue)){
            window.alert("숫자를 입력하세요.")
        }
    }, [inputValue]);

    return(
        <div className="container">
            {alert && (<div className="alert alert-warning">
                2초 이내 구매시 할인
            </div>)} 
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <input type ="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger" onClick={()=>
                        {navigate('/Cart'); 
                        dispatch(addItem({id:1, name: 'Red Knit', count: 1}));
                    }}>주문하기</button> 
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=> {탭변경(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=> {탭변경(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=> {탭변경(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭}/>
        </div>         
    )
}

function TabContent(props){
    if(props.탭 == 0) {
        return <div>내용0</div>
    }
    if(props.탭 == 1) {
        return <div>내용1</div>
    }
    if(props.탭 == 2) {
        return <div>내용2</div>
    }
}

export default Detail;