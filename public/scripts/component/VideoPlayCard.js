import React,{Component} from 'react';
import {render} from 'react-dom';

// css
import CommonCss from '../../css/common/common.scss'


class VideoPlayCard extends Component{
    
    constructor(props,context){
        super(props,context)
    }
    
    
    
    render(){

        let floatLeft={float:'left'};
        let clearLeft={clear:'left'};

        return(
            <div className="cardbox" style={clearLeft}>
                <div style={floatLeft}>
                     <img src={this.props.details.thumbnails.default.url} className="card_thumbnail"></img>
                </div>

                <div style={floatLeft} className="card_details">
                    <div className="card_title font_cursive">{this.props.details.title}</div>
                    <div className="card_description font_cursive">{this.props.details.description}</div>
                </div>
            </div>  
        )
    }
    
}
export default VideoPlayCard