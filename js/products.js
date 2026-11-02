export function searchProducts(arr , produit) {
   const search = arr.filter(p => p.nom.toLowerCase().includes(produit.toLowerCase()));
    return search
}