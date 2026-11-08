export function initDrag(products, onDrop) {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(function (card, index) {
        card.addEventListener("dragstart", function (event) {

            console.log("Produit sélectionné :", index)
            event.dataTransfer.setData("text/plain", String(index))
        })
    })
    const panierZone = document.querySelector("#btnPanier")

    panierZone.ondragover = function (event) {
        event.preventDefault()
    }

    panierZone.ondrop = function (event) {
        event.preventDefault()

        const index = Number(event.dataTransfer.getData("text/plain"))
        const produit = products[index]

        if (produit !== undefined) {
            onDrop(produit)
        }
    }
}