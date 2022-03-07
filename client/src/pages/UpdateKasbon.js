import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getKasbons, editKasbon } from '../fetch'

function UpdateKasbon() {
    const [Nomorkasbon, setKasbon] = useState("")
    const [Bagian, setBagian] = useState("")
    const [Penerima, setPenerima] = useState("")
    const [TglPersekot, setTglPersekot] = useState("")
    const [Jumlah, setJumlah] = useState("")
    const [Uraian, setUraian] = useState("")

    let params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getKasbonsById(+params.id, result => {
            setKasbon(result.Nomorkasbon)
            setBagian(result.Bagian)
            setPenerima(result.Penerima)
            setTglPersekot(result.TglPersekot)
            setJumlah(result.Jumlah)
            setUraian(result.Uraian)

            getUsers(user => {
                setUsers(user)
              })
        })
    }, [])


    const submitHandler = () => {
        let tempObj = {
            Nomorkasbon, Bagian, Penerima, TglPersekot, Jumlah, Uraian
        }
        editKasbon(tempObj, params.id)
        navigate('/kasbons')

return (
    <div className="container">
        <div className="row">
            <div className="col-9 mx-auto">
                <div className="row">
                    <div className="col-12">
                        <h3>Tambah Kasbon</h3>
                    </div>
                    <div className="col-6">
                        <div className='form-floating mb-3'>
                            <label htmlfor="kasbon-label">No Kasbon</label>
                            <input type="text"
                             id="kasbon-label"
                             className="form-control" 
                             placeholder='Insert Kasbon'
                             value={Nomorkasbon}
                             onChange={(e) => setKasbon(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="bagian-label">Bagian</label>
                            <input type="text" 
                            id="bagian-label" 
                            className="form-control" 
                            placeholder='Insert Bagian'
                            value={Bagian}
                            onChange={(e) => setBagian(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="penerima-label">Penerima</label>
                            <input type="text" 
                            id="penerima-label" 
                            className="form-control" 
                            placeholder='Insert Penerima'
                            value={Penerima}
                            onChange={(e) => setPenerima(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="tglpersekot-label">Tanggal Persekot</label>
                            <input type="text" 
                            id="tglpersekot-label" 
                            className="form-control" 
                            placeholder='Insert Tanggal Persekot'
                            value={TglPersekot}
                            onChange={(e) => setTglPersekot(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="jumlah-label">Jumlah</label>
                            <input type="text" 
                            id="jumlah-label" 
                            className="form-control" 
                            placeholder='Insert Jumlah'
                            value={Jumlah}
                            onChange={(e) => setJumlah(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="uraian-label">Uraian</label>
                            <input type="text" 
                            id="uraian-label" 
                            className="form-control" 
                            placeholder='Insert Uraian'
                            value={Uraian}
                            onChange={(e) => setUraian(e.target.value)}
                            ></input>
                         </div>
                         <div className="mb-3">
                             <button onClick={()=> submitHandler()} 
                             className="btn btn-block btn-primary">Submit</button>
                         </div>
                    </div>
                    <div className="col-6">
                        <img className="img-fluid"src="https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400"></img>
                    
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default UpdateKasbon