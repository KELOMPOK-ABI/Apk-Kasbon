import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import Swal from `sweetalert2`
import { Link } from 'react-router-dom'
import { getKasbons, deleteKasbons } from '../fetch'

function Kasbon() {
    const [kasbons, setKasbons] = useState([]);
    const NowLoading = () => {
        return (
            <tr>
                <td>Loading kasbons</td>
            </tr>
        )
    }
    
    // const navigate = useNavigate()
    // const getKasbons = () => {
    //     axios({
    //         type: "GET",
    //         url: "http://localhost:3000/kasbons"
    //     })
    //     .then(result => {
    //         setKasbons(result.data)
    //     })
    //     .catch(result => {
    //         console.log(result)
    //     })
    // }

//useEffect= react lifecyclle, dijalanin duluan
useEffect(() => {
    getKasbons((result) => {
        getUsers(result)
    })
}, [])

const deleteKasbonsHandler = id => {
    deleteKasbons(id, (result) => {
        setKasbons(result)
    })
}

// const deleteKasbons = Nomorkasbon => {
//     axios({
//         method: 'delete',
//         url: `http://localhost:3000/kasbons/delete/${Nomorkasbon}`
//     })
//         .then(() => {
//             console.log("Kasbon Terhapus")
//             getKasbons()
//         })
//         .catch(err => {
//             console.log(err)
//         })
//         }
return (
    <div className="app-kasbon container text-center mt-3">
    <div>
    <h3 className="mb-3 float-start">Tambah Kasbon</h3>
    <Link to="/kasbons/addkasbon" className="btn btn-sm btn-primary float-end" > + Add Kasbon </Link>
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
                kasbons.length !== 0 ?
                kasbons.map(kasbon => {
                    const {Nomorkasbon, Bagian, Penerima, TanggalPersekot, Jumlah, Uraian,} = kasbon
                return (
                        <tr key={Nomorkasbon}>
                            <td>{Nomorkasbon}</td>
                            <td>{Bagian}</td>
                            <td>{Penerima}</td>
                            <td>{TanggalPersekot}</td>
                            <td>{Jumlah}</td>
                            <td>{Uraian}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-2" to={`/kasbons/update/${Nomorkasbon}`}>
                                    <i className="fa-solid fa-edit me-2"></i>
                                    Update
                                </Link>
                                <button onClick={() => deleteKasbonsHandler(Nomorkasbon)}
                                className="btn btn-sm btn-danger">
                                    
                                    <i className="fa-solid fa-trash me-2"></i>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                }) : <NowLoading></NowLoading>
            }
          </tbody>
      </table>

    </div>);
}

export default Kasbon