export  function Login(user) {
    return function(dispatch) {
        const loginRequest = 'http://localhost:8000/auth/login';
        fetch(loginRequest, {
            headers: {
                Accept:'application/json',
                'Content-type': 'application/json',
            },
            method:'post',
            body: JSON.stringify(user),
        })
        .then(response => response.json())
            .then((user) => {
                dispatch({type:'isLogin', payload:user})
            })
 }
}

export  function Registration(user) {
    return function(dispatch) {
        const registerRequest = 'http://localhost:8000/auth/signup';
        fetch(registerRequest,
            {
                headers: {
                    Accept:'application/json',
                    'Content-type': 'application/json',
                },
                method:'post',
                body: JSON.stringify(user),
            })
        .then(response => response.json())
            .then((user) => {
                dispatch({type:'isRegister', payload:user})
            })
 }
}