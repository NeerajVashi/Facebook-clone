export default function user(state ={user:{}, token:{}}, action) {
    switch(action.type) {
        case "isRegister": {
            state = {...state, user:action.payload}
            break;
        }
        case 'isLogin': {
            const user = action.payload;
            state = {...state , token:user}
            break;
        }
        default : {
            
        }
    }
    return state;
}