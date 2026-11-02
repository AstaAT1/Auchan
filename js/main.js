import { api } from "./api.js";
import { affiche } from "./ui.js";
import { searchProducts } from "./products.js";
import { pagination } from "./products.js";
const searchInput = document.querySelector('#search')
import { btnPagination } from "./ui.js";
let currentPage = 1
const limit = 8

api().then(function (data) {
        function renderCatalogue() {
        const searchName = searchInput.value
        const filterProducts = searchProducts(data, searchName)
        const totalPages = Math.ceil(filterProducts.length / limit)
        const pagi = pagination(filterProducts, currentPage, limit)
        affiche(pagi)
        function changePage(page) {
            currentPage = page
            renderCatalogue(searchInput, currentPage, data)
        }
        btnPagination(totalPages, currentPage,changePage )
    }
    console.log(data)
    affiche(pagination(data, currentPage, limit))
    searchInput.addEventListener('input', function () {
        currentPage = 1
        renderCatalogue()
       
       
    })
    renderCatalogue()

})

