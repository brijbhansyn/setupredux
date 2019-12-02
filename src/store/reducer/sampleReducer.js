/*
*Sample reducer
*****/
import reduxConstant from '../reduxConstant/'
const {SUCCESS_A,FAIL_A}  = reduxConstant 

const sampleReducer =  (state="",{type,payload})=> {
	switch (type) {
		case SUCCESS_A:
			return payload;
		case FAIL_A :
			return payload;
		default:
			return state;
	}

}
export default sampleReducer;