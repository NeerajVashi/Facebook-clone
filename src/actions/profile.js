
export function editIntro(data)
{
    console.log(data)
    return dispatch =>{
        return fetch(`http://localhost:8000/auth/signup/`, {
            method: 'PUT',
            body: JSON.stringify(data), 
             headers:{
            'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(res=>{
                dispatch({type:'introupdated', payload:res})
            }
        )
    }   
}



export function updateCover(data){
    return dispatch =>{
        fetch(`http://localhost:8000/auth/signup/updatecoverpic/`, {
            method: 'PUT',
            body: data, 
            }).then(response => response.json())
            .then((data1)=>{
                dispatch({type:'coverupdated', payload:data1})
            })
    }   
}
export function updateProfile(data){
    console.log(data)
    return dispatch =>{
        fetch(`http://localhost:8000/auth/signup/updateprofilepic/`, {
            method: 'PUT',
            body: data, 
            }).then(response => response.json())
            .then((data1)=>{
                dispatch({type:'profileupdated', payload:data1})
            })
    }   
}
