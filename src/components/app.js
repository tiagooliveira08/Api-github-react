import React, {Component} from "react";
import AppContent from "./appcontent";
import Ajax from "@fdaciuk/ajax";


class App extends Component{
	
	constructor(){
		super();

		this.state = {
			userinfo: null,
			starred:[],
			repos:[]
			
			
		}

	}
	handlekey(e){
		const value = e.target.value;
		const key = e.which || e.keyCode;
		const enter = 13;
		if(key === enter){
			Ajax().get(`https://api.github.com/users/${value}`).then((result) =>{
				this.setState({
					userinfo:{
					username: result.name,
					login: result.login,
					photo: result.avatar_url,
					repos: result.public_repos,
					followers: result.followers,
					following: result.following}
				})
			})
	   }
	}
	checkrepos(type){
		return (e) =>{
			Ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
			.then((result) => {
						this.setState({
							[type]: result.map((repo) =>({
									name: repo.name,
									link: repo.html_url
								}))
						})
						console.log([type])
			}
			
		)
		}
	}
	
	render(){
		return(
			<AppContent 
			userinfo={this.state.userinfo}
			repos={this.state.repos}
			starred={this.state.starred}
			handlekey={(e) => this.handlekey(e)}
			checkrepos={this.checkrepos("repos")}
			checkstarred={this.checkrepos("starred")}
			

			/>
		)

	}
	
}

export default App;