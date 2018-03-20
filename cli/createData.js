
const { createWriteStream } = require('fs');
const { departments } = require('../json/dept');
const { generateEmployees } = require('../data/employees');
const { generateProducts } = require('../data/products');
const { generateComputers } = require('../data/computers');
const { generateTrainingPrograms} = require('../data/trainingPrograms');
const { generateOrders} = require('../data/orders');
const { generatePaymentTypes} = require('../data/paymentTypes');
const { generateCustomers} = require('../data/customers')

let customers = generateCustomers();
let custStream = createWriteStream(`customers.json`);
custStream.write(JSON.stringify(customers));

// Then pass its length, and the product types' length, into the function to create products,
// so we can randomly assign customer and product type ids to each product
let products = generateProducts(productTypes.length, customers.length);
let prodStream = createWriteStream(`products.json`);
prodStream.write(JSON.stringify(products));
