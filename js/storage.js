export function setData(data) {
    localStorage.setItem('mydata', JSON.stringify(data))
}
export function getData() {
    const saveData = localStorage.getItem('mydata')
    const products = JSON.parse(saveData)
    return products
}