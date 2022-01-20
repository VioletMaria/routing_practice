import React from 'react';
import { useParams } from 'react-router-dom';

const PutItIn = (props) => {
    const {input, backColor, color} = useParams();
    return (
      isNaN(input) ?
      <h1 style={{backgroundColor: backColor, color: color}}>The word is: {input}</h1>
      :
      <h1 style={{backgroundColor: backColor, color: color}}>The number is: {input}</h1>
    );
  }

export default PutItIn;