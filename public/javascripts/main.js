var size1= function(){
    $('#bigWarpper,.propertiesListContainer,#mainAside,#MapDiv').height(
        $(window).height()-43
    );
};

$(document).ready(size1);
$(window).resize(size1);

var size2= function(){
    $('#mainSection').height(
        $(window).height()-90
    );
};

$(document).ready(size2);
$(window).resize(size2);

var size3= function(){
    $('.propertiesListContainer').css('margin','0 auto')
};

$(document).ready(size3);
$(window).resize(size3);

var size4= function(){
    $('#mainBody ul li:last-child').width(
        $(window).width()-281
    )
};

$(document).ready(size4);
$(window).resize(size4);


