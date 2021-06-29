import axios from 'axios'

const api = axios.create({
    baseURL: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210628T224233Z&X-Amz-Expires=86400&X-Amz-Signature=1c78e3c8a1aa5ee32e9e5dc2c0dd856852e91f0e8f0e63f92859a7251943f38f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22"
})

const api2 = axios.create({
    baseURL:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210629T061733Z&X-Amz-Expires=86400&X-Amz-Signature=02ae65204da9a0b79c31758a16550b535e9060996d0b1c678bd58c923c57ff33&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22"
})

export {api,api2};