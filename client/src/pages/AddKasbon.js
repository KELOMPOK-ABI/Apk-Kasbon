import React, {useState} from 'react'

function AddKasbon() {
    const [kasbon, setKasbon] = useState("")
    const [bagian, setBagian] = useState("")
    const [penerima, setPenerima] = useState("")
    const [tglpersekot, setTglPersekot] = useState("")
    const [jumlah, setJumlah] = useState("")
    const [uraian, setUraian] = useState("")

    const submitHandler= () =>{
        console.log("Submit Handler")
        console.log(kasbon)
        console.log(bagian)
        console.log(penerima)
        console.log(tglpersekot)
        console.log(jumlah)
        console.log(uraian)
    }

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
                             onChange={(e) => setKasbon(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="bagian-label">Bagian</label>
                            <input type="text" 
                            id="bagian-label" 
                            className="form-control" 
                            placeholder='Insert Bagian'
                            onChange={(e) => setBagian(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="penerima-label">Penerima</label>
                            <input type="text" 
                            id="penerima-label" 
                            className="form-control" 
                            placeholder='Insert Penerima'
                            onChange={(e) => setPenerima(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="tglpersekot-label">Tanggal Persekot</label>
                            <input type="text" 
                            id="tglpersekot-label" 
                            className="form-control" 
                            placeholder='Insert Tanggal Persekot'
                            onChange={(e) => setTglPersekot(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="jumlah-label">Jumlah</label>
                            <input type="text" 
                            id="jumlah-label" 
                            className="form-control" 
                            placeholder='Insert Jumlah'
                            onChange={(e) => setJumlah(e.target.value)}
                            ></input>
                         </div>
                         <div className='form-floating mb-3'>
                            <label htmlfor="uraian-label">Uraian</label>
                            <input type="text" 
                            id="uraian-label" 
                            className="form-control" 
                            placeholder='Insert Uraian'
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

export default AddKasbon