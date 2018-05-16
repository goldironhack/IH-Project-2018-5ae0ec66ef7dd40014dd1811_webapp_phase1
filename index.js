var map;


//
var url1 = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";



function googleMapsHandler()

{


map = new google.maps.Map(document.getElementById('googleMapContainer') ,
{
  zoom: 8


}
  );
var city = "NYU Stern School";
var geocoder = new google.maps.Geocoder();

geocoder.geocode(
  {
    'address': city
  },
  function(results,status){

      if(status == google.maps.GeocoderStatus.OK){
        map.setCenter(results[0].geometry.location);
      };
    });
}






function loadData(URL){
  var data = $.get(URL,function(){} )
              .done(function(){

                tableReference= $("#nbhTable")[0];

                var newRow;
                var district;
                var neighborhood;
                var point;




                for(var i = 0; i< data.responseJSON.data.length; i++){
                  newRow = tableReference.insertRow(tableReference.rows.length);
                  district = newRow.insertCell(0);
                  neighborhood = newRow.insertCell(1);
                  point = newRow.insertCell(2);
                  district.innerHTML = data.responseJSON.data[i][16];
                  neighborhood.innerHTML =data.responseJSON.data[i][10];
                  point.innerHTML = data.responseJSON.data[i][9];
                }
                console.log(data);
              }
            )
              .fail(function(error){console.error(error)})

}









$(document).ready(
  function ()
  {
    $("loadTable").on("click", loadData(url1));
  }



)
