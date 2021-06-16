import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

import { Good } from '../../common/interface'
import data from '../../api/data'
import ListItem from '../../components/ListItem/index'

interface State {
  list?: Array<Good>
}
export default class Index extends Component<{}, State> {

  constructor(props) {
    super(props)
    this.state = {
      list: data
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let listDom = this.state.list.map((el, index) => (<View className='item' key={index}><ListItem data={el} /></View>))
    return (
      <View className='index'>
        <View className='list'>
          { listDom }
        </View>
      </View>
    )
  }
}
