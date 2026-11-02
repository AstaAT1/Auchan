const produits = document.querySelector('#produits')
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
