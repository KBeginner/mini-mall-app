import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

import { Good } from '../../common/interface'

interface Props {
  data: Good
}

interface State {
  goods?: Array<string>
}

export default class Index extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      goods: [
        require('../../assets/images/good0.png'),
        require('../../assets/images/good1.png'),
        require('../../assets/images/good2.png'),
        require('../../assets/images/good3.png')
      ]
    }
  }

  componentWillMount() { }

  componentDidMount() {
    console.log(this.props.data)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toogleFavorites() {

  }

  onHandle() {

  }

  render() {
    let data = this.props.data
    return (
      <View className='list-item' onClick={this.onHandle.bind(this, data.id)}>
        <Image className='main-image' lazyLoad={true} src={data.images[0]} mode="aspectFit" />
        <View className='favorites' onClick={this.toogleFavorites.bind(this)}>
          <AtIcon value={data.isFovorited ? 'heart-2' : 'heart'} size='18' color={data.isFovorited ? '#cccccc' : '#000000'}></AtIcon>
        </View>

      </View>
    )
  }
}
