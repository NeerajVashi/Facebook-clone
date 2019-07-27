export default function user(state ={user:{}, token:{}, status: '', newPost:{}, }, action) {
    switch(action.type) {
        case "isRegister": {
            state = {...state, user:action.payload}
            break;
        }
        case 'isLogin': {
            const user = action.payload;
            state = {...state , status:user}
            if (user.status) {
            state = {...state , token:user.token}
            state = {...state, user:action.payload.user}
            }
            break;
        }
        case 'newPost': {
            state= {...state, newPost:action.payload}
            break;
        }
        default : {
            
        }
    }
    return state;
}