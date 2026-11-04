const produits = document.querySelector('#produits')
const btnCategory = document.querySelector('#btnCategory')
const modal = document.querySelector('#categoryModal')
const fermer = document.querySelector('#cancelModal')
const categoryList = document.querySelector('#categoryList')

btnCategory.addEventListener('click', function () {
    modal.style.display = 'flex'
})

fermer.addEventListener('click', function () {
    modal.style.display = 'none'
})
export function afficheCategory(data , selectCat) {
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
            catBtn.textContent= 'Tout les produits'
        }
        catBtn.addEventListener('click', function () {
            selectCat(e)
            modal.style.display = 'none'

        })
        categoryList.append(catBtn)
     

    });

}
export function affiche(arr) {

    produits.innerHTML = arr.map(function (produit) {
        return `
        <div class="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-200">
            <img src="${produit.image}" alt="${produit.nom}" class="w-full h-40" >
            <p class="text-sm text-gray-500"> ${produit.categorie} </p>
            <h3 class="font-bold text-lg">${produit.nom}</h3>
            <p class="text-red-600 font-bold">${produit.prix} $</p>
            <button class="bg-red-600 text-white rounded-lg py-2 cursor-pointer">Ajouter au panier</button>
        </div>
    `
    }).join("");

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
