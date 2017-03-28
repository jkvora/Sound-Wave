import React,{Component} from 'react';
import {render} from 'react-dom';

// css
import CommonCss from '../../css/common/common.scss'


class VideoPlayCard extends Component{
    
    constructor(props,context){
        super(props,context)
    }
    
    
    
    render(){
        return(
            <div class="cardbox">
                <div>
                     <div class="card_thumbnail"></div>
                </div>

                <div>
                    <div class="card_title">{this.props.details.title}</div>
                    <div class="card_description">{this.props.details.description}</div>
                </div>
            </div>  
        )
    }
    
}
export default VideoPlayCard