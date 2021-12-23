$("document").ready( () => {
    $(".header_top > .btn_menu").click(() =>{
        if( $(".header_top").hasClass("open") ){
            $(".header_top").removeClass("open");
            $(".header_top > .btn_menu").empty( );
            $(".header_top > .btn_menu").append("<i class=\"fa fa-bars\"></i>");
        }else{
            $(".header_top").toggleClass("open");
            $(".header_top > .btn_menu").empty( );
            $(".header_top > .btn_menu").append("<i class=\"fa fa-close\"></i>");
        }


    })
})