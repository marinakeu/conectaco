const Products = {
    "item": [{
            "title": "Beija Eu",
            "artist": "Pedro Garzia",
            "image": "https://i.imgur.com/cojZbbc.png",
            "min_price": "500",
        },
        {
            "title": "Where The Crawdads Sing",
            "artist": "Delia Owens",
            "image": "https://i.imgur.com/3DPjhVy.png",
            "min_price": "800",
        }
    ]
}

const myJson = JSON.stringify(Products);
console.log(myJson);

localStorage.setItem('myjson', myJson);

function checkout(nome) {
    window.location = '../checkout/checkout.html';
    console.log(nome);    
}

function teste() {
pagarme.client.connect({ api_key: 'ak_test_xBdmMN5Q2uncFMSWAlIVFais1nGkMv' })
  .then(client => client.transactions.create({
    "amount": teste2,
    "card_number": "4111111111111111",
    "card_cvv": "123",
    "card_expiration_date": "0922",
    "card_holder_name": "Morpheus Fishburne2",
    "customer": {
        "external_id": "#3311",
        "name": "teste2",
        "type": "individual",
        "country": "br",
        "email": "mopheus@nabucodonozor.com",
        "documents": [
            {
                "type": "cpf",
                "number": "30621143049"
            }
        ],
        "phone_numbers": [
            "+5511999998888",
            "+5511888889999"
        ],
        "birthday": "1965-01-01"
    },
    "billing": {
        "name": "Trinity Moss",
        "address": {
            "country": "br",
            "state": "sp",
            "city": "Cotia",
            "neighborhood": "Rio Cotia",
            "street": "Rua Matrix",
            "street_number": "9999",
            "zipcode": "06714360"
        }
    },
    "shipping": {
        "name": "Neo Reeves",
        "fee": 1000,
        "delivery_date": "2000-12-21",
        "expedited": true,
        "address": {
            "country": "br",
            "state": "sp",
            "city": "Cotia",
            "neighborhood": "Rio Cotia",
            "street": "Rua Matrix",
            "street_number": "9999",
            "zipcode": "06714360"
        }
    },
    "items": [
        {
            "id": "r123",
            "title": "Red pill",
            "unit_price": 10000,
            "quantity": 1,
            "tangible": true
        },
        {
            "id": "b123",
            "title": "Blue pill",
            "unit_price": 10000,
            "quantity": 1,
            "tangible": true
        }
    ],
    "split_rules": [
        {
            "amount": 100,
            "recipient_id": "re_cjyg0bwpg00l7dh6dzj9ws984",
            "liable": "true",
            "charge_processing_fee": "true",
            "charge_remainder_fee": "true"
        },
        {
            "amount": 100,
            "recipient_id": "re_cjyg0bmgf00kfpb6fkbk8b5ph",
            "liable": "true",
            "charge_processing_fee": "true",
            "charge_remainder_fee": "true"
        },
        {
            "amount": 100,
            "recipient_id": "re_cjyfzsi7f00j2pb6f7aelyb4r",
            "liable": "true",
            "charge_processing_fee": "true",
            "charge_remainder_fee": "true"
        }
    ]
}))
  .then(transaction => console.log(transaction))
}



