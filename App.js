import React , {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from "./Screens/SplashScreen";
import AppContainer from "./Navigation/NavigationConfig";

class App extends Component {
  state = {
    loading:true,
  }
  componentDidMount = ()=>{
    this.showApp();
  }
  showApp = ()=>{
    setTimeout(()=>{
      this.setState({
        loading:false
      });
    },1500);
  }
  render() {
    // const App = <SplashScreen/>
    // if(!this.state.loading){
    //   App =  <AppContainer/>
    // }
    return (
      this.state.loading?<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
        <StatusBar backgroundColor="#023953" barStyle="light-content" />
        <SplashScreen/>
      </View>:<AppContainer/>
    )
  }
  
  }
export default App;
