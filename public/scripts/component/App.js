import React,{Component} from 'react';
import {render} from 'react-dom';



// components
import SearchInput from './SearchInput.js';
import Header from './Header.js';



// css
import CommonCss from '../../css/common/common.scss';


//Main App Component
class App extends Component{

  constructor(props,context){
    super(props,context)
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