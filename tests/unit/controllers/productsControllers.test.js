const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const productsService = require("../../../src/services/products.service");
const {
  listAllProducts,
  listProductById,
  createProduct,
} = require("../../../src/controllers/products.controller");
const {
  allProducts,
  singleProduct,
  newProduct,
  newProductWithId,
} = require("../../mocks/products.mock");

describe("Teste de unidade de products.controller", function () {
  afterEach(sinon.restore);

  describe("Testes relacionados a função GET", function () {
    it("Recuperando lista de todos os produtos", async function () {
      const res = {};
      const req = {};
      const productsList = [allProducts];

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "findAll")
        .resolves({ type: null, message: productsList });

      await listAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsList);
    });

    it("Recuperando produto pelo id", async function () {
      const res = {};
      const req = {
        params: { id: 3 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "findById")
        .resolves({ type: null, message: singleProduct });

      await listProductById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(singleProduct);
    });

    it("Retorno caso seja inserido id não existente", async function () {
      const res = {};
      const req = {
        params: { id: 9999 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "findById")
        .resolves({ type: "PRODUCT_NOT_FOUND", message: "Product not found" });

      await listProductById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: "Product not found",
      });
    });
  });

  describe("Testes relacionados a função POST", function () {
    it("Cadastrando um novo produto", async function () {
      const res = {};
      const req = {
        body: newProduct,
      };
      const product = newProductWithId;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "createProduct")
        .resolves({ type: null, message: product });

      await createProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(product);
    });

    it("Retorno caso seja inserido um name inválido", async function () {
      const res = {};
      const req = {
        body: { name: "Bola" },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, "createProduct").resolves({
        type: "INVALID_VALUE",
        message: '"name" length must be at least 5 characters long',
      });

      await createProduct(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: '"name" length must be at least 5 characters long',
      });
    });

  });
});
