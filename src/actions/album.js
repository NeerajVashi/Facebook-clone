
export function setAlbums(images){
    return{
        type:'setAlbum',
        images
    }
}
export function fetchAlbum(id){
    return dispatch =>{
        fetch(`http://localhost:8007/album/${id}`)
                    .then(res => res.json())
                    .then(json => {
                    dispatch(setAlbums(json))                   
        })
    };
}

export function saveAlbum(data){
    return dispatch =>{
        fetch(`http://localhost:8007/album/`, {
            method: 'POST',
            body: data
        })
        .then((response) => response.json())
        .then((data)=>{    
            dispatch(setAlbums(data))
        })
    };
}