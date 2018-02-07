
DEMOMENU = {
    bindDemoMenu: function () {
        $(document).ready(function(){
            $("#demosMenu").change(function(){
              window.location.href = $(this).find("option:selected").attr("id") + '.html';
            });
        });    
    },
};




PARALLAX = {
    bindParralax: function () {
        $(document).ready(function() {
            $('#fullpage').fullpage({
              sectionsColor: ['#000', '#000', '#171717', '#000', '#000'],
              anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5fifthpage'],
              menu: '#menu',
              scrollBar: true, 
              
             
              responsiveWidth: 900,
              afterResponsive: function(isResponsive){
              
              }
    
            });
        });     
    },
};

SNOW = {
    bindSnow: function () {
        $(document).ready( function(){
            $.fn.snow();
        });
        
    }
};



var onLoad = function () {

    PARALLAX.bindParralax();
    SNOW.bindSnow();
   DEMOMENU.bindDemoMenu();
};

$(document).foundation();
window.onload = onLoad();
