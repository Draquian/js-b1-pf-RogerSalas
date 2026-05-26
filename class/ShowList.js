window.onload = function ()
{
    check();

    const modo = sessionStorage.getItem("modoLista");

    if (modo === "todas")
        showAllList();
    else
        showCurrentList();
};

function showCurrentList()
{
    const lista = JSON.parse(sessionStorage.getItem("listaActual")) || [];

    const container = document.getElementById("listaContainer");

    container.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = "Lista actual";

    container.appendChild(title);

    if (lista.length === 0)
    {
        container.innerHTML += "<p>No hay productos.</p>";
        return;
    }

    const ul = document.createElement("ul");

    lista.forEach(item =>
    {
        const li = document.createElement("li");

        li.innerHTML = ` <strong>${item.nombre}</strong> - Cantidad: ${item.cantidad}`;

        ul.appendChild(li);
    });

    container.appendChild(ul);
}

function showAllList()
{
    const currentUser = JSON.parse(sessionStorage.getItem("user"));

    const listas = obtenerListas();

    const container = document.getElementById("listaContainer");

    container.innerHTML = "";

    const listasFiltradas = listas.filter(lista => 
        lista._usuario === currentUser._usuario).sort((a, b) => new Date(b._fecha) - new Date(a._fecha));

    const title = document.createElement("h2");
    title.textContent = "Historial de listas";

    container.appendChild(title);

    if (listasFiltradas.length === 0)
    {
        container.innerHTML += "<p>No existen listas guardadas.</p>";
        return;
    }

    listasFiltradas.forEach(lista =>
    {
        const button = document.createElement("button");

        button.style.backgroundColor = "inherit";

        button.addEventListener("click", () =>
        {
            ShowSelectedList(lista)
        });

        const bloque = document.createElement("div");

        bloque.style.border = "1px solid black";
        bloque.style.marginBottom = "20px";
        bloque.style.padding = "10px";

        const fecha = document.createElement("h3");

        fecha.textContent = "Fecha: " + new Date(lista._fecha).toLocaleString();

        button.appendChild(fecha);

        const ul = document.createElement("ul");

        lista._productos.forEach(item =>
        {
            const li = document.createElement("li");

            li.innerHTML = `<strong>${item.nombre}</strong> - Cantidad: ${item.cantidad}`;

            ul.appendChild(li);
        });

        button.appendChild(ul);

        bloque.appendChild(button);
        container.appendChild(bloque);
    });
}

function ShowSelectedList(lista)
{
    const container = document.getElementById("listaContainer");

    container.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = "Lista seleccionada";

    container.appendChild(title);

    const bloque = document.createElement("div");

    bloque.style.border = "1px solid black";
    bloque.style.marginBottom = "20px";
    bloque.style.padding = "10px";

    const fecha = document.createElement("h3");

    fecha.textContent = "Fecha: " + new Date(lista._fecha).toLocaleString();

    bloque.appendChild(fecha);

    const ul = document.createElement("ul");

    lista._productos.forEach(item =>
    {
        const li = document.createElement("li");

        li.innerHTML = `<strong>${item.nombre}</strong> - Cantidad: ${item.cantidad}`;

        ul.appendChild(li);
    });

    bloque.appendChild(ul);

    container.appendChild(bloque);
}