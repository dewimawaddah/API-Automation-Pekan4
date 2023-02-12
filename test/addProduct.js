const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success get product list", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;

    //
    //
  });
});
