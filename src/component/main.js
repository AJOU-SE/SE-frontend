import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import cafeteria_list from './cafeteria_list'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';

function Main() {
  const { loggedIn, userId, handleLogout } = useContext(UserContext);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevState)=>({
      ...prevState, [index]:!prevState[index],
    }));
  }

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
          
        </div>
      ))}

    </div>
  );
}

export default Main;
