import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from "axios";


function App() {

    var arr = [];
var pokisname;

const [name,setName] = useState("");
const [move,setMove] = useState();
const [num,setNum] = useState("1");

var name1,move1;
    const getPoks = async () =>{
        const Pokis = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        //const actualData = await Pokis.json();
        console.log(Pokis.data.name);
        name1 = Pokis.data.name;
        setName(name1);
        setMove(Pokis.data.moves.length);
        //pokisname = actualData;
        for(var i=0;i<30;i++){
            arr.push(i);
        }
    }

    useEffect(()=>{
        getPoks();
    },[num]);



  return (
    <div>
        <h1>Hello!! I am {name}</h1>
        <h1>Hello!! I have {move} moves</h1>

        <select value={num} onChange={(event) =>{
         setNum(event.target.value);
         
        
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="25">25</option>

        </select>
    
    </div>
  )
}

export default App;