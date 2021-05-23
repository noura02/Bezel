
//navbar
let homeOffset = $('.navbar').outerHeight();
$(window).scroll(function(){
    let topOffset=$(window).scrollTop();
    if(topOffset>homeOffset){
        $('.navbar').css({'background-color':'#fff','transition':'all 1s'});
        $('.nav-link').css({'color':'black','transition':'all 1s'});
        $('.social i').css({'color':'black','transition':'all 1s'});
        $('#navbarBrand').attr('src','imgs/logo-dark.png');
        $('.navbar').removeClass('py-3')
    }
    else{
        $('.navbar').css({'background-color':'transparent'})
        $('.nav-link').css({'color':'#fff'});
        $('.social i').css({'color':'#fff'});
        $('.navbar').addClass('py-3')
        $('#navbarBrand').attr('src','imgs/logo-light.png');
    }
    })

    //loader
    $(document).ready(function(){
      $('.loader').fadeOut(3000,function(){
          $('body').css('overflow','visible')
      })
        }); 
        
    //plugin
    var typed = new Typed('.element',{
        strings:['websites','softwares','apps'],
        smartBackspace: true,
        backSpeed: 100,
        typeSpeed: 100,
        loop:true

    });
