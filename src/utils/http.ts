import Taro from "@tarojs/taro";
import config from "./config"

const { baseUrl, token } = config

// api请求封装
const request = function (url: string, params: object, method: any, showToast: boolean) {

  if (showToast) {
    Taro.showLoading({
      title: '加载中',
    })
  }

  return new Promise<{}>((resolve, reject) => {
    Taro.request({
      url: baseUrl + url,
      data: params,
      method: method,
      header: {
        'content-type': 'application/json',
        'Authorization': token ? token : '',
      }
    }).then((res) => {
      Taro.hideLoading()
      switch (res.data.statusCode) {
        case 200:
          return resolve(res.data)

        case 10014:
          // token校验失败
          Taro.navigateTo({
            url: '/pages/login/index'
          })
          Taro.clearStorageSync()
          return reject(res.data)

        case 10002:
          // 缺少商户信息
          Taro.navigateTo({
            url: '/pages/login/index'
          })
          return reject(res.data)

        default:
          setTimeout(() => {
            Taro.showToast({
              title: res.data.comments,
              icon: 'none',
            })
          }, 500);

      }
    }).catch(err => {
      Taro.showToast({
        title: '数据请求失败',
        icon: 'none'
      })
      return reject(err)
    })
  })
}

export default request