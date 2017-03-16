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
       });
       this.props.results(event.target.value);
   }

    render(){
        let alignInput = {float:'left',width:'calc(100% - 140px)'};
        let alignSearchButton = {margin: '10px',width:'120px',float:'left'};

        return( 
               <div>
                    <Input type="text" style={alignInput} onChange={this.handleTextChange.bind(this)} />
                    <Button style={alignSearchButton}  className="primary_theme" onClick={this.handleButtonClick.bind(this)}>Search</Button>
               </div>
        )   
    }
}
export default  SearchInput