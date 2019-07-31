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
export function addPost(obj) {
    console.log(obj);
    return dispatch => {
    fetch(`http://localhost:4000/postdata`,{
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function (res) {
        return res.json()
    })
    .then((response) => {
        console.log(response);
        obj.postId = response
        dispatch({
            type: 'addPost',
            payload: obj
        })
    
    });
    }
}
export function delPost(id) {
    console.log(id);
    return dispatch => {
        fetch(`http://localhost:4000/comments/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/text',
            }
        })
        .then(res => res.json())
        .then(
            dispatch({
                type: 'delPost',
                payload: id
            })
        )
    }
}