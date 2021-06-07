import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    const page = Taro.getCurrentPages()[0]
    if (typeof page.getTabBar === 'function' && page.getTabBar()) {
      console.log(page)
      page.getTabBar().setData({
        selected: 0
      })
    }
  }

  componentDidHide() { }

  render() {
    return (
      <view>首页</view>
      // <View className='index'>
      //   <AtButton>按钮文案</AtButton>
      //   <AtButton type='primary'>按钮文案</AtButton>
      //   <AtButton type='secondary'>按钮文案</AtButton>
      //   <AtButton loading type='primary'>按钮文案</AtButton>
      // </View>
    )
  }
}
