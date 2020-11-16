$(function(){
    //menu mobile 
    const burger = $(".burger")
    burger.on("click", function(){
        const navbar_menu =$(".navbar-menu")
        if(navbar_menu.hasClass("is-active")){
            navbar_menu.removeClass("is-active")
        }else{
            navbar_menu.addClass("is-active")
        }
    })
    //menu escritorio
    var ventana_ancho = $(window).width()
    console.log(ventana_ancho);
    if (ventana_ancho >= 768){
        $(".navbar-end").addClass("is-aling-items-center")
        $(".navbar-end").removeClass("is-flex-direction-column")
    }
    // ofertas
    $('.slider').bxSlider();
    //categorias
    const categorias = $(".categorias")
    categorias.on("click", function(){
        if(categorias.hasClass("is-active")){
            categorias.removeClass("is-active")
        }else{
            categorias.addClass("is-active")
        }
    })
    
})