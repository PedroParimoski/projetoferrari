//const faker = require("faker");

//const name = faker.name.firstName() + " " + faker.name.lastName();
//const email = faker.internet.email();

module.exports = {
  "Passo 1: Acessar a página de autenticação": function (browser) {
    browser
      .resizeWindow(1300, 900)
      .url("http://localhost:8080")
      .waitForElementVisible("body")
      .assert.titleContains("Ferrari - Hcode Lab")
      .assert.visible("#header > div.menu > div > a")
      .click("#header > div.menu > div > a");
  },
  "Passo 2: Tentar fazer o cadastro": function (browser) {
    browser
      .waitForElementVisible("body")
      .assert.visible("#auth-email > div.actions > a:nth-child(2)")
      .click("#auth-email > div.actions > a:nth-child(2)")
      .pause(5000)
      .end();
  },
  "Passo 3: Verificar se autenticou apos o cadastro": function (browser) {},
};
