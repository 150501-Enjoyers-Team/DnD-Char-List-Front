import checkResponseForErrors from './ErrorHandling'

class CharacterListApi
{
    static headers = {}

    static async getListOfCharacters(username)
    {
        return fetch("http://localhost:8081/api/Character/get/" + username, {
            method: "GET",
            headers: {
                "Authorization":  localStorage.getItem("access_token")
            },
        })
        .then(checkResponseForErrors)
        .then(response => response.json())
    }

    static async deleteCharacter(username, id)
    {
        return fetch("http://localhost:8081/api/Character/delete/" + username + "/" + id, {
            method: "DELETE",
            headers: {
                "Authorization":  localStorage.getItem("access_token")
            },
        })
        .then(checkResponseForErrors)
    }
}

export default CharacterListApi;