export default function checkResponseForErrors(response)
{
    if (!response.ok) {
        throw Error({status: response.status});
    }
    return response;
}