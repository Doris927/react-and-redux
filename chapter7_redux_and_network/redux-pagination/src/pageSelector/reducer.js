import {SETPAGE} from "./actionType";

const info = {
  current: 1,
  amount: 52,
  pageSize: 5
};

export default (state = info, action) =>{
    switch(action.type){
        case SETPAGE:{
            return {...state, current:action.page};
        };
        default:{
            return state;
        }
    }
}