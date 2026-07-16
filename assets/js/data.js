async function getData(){

    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwzGEAzY4ijRPvi3kucSd4kTjWRWK1vtgEiBU_gdtAZp7ce99PYREmdh9pG88iPaqva9A/exec"
    );

    const data = await response.json();

    return data;

}

