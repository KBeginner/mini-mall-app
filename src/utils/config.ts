import Taro from "@tarojs/taro";

let env = 'dev'
// let env = 'test'
// let env = 'prod'

const config =  {
    'dev': {
        env: 'dev',
        staticPath: 'https://tsp-dev.cpic.com.cn/driving-front',
        baseUrl: 'https://tsp-dev.cpic.com.cn/safety-driving',
        token: Taro.getStorageSync('token'),
        appid: 'wx24fae1bae2c42199',
        storage_key: 'dev_key'
    },

    'test': {
        env: 'dev',
        staticPath: 'https://tsp-dev.cpic.com.cn/driving-front',
        baseUrl: 'https://tsp-dev.cpic.com.cn/safety-driving',
        token: Taro.getStorageSync('token'),
        appid: 'wx24fae1bae2c42199',
        storage_key: 'dev_key'
    },

    'prod': {
        env: 'prod',
        staticPath: 'https://tsps.cpic.com.cn/driving-front',
        baseUrl: "https://tsps.cpic.com.cn/safety-driving",
        token: Taro.getStorageSync('token'),
        appid: 'wx24fae1bae2c42199',
        storage_key: 'prod_key',
    }
}[env]

export default {
    ...config
}