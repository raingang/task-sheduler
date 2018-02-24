import React, {Component} from 'react' 
import {connect} from 'react-redux'
import App from '../components/App'

class AppContainer extends Component{
	render(){
		return <App creator = {this.props.creator}/>
	}
}


const mapStateToProps = (state) => ({
	creator: state.creator
});


export default connect(mapStateToProps)(AppContainer)