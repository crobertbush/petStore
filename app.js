var shop = [
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
        description: "a tiger"
    },
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
        description: "a tiger"
    },
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
        description: "a tiger"
    },
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
        description: "a tiger"
    },
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
        description: "a tiger"
    },
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
        description: "a tiger"
    },
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
        description: "a tiger"
    },
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
        description: "a tiger"
    }
    
    ]
    
    var postHTML = " "
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="card product col-sm-6 col-md-3 col-lg-3 pb-5 ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  