$(function () {
  const agregarCarrtio_btn = $("#agregarCarritoBtn");
  var productosLS = localStorage.getItem("productos");
  productosLS = JSON.parse(productosLS);
  verificarExistencia(productosLS);
  function verificarExistencia(productos) {
    $.each(productos, function (i, v) {
      if (agregarCarrtio_btn.attr("data-id") == v.id) {
        if (v.cantidad == 0) {
          $(".formulario-pedido").remove();
          $(".contenido-producto").append(
            "<p class='mt-2 is-size-2 has-text-danger-dark'>Producto agotado</p>"
          );
        } else {
          $(".cantidad").attr("max", v.cantidad);
          carrito();
        }
      }
    });
  }
  function carrito() {
    agregarCarrtio_btn.on("click", function () {
      const titulo = $(".contenido-principal .title").text();
      const img = $("#imgProducto").attr("src");
      const cantidad = parseInt($("#cantidad1").val());
      const precio = parseInt($(".precio").text());
      const precioTotal = precio * cantidad;
      const id = agregarCarrtio_btn.attr("data-id");
      const productoCarrito = [];
      var producto = {
        id: id,
        img: img,
        nombre: titulo,
        cantidad: cantidad,
        precio: precioTotal,
      };
      var carritoUsuario = localStorage.getItem("usuarioLS");
      carritoUsuario = JSON.parse(carritoUsuario);
      if(verificarInicioSesion(carritoUsuario)){

          if(carritoUsuario.carrito === null){
              
                carritoUsuario.carrito.push(producto);
                localStorage.setItem("usuarioLS", JSON.stringify(carritoUsuario));
          }else{
              
            carritoUsuario.carrito.push(producto);
              localStorage.setItem("usuarioLS", JSON.stringify(carritoUsuario));
          }
      }
    });
  }
  function verificarInicioSesion(usuario) {
    if (usuario == null) {
      alert("Nesecita iniciar sesión antes de agregar algo al carrito")
    } else {
      console.log("ha iniciado sesion");
      return true;
    }
  }
});
