import React,{Component} from 'react';
import {render} from 'react-dom';

// components
import SearchInput from './SearchInput.js';
import Header from './Header.js';
import VideoItems from './VideoItems.js'


// css
import CommonCss from '../../css/common/common.scss';


//Main App Component
class App extends Component{

  constructor(props,context){
    super(props,context)
    this.state={
      videocards:[]
    }
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

    /*@
      Fetch video details
    @*/
    fetchvideodata(searchtext){
        let request = gapi.client.youtube.search.list({
            q: searchtext,
            part: 'snippet'
        });
        
        let _this=this;
        request.execute(function(data) {
            console.log(data);
            _this.setState({
              videocards: data.result.items
            })
        });
    }
    
    render(){
        return(
            <div>
                 <Header/>
                 <SearchInput results={this.fetchvideodata.bind(this)}/>
                 <VideoItems cards={this.state.videocards}/>
          </div>

        )   
    }
}

export default App