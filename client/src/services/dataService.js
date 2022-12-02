import axios from 'axios'

class dataService{

    getData(callback){
        axios.get(`${process.env.REACT_APP_API_URL}/pokemon`)
        .then(response=>{
            callback(response.data)
        })

    }

    getOneData(){

    }

    createData(APIdata, token, callback){
        axios.post(`${process.env.REACT_APP_API_URL}/pokemon`, APIdata, token)
        .then(
            response => {
                if(response.status=== 201) {
                    callback(true)
                }
            })
            .catch( error=>{
                console.log(error.response)
                callback(false)
            })

    }

    updateData(){

    }

    deleteData(){

    }

}

export default new dataService()