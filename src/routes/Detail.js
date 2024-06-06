import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCart } from '../store';

function Detail(props) {
    
    let { id } = useParams();
    let navigate = useNavigate(); 

    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState("");
    let [tap, setTap] = useState(0);
    let dispatch = useDispatch();

    useEffect(() => {
        if (isNaN(input) === true) {
            window.alert('경고: 숫자만 입력하세요.');
        }
    }, [input]);

    useEffect(() => {
        let timer = setTimeout(() => {
            setAlert(false);
        }, 2000);

        // Clean-up 함수 추가
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            {alert === true ?
                <div className='alert alert-warning'>
                    2초 이내 구매 시 할인
                </div>
                : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="shoes" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => { setInput(e.target.value) }} />
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addCart({ id: 1, name: 'Red Knit', count: 1 }));
                        navigate('/cart'); // cart 페이지로 이동
                    }}>주문하기</button>
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0"
                    onClick = { () => { setTap(0) }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1"
                    onClick = { () => { setTap(1) }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2"
                    onClick = { () => { setTap(2) }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tap = { tap } />
        </div>
    );
}

function TabContent(props) {
    if (props.tap == 0){
        return <div>내용0</div>
    }
    if (props.tap == 1){
        return <div>내용1</div>
    }
    if (props.tap == 2){
        return <div>내용2</div>
    }
}

export default Detail;