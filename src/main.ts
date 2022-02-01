import Stock from "./Stock";

async function main() {
  let stock = new Stock();
  try {
    let result = await stock.getStockLevel("KDM516407/46/1");
    console.log("Result is ", result);
  } catch (e) {
    console.log("Exception thrown", e);
  }
}

main();
