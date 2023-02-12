const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success update product", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;

    //
    const updateProductResponse = await request
      .put("/products/811f547e-a24e-4f94-bfe1-b7ed7d11c026")
      .send({
        category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c026",
        code: "A314ASDDFIER3452",
        name: "Roti",
        price: "12000",
        cost: "10000",
        stock: "5",
      })
      .auth(token, { type: "bearer" });

    expect(updateProductResponse.body.data.name).to.eql("Roti");
    //
  });
});
