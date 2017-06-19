import React,{Component} from 'react';
import {render} from 'react-dom';


import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

// css
import CommonCss from '../../css/common/common.scss';

class SearchInput extends Component{
	
	constructor(){
		super()
		this.state={
			searchtext:""
		}
	}
	
	
	handleDownloadVideo(){    
		//make request and download video  here
		if(this.state.searchtext!="") {	
			window.location.href="/video?url="+this.state.searchtext;
		}
	}
	
	

	handleKeyDown(event){
		
		switch(event.which)
		{
			//Enter
			case 13:
			{
				this.handleDownloadVideo();
				return;
			}
		}
		
	
	}
	
	handleSearchTextChange(event){
			this.setState({
			searchtext: event.target.value
		});
	}
	
	render(){
	
		let alignSearchButton = {margin: '10px',width:'120px',float:'left'};
		let dimensions = {position:'relative',width:'100%',height:'50px'};
		

		return( 
		<div style={dimensions}>
			<Input type="text" className="left_align text_search" onChange={this.handleSearchTextChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)} ref={ (inputdiv)=>{this.searchinputdiv=inputdiv;} } />
			<Button style={alignSearchButton}  className="primary_theme font_cursive" onClick={this.handleDownloadVideo.bind(this)}>Search</Button>
			
		</div>
		)   
	}
}
export default  SearchInput