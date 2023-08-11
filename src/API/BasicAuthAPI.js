import checkResponseForErrors from './ErrorHandling'

class BasicAuthApi
{
    static async postRegistrationData(login, password)
    {
        return fetch('http://localhost:8080/registration', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    username: login,
                    password: password,
                    confirmPassword: password,
                    email: "1231313"
            })
        })
       .then(checkResponseForErrors)
       .then(response => response.json())
    }

    static async postAuthData(login, password)
    {
        return fetch('http://localhost:8080/auth', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    username: login,
                    password: password,
            })
        })
       .then(checkResponseForErrors)
       .then(response => response.json())
    }
}

export default BasicAuthApi;