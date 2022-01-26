export function ValidationEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
    return email.toString().trim().length > 0 && emailRegex.test(email);
}

export function ValidationPassword(password) {
    const passwodrRegex = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return password.toString().trim().length > 0 && passwodrRegex.test(password);
};
