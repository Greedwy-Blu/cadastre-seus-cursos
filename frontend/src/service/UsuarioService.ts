import axios from "axios"
import Config from "../lib/config"

class UsuarioService{

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
}

const usuarioService = new UsuarioService()
export default usuarioService