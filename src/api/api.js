import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.jsonbin.io/b/60db69819328b059d7b2c212"
})

const api2 = axios.create({
    baseURL:"https://api.jsonbin.io/b/60db69ce55b7245a20d1a010"
})

export {api,api2};