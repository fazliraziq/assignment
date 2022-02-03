import Stock from './Stock';

async function main() {
  let stock = new Stock();
  try {
    let result = await stock.getStockLevel('MRP846986/84/16');
    console.log('Result is ', result);
  } catch (e) {
    console.log('Exception thrown', e);
  }
}
main();
