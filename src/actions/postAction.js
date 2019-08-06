export function postNotification(id) {
    return dispatch => {
    fetch(`http://localhost:4000/postNotification/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then((postdata) => {
            dispatch({
                type: 'postNotification',
                payload: postdata
            })
        })
    }
}




export function fetchPosts(id) {
    return dispatch => {
    fetch(`http://localhost:4000/allPosts/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then((postdata) => {
            dispatch({
                type: 'fetchPost',
                payload: postdata
            })
        })
    }
}

export function userPosts(id) {
    return dispatch => {
    fetch(`http://localhost:4000/userPost/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then((userPosts) => {
            dispatch({
                type: 'userPosts',
                payload: userPosts
            })
        })
    }
}


export function addData(obj1) {
    console.log('addData', obj1)
    return dispatch => {
        fetch(`http://localhost:4000/posttext`,{
          method: 'POST',
          body: JSON.stringify(obj1),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => response.json())
        .then((user) => {
            dispatch({type:'addPost', payload:user})
        })
    }
}
export function addPost(obj1, data) {
    return dispatch => {
    fetch(`http://localhost:4000/postdata`,{
      method: 'POST',
      body: JSON.stringify(obj1),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function (res) {
        return res.json()
    })
    .then((response) => {
        obj1.postId = response
        data.append('postId',response)
        fetch('http://localhost:8007/image/post',{
            method:'POST',
            body:data
        })
        .then(res=>res.json())
        .then( (response) => {
            obj1.img = response[0].path;
            fetch('http://localhost:4000/addimage', {
                method: 'PUT',
                body: JSON.stringify(obj1),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then((response) => {
                console.log('response', response);
                dispatch({
                    type: 'addPost',
                    payload: response
                })
            });
        })
    });
    }
}

export function delPost(postId, userId) {
    console.log("id", postId,'userId', userId);
    const id = {
        userId:userId
    }
    return dispatch => {
        fetch(`http://localhost:4000/deletePost/${postId}`, {          
        method: 'delete',
        body: JSON.stringify(id),
        headers: {
          'Content-Type': 'application/json',
        },},)
        .then(function (res) {
            return res.json()
        })
        .then((postdata) => {
            dispatch({
                type: 'deletePost',
                payload: postdata
            })
        })
    }
}
export function delHomePost(Id) {
    return dispatch => {
        fetch(`http://localhost:4000/deleteHomePost`, {          
        method: 'delete',
        body: JSON.stringify(Id),
        headers: {
          'Content-Type': 'application/json',
        },},)
        .then(function (res) {
            return res.json()
        })
        .then((postdata) => {
            dispatch({
                type: 'deleteHomePost',
                payload: postdata
            })
        })
    }
}
export function delPersonalPost(Id) {
    return dispatch => {
        fetch(`http://localhost:4000/deletePersonalPost`, {          
        method: 'delete',
        body: JSON.stringify(Id),
        headers: {
          'Content-Type': 'application/json',
        },},)
        .then(function (res) {
            return res.json()
        })
        .then((postdata) => {
            dispatch({
                type: 'deletePersonalPost',
                payload: postdata
            })
        })
    }
}
// export function comments(comment) {
//     return dispatch => {
//     console.log("inside comment action", comment);

//         fetch(`http://localhost:4000/addComments`, {
//             method: 'Post',
//             headers: {
//               'Content-Type': 'application/text',
//             }
//         })
//         .then(res => res.json())
//          .then((data) => {
//              console.log('data', data)
//                 dispatch({
//                     type: 'delPost',
//                     payload: data
//                 })
//             })
//     }
// }

export  function addComment(comment) {
    return function(dispatch) {
        console.log('inside comment action', comment);
        fetch(`http://localhost:4000/addComments`,{
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
            .then((comments) => {
                dispatch({type:'addComment', payload:comments})
            })
 }
}

export  function Comments(postId) {
    return function(dispatch) {
        console.log('inside comments postId', postId)
        const registerRequest = `http://localhost:4000/comment/${postId}`;
        fetch(registerRequest)
        .then(response => response.json())
            .then((comments) => {
                dispatch({type:'addComment', payload:comments})
            })
 }
}

export  function like(post) {
    return function(dispatch) {
        const registerRequest = `http://localhost:4000/like`;
        fetch(registerRequest, {
            method: 'put',
            body: JSON.stringify(post),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
            .then((like) => {
                dispatch({type:'like', payload:like})
            })
 }
}
