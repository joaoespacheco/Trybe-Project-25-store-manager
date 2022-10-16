const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const productsService = require("../../../src/services/products.service");
const {
  listAllProducts,
  listProductById,
} = require("../../../src/controllers/products.controller");
const { allProducts, singleProduct } = require("../../mocks/products.mock");

describe("Teste de unidade de products.controller", function () {
  afterEach(sinon.restore);

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
    console.log(res.json);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
});
