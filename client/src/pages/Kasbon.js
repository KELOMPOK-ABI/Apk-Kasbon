import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Kasbon() {
    const [kasbons, setKasbons] = useState([]);

const getKasbons = () => {
    axios({
        type: "GET",
        url: "http://localhost:3000/kasbons"
    })
    .then(result => {
        setKasbons(result.data)
    })
    .catch(result => {
        console.log(result)
    })
}

//useEffect= react lifecyclle, dijalanin duluan
useEffect(() => {
    getKasbons()
}, [])


return (
    <div className="app-kasbon container text-center mt-3">
    <div>
    <h3 className="mb-3 float-start">Tambah Kasbon</h3>
    <Link to="/kasbons/create" className="btn btn-sm btn-primary float-end" > + Add Kasbon </Link>
    </div>
      <table className="table table-hover table-bordered">
          <thead>
              <tr className="table-head">
                  <th>Nomorkasbon</th>
                  <th>Bagian</th>
                  <th>Penerima</th>
                  <th>TanggalPersekot</th>
                  <th>Jumlah</th>
                  <th>Uraian</th>
              </tr>
          </thead>
          <tbody>
            {
                kasbons.map(kasbon => {
                    const {Nomorkasbon, Bagian, Penerima, TanggalPersekot, Jumlah, Jumlahdibayar, Uraian,} = kasbon
                return(
                        <tr>
                            <td>{Nomorkasbon}</td>
                            <td>{Bagian}</td>
                            <td>{Penerima}</td>
                            <td>{TanggalPersekot}</td>
                            <td>{Jumlah}</td>
                            <td>{Uraian}</td>
                        </tr>
                    )
                })
            }
          </tbody>
      </table>

    </div>
  );
}

export default Kasbon