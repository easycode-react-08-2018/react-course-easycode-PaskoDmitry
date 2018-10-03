import {validate} from './validate'

export const sendRequest = (arg) => {

    console.log(arg);
    const {confirmPassword, email ,name, password} = arg.auth_data;
    let errors = validate(arg);
    console.log(errors);
    let params;
    if (Object.keys(errors).length) {
        return {
            type: 'login',
            errors: errors
        }
    } else {

        if (arg.type === 'signup') {
            params = {
                email: email,
                user: name,
                password: password
            }
        } else {
            params = {
                user: name,
                password: password
            }
        }
    }

    fetch('https://flatearth-api.herokuapp.com/api/v1/auth/' + arg.type, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            params
        )
    }).then(res => res.json())
        .then(res => {
            console.log('after sending request')
            console.log(res)
            if (res.status === 'error') {
                return {
                    type: 'login',
                    errors: {
                    requestErrors: res.message
                    }
                }

            } else if (arg.type === 'signup') {
                return {
                    type: 'signup',
                    errors: {}
                }
            } else {
                return {
                    type: 'login',
                    errors: {},
                    token: res.message.token,
                    ifLogIn: true
                }
                // this.sendSecretRequest();
            }
        });
    return {
        type: 'login',
        payload: {
            arg
        }
    }
}