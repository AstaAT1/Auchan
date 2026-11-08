const produits = document.querySelector('#produits')
const btnCategory = document.querySelector('#btnCategory')
const modal = document.querySelector('#categoryModal')
const fermer = document.querySelector('#cancelModal')
const categoryList = document.querySelector('#categoryList')

const btnPanier = document.querySelector('#btnPanier')
const modalPanier = document.querySelector('#panierModal')
const fermerPanier = document.querySelector('#cancelPanierModal')

const btnGrid = document.querySelector("#btnGrid")
const btnList = document.querySelector("#btnList")

btnList.addEventListener("click", function () {
    produits.classList.remove("flex-wrap")
    produits.classList.add("flex-col")
    btnList.classList.add("bg-red-600", "text-white")
    btnGrid.classList.remove("bg-red-600", "text-white")
})

btnGrid.addEventListener("click", function () {
    produits.classList.remove("flex-col")
    produits.classList.add("flex-wrap")
    btnGrid.classList.add("bg-red-600", "text-white")
    btnList.classList.remove("bg-red-600", "text-white")
})


btnCategory.addEventListener('click', function () {
    modal.style.display = 'flex'
})

fermer.addEventListener('click', function () {
    modal.style.display = 'none'
})

btnPanier.addEventListener('click', function () {
    modalPanier.style.display = 'flex'
})

fermerPanier.addEventListener('click', function () {
    modalPanier.style.display = 'none'
})
export function afficheCategory(data, selectCat) {
    console.log("DATA CATEGORY:", data)
    const catArr = []

    data.forEach(function (produit) {
        if (!catArr.includes(produit.categorie)) {
            catArr.push(produit.categorie)
        }
    })
    catArr.unshift("All")
    categoryList.innerHTML = ''
    catArr.forEach(e => {
        const catBtn = document.createElement('button')
        catBtn.className = 'w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 cursor-pointer'
        catBtn.textContent = e
        if (e === 'All') {
            catBtn.textContent = 'Tout les produits'
        }
        catBtn.addEventListener('click', function () {
            selectCat(e)
            modal.style.display = 'none'

        })
        categoryList.append(catBtn)


    });

}
export function affiche(arr, ajouterPanier) {

    produits.innerHTML = arr.map(function (produit) {
        return `
        <div draggable="true" class="product-card flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-200">
            <img src="${produit.image}" alt="${produit.nom}" class="w-full h-40" >
            <p class="text-sm text-gray-500"> ${produit.categorie} </p>
            <h3 class="font-bold text-lg">${produit.nom}</h3>
            <p class="text-red-600 font-bold">${produit.prix} $</p>
            <button class="add-to-cart bg-red-600 text-white rounded-lg py-2 cursor-pointer">Ajouter au panier</button>
        </div>
    `
    }).join("")

    const buttons = produits.querySelectorAll(".add-to-cart")

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            ajouterPanier(arr[index])
        })
    })

}
export function btnPagination(totalPages, currentPage, changePage) {
    const pagi = document.querySelector('#pagination')
    pagi.innerHTML = ''
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button')
        btn.className = 'px-4 py-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-red-600'
        if (i === currentPage) {
            btn.classList.add('bg-red-600')
        }
        btn.textContent = i
        btn.addEventListener('click', function () {
            changePage(i)
        })
        pagi.append(btn)
    }
}

export function afficherPanier(panier, onDelete) {
    const cartList = document.querySelector("#cartList")

    cartList.innerHTML = panier.map(function (produit) {
        return `
            <div class="flex items-center justify-between w-full p-3 border rounded-lg">
                <div class="flex flex-col">
                    <h3 class="font-bold">${produit.nom}</h3>
                    <p>${produit.prix} $</p>
                    <p>Quantité : ${produit.quantite}</p>
                </div>
                <button class="delete-panier cursor-pointer p-2 text-red-600">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    }).join("")
    const buttons = cartList.querySelectorAll(".delete-panier");

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            onDelete(panier[index].id)
        })
    })
}
