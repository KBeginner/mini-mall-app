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
  goods?: Array<string>,
  isFavorited: boolean
}

export default class Index extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      isFavorited: false,
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
    this.setState({
      isFavorited: this.props.data.isFavorited
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toogleFavorites() {
    this.setState({
      isFavorited: !this.state.isFavorited
    }, ()=> {
      // 执行收藏api
    })
  }

  goDetail(e) {
    console.log(e)
    e.stopPropagation();
    console.log('click')
  }

  render() {
    let data = this.props.data
    return (
      <View className='list-item' onClick={this.goDetail.bind(data.id)}>
        <Image className='main-image' lazyLoad={true} src={data.images[0]} mode="aspectFit" />
        <View className='favorites' onClick={this.toogleFavorites.bind(this)}>
          <AtIcon size='18' 
            value={this.state.isFavorited ? 'heart-2' : 'heart'} 
            color={this.state.isFavorited ? '#cccccc' : '#000000'}
          ></AtIcon>
        </View>

      </View>
    )
  }
}
