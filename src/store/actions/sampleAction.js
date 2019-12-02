/**
*
*Sample action 
*****/
import reduxConstant from '../reduxConstant/'
import CancelablePromise from '../helper'
import axios from 'axios'
const { SUCCESS_A,FAIL_A} = reduxConstant
let cancel_ = ""
const sampleAction = (data) => dispatch => {
	try {
		
		const prom = axios.get('https://randomuser.me/api/');
		const {promise,cancel }= CancelablePromise(prom)
		cancel_ = cancel
		promise
		.then(response => {
			return dispatch({
				type: SUCCESS_A,
				payload :response
			})
		})
		.catch(erro => {
			return dispatch({
				type:FAIL_A,
				payload:{erro,
				}
			})
		})
		
	} catch(e){console.log('Error',e)}
	return cancel_	
}
export default sampleAction;