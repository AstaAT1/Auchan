export function setData(data) {
    localStorage.setItem('mydata', JSON.stringify(data))
}
export function getData() {
    const saveData = localStorage.getItem('mydata')
    const products = JSON.parse(saveData)
    return products
}
export function saveCart(panier) {
    localStorage.setItem("auchanCart", JSON.stringify(panier))
}
export function getCart() {
    const saved = localStorage.getItem("auchanCart")

    if (saved === null) {
        return []
    } else {
        return JSON.parse(saved)
    }
}