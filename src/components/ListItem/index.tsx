import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon, AtBadge } from 'taro-ui'
import './index.scss'

import { Good } from '../../common/interface'

interface Props {
  data: Good
}

interface State {
  isFavorited: boolean,
  cartUrl: string
}

export default class ListItem extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      isFavorited: false,
      cartUrl: require('../../assets/goods/cart.png')
    }
  }

  componentDidMount() {
    this.setState({
      isFavorited: this.props.data.isFavorited
    })
  }

  toogleFavorites(id, e) {
    e.stopPropagation();
    this.setState({
      isFavorited: !this.state.isFavorited
    }, () => {
      // 执行收藏api
      console.log(id);
    })
  }

  addCart(id, e) {
    e.stopPropagation();
    Taro.showToast({
      title: '加入购物袋'
    })
  }

  goDetail(id) {
    console.log('goDetail', id);
    Taro.navigateTo({
      url: '/pages/goods/goods?id=' + id
    })
  }

  render() {
    let data = this.props.data
    let isSale = data.promotions.length > 0
    return (
      <View className='list-item' onClick={this.goDetail.bind(this, data.id)}>
        <Image className='main-image' lazyLoad src={data.images[0]} mode='aspectFit' />
        <View className='favorites' onClick={this.toogleFavorites.bind(this, data.id)}>
          <AtIcon size='18'
            value={this.state.isFavorited ? 'heart-2' : 'heart'}
            color={this.state.isFavorited ? '#cccccc' : '#000000'}
          ></AtIcon>
        </View>
        <View className='info-wrap'>
          <View className='good-info'>
            {isSale && <View className='sale'>促销</View>}
            <View className='title'>{data.title}</View>
            {
              !isSale
                ? (<View className='price'>￥{data.price.toFixed(2)}</View>)
                : (<View className='price'><Text className='hot-price'>￥{data.disPrice.toFixed(2)}</Text> ￥{data.price.toFixed(2)}</View>)
            }
          </View>
          <AtBadge className='cart' value={5}>
            <Image
              mode='widthFix'
              lazyLoad
              src={this.state.cartUrl}
              onClick={this.addCart.bind(this, data.id)}
            />
          </AtBadge>
        </View>
      </View>
    )
  }
}
