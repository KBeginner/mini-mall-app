import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtIcon, AtList, AtListItem } from 'taro-ui'
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
          title: '优质新疆棉 时髦拼接连衣裙优质新疆棉 时髦拼接连衣裙',
          price: 198,
          disPrice: 189,
          isFavorited: true,
          promotions: [{
            id: '23353252',
            title: '促销',
            disPrice: 189
          },{
            id: '23353554',
            title: '新人88折',
            disPrice: 189
          },{
            id: '23343552',
            title: '满99包邮',
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
                <View className='title'>{data.title}</View>
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
            <View className='promotions'>
              {
                data.promotions.map((el, index) => (
                  <View className='pro-item row-flex-start' key={index}>
                    <View className='title-icon'>活动</View>
                    <View>{el.title}</View>
                  </View>
                ))
              }
            </View>
            <View className='specific'>
                <View className='spe-item row-flex-between'>
                  <View><Text className='title'>规格</Text>请选择尺寸</View>
                  <AtIcon value='chevron-right' size='20' color='#ccc'></AtIcon>
                </View>
                <View className='spe-item row-flex-start'>
                  <View><Text className='title'>运费</Text>满199免运费</View>
                </View>
                <View className='spe-item row-flex-start'>
                  <View><Text className='title'>说明</Text>14天无理由退换</View>
                </View>
            </View>
            <View className='parameter'>
                <View className='title'>商品参数</View>
                <View className='param-item'>商品编号：<Text>WJ385u3294</Text></View>
                <View className='param-item'>商品属性：<Text>薄款垂感面料，撞色线设计</Text></View>
                <View className='param-item'>商品材质：<Text>85%锦纶，15%氨纶</Text></View>
            </View>
          </View>
      )
    }
  }