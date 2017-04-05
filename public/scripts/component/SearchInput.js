import React,{Component} from 'react';
import {render} from 'react-dom';

//import components
import SuggestionList from './SuggestionList.js';

import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

// css
import CommonCss from '../../css/common/common.scss';

class SearchInput extends Component{
	
	constructor(){
		super()
		this.state={
			searchtext:"",
			suggestiondata:[],
			showsuggestion:false
		}
	}
	
	
	handleButtonClick(){    
		this.props.results(this.state.searchtext);
		this.setState({showsuggestion:"false"});
	}
	
	handleKeyUp(event){
		if(event.which==13)
		{
			this.props.results(this.state.searchtext);
			this.setState({showsuggestion:"false"});
			return;
		}
		
		this.setState({
			searchtext: event.target.value,
			showsuggestion:"true"
			
		});

		this.findResults(event.target.value);
	}
	

	findResults(text){
		if(text!=""){
			$.getJSON(
			"http://suggestqueries.google.com/complete/search?callback=?",{ 
				"hl":"en", // Language
				"ds":"yt", // Restrict lookup to youtube
				"q":text, // query term,
				dataType: 'jsonp', //JSONP type
				"client":"youtube" // force youtube style response, i.e. jsonp
			}
			,this.fetchSuggestionData.bind(this),this.onErrorRequest.bind(this));
	  }
	  else{
		this.setState({
			suggestiondata: [],
			showsuggestion:"false"
			
		});
	  }

	}

	fetchSuggestionData(data){

		this.setState({
			suggestiondata: data[1]
		
		});
        return data;
	}

	onErrorRequest(data){
		this.setState({
			suggestiondata: []
		});
	}
	
	render(){
	
		let alignSearchButton = {margin: '10px',width:'120px',float:'left'};
		let dimensions = {position:'relative',width:'100%',height:'50px'};
		

		return( 
		<div style={dimensions}>
			<Input type="text" className="left_align text_search"  onKeyUp={this.handleKeyUp.bind(this)} />
			<Button style={alignSearchButton}  className="primary_theme font_cursive" onClick={this.handleButtonClick.bind(this)}>Search</Button>
			<SuggestionList data={this.state.suggestiondata} show={this.state.showsuggestion} />
		</div>
		)   
	}
}
export default  SearchInput