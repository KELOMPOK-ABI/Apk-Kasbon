import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DetailKasbon() {
  const [angka, setAngka] = useState(0)
  return (
    <div className="container">
      <h3>Detail Kasbon</h3>
      <p>{angka}</p>
      
      </div>
  )
}

export default DetailKasbon