import axios from 'axios'

class dataService{

    getData(callback){
        axios.get(`https://w0448225-fullstack.onrender.com/pokemon`)
        .then(response=>{
            callback(response.data)
        })

    }

    getOneData(){

    }

    createData(){

    }

    updateData(){

    }

    deleteData(){

    }

}

export default new dataService()