export const validate = (props) => {
    let errors = {};
    const {confirmPassword, email ,name, password} = props.auth_data;
    console.log(props, name, password)
    if (!name)
        errors.name = "Name field is empty";
    else if (/[^a-zA-Z0-9_-]/.test(name))
        errors.name = "You can use only a-z, A-Z, 0-9, - и _.";


    if (!password)
        errors.password = "Password field is empty";
    else if (password.length < 4)
        errors.password = "Password should be more than 4 simbols";

    if (props.type === 'signup') {
        if (!confirmPassword)
            errors.confirmPassword = "confirmPassword field is empty";
        else if (confirmPassword !== password)
            errors.confirmPassword = "confirmPassword isn't the same as password";

        if (!this.state.email)
            errors.email = "Email field is empty";
        else if (!((email.indexOf(".") > 0) && (email.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(email))
            errors.email = "Email is incorrect";
    }

    return errors;

}