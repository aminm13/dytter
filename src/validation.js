const validation = (values) => {

    var dob = new Date(values.age);
    var year = dob.getFullYear();
    var now = new Date().getFullYear()
    var age = now - year
    let errors = {};
    if (!values.fName) {
        errors.fName = "First Name is required"
    }
    if (!values.lName) {
        errors.lName = "Last Name is required"
    }
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters . "
    }
    if (!values.age) {
        errors.age = "Age is required"
    } else if (age < 18) {
        errors.age = "Too Young to be a part of us"
    }
    else if (age > 70) {
        errors.age = "Too Old Maybe?"
    }
    return errors;
}

export default validation