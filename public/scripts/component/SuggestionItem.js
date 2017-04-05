import React,{Component} from 'react';
import {render} from 'react-dom';

// css
import CommonCss from '../../css/common/common.scss';

class SuggestionItem extends Component{

    render(){
        return( 
            <div className="suggestion_item">
               {this.props.itemtext}  
            </div>
        )   
    }
}
export default  SuggestionItem