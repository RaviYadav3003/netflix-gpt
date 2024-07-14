export const checkValidateData = (name, email, password) => {
    const isName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
    const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordVaild = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

    if (!isEmailVaild) return "Email is not valid"
    if (!isPasswordVaild) return "Password is not valid"
    if (!isName) return "Name is not valid"

    return null;
}