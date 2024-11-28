import React, { useState } from 'react'
import  { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomCode, setRoomCode] = useState(null);
     const navigate  = useNavigate ();


    const handleFormSubmit  = (event)  =>{
        event.preventDefault();
        navigate(`/room/${roomCode}`);
    };
  return (
    
    <>
    <div className='homepage'>
      <form  onSubmit={handleFormSubmit} className='form'>
        <div>
            <label htmlFor="">Enter your Romm code</label>
            
            <input type="text"  value={roomCode} onChange={(e)=> setRoomCode(e.target.value)} name = "roomCode" required placeholder='enter room code'/>



        </div>
        <button type='submit'>Enter Room </button>

      </form>


    </div>
         
    </>
  )
}

export default Home
