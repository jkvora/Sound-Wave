import React,{Component} from 'react';
import {render} from 'react-dom';

// components
import SearchInput from './SearchInput.js';
import Header from './Header.js';

// css
import CommonCss from '../../css/common/common.scss';


//Main App Component
class App extends Component{

  constructor(){
    super()
  }

  //Load  youtube apis
  //TODO: load script here
  loadYoutubeApiScript(){
    
  }


  componentDidMount() {
    this.loadYoutubeApiScript();
  }
  

  // load youtube api
  //TODO: move index to APp
  googleApiClientReady(){
     
  }

    //Set api key
    //TODO: move from index to app
    setApiKey() {
    
    }
    
    render(){
        return(
            <div>
                 <Header/>
                 <SearchInput/>
          </div>

        )   
    }
}

export default App