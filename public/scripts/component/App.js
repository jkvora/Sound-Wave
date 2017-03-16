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


findResults(text){
    console.log(this);
     $.getJSON(
         "http://suggestqueries.google.com/complete/search?callback=?",{ 
                  "hl":"en", // Language
                  "ds":"yt", // Restrict lookup to youtube
                  "q":text, // query term,
                   dataType: 'jsonp', //JSONP type
                  "client":"youtube" // force youtube style response, i.e. jsonp
                }
            ,this.fetchSuggestionData.bind(this));
}


fetchSuggestionData(data){
  console.log(data);
}

    render(){
        return(
            <div>
                 <Header/>
                 <SearchInput  results={this.findResults.bind(this)}/>
          </div>

        )   
    }
}

export default App