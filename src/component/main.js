import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import cafeteria_list from './cafeteria_list';
import Achelin_list from './Achelin_list';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import axios from 'axios';
import { showMenuByCafeteria, showMenuByStore } from './menu';

function Main() {
  const { loggedIn, userId, handleLogout } = useContext(UserContext);
  const [expanded, setExpanded] = useState({});
  const [menuExpanded, setMenuExpanded] = useState({});
  const [achelinExpanded, setAchelinExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevState)=>({
      ...prevState, 
      [index]:!prevState[index],
    }));
  }

  const toggleMenuExpand = (index) => {
    setMenuExpanded((prevState)=>({
      ...prevState, 
      [index]:!prevState[index],
    }));
  }

  const toggleAchelinExpand = (storeName) => {
    setAchelinExpanded((prevState) => ({
      ...prevState,
      [storeName]: !prevState[storeName],
    }));
  };

  const handleLogoutClick= async()=>{
    try{
      const response = await axios.get('/member/logout');
      if (response.status===200){
        handleLogout();
      }else{
        throw new Error('Logout Failed');
      }
    } catch(error){
      console.log('Logout Failed');
    }
  }

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>{userId}님, 안녕하세요!</h2>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Welcome to the Main Page</h2>
          <Link to="/login">Go to Login Page</Link>
        </div>
      )}

      {cafeteria_list.results.map((cafeteria,index)=>(
        <div key={index} >
          <h3>{cafeteria.name} &nbsp;
          <InfoOutlinedIcon 
            onClick={()=> toggleExpand(index)}
            style={{cursor:'pointer', fontSize:'0.9rem'}} 
          /> &nbsp;
          <ArrowDropDownCircleOutlinedIcon
            onClick={()=>toggleMenuExpand(index)}
            style={{cursor:'pointer', fontSize:'0.9rem'}} 
          />
          </h3>
          {expanded[index] && (
            <div>
              <p>위치 : {cafeteria.loc}</p>
              <p>전화번호 : {cafeteria.num}</p>
              <p>운영시간 : {cafeteria.time}</p>
              {cafeteria.breaktime && (
                <p>break-time : {cafeteria.breaktime}</p> )}
              {cafeteria.cf && (
                <p>* {cafeteria.cf}</p> )}
            </div>
          )}
          {menuExpanded[index] && (
            <div>
              {cafeteria.name==='아슐랭'?(
                  Achelin_list.map((item,index)=>(
                    <div key={index}>
                      <p>
                        <h4>{item.store} &nbsp;
                        <ArrowDropDownCircleOutlinedIcon
                          onClick={()=>toggleAchelinExpand(item.store)}
                          style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                        />
                        </h4>
                      </p>
                      {achelinExpanded[item.store] && (
                        <div>
                          {showMenuByStore(item.store)}
                        </div>
                      )}
                    </div>
                  ))
              ):(
                showMenuByCafeteria(cafeteria.name)
              )}
            </div>
          )}
          
        </div>
      ))}

    </div>
  );
}

export default Main;
