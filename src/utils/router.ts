import Taro from '@tarojs/taro'

interface params {
    url: string, 
    complete?: () => void,
    success?: () => void,
    fail?: () => void
}
export const switchTab = ( args: params ) => {
    return Taro.switchTab({
        url: args.url,
        complete: args.complete,
        success: args.success,
        fail: args.success
    })
}