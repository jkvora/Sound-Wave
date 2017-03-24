import React,{Component} from 'react';
import {render} from 'react-dom';


class SuggestionItem extends Component{

    render(){


        return( 
            <div>
               {this.props.itemtext}  
            </div>
        )   
    }
}
export default  SuggestionItem