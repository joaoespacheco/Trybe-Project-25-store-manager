const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.models");
const connection = require("../../../src/models/connection");
const {allProducts, singleProduct} = require("../../mocks/products.mock");

describe("Teste de unidade de products.models", function () {
  afterEach(sinon.restore);

  it("Recuperando lista de todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([allProducts]);
    const result = await productsModel.findAll();
    expect(result).to.be.deep.equal(allProducts);
  });

  it("Recuperando produto pelo id", async function () {
    sinon.stub(connection, "execute").resolves([[allProducts[2]]]);
    const result = await productsModel.findById(3);
    expect(result).to.be.deep.equal(singleProduct);
  });
});