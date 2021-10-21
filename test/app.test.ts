import Stock from "../Stock";

jest.mock("../Stock");
it("should mock result of async function of Stock Level", async () => {
  const classInstance = new Stock();
  jest.spyOn(classInstance, "getStockLevel").mockImplementation(async () => {
      return {sku : 'SXV420098/71/68', qty : 726};
  });
});


// async/await can be used.
it('works with async/await', async () => {
    const data = await new Stock().getStockLevel('SXV420098/71/68');
    expect(data).toEqual({sku : 'SXV420098/71/68' , qty: 768});
  });
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
    await expect(new Stock().getStockLevel('SXV420098/71/68')).resolves.toEqual({sku : 'SXV420098/71/68' , qty: 768});
  });