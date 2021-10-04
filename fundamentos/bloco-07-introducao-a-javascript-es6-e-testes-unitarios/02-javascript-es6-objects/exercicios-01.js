const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = ({order:{ delivery}, name, phoneNumber, address}) => {
  // Adicione abaixo as informações necessárias.
  let response = `Olá ${delivery.deliveryPerson}, entrega para:
  ${name}, ${phoneNumber}, ${address.street}, ${address.number}, ${address.apartment}`;
  
  
  console.log(response);
}

customerInfo(order);

const orderModifier = ({name, order}) => {
  // Adicione abaixo as informações necessárias.
  //"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  let response = `Olá ${name}, o total do seu pedido de`;
  let totalToPayPizza = 0;
  for (const pizza of Object.entries(order.pizza)) {
    console.log(pizza)
    if(totalToPayPizza === 0){
      response = `${response} ${pizza[0]},`;
    } else {
      response = `${response} ${pizza[0]} `
    }
    totalToPayPizza += pizza[1].price;
  }

  let totalToPayDrinks = 0;
  for (const drink of Object.entries(order.drinks)) {
    response = (totalToPayDrinks === 0) 
    ? response = `${response}e ${drink[1].type} `
    : response = `${response}, ${drink[1].type} `;
    totalToPayDrinks += drink[1].price;
  }

  console.log(`${response} é ${totalToPayPizza+totalToPayDrinks}`);
}

orderModifier(order);