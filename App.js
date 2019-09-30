import React from 'react'
import {Provider} from 'react-redux'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import MainPage from './src/screens/MainPage'
import ChoosePlaceScreen from './src/screens/ChoosePlaceScreen'
import ChoosenScreen from './src/screens/ChoosenScreen'
import Map from './src/screens/Map'
import store from './src/redux/store'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
const navigator = createStackNavigator({
  MainPage,
  ChoosePlaceScreen,
  ChoosenScreen,
  Map
})
const Container = createAppContainer(navigator)
export default class App extends React.Component{
  constructor(props){
    super(props)
  }
  state = {
    loading: true
  };
  
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loading: false });
  }
  render(){
    if(this.state.loading)return (<AppLoading/>)
    return (
      <Provider store={store}><Container/></Provider>
    )
  }
} 