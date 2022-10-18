const { expect } = require("chai");
const sinon = require("sinon");

const productsModels = require("../../../src/models/products.models");
const salesModels = require("../../../src/models/sales.models");
const salesProductsModels = require("../../../src/models/sales_products.models");
const { createSale } = require("../../../src/services/sales_products.service");
const { allProducts, saleProducts } = require("../../mocks/products.mock");

describe("Teste de unidade de sales_products.service", function () {
  afterEach(sinon.restore);

  describe("Testes relacionados a função POST", function () {
    it("Cadastrando venda", async function () {
      sinon.stub(productsModels, "findAll").resolves(allProducts);
      sinon.stub(salesModels, "insert").resolves(3);
      sinon.stub(salesProductsModels, "insert").resolves();
      sinon.stub(salesProductsModels, "findById").resolves(saleProducts);

      const result = await createSale(saleProducts);

      expect(result.type).to.equal(null);
      expect(result.message).to.be.deep.equal({
        id: 3,
        itemsSold: saleProducts,
      });
    });

    it("Retorno caso a quantidade for zero", async function () {
      const result = await createSale([
        {
          productId: 1,
          quantity: 0,
        },
      ]);

      expect(result.type).to.equal("INVALID_VALUE");
      expect(result.message).to.equal(
        '"quantity" must be greater than or equal to 1'
      );
    });

    it("Retorno caso a productId for inexistente", async function () {
      sinon.stub(productsModels, "findAll").resolves(allProducts);

      const result = await createSale([
        {
          productId: 9999,
          quantity: 1,
        },
      ]);

      expect(result.type).to.equal("PRODUCT_NOT_FOUND");
      expect(result.message).to.equal("Product not found");
    });

  });
});
