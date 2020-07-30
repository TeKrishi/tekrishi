import React,{Component} from 'react';
import DB from './db.json'
import Toolbar from'./components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/home';
import Features from './components/features';
import AboutUs from './components/about_us';
class App extends Component {
  
  state={
    sideDrawerOpen: false
  }
  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }
  backdropClickHandler=()=>{
    this.setState({
      sideDrawerOpen: false
    })
  }
  
  render(){
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop=<BackDrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <BrowserRouter>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <div style={{marginTop: '64px'}}>
          <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/features" component={Features}/>
          <Route path="/about" render={(props)=><AboutUs {...props} profile_data={DB}/>}/>
          {/* <Route path="/contact" component={Contact}/> */}
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
