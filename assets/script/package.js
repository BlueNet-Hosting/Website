let packagesContainer = document.getElementById("packagesContainer")

let starterPackage = createPackage("Starter Paket", 2, 4, 16, 2.00);
packagesContainer.appendChild(starterPackage);

let expandPackage = createPackage("Erweiterndes Paket", 4, 8, 24, 5.00);
packagesContainer.appendChild(expandPackage);

let advancedPackage = createPackage("Fortgeschrittenes Paket", 8, 16, 32, 10.25);
packagesContainer.appendChild(advancedPackage);

let expertPackage = createPackage("Experten Paket", 12, 20, 40, 14.00);
packagesContainer.appendChild(expertPackage);

function createPackage(name, cores, ram, storage, price) {
    let packageElement = document.createElement("div");
    packageElement.classList.add("package");

    let nameElement = document.createElement("h3");
    nameElement.innerHTML = name.replace(/\s+/g, "<br>");
    packageElement.appendChild(nameElement);

    let coresElement = document.createElement("p");
    coresElement.innerHTML = cores + " Kerne";
    packageElement.appendChild(coresElement);

    let ramElement = document.createElement("p");
    ramElement.innerHTML = ram + " GB Ram";
    packageElement.appendChild(ramElement);

    let storageElement = document.createElement("p");
    storageElement.innerHTML = storage + " GB SSD";
    packageElement.appendChild(storageElement);

    let priceElement = document.createElement("h3");
    priceElement.setAttribute("id", name.toLowerCase() + "_price");
    priceElement.innerHTML = price.toFixed(2).toString().replaceAll(".", ",") + " €";
    packageElement.appendChild(priceElement);

    let buttonElement = document.createElement("button");
    buttonElement.innerHTML = "Anfordern";
    buttonElement.addEventListener("click", function() {
        sendWebhookWithInfos(name.toLowerCase(), cores, ram, storage);
    });
    packageElement.appendChild(buttonElement);
    return packageElement;
}