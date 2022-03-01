var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Order {
        id: String
    }

    type Invoice {
        name: String
        tracking: String!
        orders: [Order]
    }

    type Query {
        invoice(status: String): Invoice
    }
`);

class Order {
    id() {
        return 'ids-ids-ids-ids'
    }
}

class Invoice {
    tracking;

    constructor({ tracking }) {
        this.tracking = tracking;
    }

    name() {
        return 'Invoice'
    }

    tracking() {
        return this.tracking || 'not found'
    }

    orders() {
        return [
            new Order()
        ]
    }
}

const root = {
    invoice({ status }) {
        const invoiceTracking = {
            'CREATED': 123,
            'CANCELED': 456
        };

        return new Invoice({
            tracking: invoiceTracking[status]
        })
    }
}

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
