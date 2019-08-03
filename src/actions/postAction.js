export function fetchPosts() {
    return dispatch => {
    fetch('http://localhost:4000/postdata')
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
                dispatch({
                    type: 'addPost',
                    payload: response
                })
            });
        })
    });
    }
}
export function delPost(id) {
    console.log("id", id);
    return dispatch => {
        fetch(`http://localhost:4000/comments/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/text',
            }
        })
        .then(res => res.json())
         .then((data) => {
             console.log('data', data)
                dispatch({
                    type: 'delPost',
                    payload: data
                })
            })
    }
}

// export function comments(id) {
//     console.log("id", id);
//     return dispatch => {
//         fetch(`http://localhost:4000/comments/${id}`, {
//             method: 'DELETE',
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
