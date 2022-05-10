var shop = [
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    },
    {
        title: 'Food',
        image: './img/banner.avif',
        price: '3.50',
        description: "Organic Food"
    }
    
    ]
    
    var postHTML = " "
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card product col-sm-6 col-md-4 col-lg-3 pb-5 ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img class="img-fluid" src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  