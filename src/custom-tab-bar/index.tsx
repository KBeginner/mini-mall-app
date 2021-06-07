import { Component } from 'react'
import { AtTabBar, AtIcon } from 'taro-ui'
import './index.scss'

import { switchTab } from '../utils/router'

interface TabObject {
  title: string,
  iconType: string,
  url: string
}

interface ComState {
  selected?: number,
  tabList: Array<TabObject>
}

export default class Index extends Component<{}, ComState>{
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      tabList: [
        { title: '首页', iconType: 'home', url: '/pages/index/index' },
        { title: '分类', iconType: 'bullet-list', url: '/pages/category/category' },
        { title: '购物袋', iconType: 'shopping-bag-2', url: '/pages/cart/cart' },
        { title: '我的', iconType: 'user', url: '/pages/user/user' }
      ]
    }
  }
  handleClick(value) {
    console.log('value', value)
    console.log('selected ', this.state.selected)
    this.setState({
      selected: value
    })
    
    switchTab({ url: this.state.tabList[value].url });
  }

  render() {
    return (
      <AtTabBar
        fixed
        fontSize={12}
        backgroundColor='#000000'
        selectedColor="#ffffff"
        color='#8a8a8a'
        tabList={this.state.tabList}
        current={this.state.selected}
        onClick={this.handleClick.bind(this)}
      />
    )
  }
}