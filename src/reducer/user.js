

export default function user(state ={user:{}, token: false, status: '', newPost:{}, friendRequest:[], pendingRequest:[], posts: [], images:[], allUsers:[],img:[] ,album:[],onlineuser:[]}, action) {
    switch(action.type) {
        case 'fetchPost' :
            return {
                ...state,
                posts: action.payload
        }
        case 'addPost' :
            console.log(action.payload);
            let newPost = JSON.parse(JSON.stringify(state.posts));            
            newPost.push(action.payload);
            console.log(newPost);
            return {
                ...state,
                posts: action.payload,
        }
        case 'delPost' : {
            console.log('action.payload', action.payload)
           state = {...state, posts:action.payload}
          break;
        }
        case "isRegister": {
            state = {...state, user:action.payload}
            break;
        }
        case 'isLogin': {
            const user = action.payload;
            let newState2 = JSON.parse(JSON.stringify(state)) 
            if (user.status) {
               

            newState2={...newState2,status:user}
            newState2={...newState2,token:user.token}
            newState2={...newState2,user:action.payload.user}
            
            
            }
            console.log(newState2);
            return newState2;
        }
        case 'getonlineuser' :{
            state= {...state, onlineuser:action.payload}
            break;
        }
        case 'newPost': {
            state= {...state, newPost:action.payload}
            break;
        }
        case 'friendRequest': {
            state= {...state, friendRequest:action.payload}
            break;
        }
        case 'sendRequest': {
            console.log('action.paylload',action.payload)
            state= {...state, friendRequest:action.payload}
            break;
        }
        case 'deleteRequest': {
            console.log('action.paylload',action.payload)
            state= {...state, friendRequest:action.payload}
            break;
        }
        case 'pendingRequest': {
            console.log('action.paylload',action.payload)
            state= {...state, pendingRequest:action.payload}
            break;
        }
        case 'confirmRequest': {
            console.log('action.paylload',action.payload)
            state= {...state, pendingRequest:action.payload}
            break;
        }
        case 'deletePendingRequest': {
            state = {...state, pendingRequest:action.payload}
            break;
        }
        case 'allUsers' : {
            console.log('allUsers', action.payload)
            state = {...state, allUsers:action.payload}
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