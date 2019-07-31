
export function setImages(images){
    return{
        type:'SetImage',
        images
    }
}
export function fetchImages(id){
    return dispatch =>{
        fetch(`http://localhost:8000/image/${id}`)
                    .then(res => res.json())
                    .then(json => {
                    dispatch(setImages(json))                   
        })
    };
}

export function saveImage(data){
    return dispatch =>{
        fetch(`http://localhost:8000/image/`, {
            method: 'POST',
            body: data
        })
        .then((response) => response.json())
        .then((data)=>{
        console.log(data);    
        })
    };
}