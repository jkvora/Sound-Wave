import React,{Component} from 'react';
import {render} from 'react-dom';

//Component
import VideoPlayCard from './VideoPlayCard.js';

// css
import CommonCss from '../../css/common/common.scss';

class VideoItems extends Component{

    constructor(props,context){
        super(props,context);
    }


    render(){
        return(
            <div>
               {
                    this.props.cards.map((item,index) => 
                        <VideoPlayCard  key={index}  details={item.snippet}/> 
                    )
                }

            </div>
        )
    }

}

export default VideoItems