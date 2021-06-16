import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './goods.scss'

import { Good } from '../../common/interface'

interface State {
  detail?: Good,
  currentIndex: number
}

export default class Goods extends Component<{}, State> { 

    constructor(props) {
      super(props)
      this.state = {
        detail: {
          id: '3243423',
          title: '优质新疆棉 时髦拼接连衣裙',
          price: 198,
          disPrice: 189,
          isFavorited: true,
          promotions: [{
            id: '23353252',
            title: '促销',
            disPrice: 189
          }],
          images: [
              '../../assets/images/good3.png',
              '../../assets/images/good1.png',
              '../../assets/images/good0.png',
              '../../assets/images/good2.png'
          ]
        }, 
        currentIndex: 0
      }
    }

    componentWillMount () {
      let id = Taro.getCurrentInstance().router.params.id
    }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    changeSwiper (e) {
      this.setState({ currentIndex: e.detail.current})
    }
  
    render () {
      let data = this.state.detail
      let isSale = data.promotions.length > 0

      return (
          <View className='goods'>
            <View className='swiper-container'>
              <Swiper circular className='image-swiper' onChange={this.changeSwiper.bind(this)}>
                { 
                  data.images.map((image, index) => (
                    <SwiperItem className='image-swiper-item' key={index}>
                      <Image className='image' src={image} mode='widthFix' />
                    </SwiperItem>
                  ))
                }
              </Swiper>
              <View className='swiper-index'>{this.state.currentIndex+1}/{data.images.length}</View>
            </View>
            <View className='goods-info row-flex-between'>
              <View className='info'>
                <View className='title'>气质挖空连衣裙</View>
                {
                  !isSale
                    ? (<View className='price'>￥{data.price.toFixed(2)}</View>)
                    : (<View className='price'><Text className='hot-price'>￥{data.disPrice.toFixed(2)}</Text> ￥{data.price.toFixed(2)}</View>)
                }
              </View>
              <View className='share'>
                <AtIcon value='share-2' size='25' color='#999'></AtIcon> <View className='text'>分享</View>
              </View>
            </View>
            <View>

            </View>
          </View>
      )
    }
  }