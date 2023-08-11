import checkResponseForErrors from './ErrorHandling'

class OAuthGoogleApi
{
    static #clientID = "521653235446-0st6ajad1aahs06dhficoq0lt84k9dp2.apps.googleusercontent.com"
    static #scope = "openid%20email"
    static #redirectURL = "http://localhost:3000/ouauthlogingoogle"

    static getLoginURL()
    {
        let googleLoginURL = "https://accounts.google.com/o/oauth2/auth?"
        googleLoginURL += "response_type=code&"
        googleLoginURL += "client_id=" + this.#clientID + "&"
        googleLoginURL += "scope=" + this.#scope + "&"
        googleLoginURL += "redirect_uri=" + this.#redirectURL + "&"
        googleLoginURL += "access_type=offline&"
        googleLoginURL += "state=100&"
        googleLoginURL += "login_hint=&"
        googleLoginURL += "nonce=0394852-3190485-2490358&"
        googleLoginURL += "hd=example.com"

        return googleLoginURL
    }

    static async getAuthEndpoint()
    {
        return fetch('https://accounts.google.com/.well-known/openid-configuration', {
            method: 'GET'
        })
        .then(checkResponseForErrors)
        .then(response => response.json())
        .then(data => data.token_endpoint)
    }

    static async getAuthTokens(code)
    {
        return this.getAuthEndpoint()
        .then((authEndpoint) => {
            return fetch(authEndpoint, {
                method: 'POST',
                headers: {
                },
                body: JSON.stringify({
                        code: code,
                        client_id: this.#clientID,
                        client_secret: "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",
                        redirect_uri: this.#redirectURL,
                        grant_type: "authorization_code"
                })
            })
            .then(checkResponseForErrors)
            .then(response => response.json())
            .then(data => {
               return {
                    accessToken: data.id_token,
                    refreshToken: data.refresh_token
                } 
            })
        })

    }

    static async updateAccessToken(refresh_token)
    {
        return this.getAuthEndpoint()
        .then(authEndpoint => {
            return fetch(authEndpoint, {
                method: 'POST',
                headers: {
                },
                body: JSON.stringify({
                        client_id: this.#clientID,
                        client_secret: "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",
                        grant_type: "refresh_token",
                        refresh_token: refresh_token
                })
            })
        })
        .then(checkResponseForErrors)
        .then(response => response.json())
        .then(data => data.id_token)
    }
}

export default OAuthGoogleApi;