const productos = [
    {id: '0', nombre: 'Ryzen 5 3600x', cantidad: '20', precio: "5000"},
    {id: '1', nombre: 'Monitor', cantidad: '10', precio: "5000"},
    {id: '2', nombre: 'Memoria Ram', cantidad: '30', precio: "3400"},
    {id: '3', nombre: 'Microfono', cantidad: '0', precio: "2000"},
    {id: '4', nombre: 'Memoria Ram 2X16', cantidad: '50', precio: "1600"},
    {id: '5', nombre: 'Mouse', cantidad: '5', precio: "200"}
]
localStorage.setItem("productos",JSON.stringify(productos));

