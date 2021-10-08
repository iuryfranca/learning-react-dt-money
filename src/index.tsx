import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transaction: [
        {
          id: 1,
          title: "Freelancer de website",
          type: 'deposit',
          category: 'Dev',
          amount: '6000',
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 1,
          title: "Aluguel",
          type: 'withdraw',
          category: 'Casa',
          amount: '1100',
          createAt: new Date('2021-02-14 11:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transitions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transition', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
