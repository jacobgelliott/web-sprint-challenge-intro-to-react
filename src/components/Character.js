import React from 'react';
import styled from 'styled-components'

const Character = (props) => {
return(
    <Style>
       <p><b>Name:</b> {props.character.name}</p> 
          <p><b>Birth Year:</b> {props.character.birth_year}</p>
          <p><b>Gender:</b> {props.character.gender}</p>
          <p><b>Height:</b> {props.character.height}</p> 
    </Style>
)
};

const Style = styled.div`
background:black;
opacity:.4;
color: white;
text-shadow: 1px 1px 4px grey;
`;

export default Character;