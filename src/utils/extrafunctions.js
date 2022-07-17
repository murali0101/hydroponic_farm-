

export const notify = (toast, title, status, description) => {
    return toast({
        title,
        status,
        description,
        duration: 3000,
        variant: "top-accent",
        isClosable: true,
    });
};

export const deleteKeyFromObject = (obj, key) => {
    delete obj[key];
    return obj;
}



export const signupValidator = (obj, toast) => {
    const { name, mobile, email, password } = obj;
    let isEmail = email.split("").lastIndexOf("@");
    let isEmailDot = email.split("").lastIndexOf(".");
   
    if (name.length <= 3) {
        notify(toast, "Name length should be greater then 3 alphabets ", "error");
        return false;

    } else if (mobile.length !== 10) {
        notify(toast, "Please add 10 digit mobile number", "error");
        return false;

    } else if (email.length < 3) {
        notify(toast, "Please add a valid email id", "error");
        return false;

    } else if (isEmail === -1) {
        notify(toast, "Invalid email id, '@' is missing", "error");
        return false;

    } else if (isEmailDot === -1) {
        notify(toast, "Invalid email id, '.' is missing", "error");
        return false;

    } else if (isEmail === email.length - 1) {
        notify(toast, "'@' shouldn't be at the end", "error");
        return false;

    } else if (isEmailDot === email.length - 1) {
        notify(toast, "'.' shouldn't be at the end", "error");
        return false;

    } else if (password.length < 6) {
        notify(toast, "Password length should be greater then 5 characters", "error");
        return false;

    } else {
        return true;
    }
}
