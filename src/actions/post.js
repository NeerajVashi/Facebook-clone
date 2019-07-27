export  function newPost(post) {
    return function(dispatch) {
        dispatch({type:'newPost', payload:post})
    }
}