export default function user(state ={user:{}, token:{}, status: '', newPost:{}, images:[],intro:{}}, action) {
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
        case 'introupdated':{
            state={...state,user:action.payload}
            break;
        }
        case 'coverupdated':{
            state.user.map(item=>{
                if(item.id===action.payload.id){
                    return {
                        ...item,
                        ...action.payload
                      }
                }
                return item;
            })
            break;
        }
        case 'profileupdated':{
            state.user.map(item=>{
                if(item.id===action.payload.id){
                    return {
                        ...item,
                        ...action.payload
                      }
                }
                return item;
            })
            break;
        }
        default : {
            
        }
    }
    return state;
}