import React,{Component} from 'react';
import {render} from 'react-dom';

//MUI components
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

class Header extends Component{

    render(){
       let alignRight = {float: 'right',margin:'10px'};

        return( 
            <Appbar  className="primary_theme">
                     <Button  className="primary_theme" style={alignRight}>Save</Button>
                     <Button  className="primary_theme" style={alignRight}>Home</Button>          
            </Appbar>
        )   
    }
}
export default  Header