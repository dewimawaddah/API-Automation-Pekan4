const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success add product", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;

    //
    const addProductResponse = await request
      .post("/products")
      .send({
        category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c026",
        code: "A314ASDDFIER3452",
        name: "Coklat",
        price: "12000",
        cost: "10000",
        stock: "5",
      })
      .auth(token, { type: "bearer" });

    expect(addProductResponse.body.message).to.eql("Product berhasil ditambahkan");
    //
  });
});
