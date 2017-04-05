import React,{Component} from 'react';
import {render} from 'react-dom';

//import components
import SuggestionItem from './SuggestionItem.js';

// css
import CommonCss from '../../css/common/common.scss';

class SuggestionList extends Component{
  
constructor(props,context){
		super(props,context)
		this.state={
        iSelectionIndex:-1
		}
	}

    render()
    {  
       let disp=this.props.show=="true"?{display:'block'}:{display:'none'};

     return( 
      <div className="left_align clear_float suggestion_list" style={disp}>
           {
              this.props.data.map((item,index) => 
                <SuggestionItem key={index}  itemtext={item[0]}/> 
              )
           }
   
      </div>
        )   
    }
    
    


}
export default  SuggestionList