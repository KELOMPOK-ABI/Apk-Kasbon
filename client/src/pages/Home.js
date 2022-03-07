import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Home() {
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
    <div className="app-home container text-center mt-3">
    <div>
    <h3 className="mb-3">Daftar Kasbon</h3>
    {/*<a onClick={() => getKasbonsHandler()} className="btn btn-sm btn-link float-left" > Get Kasbons </a> */}
    </div>
      <table className="table table-hover table-bordered">
          <thead>
              <tr className="table-head">
                  <th>Nomor Kasbon</th>
                  <th>Bagian</th>
                  <th>Penerima</th>
                  <th>Tanggal Persekot</th>
                  <th>Jumlah</th>
                  <th>Jumlah dibayar</th>
                  <th>Uraian</th>
                  <th>Status</th>
                  <th>Actions</th>
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
                            <td>{Jumlahdibayar}</td>
                            <td>{Uraian}</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    )
                })
            }
          </tbody>
      </table>

    </div>
  );
}

export default Home