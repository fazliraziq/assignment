import Stock from './Stock';


async function main(){
    let stock = new Stock();
    let result = await stock.getStockLevel('SXV420098/71/68');
    console.log('Result is ', result);
}

main();