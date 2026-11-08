export const addToCart = (panier, produit) => {
    const existingProduct = panier.find(function (item) {
        return item.id === produit.id
        })

    if (existingProduct !== undefined) {
        existingProduct.quantite += 1
    } else {
        panier.push({
            id: produit.id,
            nom: produit.nom,
            prix: produit.prix,
            quantite: 1
        })
    }
    return panier
}

export const calculateTotal = function (panier) {
    let total = 0
     panier.forEach(function (produit) {
        total += produit.prix * produit.quantite
    })
    return total
}


export const removeFromCart = (panier, id) => {
    return panier.filter(function(produit) {
        return produit.id !== id
    })
}
