const express = require('express');

const app = express()



app.get('/greetings/:Id', function(req, res){
    res.send(`Hello ${req.params.Id}`)
})

app.get('/roll/:num', function(req, res){
    if(isNaN(req.params.num)){
        res.send('you must give a valid number')
    } else {
        res.send(`You rolled a  ${req.params.num}`)
    }
})

app.get('/collectibles/:Id', function(req, res){
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];    
    if(req.params.Id < 0 || req.params.Id > 2){
        res.send('This item is not in stock')
    } else {
        res.send(`So you want the ${collectibles[req.params.Id].name}? For ${collectibles[req.params.Id].price} dollars it can be yours`)
    }
})

app.get('/shoes', (req, res) => {
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ]; 

    let filteredShoes = shoes;

    const minPrice = parseInt(req.query['min-price']);
    const maxPrice = parseInt(req.query['max-price']);
    const type = req.query.type;

    if (!isNaN(minPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    if (!isNaN(maxPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }

    res.json(filteredShoes);
});
app.listen(3000, function(){
	console.log("express server is listening for requests on Port:3000")
})