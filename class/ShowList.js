window.onload = function ()
{
    const modo =
        sessionStorage.getItem("modoLista");

    if (modo === "todas")
    {
        showAllList();
    }
    else
    {
        showCurrentList();
    }
};

function showCurrentList()
{
    const lista =
        JSON.parse(
            sessionStorage.getItem("listaActual")
        );

    const container =
        document.getElementById("listaContainer");

    container.innerHTML = "";

    lista.forEach(item =>
    {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${item.nombre}</strong>
            - Cantidad: ${item.cantidad}
        `;

        container.appendChild(li);
    });
}

function showAllList()
{
    const currentUser =
        JSON.parse(sessionStorage.getItem("user"));

    const listas = obtenerListas();

    const container =
        document.getElementById("listaContainer");

    container.innerHTML = "";

    const listasFiltradas =
        listas.filter(
            lista => lista._usuario === currentUser._usuario
        );

    listasFiltradas.forEach(lista =>
    {
        const title = document.createElement("h3");

        title.textContent =
            "Fecha: " + new Date(lista._fecha).toLocaleString();

        container.appendChild(title);

        lista._productos.forEach(item =>
        {
            const li = document.createElement("li");

            li.innerHTML = `
                <strong>${item.nombre}</strong>
                - Cantidad: ${item.cantidad}
            `;

            container.appendChild(li);
        });
    });
}
