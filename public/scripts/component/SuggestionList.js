import React,{Component} from 'react';
import {render} from 'react-dom';

//import components
import SuggestionItem from './SuggestionItem.js';

// css
import CommonCss from '../../css/common/common.scss';

class SuggestionList extends Component{
    
    
    render()
    {  
     return( 
      <div className="left_align clear_float suggestion_list">
           {
              this.props.data.map((item) => 
                <SuggestionItem itemtext={item[0]}/> 
              )
           }
   
      </div>
        )   
    }
    
    


}
export default  SuggestionList