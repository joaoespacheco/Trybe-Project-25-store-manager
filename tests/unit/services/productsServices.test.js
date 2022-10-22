const { expect } = require("chai");
const sinon = require("sinon");

const productsModels = require("../../../src/models/products.models");
const {
  findAll,
  findById,
  createProduct,
  updateProduct,
  removeProduct,
} = require("../../../src/services/products.service");
const {
  allProducts,
  singleProduct,
  newProduct,
  newProductWithId,
  updateResult,
  deleteResult,
} = require("../../mocks/products.mock");

describe("Teste de unidade de products.service", function () {
  afterEach(sinon.restore);

  describe("Testes relacionados a função GET", function () {
    it("Recuperando lista de todos os produtos", async function () {
      sinon.stub(productsModels, "findAll").resolves(allProducts);

      const result = await findAll();

      expect(result.message).to.deep.equal(allProducts);
    });

    it("Recuperando produto pelo id", async function () {
      sinon.stub(productsModels, "findById").resolves(allProducts[2]);

      const result = await findById(2);

      expect(result.message).to.deep.equal(singleProduct);
    });

    it("Retorno quando o id é não númerico", async function () {
      sinon.stub(productsModels, "findById").resolves(undefined);

      const result = await findById("a");

      expect(result.type).to.equal("INVALID_VALUE");
      expect(result.message).to.equal('"id" must be a number');
    });

    it("Retorno quando o id não existe", async function () {
      sinon.stub(productsModels, "findById").resolves(undefined);

      const result = await findById(9999);

      expect(result.type).to.equal("PRODUCT_NOT_FOUND");
      expect(result.message).to.equal("Product not found");
    });
  });

  describe("Testes relacionados a função POST", function () {
    it("Cadastrando um novo produto", async function () {
      sinon.stub(productsModels, "insert").resolves(4);
      sinon.stub(productsModels, "findById").resolves(newProductWithId);

      const result = await createProduct(newProduct.name);

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(newProductWithId);
    });

    it("Retorno caso seja inserido um name inválido", async function () {
      sinon.stub(productsModels, "insert").resolves();
      sinon.stub(productsModels, "findById").resolves();

      const result = await createProduct("Bola");

      expect(result.type).to.equal("INVALID_VALUE");
      expect(result.message).to.equal(
        '"name" length must be at least 5 characters long'
      );
    });
  });

  describe("Testes relacionados a função PUT", function () {
    it("Atualizando informações do produto", async function () {
      sinon.stub(productsModels, "findById").resolves(newProductWithId);
      sinon.stub(productsModels, "update").resolves(updateResult);

      const result = await updateProduct(1, newProduct.name);

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(newProductWithId);
    });

    it("Retorno caso seja inserido um name inválido", async function () {
      const result = await updateProduct(1, "bola");

      expect(result.type).to.equal("INVALID_VALUE");
      expect(result.message).to.equal(
        '"name" length must be at least 5 characters long'
      );
    });

    it("Retorno caso seja inserido um id inválido", async function () {
      sinon.stub(productsModels, "findById").resolves(undefined);

      const result = await updateProduct(10, "Máscara do Máskara");

      expect(result.type).to.equal("PRODUCT_NOT_FOUND");
      expect(result.message).to.equal("Product not found");
    });
  });

  describe("Testes relacionados a função DELETE", function () {
    it("Deletando um produto", async function () {
      sinon.stub(productsModels, "remove").resolves(deleteResult);

      const result = await removeProduct(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.equal('');
    });

    it("Retorno quando o Id não existe", async function () {
      const result = await removeProduct(99);

      expect(result.type).to.equal("PRODUCT_NOT_FOUND");
      expect(result.message).to.equal("Product not found");
    });    
  });
});
