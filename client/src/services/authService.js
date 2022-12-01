import axios from 'axios';

class authService {

    signin(credentials, callback){
        // take care of login
        axios.post(`https://w0448225-fullstack.onrender.com/pokemon/user/login`, credentials)
        .then(
            response => {
                if(response.status=== 200) {
                    localStorage.setItem('token', response.headers['x-auth-token'])
                    callback(true)
                }
            })
            .catch(error => {
                console.log(error.response)
                callback(false)
            })
    }

    register(){
        // take care of register
    }

    isAuthenticated(){
        // do stuff after login
        return localStorage.getItem('token') !== null
    }

    signout(){
        localStorage.removeItem('token')
    }
}

export default new authService()