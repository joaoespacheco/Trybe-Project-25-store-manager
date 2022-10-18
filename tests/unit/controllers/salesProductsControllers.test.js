const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const salesProductsService = require("../../../src/services/sales_products.service");
const {
  createSale,
  listAllSales,
  listSalesById,
} = require("../../../src/controllers/sales_products.controller");
const { saleProducts, allSales, saleById } = require("../../mocks/products.mock");

describe("Teste de unidade de sales_products.models", function () {
  afterEach(sinon.restore);

  describe("Testes relacionados a função GET", function () {
    it("Recuperando lista de todos as vendas", async function () {
      const res = {};
      const req = {};
      const salesList = [allSales];

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesProductsService, "findAll")
        .resolves({ type: null, message: salesList });

      await listAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesList);
    })

    it("Recuperando vendas pelo id", async function () {
      const res = {};
      const req = {
        params: { id: 2 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesProductsService, "findById")
        .resolves({ type: null, message: saleById });

      await listSalesById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(saleById);
    })

    it("Retorno quando o id não existe", async function () {
      const res = {};
      const req = {
        params: { id: 2 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesProductsService, "findById")
        .resolves({ type: "SALE_NOT_FOUND", message: "Sale not found" });

      await listSalesById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: "Sale not found" });
    })

  });

  describe("Testes relacionados a função POST", function () {
    it("Cadastrando um novo produto", async function () {
      const res = {};
      const req = {
        body: saleProducts,
      };
      const currentSale = {
        id: 3,
        itemsSold: [
          {
            productId: 1,
            quantity: 1,
          },
          {
            productId: 2,
            quantity: 5,
          },
        ],
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesProductsService, "createSale")
        .resolves({ type: null, message: currentSale });

      await createSale(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(currentSale);
    });

    it("Retorno caso a quantidade for zero", async function () {
      const res = {};
      const req = {
        body: [
          {
            productId: 1,
            quantity: 0,
          },
          {
            productId: 2,
            quantity: 5,
          },
        ],
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesProductsService, "createSale").resolves({
        type: "INVALID_VALUE",
        message: '"quantity" must be greater than or equal to 1',
      });

      await createSale(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: '"quantity" must be greater than or equal to 1',
      });
    });

    it("Retorno caso a productId for inexistente", async function () {
      const res = {};
      const req = {
        body: [
          {
            productId: 999,
            quantity: 1,
          },
          {
            productId: 2,
            quantity: 5,
          },
        ],
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesProductsService, "createSale").resolves({
        type: "PRODUCT_NOT_FOUND",
        message: "Product not found",
      });

      await createSale(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: "Product not found",
      });
    });
  });
});
