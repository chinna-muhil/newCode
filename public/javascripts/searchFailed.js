var map;
var geocoder = new google.maps.Geocoder();
function initialize() {

    var mapOptions = {
        zoom: 8
    };
    map = new google.maps.Map(document.getElementById('MapDiv'), mapOptions);
    function codeAddress() {
        var address = propertyList;
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var city = "";
                var state = "";
                var postalCode="";
                var country="";
                for (var i = 0, len = results[0].address_components.length; i < len; i++) {

                    var ac = results[0].address_components[i];
                    if (ac.types.indexOf("locality") >= 0) city = ac.long_name;
                    if (ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.short_name;
                    if (ac.types.indexOf("postal_code") >= 0) postalCode = ac.long_name;
                    if (ac.types.indexOf("country") >= 0) country = ac.long_name;
                }
                //only report if we got Good Stuff
                    document.getElementById("location").value = city + ',' + state;
                    document.getElementById("zipcode").value = postalCode;
                    document.getElementById("country").value = country;
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    codeAddress();
}




google.maps.event.addDomListener(window, 'load', initialize);
