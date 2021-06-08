import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

import { Good } from '../../common/interface'
import ListItem from '../../components/ListItem/index'

interface State {
  list?: Array<Good>
}
export default class Index extends Component<{}, State> {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: '3242423',
          title: '',
          price: 198,
          origPrice: 249,
          isFovorited: true,
          isSale: false,
          images: [
            require('../../assets/images/good0.png')
          ]
        },
        {
          id: '3325423',
          title: '',
          price: 198,
          origPrice: 249,
          isFovorited: false,
          isSale: false,
          images: [
            require('../../assets/images/good2.png')
          ]
        },
      ]
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let listDom = this.state.list.map(el => (<View className="item"><ListItem data={el} /></View>))
    return (
      <View className='index'>
        <View className='list'>
          { listDom }
        </View>
      </View>
    )
  }
}
