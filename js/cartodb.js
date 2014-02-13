$(function()
{
    var
    user = "documentation",
    table = "nyc_wifi";
    lat = 40.719599,
    lng = -74.000902,
    zoom = 13;

    var cartodbMapOptions =
    {
        zoom: zoom,
        center: new google.maps.LatLng(lat, lng),
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }


    var map = new google.maps.Map(document.getElementById("map"), cartodbMapOptions);


    var map_style = 
    [{
        stylers: [{saturation: -65}, {gamma:1.52}]
    }]

    map.setOptions({styles:map_style});

    var cartoDbLayer = 
    {
        getTileUrl: function(coord, zoom)
        {
            return "https://" + user + ".cartodb.com/tiles/" + table + "/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256)
    };


    map.overlayMapTypes.insertAt(0, new google.maps.ImageMapType(cartoDBLayer));
});

