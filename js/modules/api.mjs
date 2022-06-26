const apiKey = "00172a7b94f3826720f0fc873ed1e470";

/**
 * 
 * @param {String} endpoint 
 * @param {*} query 
 * @returns 
 */
export async function api(endpoint, query) {
    let url = new URL(endpoint, "https://api.themoviedb.org/3/");
    query.api_key = apiKey;
    url.search = new URLSearchParams(query);
    const response = await fetch(url);
    const object = await response.json();
    return object;
}