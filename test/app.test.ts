import Stock from '../src/Stock';

describe('End to End Testing', () => {
  // checks if the response is valid
  it('should return valid result', async () => {
    const data = await new Stock().getStockLevel('SXV420098/71/68');
    expect(data).toEqual({ sku: 'SXV420098/71/68', qty: 706 });
  });

  it('should return valid result', async () => {
    const data = await new Stock().getStockLevel('KDM516407/46/14');
    expect(data).toEqual({ sku: 'KDM516407/46/14', qty: 8281 });
  });

  it('should return valid result', async () => {
    const data = await new Stock().getStockLevel('AFF976624/30/90');
    expect(data).toEqual({ sku: 'AFF976624/30/90', qty: 8404 });
  });

  it('should return valid result if SKU for stock not present', async () => {
    const data = await new Stock().getStockLevel('MDH133414/85/14');
    expect(data).toEqual({ sku: 'MDH133414/85/14', qty: 0 });
  });

  it('should not return valid result', async () => {
    const data = await new Stock().getStockLevel('AFF976624/30/90');
    expect(data).not.toEqual({ sku: 'AFF976624/30/90', qty: 845 });
  });

  // checks if the response is invalid
  it('should throw error', async () => {
    const data = new Stock().getStockLevel('SXV420098/11/11');
    const error = new Error('SKU NOT FOUND IN STOCKS & TRANSACTIONS');
    expect(data).resolves.toThrowError(error);
  });
});

describe('mocking a function', () => {
  jest.mock('../src/Stock', () => {
    return jest.fn().mockImplementation(() => {
      return {
        getStockLevel: () => {
          return { sku: 'SXV420098/71/68', qty: 706 };
        },
      };
    });
  });

  it('should return valid result', async () => {
    const data = await new Stock().getStockLevel('SXV420098/71/68');
    expect(data).toEqual({ sku: 'SXV420098/71/68', qty: 706 });
  });

  it('should not return valid result', async () => {
    const data = await new Stock().getStockLevel('AFF976624/30/90');
    expect(data).not.toEqual({ sku: 'SXV420098/71/68', qty: 706 });
  });
});
