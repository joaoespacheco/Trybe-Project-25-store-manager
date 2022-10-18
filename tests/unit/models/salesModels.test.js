const { expect } = require("chai");
const sinon = require("sinon");

const salesModels = require("../../../src/models/sales.models");
const connection = require("../../../src/models/connection");

describe("Teste de unidade de sales.models", function () {
  afterEach(sinon.restore);
  describe("Testes relacionados a função POST", function () {
    it("Cadastrando venda", async function () {
      sinon.stub(connection, "execute").resolves([{ insertId: 3 }]);
      const result = await salesModels.insert();
      expect(result).to.equal(3);
    });
  });
});
