// // src/App.test.js
// import { cleanup, screen } from '@testing-library/react';
// import React from 'react';
// import App from '../App';
// import renderWithRouterAndRedux from './helpers/renderWith';
// import ResponseAPI from './helpers/Mock';

// describe('testing clicks', () => {
//   // afterEach(() => jest.clearAllMocks());
//   // beforeEach(cleanup);
//   // 1° importe o mock ou crie ele aqui
//   // 2° use o spyOn para observar a chamada de alguma requisição 
//   jest.spyOn(global, 'fetch');
// // const response = await fetch('url');
// // const data = response.json()
// console.log(global.fetch);
//   // 1° forma
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(ResponseAPI),
//   });

//   // 2° forma
//   global.fetch = jest.fn(async () => ({
//     json: async () => ResponseAPI
//   }));
//   test('the page should have a button and a text 0', () => {
//     renderWithRouterAndRedux(<App />);
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//     expect(global.fetch).toHaveBeenCalledWith(
//       'https://api.thecatapi.com/v1/images/search?limit=5',
//       { headers: { Accept: 'application/json' } },
//     );
//   });
// });