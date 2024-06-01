import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Nav} from 'react-bootstrap';
import {addCount} from './store.js';
import {useDispatch, useSelector} from 'react-redux';

function Detail(props){

    let {id} = useParams();
    //let shoe = props.shoes.find(x =>  x.id == id);
    let[count, setCount] = useState(0);
    let[alert, setAlert] = useState(true);
    let[input,setInput] = useState("");
    let[탭, 탭변경] = useState(0)
    let dispatch = useDispatch();
    let state = useSelector((state)=> state);
    let navigate = useNavigate(); // useNavigate 추가


    useEffect(()=>{
        let a = setTimeout(()=> { setAlert(false) }, 2000)
        return()=>{
            clearTimeout(a)
        }
    }, []);

    useEffect(() =>{
        if(input && isNaN(input)){
            window.alert("숫자를 입력하세요.")
        }
    }, [input]);

    const handleInputChange = (e) =>{
        setInput(e.target.value);
    }

    const addCart =()=>{
        dispatch(addCount(1));
        navigate('/cart'); 
    }

    return(
        <div className="container">
        <div className="alert alert-warning" style={{ display: alert ? 'block' : 'none' }}></div>

        {count}
        <button onCLick={()=>{setCount(count+1)}}>버튼</button>
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}원</p>
                <button className="btn btn-danger" onClick={addCart}>주문하기</button> 
            </div>
            <input type ="text" value={input} onChange={handleInputChange}/>
        </div>
        <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>탭변경(0)}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>탭변경(1)}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>탭변경(2)}>버튼2</Nav.Link>
        </Nav.Item>
        </Nav>
        <TabContent 탭={탭}/>

        </div>         

    )
}


function TabContent(props){    
    if (props.탭 == 0){
        return <div>내용0</div>
    }
    if (props.탭 == 1){
        return <div>내용1</div>
    }
    if (props.탭 == 2){
        return <div>내용2</div>
    }         
}

export default Detail;