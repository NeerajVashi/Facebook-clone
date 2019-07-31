export default function user(state ={user:{}, token:{}, status: '', newPost:{}, images:[]}, action) {
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
        case 'SetImage':{
            console.log(action.images)
            state ={...state , images:action.images}
            break;
        }
        case 'introupdated':{
            console.log(action.payload)
            state={...state,user:action.payload}
            break;
        }
        case 'coverupdated':{
            console.log(state.user)
            console.log(action.payload);
            state={...state,user:action.payload}
            break;
        }
        case 'profileupdated':{
            console.log(state.user)
            console.log(action.payload);
            state={...state,user:action.payload}
            break;
        }
        default : {
            
        }
    }
    return state;
}