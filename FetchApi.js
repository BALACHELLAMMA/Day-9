// using fetch method
async function fetchDataFromAPI(apiUrl){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error.message);
    }
}


fetchDataFromAPI('https://jsonplaceholder.typicode.com/todos/1');

