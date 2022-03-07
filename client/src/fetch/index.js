import axios from 'axios'
import Swal from 'sweetalert2'
const URL = `http://localhost:3000`

// Fetch User
const getUsers = (cb) => {
    axios({
        type: "GET",
        url: `${URL}/users`
    })
        .then(result => {
            cb(result.data)
        })
        .catch(result => {
            console.log(result)
        })
}
const deleteUser = (id, cb) => {
    Swal.fire({
        title: 'Kamu yakin mengapus data user ini?',
        text: "Data tidak bisa dikembalikan",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            axios({
                method: 'delete',
                url: `${URL}/users/delete/${id}`
            })
                .then(() => {
                    console.log("User Terhapus")
                    getUsers((users) => {
                        cb(users)
                    })
                })
                .catch(err => {
                    console.log(err)
                })

            Swal.fire(
                'USER BERHASIL DIHAPUS',
                
            )
        }
    })

}

const addUser = (obj) => {
    console.log("Add User Handler")
    const { username, email, password } = obj

    axios({
        method: 'POST',
        url: `${URL}/users/create`,
        data: {
            username, email, password
        }
    })
        .then(() => {
            Swal.fire(
                'User Berhasil Tersubmit',
            )
        })
        .catch(err => {
            console.log(err)
        })
}

const getUserById = (id, cb) => {
    axios({
        method: 'GET',
        url: `${URL}/users/info/${id}`
    })
        .then(result => {
            cb(result.data)
        })
        .catch(err => {
            console.log(err)
        })
}

const editUser = (obj, id) => {
    const { username, email, password } = obj

    axios({
        method: "put",
        url: `${URL}/users/update/${id}`,
        data: {
            username, email, password
        }
    })
        .then(() => {
            Swal.fire(
                'USER BERHASIL DIUBAH',
            )
        })
        .catch(err => {
            console.log(err)
        })
}

//Fetch Receiver
const getReceivers = (cb) => {
    axios({
        type: "GET",
        url: `${URL}/receivers`
    })
        .then(result => {
            cb(result.data)
        })
        .catch(result => {
            console.log(result)
        })
}
// const deleteReceivers = (id, cb) => {
//     Swal.fire({
//         title: 'Kamu yakin menghapus data PENERIMA KASBON ini?',
//         text: "Data tidak akan bisa dikembalikan",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             axios({
//                 method: 'delete',
//                 url: `${URL}/receivers/delete/${id}`
//             })
//                 .then(() => {
//                     console.log("Nama Penerima Kasbon Terhapus")
//                     getUsers((users) => {
//                         cb(users)
//                     })
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })

//             Swal.fire(
//                 'Data PENERIMA KASBON terhapus',
//             )
//         }
//     })

// }

// const addReceivers = (obj) => {
//     console.log("Add Receivers Handler")
//     const { username, email, password } = obj

//     axios({
//         method: 'POST',
//         url: `${URL}/users/create`,
//         data: {
//             username, email, password
//         }
//     })
//         .then(() => {
//             Swal.fire(
//                 'Users successfully submitted',
//                 'Good Job',
//                 'success'
//             )
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// const getReceiversById = (id, cb) => {
//     axios({
//         method: 'GET',
//         url: `${URL}/users/info/${id}`
//     })
//         .then(result => {
//             cb(result.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// const editReceivers = (obj, id) => {
//     const { username, email, password } = obj

//     axios({
//         method: "put",
//         url: `${URL}/users/update/${id}`,
//         data: {
//             username, email, password
//         }
//     })
//         .then(() => {
//             Swal.fire(
//                 'Updated user',
//                 'User has been updated!',
//                 'success'
//             )
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }


//Fetch kasbon
const getKasbons = (cb) => {
    axios({
        type: "GET",
        url: `${URL}/kasbons`
    })
        .then(result => {
            cb(result.data)
        })
        .catch(result => {
            console.log(result)
        })
}

const deleteKasbons = (id, cb) => {
    Swal.fire({
        title: 'Apakah kamu yakin menghapus kasbon?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'TERHAPUS'
    }).then((result) => {
        if (result.isConfirmed) {
            axios({
                method: 'delete',
                url: `${URL}/kasbons/delete/${id}`
            })
                .then(() => {
                    console.log("Kasbon Terhapus")
                    getKasbons((users) => {
                        cb(users)
                    })
                })
                .catch(err => {
                    console.log(err)
                })

            Swal.fire(
                'Kasbon Terhapus',
                
            )
        }
    })

}

const addKasbon = (obj) => {
    console.log("Tambah Kasbon")
    const { Nomorkasbon, Bagian, Penerima, TanggalPersekot, Jumlah, Uraian } = obj

    axios({
        method: 'POST',
        url: `${URL}/kasbons/addkasbon`,
        data: {
            Nomorkasbon, Bagian, Penerima, TanggalPersekot, Jumlah, Uraian
        }
    })
        .then(() => {
            Swal.fire(
                'Kasbon berhasil ditambah',
                'MANTAB',
                
            )
        })
        .catch(err => {
            console.log(err)
        })
}

const getKasbonById = (id, cb) => {
    axios({
        method: 'GET',
        url: `${URL}/kasbons/info/${id}`
    })
        .then(result => {
            cb(result.data)
        })
        .catch(err => {
            console.log(err)
        })
}

const editKasbon = (obj, id) => {
    const { Nomorkasbon, Bagian, Penerima, TanggalPersekot, Jumlah, Uraian } = obj

    axios({
        method: "put",
        url: `${URL}/kasbons/update/${id}`,
        data: {
            Nomorkasbon, Bagian, Penerima, TanggalPersekot, Jumlah, Uraian
        }
    })
        .then(() => {
            Swal.fire(
                'Kasbon Berhasil Dirubah',
                
            )
        })
        .catch(err => {
            console.log(err)
        })
}

export {
    getUsers, addUser, deleteUser, editUser, getUserById, getKasbons, deleteKasbons, addKasbon, editKasbon, getKasbonById }