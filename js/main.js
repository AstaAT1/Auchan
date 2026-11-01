import {api} from "./api.js";
import {affiche} from "./ui.js";
import {searchProducts} from "./products.js";
const searchInput = document.querySelector('#search')

api().then(function(data) {
    console.log(data)
    affiche(data)
    searchInput.addEventListener('input', function () {
        const searchName = searchInput.value
       const filterProducts = searchProducts(data, searchName)
       console.log(filterProducts);
       
       affiche(filterProducts)        
    })
})

