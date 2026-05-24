window.onload = function ()
{
    const lista =
        JSON.parse(
            sessionStorage.getItem("listaProductos")
        ) || [];

    const container =
        document.getElementById("listaContainer");

    lista.forEach(item =>
    {
        const li =
            document.createElement("li");

        li.innerHTML = `
            <strong>${item.nombre}</strong>
            - Cantidad: ${item.cantidad}
        `;

        container.appendChild(li);
    });
};



function showAllList()
{
    const currentUser = JSON.parse(sessionStorage.getItem("user"));

    const listasFiltrados = productos.filter(user => user._usuario === currentUser);

listasFiltrados.forEach(listas =>{

listas._fecha

        listas._productos.forEach(item =>
        {
            const li =
                document.createElement("li");

            li.innerHTML = `
                <strong>${item.nombre}</strong>
                -  ${item.cantidad}
            `;

            container.appendChild(li);
        });
     })
}