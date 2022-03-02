import { ONE_LESS, ONE_MORE } from "./actionRypes";

const reducerCounter = (state = 0, action) => {
    switch (action.type) {
        case ONE_LESS:
            return state-1;
        case ONE_MORE:
            return state+1;
  // Aqui você criará os cases do switch!
  
      default:
        return state;
    }
  }
  
  export default reducerCounter;