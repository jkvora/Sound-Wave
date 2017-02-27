import React,{Component} from 'react';
import {render} from 'react-dom';

import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class SearchInput extends Component{

    constructor(){
        super()
        this.state={
            searchtext:""
        }
    }


    handleButtonClick(){    
        this.props.results(this.state.searchtext);
    }

   handleTextChange(event){
       this.setState({
           searchtext: event.target.value
       })
   }

    render(){
        return( 
               <div>
                    <Input type="text" onChange={this.handleTextChange.bind(this)} />
                    <Button  className="primary_theme" onClick={this.handleButtonClick.bind(this)}>Connect</Button>
               </div>
        )   
    }
}
export default  SearchInput