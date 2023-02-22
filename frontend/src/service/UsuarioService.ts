import axios from "axios"
import Config from "../lib/config"

class UserService{

    async cadastrar(data:any){
        return axios({
            url: Config.API_URL + "home/create-user",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async login(data:any){
        return axios({
            url: Config.API_URL + "home/login/auth",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
          localStorage.setItem("TOKEN", response.data.access_token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async loginComToken(data:any){
        return axios({
            url: Config.API_URL + "usuario/login-token",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            if (response.data.access_token){
              localStorage.setItem("TOKEN", response.data.access_token)
                return Promise.resolve(response)
            }else{
                return Promise.reject(response)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async profile(data:any){
        return axios({
            url: Config.API_URL + "user/profile",
            method: "GET",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }


}

const userService = new UserService()
export default userService