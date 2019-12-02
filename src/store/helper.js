/****
 *	Helper function for creating Cancelable Promise 
 * @param{promise}
 * @return{object}
 */
 const CancelablePromise  = (promise) =>{
 	let  isCancelled = false;
 	const prom = new Promise((resolve,reject)=>{
 		promise
 		.then(data  => {
 			if(isCancelled) {
 				return reject('Promise is cancelled ');
 			} else {
 				return resolve(data);
 			}
 		})
 		.catch(err => {
 			if(isCancelled) {
 				return reject('Promise is cancelled');
 			} else {
 				reject(err);
 			}
 		})
 	})
 	return {
 		promise : prom,
 		cancel:function () {
 			isCancelled = true
 		}
 	}
 }
export default CancelablePromise;