import React, { Component } from 'react';
import { connect } from 'react-redux'
import sampleAction from '../store/actions/sampleAction'

class Test extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		cancelablePromise:'',
    		data :''
    	}
    }

	/****
	 * Method for handle events
	 */
	handleAction = (e="") => {
		this.setState({cancelablePromise:this.props.sampleAction({data:"test"})})
	}
	UNSAFE_componentWillMount() {
	    this.handleAction()
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if(nextProps.hasOwnProperty("responseState")){
	 		this.setState({data:nextProps.responseState})   
		} 
	}
	
    render() {
    	console.log(this.state.data)
        return (<div>

        	<pre>
			 {
			  JSON.stringify(this.state.data)
			 }
			</pre>
			{/*<button onClick = {e => this.handleAction(e) } >Call </button>*/}
			<button onClick = { e => this.state.cancelablePromise()}>Cancel </button>
		</div>);
    }
}
const  mapStateToProps = state => ({
	responseState:state.sampleReducer
})

export default connect(mapStateToProps,{sampleAction})(Test);
