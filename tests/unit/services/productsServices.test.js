const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.models");
const { findAll, findById } = require('../../../src/services/products.service')
const { allProducts, singleProduct } = require("../../mocks/products.mock");

describe("Teste de unidade de products.service", function () {
  afterEach(sinon.restore);

  it("Recuperando lista de todos os produtos", async function () {
    sinon.stub(productsModel, "findAll").resolves(allProducts);

    const result = await findAll();

    expect(result.message).to.deep.equal(allProducts);
  });

  it("Recuperando produto pelo id", async function () {
    sinon.stub(productsModel, "findById").resolves(allProducts[2]);

    const result = await findById(2);

    expect(result.message).to.deep.equal(singleProduct);
  });

  it("Retorno caso seja inserido id não númerico", async function () {
    sinon.stub(productsModel, "findById").resolves(undefined);

    const result = await findById("a");

    expect(result.type).to.equal("INVALID_VALUE");
    expect(result.message).to.equal('"id" must be a number');
  });

  it("Retorno caso seja inserido id não existente", async function () {
    sinon.stub(productsModel, "findById").resolves(undefined);

    const result = await findById(9999);

    expect(result.type).to.equal("PRODUCT_NOT_FOUND");
    expect(result.message).to.equal("Product not found");
  });
});