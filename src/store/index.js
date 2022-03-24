import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '@/api'
const CryptoJS = require('crypto-js')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoading: false,
    isLoggedIn: false,
    visitedUser: 'ss',
    token: null,
    user: {
      name: ''
    }
  },
  getters: {
  },
  mutations: {
    setLoading: (state, payload) => {
      state.showLoading = payload
    },
    setIsLoggedIn: (state, payload) => {
      state.isLoggedIn = payload
    },
    setVisitedUser: (state, payload) => {
      state.visitedUser = payload
    },
    setLogout (state) {
      state.token = null
      localStorage.removeItem('token')
    },
    setLogin (state, payload) {
      const token = CryptoJS.SHA1(payload.username + payload.password).toString()
      localStorage.setItem('token', token)
      state.user.name = payload.username
      state.token = token
      state.isLoggedIn = true
      console.log(localStorage.getItem('token'))
    }
  },
  actions: {
    apiCall ({ commit }, params) {
      // console.log('loading', state)
      if (Object.prototype.hasOwnProperty.call(params, 'loading')) {
        commit('setLoading', true)
      }
      const apiURL = 'https://jsonplaceholder.typicode.com'
      const toast = false
      const id = (Object.prototype.hasOwnProperty.call(params, 'id')) ? params.id : ''
      const data = (Object.prototype.hasOwnProperty.call(params, 'data')) ? params.data : null
      const code = (Object.prototype.hasOwnProperty.call(params, 'code')) ? params.code : false
      const method = (Object.prototype.hasOwnProperty.call(params, 'method')) ? params.method : 'GET'
      const headers = (Object.prototype.hasOwnProperty.call(params, 'headers')) ? params.headers : { 'Content-Type': 'application/json' }
      const onErrorCode = (Object.prototype.hasOwnProperty.call(params, 'onErrorCode')) ? params.onErrorCode : false
      const path = (params.subPath !== null && typeof params.subPath === 'object') ? params.subPath : api[params.subPath]
      this.percent = 0
      return axios({
        method: method,
        url: (path !== null && typeof path === 'object') ? path.next : apiURL + path + id,
        data,
        headers, // authHeader(accessToken, headers)
        onUploadProgress: (progressEvent) => {
          const calculo = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
          this.percent = parseInt(calculo)
        }
      // timeout: 30000
      }).then(resp => {
        commit('setLoading', false)
        // state.showLoading = true
        // eslint-disable-next-line eqeqeq
        if (Object.hasOwnProperty.call(resp, 'status') && (resp.status == '200' || resp.status == '201')) {
          let apiResp = {}
          if (Object.hasOwnProperty.call(resp, 'data') && !code) { // resp.data
            apiResp = resp.data
            resp = (Object.hasOwnProperty.call(resp.data, 'data')) ? resp.data.data : resp.data // resp.data.data
          } else if (code) {
            apiResp = resp.data
            console.log('code true')
            resp = apiResp
          } else {
            resp = true
          }

          return resp
        }
      }).catch(function (error) {
        commit('setLoading', false)
        const message = 'Verifica si tienes conexion a internet.'
        console.log('Alerta', message)

        if (error.response) {
          if (Object.hasOwnProperty.call(error.response, 'data')) {
            console.log('response error', error.response.data)
          }
        } else if (error.request) {
          if (toast) {
            console.log(error.request)
          }
        }
        return (onErrorCode && Object.hasOwnProperty.call(error.response, 'data')) ? error.response.data : false
      })
    }
  },
  modules: {
  }
})
