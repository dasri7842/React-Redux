const initState = {
   islogged : false
}
const LoggerReducer = (state = initState, action) => {
   switch(action.type) {
      case 'LOG_IN' : 
         return {
            ...state,
            islogged : !state.islogged
         }
      case 'LOG_OUT' : 
         return {
            ...state,
            islogged : !state.islogged
         }
      default : return state
   }
}
export default LoggerReducer;