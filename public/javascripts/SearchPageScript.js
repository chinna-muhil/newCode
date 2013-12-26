function showListView(){
    $('#MapDiv2').remove();
    var selectedImage;
    document.getElementById('mainAside').innerHTML='<div id=MapDiv>' +
                                                        '<ul id="searchList">'+
                                                            "<li class=zoomedDetails style=width:100%><div id=propertyZoomedDetails><br />" +
                                                            "<div class=slider> <div class=bxslider>"
                                                            +"<img src="+propertyList[0].picture.linkFront+" width=580 height=270/>"
                                                            +"<img src="+propertyList[0].picture.linkBack+" width=580 height=270/>"
                                                            +"<img src="+propertyList[0].picture.linkLeft+" width=580 height=270/>"
                                                            +"<img src="+propertyList[0].picture.linkRight+" width=580 height=270/>"
                                                            +"</div></div>"+
                                                            "<div id=description style=width:100%><div id=tabs>" +
                                                            "<ul><li><button id='mapimg'><img src=/images/maps_button.png  title='Go To Location In Map'>" +
                                                            "</button></li><li><button id='messageimg'><img src=/images/messgae.png  title='Email Selected Image'>" +
                                                            "</button></li><li><button id='saveimg'><img src=/images/save_button.png  title='Save Selected Image' >" +
                                                            "</button></li><li><button id='socialimg'><img src=/images/some_button.png  title='Share Selected Image'>" +
                                                            "</button></li><li><button id='printimg'><img src=/images/print.png title='Print Selected Image'>" +
                                                            "</button></li></ul>" +
                                                            "</div><div id=price><p style=padding-left:0>Price: $"+propertyList[0].price+"</p>" +
                                                            "</div><div id=property><div id=property_details><h4>Property Details</h4></div> " +
                                                            "<div id=property_types><ul><li id=beds>Beds: "+propertyList[0].bedrooms+"</li>" +
                                                            "<li id=area>Sqft: "+propertyList[0].area+"</li>" +
                                                            "<li>Built: 2005</li>" +
                                                            "<li id=baths>Bath: "+propertyList[0].bathrooms+"</li>" +
                                                            "<li id=type>Type: "+propertyList[0].productType+"</li>" +
                                                            "<li>MLS ID</li>" +
                                                            "</ul></div> </div>" +
                                                            "<div id=description_prop><h4>Descriptions</h4>" +
                                                            "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p></div>" +
                                                            "</div></div></li>";
                                                            /*'<li class=propertiesListScroll>' +
                                                                '<a id=result>'+propertyList.length+ ' results</a>'+
                                                                '<div id=sort> ' +
                                                                    'Sort:' +
                                                                    '<select id=mySelect onchange=priceRange()>' +
                                                                        '<option value=Priceh> Price High-Low</option>' +
                                                                        '<option value=Pricel> Price Low-High</option>' +
                                                                        '<option value=Timen> Time - Newest-Oldest</option>' +
                                                                        '<option value=Timeo> Time - Oldest-Newest</option>' +
                                                                        '<option value=Bedl> Bedrooms Low-High</option>' +
                                                                        '<option value=Batl> Bathrooms Low-High</option>' +
                                                                    '</select>' +
                                                                '</div>' +
                                                                '<script>'+
                                                                     function priceRange(){
                                                                        var mylist=document.getElementById("mySelect");
                                                                        var answer = mylist.options[mylist.selectedIndex].value;
                                                                        if(answer == "Priceh"){
                                                                            sortDescendingByPrice();
                                                                        }
                                                                        else if(answer == "Pricel"){
                                                                            sortAscendingByPrice();
                                                                        }
                                                                        else if(answer == "Bedl"){
                                                                            sortAscendingBybed();
                                                                        }
                                                                        else if(answer == "Batl"){
                                                                            sortAscendingBybath();
                                                                        }
                                                                     }
                                                                +'</script>'+
                                                                '<div id=compare><a href=#>Compare</a></div>'+
                                                                '<div id=scroll>' ;
                                                                    document.getElementById("scroll").innerHTML = '<div id="list1">';
                                                                        for(var i=0; i < propertyList.length ; i++){
                                                                            console.log(propertyList[i]);
                                                                            document.getElementById("list1").innerHTML += "<br/> <div class=propertiesList style=background:url("+propertyList[i].picture.linkFront+")no-repeat;background-size:300px 175px>"
                                                                                +"<div id=propertyName>"+propertyList[i].productName+"<a style=float:right;margin-top:-2px;margin-right:20px><input type=checkbox name=property value="+i+"></a></div>"
                                                                                +"<div id=propertyPrice class="+i+">$"+propertyList[i].price+"<br /><a> Bed:"+propertyList[i].bedrooms+" Bath:"+propertyList[i].bathrooms+" Sqft:"+propertyList[i].area+"</a><a style=float:right;margin-top:-2px;margin-right:20px><img src=/images/green_arrow.png></div>"
                                                                                //+"<div id=arrowKey></div>"
                                                                                +"</div></a>"
                                                                        }  */
                                                                    //document.getElementById("scroll").innerHTML = '</div>';
                                                                //'</div>'

                                                            //'</li>'
                                                            //var mainDiv = document.getElementById('MapDiv');
                                                            //var div = mainDiv.getElementsByTagName('ul');
                                                                //[1].style.display='none';
                                                            //var ul = document.getElementById("searchList");
                                                            /*var li = $("<li class=zoomedDetails><div id=propertyZoomedDetails><br />" +
                                                                "<div class=slider> <div class=bxslider>"
                                                                +"<img src="+propertyList[0].picture.linkFront+" width=580 height=270/>"
                                                                +"<img src="+propertyList[0].picture.linkBack+" width=580 height=270/>"
                                                                +"<img src="+propertyList[0].picture.linkLeft+" width=580 height=270/>"
                                                                +"<img src="+propertyList[0].picture.linkRight+" width=580 height=270/>"
                                                                +"</div></div>"+
                                                                "<div id=description style=width:102.5%><div id=tabs>" +
                                                                "<ul><li><img src=/images/maps_button.png >" +
                                                                "</li><li><img src=/images/messgae.png >" +
                                                                "</li><li><img src=/images/save_button.png >" +
                                                                "</li><li><img src=/images/some_button.png >" +
                                                                "</li><li><img src=/images/print.png >" +
                                                                "</li></ul>" +
                                                                "</div><div id=price><p style=padding-left:0>Price: $"+propertyList[0].price+"</p>" +
                                                                "</div><div id=property><div id=property_details><h4>Property Details</h4></div> " +
                                                                "<div id=property_types><ul><li id=beds>Beds: "+propertyList[0].bedrooms+"</li>" +
                                                                "<li id=area>Sqft: "+propertyList[0].area+"</li>" +
                                                                "<li>Built: 2005</li>" +
                                                                "<li id=baths>Bath: "+propertyList[0].bathrooms+"</li>" +
                                                                "<li id=type>Type: "+propertyList[0].productType+"</li>" +
                                                                "<li>MLS ID</li>" +
                                                                "</ul></div> </div>" +
                                                                "<div id=description_prop><h4>Descriptions</h4>" +
                                                                "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p></div>" +
                                                                "</div></div></li>");   */
                                                            //li.insertAfter($("ul#searchList li:first"));
    
        var url = $(location).attr('href');
        url = url.substring(0, url.indexOf('/search'));
        
        $('#mapimg').click(function(){
            var a = $('<a>').attr('href', url+'/search').appendTo('body');
            a[0].click();
            a.remove();
        }); 
        
        $('#socialimg').click(function(){
        var a = $('<a>').attr('href', url+'/fbauth').attr('target', '_blank').appendTo('body');
        a[0].click();
        a.remove();
        });                                    


        $('#messageimg').click(function(){
            var a = $("<a>").attr("href", url+'/sendmail'+selectedImage).appendTo("body");
            a[0].click();
            a.remove();
          });                                    
        $('#printimg').click(function(){
            var printMe = window.open(url+selectedImage, 'Print'); 
            printMe.print();
          });

        $('#saveimg').click( function() {
            var a = $("<a>").attr("href", url+selectedImage).attr("download", selectedImage).appendTo("body");
            a[0].click();
            a.remove();
        });

        
        $("#propertyPriceSearch").live('click',function() {
            //alert("Yayy");
            console.log("propertyPrice Ready...");
            var i = $(this).attr('class');
            console.log(i);
            $("#price p").html("Price: $"+propertyList[i].price);
            $("#beds").html("Beds: "+propertyList[i].bedrooms);
            $("#baths").html("Baths: "+propertyList[i].bathrooms);
            $("#area").html("Area: "+propertyList[i].area);
            $("#type").html("Type: "+propertyList[i].productType);
            $('.slider').empty();
            $('.slider').append(
                "<div class=\"bxslider\"> <img src="+propertyList[i].picture.linkFront+" width=100% height=270/>"
                    +"<img src="+propertyList[i].picture.linkBack+" width=102.5% height=270/>"
                    +"<img src="+propertyList[i].picture.linkLeft+" width=102.5% height=270/>"
                    +"<img src="+propertyList[i].picture.linkRight+" width=102.5% height=270/> </div>"
            );
            $('.bxslider').bxSlider({
                mode: 'horizontal',
                auto: true,
                pause: 2000,
                speed:1000,
                infiniteLoop:true,
                buildPager: function(slideIndex){
                    console.log("bxslider Ready...");
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
            console.log("Document Ready...");
            $('.bxslider').bxSlider({
                mode: 'horizontal',
                auto: true,
                pause: 2000,
                speed:1000,
                infiniteLoop:true,
                buildPager: function(slideIndex){
                    console.log("Document Ready..."+slideIndex);
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
                },
                 onSliderLoad: function(currentIndex){
                  console.log('Slider has finished loading. Click OK to continue!');
          },
          onSlideAfter: function($slideElement, oldIndex, newIndex){
                    switch(newIndex){
                        case 0:
                            selectedImage = propertyList[0].picture.linkFront;
                            break;
                        case 1:
                            selectedImage = propertyList[0].picture.linkBack;
                            break;
                        case 2:
                            selectedImage = propertyList[0].picture.linkLeft;
                            break;
                        case 3:
                            selectedImage = propertyList[0].picture.linkRight;
                            break;
                    }
          }
            });
        })


}



