export default function user(state ={user:{}, token:{}, status: '', newPost:{}, images:[],album:[]}, action) {
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
            state ={...state , images:action.images}
            break;
        }

        case 'setAlbum':{
            state ={...state , album:action.images}
            break;
        }
        case 'introupdated':{
            state={...state,user:action.payload}
            break;
        }
        case 'coverupdated':{
            state={...state,user:action.payload}
            break;
        }
        case 'profileupdated':{
            state={...state,user:action.payload}
            break;
        }
        default : {
            
        }
    }
    return state;
}