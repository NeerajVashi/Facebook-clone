//------------------------------------------------------------------
// export function friends(userId) {
//     return function (dispatch) {
//         const loginRequest = `http://localhost:9000/friends`;
//         fetch(loginRequest, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-type': 'application/json',
//             },
//             method: 'put',
//             body: JSON.stringify(userId),
//         })
//             .then(response => response.json())
//             .then((friends) => {
//                 dispatch({ type: 'userFriends', payload: friends })
//             })
//     }

// }
export function friends(userId) {
    return function (dispatch) {
        console.log('inside getFunction', userId);
        const Request = `http://localhost:9000/friends/${userId}`;
        fetch(Request)
            .then(response => response.json())
            .then((friends) => {
                console.log('inside fetch', friends);
                dispatch({ type: 'userFriends', payload: friends })
            })
    }
}
//-------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
export function pendingRequest(ReceiverId) {
    return function (dispatch) {
        const Request = `http://localhost:9000/receiveFriendRequest/${ReceiverId}`;
        fetch(Request)
            .then(response => response.json())
            .then((user) => {
                dispatch({ type: 'pendingRequest', payload: user })
            })
    }
}

// export function pendingRequest(ReceiverId) {
//     return function (dispatch) {
//         console.log('inside getFunction', ReceiverId);
//         const Request = `http://localhost:8003/request/display/${ReceiverId}`;
//         fetch(Request)
//             .then(response => response.json())
//             .then((user) => {
//                 console.log('inside fetch', user);
//                 dispatch({ type: 'pendingRequest', payload: user })
//             })
//     }
// }
//-------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// export function sendRequest(friendId, sender) {
//     return function (dispatch) {
//         console.log('inside getFunction', friendId, sender);
// const loginRequest = `http://localhost:8002/friends/update/${friendId}`;
// fetch(loginRequest, {
//     headers: {
//         Accept: 'application/json',
//         'Content-type': 'application/json',
//     },
//     method: 'put',
//     body: JSON.stringify(sender),
// })
//     .then(response => response.json())
//     .then((user) => {
//         dispatch({ type: 'sendRequest', payload: user })
//     })
//     }
// }
export function sendRequest(request) {
    return function (dispatch) {
        console.log('inside sendRequest', request);
        const loginRequest = `http://localhost:9000/sendFriendRequest`;
        fetch(loginRequest, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(request),
        })
            .then(response => response.json())
            .then((user) => {
                dispatch({ type: 'sendRequest', payload: user })
            })
    }
}
// ------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
// export function confirmRequest(friendId, sender) {
//     return function (dispatch) {
//         console.log('inside getFunction', friendId, sender);
//         const loginRequest = `http://localhost:8003/request/update/${friendId}`;
//         fetch(loginRequest, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-type': 'application/json',
//             },
//             method: 'put',
//             body: JSON.stringify(sender),
//         })
//             .then(response => response.json())
//             .then((user) => {
//                 dispatch({ type: 'confirmRequest', payload: user })
//             })

//     }
// }
export function confirmRequest(userId) {
    console.log('in confirm action', userId);
    return function (dispatch) {
        const loginRequest = `http://localhost:9000/confirmFriendRequest`;
        fetch(loginRequest, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            method: 'put',
            body: JSON.stringify(userId),
        })
            .then(response => response.json())
            .then((friends) => {
                dispatch({ type: 'confirmRequest', payload: friends})
            })
    }
}
//----------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
export function deleteRequest(friends) {
    return function (dispatch) {
        const loginRequest = `http://localhost:9000/discard`;
        fetch(loginRequest, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            method: 'delete',
            body: JSON.stringify(friends),
        })
            .then(response => response.json())
            .then((friends) => {
                dispatch({ type: 'deleteRequest', payload: friends })
            })

    }
}
// export function deleteRequest(friendId, userId) {
//     return function (dispatch) {
//         console.log('inside getFunction', friendId, userId);
//         const user = {
//             userId: userId
//         }
//         const loginRequest = `http://localhost:8002/friends/delete/${friendId}`;
//         fetch(loginRequest, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-type': 'application/json',
//             },
//             method: 'delete',
//             body: JSON.stringify(user),
//         })
//             .then(response => response.json())
//             .then((user) => {
//                 dispatch({ type: 'deleteRequest', payload: user })
//             })

//     }
// }
//--------------------------------------------------------------------------------------------------

export function deletePendingRequest(friendId, sender) {
    return function (dispatch) {
        console.log('inside getFunction', friendId, sender);
        const loginRequest = `http://localhost:8003/request/delete/${friendId}`;
        fetch(loginRequest, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            method: 'put',
            body: JSON.stringify(sender),
        })
            .then(response => response.json())
            .then((user) => {
                dispatch({ type: 'deletePendingRequest', payload: user })
            })

    }
}
// ------------------------------------------------------------------------
export function getFriends(userId) {
    return function (dispatch) {
        console.log('inside getFunction', userId);
        const Request = `http://localhost:9000/${userId}`;
        fetch(Request)
            .then(response => response.json())
            .then((user) => {
                dispatch({ type: 'friendRequest', payload: user });
            })
    }
}


// export  function getFriends(userId) {
//     return function(dispatch) {
//         console.log('inside getFunction', userId);
//         const Request = `http://localhost:8002/friends/${userId}`;
//         fetch(Request)
//         .then(response => response.json())
//             .then((user) => {
//                 console.log('inside fetch', user);
//             })
//         const loginRequest = `http://localhost:8002/friends/display/${userId}`;
//         fetch(loginRequest)
//         .then(response => response.json())
//             .then((user) => {
//                 console.log('inside fetch', user);
//                 dispatch({type:'friendRequest', payload:user})
//             })
//  }
// }
//-----------------------------------------------------------------------------------------