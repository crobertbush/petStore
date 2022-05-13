var shop = [
    {
        title: 'BLUE',
        image: './img/bluefood.webp',
        price: '8.90',
        description: "Organic Breakfast Treats"
    },
    {
        title: 'NATURAL NUBZ',
        image: './img/nubzfood.webp',
        price: '7.99',
        description: "Natural PB Treats"
    },
    {
        title: 'FULL MOON',
        image: './img/fullmoonfood.webp',
        price: '10.50',
        description: "Jerky Fillet Treats"
    },
    {
        title: 'CASTOR & POLLUX',
        image: './img/organixfood.webp',
        price: '9.99',
        description: "Grain Free Treats"
    },
    {
        title: "NEWMAN'S OWN",
        image: './img/newmansfood.webp',
        price: '3.50',
        description: "Canned Turkey Dinner"
    },
    {
        title: "BUTCHER'S",
        image: './img/butchersfood.webp',
        price: '2.99',
        description: "Canned Chicken & Tripe Dinner"
    },
    {
        title: 'EVOLUTION',
        image: './img/evolutionfood.webp',
        price: '4.50',
        description: "Canned Vegan Dinner"
    },
    {
        title: 'ORGANOMICS',
        image: './img/organomicsfood.webp',
        price: '5.00',
        description: "Canned Salmon & Duck Dinner"
    },
    {
        title: 'KIRKLAND',
        image: './img/kirklandfood.webp',
        price: '28.99',
        description: "Chicken & Pea Mix"
    },
    {
        title: 'ADULT',
        image: './img/annamaetfood.webp',
        price: '30.00',
        description: "Chicken & Brown Rice Mix"
    },
    {
        title: "NEWMAN'S OWN",
        image: './img/newmansfood2.webp',
        price: '25.99',
        description: "Grains & Vegetable Mix"
    },
    {
        title: 'BLUE',
        image: './img/bluefood2.webp',
        price: '23.50',
        description: "Lamb & Potato Mix"
    }
    
    ]
    
    var postHTML = " "
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card product col-sm-6 col-md-4 col-lg-3 pb-5 ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img style="height: 270px; width: 240px;" class="img-fluid" src="' + shop[i].image + '"/'
        var price = '<div><p> $' + shop[i].price + '</p></span>'
        var description = '<div><p>'+ shop[i].description + '</p><button type="button" class="btn btn-success"><img src="./img/cart-plus.svg"/> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  