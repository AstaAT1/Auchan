import { api } from "./api.js";
import { affiche } from "./ui.js";
import { searchProducts } from "./products.js";
import { pagination } from "./products.js";
import { afficheCategory, afficherPanier } from "./ui.js";
const searchInput = document.querySelector('#search')
import { btnPagination } from "./ui.js";
import { setData, getData, saveCart, getCart } from "./storage.js";
import { filterByCategory } from './products.js'
import { addToCart, calculateTotal, removeFromCart } from "./cart.js"
import { initDrag } from "./dragDrop.js"


let currentPage = 1
const limit = 8
let currentCat = "All"
let panier = getCart()

api().then(function (data) {
    const saveProducts = getData()
    console.log("Saved products:", saveProducts)
    let products = saveProducts

    if (saveProducts === null) {
        setData(data)
        products = data
    }
    console.log("Products utilisées:", products)
    function renderCatalogue() {
        const searchName = searchInput.value
        const filterProducts = searchProducts(products, searchName)
        const categoryProducts = filterByCategory(filterProducts, currentCat)
        const totalPages = Math.ceil(categoryProducts.length / limit)
        const pagi = pagination(categoryProducts, currentPage, limit)
        affiche(pagi, function (produit) {
            addToCart(panier, produit)
            saveCart(panier)
            updatePanier()

        })
        initDrag(pagi, function (produit) {
            addToCart(panier, produit)
            saveCart(panier)
            updatePanier()
        })
        function changePage(page) {
            currentPage = page
            renderCatalogue()
        }
        btnPagination(totalPages, currentPage, changePage)
    }
    console.log(data)
    searchInput.addEventListener('input', function () {
        currentPage = 1
        renderCatalogue()


    })
    renderCatalogue()
    updatePanier()
    afficheCategory(products, function (category) {
        currentCat = category
        currentPage = 1
        renderCatalogue()
        console.log(currentCat);
    })
    function updatePanier() {
        afficherPanier(panier, function (id) {
            panier = removeFromCart(panier, id)
            saveCart(panier)
            updatePanier()
        })

        const total = calculateTotal(panier)

        const cartTotal = document.querySelector("#cartTotal")
        cartTotal.textContent = total.toFixed(2) + " $"
        const btnPanier = document.querySelector("#btnPanier p")
        btnPanier.textContent = total.toFixed(2) + " $"
    }


})


