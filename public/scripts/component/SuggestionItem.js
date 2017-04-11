import React,{Component} from 'react';
import {render} from 'react-dom';

// css
import CommonCss from '../../css/common/common.scss';

class SuggestionItem extends Component{

    componentWillReceiveProps(nextProps){
        if(nextProps.focus)
        {
            this.suggestiondiv.focus();
        }
    }

    render(){
        return( 
            <div className="suggestion_item" ref={(sdiv) => { 
                
                 this.suggestiondiv=sdiv;
                  }} >
               {this.props.itemtext}  
            </div>
        )   
    }
}
export default  SuggestionItem