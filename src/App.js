import './App.css';
import '../src/Component/Mystyle.css'
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import { useState,useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import WatchList from './Component/WatchList';


function App() {
  const [data,setData] = useState([])
    const Data = async ()=>{
        try{
            const response = await fetch(`https://api.jikan.moe/v4/anime`) 
            const data = await response.json()
            const newPost = data.data
            // console.log('data chekc',newPost)
            setData(data)
        }catch(err){
            console.log(err.message);
        }
    } 

    useEffect(() => {
      Data()
    }, [])
    

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Card data={data}/>}></Route>
      <Route path='/WatchList' element={<WatchList/>}></Route>
    </Routes>
    </>
  );
}

export default App;
