/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집']);
  let post = '강남 고기 맛집';
  let [count, countSet] =useState(0)

  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={{color:'red', fontSize: '30px'}}>개발 Blog</div>
      </div>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{
          countSet(count+1)
        }}>❤️</span>{count}</h4>
        <h5>2월 17일 발행</h5>
        <hr/>
      </div>
      <div className='list'>
      <h4 onClick={()=>{
        modal변경(!modal)
      }}>{글제목[1]} <span onClick={()=>{
          countSet(count+1)
        }}>❤️</span>{count}</h4>
        <hr/>
      </div>
      {
        modal ==true
        ? <Modal/>
        : null
      }
      
      
    </div>
  );
}

function Modal(){
  return(
    <div>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  )
}

export default App;
