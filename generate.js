  const { faker } = require('@faker-js/faker/locale/pt_BR')
  const { times } = require('lodash')
  const fs = require('fs')

  function parseDate(date) {
    date.setHours(0,0,0,0)
    return date
  }

 function createData() {
    const data = {
      transactions: times(10, function (n) {
        return {
          id: n,
          description: faker.commerce.productName(),
          type: faker.helpers.arrayElement(['revenue', 'expense']),
          category: faker.commerce.department(),
          amount: Number(faker.finance.amount(50, 1000, 0)),
          observations: faker.finance.transactionDescription(),
          paid: faker.datatype.boolean(),
          date: parseDate(faker.date.between('2023-01-01T00:00:00.000Z', '2023-02-01T00:00:00.000Z')),
          created_at: new Date(),
        }
      })
    }

    return JSON.stringify(data)
  }

  fs.writeFile('./db.json', createData(), function(err) {
    if(err) {
      return console.log(err)
    } else {
      console.log('Data generated successfully.')
    }
  })