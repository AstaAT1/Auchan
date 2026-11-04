export function api() {
    return fetch("../data/data.json")
        // .then(res => res.json())
        // .then(data => {console.log(data)})

    .then(function(response){
        return response.json()
    })
} 