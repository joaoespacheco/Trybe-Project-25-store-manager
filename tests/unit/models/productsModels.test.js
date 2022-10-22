const { expect } = require("chai");
const sinon = require("sinon");

const productsModels = require("../../../src/models/products.models");
const connection = require("../../../src/models/connection");
const {
  allProducts,
  singleProduct,
  newProduct,
  updateResult,
  deleteResult,
} = require("../../mocks/products.mock");

describe("Teste de unidade de products.models", function () {
  afterEach(sinon.restore);

  describe("Testes relacionados a função GET", function () {
    it("Recuperando lista de todos os produtos", async function () {
      sinon.stub(connection, "execute").resolves([allProducts]);
      const result = await productsModels.findAll();
      expect(result).to.be.deep.equal(allProducts);
    });

    it("Recuperando produto pelo id", async function () {
      sinon.stub(connection, "execute").resolves([[allProducts[2]]]);
      const result = await productsModels.findById(3);
      expect(result).to.be.deep.equal(singleProduct);
    });
  });

  describe("Testes relacionados a função POST", function () {
    it("Cadastrando um novo produto", async function () {
      sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);
      const result = await productsModels.insert(newProduct);
      expect(result).to.equal(4);
    });
  });

  describe("Testes relacionados a função PUT", function () {
    it("Atualizando informações do produto", async function () {
      sinon.stub(connection, "execute").resolves([updateResult]);
      const result = await productsModels.update(1, "Martelo do batman");
      expect(result).to.equal(updateResult);
    });
  });

  describe("Testes relacionados a função DELETE", function () {
    it("Deletando um produto", async function () {
      sinon.stub(connection, "execute").resolves([deleteResult]);
      const result = await productsModels.remove(1);
      expect(result).to.equal(deleteResult);
    });
  });
});
