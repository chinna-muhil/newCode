var map;
//var propertyList = JSON.parse( !{JSON.stringify(products)} );
console.log("propertyList");
console.log(propertyList);
var myArray=[propertyList[0]];
console.log("Here Comes myArray")
console.log(myArray[0].price);
propertyList.sort(function(a, b) {
    return a.price - b.price;
})
console.log(propertyList);
function initialize() {
    // Initial Map Options.
    var mapOptions = {
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Loading Map

    map = new google.maps.Map(document.getElementById('MapDiv'), mapOptions);


    // Loading location as per Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            function DistanceWidget(map) {
                this.set('map', map);
                this.set('position', map.getCenter());

                var marker = new google.maps.Marker({
                    draggable: true,
                    title: 'Move me!',
                    icon:'../public/images/mapCenter.png'
                });

                // Create a new radius widget
                var radiusWidget = new RadiusWidget();

                // Bind the radiusWidget map to the DistanceWidget map
                radiusWidget.bindTo('map', this);

                // Bind the radiusWidget center to the DistanceWidget position
                radiusWidget.bindTo('center', this, 'position');

                // Bind the marker map property to the DistanceWidget map property
                marker.bindTo('map', this);

                // Bind the marker position property to the DistanceWidget position
                // property
                marker.bindTo('position', this);

                // Bind to the radiusWidgets' distance property
                this.bindTo('distance', radiusWidget);

                // Bind to the radiusWidgets' bounds property
                this.bindTo('bounds', radiusWidget);
            }
            //var distanceWidget = new DistanceWidget(map);

            console.log(propertyList[0].address.city)
            console.log
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(pos+"----loading---");
            // Function for Clustering
            // Loading properties in Map using marker array from DB
            var markers = [];
            var infoWindows = [];
            for (var i = 0; i < propertyList.length; i++) {
                var latLng = new google.maps.LatLng(propertyList[i].LatLng.latitude, propertyList[i].LatLng.longitude);
                var marker = new google.maps.Marker({'position': latLng, infoWindowIndex : i,
                    icon:'/images/marker.png'
                });
                var content ='<div class=propertiesListMap style=background:url('+propertyList[i].picture.linkFront+')no-repeat;background-size:300px 175px>'
                    +'<div id=propertyNameMap>'+propertyList[i].productName+'</div>'
                    +"<div id=propertyPriceMap class="+i+">$"+propertyList[i].price+"<a style=float:right;margin-top:-2px;margin-right:20px><img src=/images/green_arrow.png></div>"
                    +'<div id=arrowKeyMap></div>'
                    +'</div></a><br/>';
                $("#propertyPriceMap").live('click',function() {
                    var i = $(this).attr('class');
                    console.log(i);
                    $('#mapidHide').show();
                    $('#mapidHide').animate({right: "0px"}, 1500);
                    $("#price p").html("Price: $"+propertyList[i].price);
                    $("#beds").html("Beds: "+propertyList[i].bedrooms);
                    $("#baths").html("Baths: "+propertyList[i].bathrooms);
                    $("#area").html("Sqft: "+propertyList[i].area);
                    $("#type").html("Type: "+propertyList[i].productType);
                    $('.slidermap').empty();
                    $('.slidermap').append(
                        "<div class=\"bxslidermap\"> <img src="+propertyList[i].picture.linkFront+" width=100% height=270/>"
                            +"<img src="+propertyList[i].picture.linkBack+" width=100% height=270/>"
                            +"<img src="+propertyList[i].picture.linkLeft+" width=100% height=270/>"
                            +"<img src="+propertyList[i].picture.linkRight+" width=100% height=270/> </div>"
                    );
                    $('.bxslidermap').bxSlider({
                        mode: 'horizontal',
                        auto: true,
                        pause: 2000,
                        speed:1000,
                        infiniteLoop:true,
                        buildPager: function(slideIndex){
                            switch(slideIndex){
                                case 0:
                                    return '<img src='+propertyList[i].picture.linkFront+' width=100 height=50>';
                                case 1:
                                    return '<img src='+propertyList[i].picture.linkBack+' width=100 height=50>';
                                case 2:
                                    return '<img src='+propertyList[i].picture.linkLeft+' width=100 height=50>';
                                case 3:
                                    return '<img src='+propertyList[i].picture.linkRight+' width=100 height=50>';
                            }
                        }
                    });

                    return false;
                });

                $(document).ready(function(){
                    $('.bxslidermap').bxSlider({
                        mode: 'horizontal',
                        auto: true,
                        pause: 2000,
                        speed:1000,
                        infiniteLoop:true,
                        buildPager: function(slideIndex){
                            switch(slideIndex){
                                case 0:
                                    return '<img src='+propertyList[0].picture.linkFront+' width=100 height=50>';
                                case 1:
                                    return '<img src='+propertyList[0].picture.linkBack+' width=100 height=50>';
                                case 2:
                                    return '<img src='+propertyList[0].picture.linkLeft+' width=100 height=50>';
                                case 3:
                                    return '<img src='+propertyList[0].picture.linkRight+' width=100 height=50>';
                            }
                        }
                    });
                });
                $("#moreMap").live('click',function(){
                    $("#mapidHide").hide().animate({right:"-632px"},1);
                    //$("#mapidHide").hide();
                });

                var infoWindow = new google.maps.InfoWindow({
                    content : content
                });
                google.maps.event.addListener(marker, 'click',
                    function(event)
                    {
                        this.setIcon('/images/marker_hover.png');
                        infoWindows[this.infoWindowIndex].open(map, this);
                    }
                );
                /*
                 google.maps.event.addListener(marker, 'mouseout',
                 function(event)
                 {
                 this.setIcon('/images/marker.png');
                 infoWindows[this.infoWindowIndex].close();
                 }
                 ); */
                infoWindows.push(infoWindow);
                markers.push(marker);
            }
            var markerCluster = new MarkerClusterer(map, markers, mapOptions);
            // End of Clustering

            // Setting up the Map position.
            map.setCenter(pos);

            // Function for Places.
            // Not sure about Markers array please go through it when time permits
            // End of the Places Library

            // Reverse Geocoder function to get location city and state in Readable format
            // Also populate in area search box

            geocoder = new google.maps.Geocoder();
            var location = pos;
            geocoder.geocode({'location': location }, function (results, status) {

                if (status == google.maps.GeocoderStatus.OK) {
                    //Check result 0
                    var result = results[0];
                    //look for locality tag and administrative_area_level_1
                    var city = "";
                    var state = "";
                    var postalCode="";
                    var country="";
                    for (var i = 0, len = result.address_components.length; i < len; i++) {

                        var ac = result.address_components[i];
                        if (ac.types.indexOf("locality") >= 0) city = ac.long_name;
                        if (ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.short_name;
                        if (ac.types.indexOf("postal_code") >= 0) postalCode = ac.long_name;
                        if (ac.types.indexOf("country") >= 0) country = ac.long_name;
                        //console.log(postalCode)
                        //console.log("**************************")
                    }
                    //only report if we got Good Stuff
                    if (city != '' && state != '') {
                        document.getElementById("location").value = city + ',' + state;
                        document.getElementById("zipcode").value = postalCode;
                        document.getElementById("country").value = country;
                    } else {
                        console.log('Geocoder failed' + status)
                    }
                }
            });
        }, function () {
            handleNoGeolocation(true);
        });
    }
    else {
        handleNoGeolocation(false);
    }
}

// Test for Geolocation.

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }
    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };
    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

// Loading main Javascript for Map


function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize&libraries=geometry&libraries=places';
    document.body.appendChild(script);
}

window.onload = loadScript;