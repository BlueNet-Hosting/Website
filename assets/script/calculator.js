function calculatePrice(text) {
    let cores = document.getElementById("cores").value / 2,
        ram = document.getElementById("ram").value * 0.40,
        storage = document.getElementById("storage").value * 0.01875;
    document.getElementById("price").innerText = text + (cores + ram + storage).toFixed(2).toString().replaceAll(".", ",") + " €";
}1