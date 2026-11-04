export function searchProducts(arr , produit) {
   const search = arr.filter(p => p.nom.toLowerCase().includes(produit.toLowerCase()));
    return search
}
export function pagination(arr , pagenumber , limit) {
    const start = (pagenumber - 1) * limit
    const end = start + limit
    const result = arr.slice(start, end)
    return result
}
export function filterByCategory(products, category) {
    if (category === "All") {
        return products
    }
    else{
    const filtercategoty = products.filter(function (produit) {
        return category === produit.categorie
        
    }    

)
    return filtercategoty
    }

}