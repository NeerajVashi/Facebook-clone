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
        fetch('http://localhost:8005/image/post',{
            method:'POST',
            body:data
        })
        .then(res=>res.json())
        .then( (response) => {
            obj1.img = response[0].path;
            dispatch({
                type: 'addPost',
                payload: obj1
            })
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