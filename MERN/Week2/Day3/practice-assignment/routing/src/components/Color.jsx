import React from 'react'
import { useParams } from 'react-router-dom';

function Color(props) {
    const {color} = useParams ();
    const {background} = useParams ();
    const {number} = useParams ();

const css ={
    color : color,
    backgroundColor : background,
};

  return (
    <div>

    <h1 style={css}>This word : {number}</h1>

    </div>
  )
}

export default Color