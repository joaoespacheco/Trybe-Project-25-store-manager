const { expect } = require("chai");
const sinon = require("sinon");

const salesProductsModels = require("../../../src/models/sales_products.models");
const connection = require("../../../src/models/connection");
const { saleProductsDb, saleProducts, allSales, saleById } = require("../../mocks/products.mock");

describe("Teste de unidade de sales_products.models", function () {
  afterEach(sinon.restore);

  describe("Testes relacionados a função GET", function () {
    it("Recuperando lista de todos as vendas", async function () {
      sinon.stub(connection, "execute").resolves([allSales]);
      const result = await salesProductsModels.findAll();
      expect(result).to.be.deep.equal(allSales);
    });

    it("Recuperando vendas pelo id", async function () {
      sinon.stub(connection, "execute").resolves([saleById]);
      const result = await salesProductsModels.findByIdWithDate(2);
      expect(result).to.be.deep.equal(saleById);
    });
  });

  describe("Testes relacionados a função POST", function () {
    it("Cadastrando venda", async function () {
      sinon.stub(connection, "execute").resolves([{ insertId: 0 }]);
      const result = await salesProductsModels.insert(1, 5, 3);
      expect(result).to.equal(0);
    });

    it("Requisitando venda por id", async function () {
      sinon.stub(connection, "execute").resolves([saleProductsDb]);
      const result = await salesProductsModels.findByIdAndColumns(1, [
        "product_id",
        "quantity",
      ]);
      expect(result).to.be.deep.equal(saleProducts);
    });
  });
});
