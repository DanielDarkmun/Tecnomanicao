$(function () {
  var datosCarrito = localStorage.getItem("usuarioLS");
  datosCarrito = JSON.parse(datosCarrito);
  datosCarrito = datosCarrito.carrito;
  var productos = localStorage.getItem("productos");
  productos = JSON.parse(productos);
  let precioTotal = 0;
  tablaCarrito(datosCarrito);

  function tablaCarrito(datosCarrito) {
    $.each(datosCarrito, function (i, v) {
      $("tbody").append(`
            <tr>
                <th><img src="${v.img}" width="100px" height="100px" alt=""></th>
                <th>${v.nombre}</th>
                <th>${v.cantidad}</th>
                <th>$${v.precio}</th>
                <th class="has-text-centered">
                    <button type="button" class="button eliminar">
                        <span class="icon has-text-danger">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                    </button>
                </th>
            </tr>
        `);
      precioTotal += parseInt(v.precio);
    });
    $(".precioTotal").text(precioTotal);
  }

  $("#comprar").on("click", function () {
    let cantidadCarrito;
    let canitdadbd;
    if (verificarInicioSesion()) {
      for (let x = 0; x < datosCarrito.length; x++) {
        for (let y = 0; y < productos.length; y++) {
          if (datosCarrito[x].id == productos[y].id) {
            cantidadCarrito = datosCarrito[x].cantidad;
            canitdadbd = productos[y].cantidad;
            let canitdadtotal =
              parseInt(canitdadbd) - parseInt(cantidadCarrito);
            productos[y].cantidad = canitdadtotal;
            localStorage.setItem("productos", JSON.stringify(productos));
            alert("compra realizada con exito");
          }
        }
      }
    }
  });
  function verificarInicioSesion() {
    var usuario = localStorage.getItem("usuarioLS");
    usuario = JSON.parse(usuario);
    if (usuario == null) {
      const iniciarsesion = $("#comprar");
      iniciarsesion.attr("href", "sesion.html");
    } else {
      console.log("ha iniciado sesion");
      return true;
    }
  }
  ordernarID(datosCarrito);

  $(".eliminar").click(function () {
    var $this = $(this);
    var row = $this.closest("tr").index();
    const padre = $(this).parent().parent();
    for (let x = 0; x < datosCarrito.length; x++) {
      if (datosCarrito[x].id == row) {
        datosCarrito.splice(row, 1);
      }
    }
    ordernarID(datosCarrito);
    localStorage.setItem("productoCarrito", JSON.stringify(datosCarrito));
    padre.children().remove();
    location.reload();
  });
  function ordernarID(datosCarrito) {
    $.each(datosCarrito, function (i, v) {
      datosCarrito[i].id = i;
    });
  }
  localStorage.setItem("productoCarrito", JSON.stringify(datosCarrito));
});
