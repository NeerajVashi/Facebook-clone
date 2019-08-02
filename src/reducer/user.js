export default function user(state ={user:{}, token: false, status: '', newPost:{}, friendRequest:[], pendingRequest:[], posts: []}, action) {
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
        case 'delPost' :
            let postState = JSON.parse(JSON.stringify(state.posts));
            postState = postState.filter(posts => posts.postId !== action.payload)
            return {
                ...state,
                posts: postState
        }
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
        default : {
            
        }
    }
    return state;
}