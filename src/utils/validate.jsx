export const checkValidData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    if (!isEmailValid) {
        return { valid: false, message: "Email is not valid" };
    }

    if (!isPasswordValid) {
        return { valid: false, message: "Password is not valid" };
    }

    return null;
}