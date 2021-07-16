import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character'

const App = () => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((elem) => {
      setInfo(elem.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  console.log(info)

  const StyleDiv = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  height:15rem;
  `

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyleDiv>
        {info.map((char) => {
          return <Character key={char.id} character={char}/>
        })}
      </StyleDiv>
    </div>
  );
}

export default App;
