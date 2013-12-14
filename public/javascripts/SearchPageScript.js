function showListView(){
    $('#MapDiv2').remove();
    document.getElementById('mainAside').innerHTML+='<div id=MapDiv><ul><li class=propertiesListScroll><a id=result>'
                                                    +propertyList.length+' results</a><div id=sort> Sort:<select id=mySelect onchange=priceRange()>' +
                                                    '<option value=Priceh> Price High-Low</option>' +
                                                    '<option value=Pricel> Price Low-High</option>' +
                                                    '<option value=Timen> Time - Newest-Oldest</option>' +
                                                    '<option value=Timeo> Time - Oldest-Newest</option>' +
                                                    '<option value=Bedl> Bedrooms Low-High</option>' +
                                                    '<option value=Batl> Bathrooms Low-High</option>' +
                                                    '</select></div>' +
                                                    +function priceRange(){
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
                                                    }+
                                                    '<div id=compare><a href=#>Compare</a></div>'+
                                                    '</li></ul> </div>';



}



