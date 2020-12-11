export const increment = (payload) => {
   return {
      type : 'INCREMENT',
      payload
   }
}
export const decremnt = (payload) => {
   return {
      type : 'DECREMENT',
      payload
   }
}