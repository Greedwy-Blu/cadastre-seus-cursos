import axios from "axios"
import Config from "../lib/config"

class StudyService{

    async cadastrar(data:any){
        let token = await localStorage.getItem("TOKEN")
        return axios({
            url: Config.API_URL + "user/create-study",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async studyfind(data:any){
        let token = await localStorage.getItem("TOKEN")

      return axios({
          url: Config.API_URL + "user/study/study-find",
          method: "PATCH",
          timeout: Config.TIMEOUT_REQUEST,
          data: data,
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        }
      }).then((response) => {
          return Promise.resolve(response)
      }).catch((error) => {
          return Promise.reject(error)
      })
    }

    async studyUpdate(data:any){
        let token = await localStorage.getItem("TOKEN")

      return axios({
          url: Config.API_URL + "user/study/study-update",
          method: "PUT",
          timeout: Config.TIMEOUT_REQUEST,
          data: data,
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        }
      }).then((response) => {
          return Promise.resolve(response)
      }).catch((error) => {
          return Promise.reject(error)
      })
    }

    async studyDelete(data:any){
        let token = await localStorage.getItem("TOKEN")

    return axios({
        url: Config.API_URL + "user/study/study-delete",
        method: "DELETE",
        timeout: Config.TIMEOUT_REQUEST,
        data: data,
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        }
    }).then((response) => {
        return Promise.resolve(response)
    }).catch((error) => {
        return Promise.reject(error)
    })
    }

    async studyCurriculum(data:any){
        let token = await localStorage.getItem("TOKEN")

    return axios({
        url: Config.API_URL + "user/study/study-curriculum",
        method: "PATCH",
        timeout: Config.TIMEOUT_REQUEST,
        data: data,
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        }
    }).then((response) => {
        return Promise.resolve(response)
    }).catch((error) => {
        return Promise.reject(error)
    })
    }






}

const studyService = new StudyService()
export default studyService