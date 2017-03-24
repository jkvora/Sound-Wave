import React,{Component} from 'react';
import {render} from 'react-dom';

//import components
import SuggestionItem from './SuggestionItem.js';

class SuggestionList extends Component{
    
    
    render()
    {  
     return( 
      <div>
        {
          Object.keys(this.props.data).map((k) => {
            const text = this.props.data[k][0];
            return (
                <SuggestionItem itemtext={text}/>
            )
          })
        }
   
      </div>
        )   
    }
    
    


}
export default  SuggestionList