import React,{Component} from 'react';
import {render} from 'react-dom';

//MUI components
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

// css
import CommonCss from '../../css/common/common.scss';

class Header extends Component{

    render(){
       let alignRight = {float: 'right',margin:'10px'};
       let header_title={ fontSize:'25px',position: 'relative',top: '10px',cursor:'pointer', paddingLeft: '20px'}
        return( 
            <Appbar  className="primary_theme">
                     <span className="font_cursive" style={header_title}>SoundWave</span>
                     <Button  className="primary_theme font_cursive" style={alignRight}>Contact Me</Button>
                     <Button  className="primary_theme font_cursive" style={alignRight}>About</Button>          
            </Appbar>
        )   
    }
}
export default  Header