const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success add product", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;

    //positive
    const addProductResponse = await request
      .post("/products")
      .send({
        category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c030",
        code: "A314ASDDFIER3452",
        name: "Yogurt",
        price: "7000",
        cost: "5000",
        stock: "10",
      })
      .auth(token, { type: "bearer" });

    expect(addProductResponse.body.message).to.eql("Product berhasil ditambahkan");
    //end positive
  });

  // negative
  it("Gagal add product dengan stok menggunakan abcde", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;

    const addProductResponse = await request
      .post("/products")
      .send({
        category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c031",
        code: "A314ASDDFIER3453",
        name: "Tisu",
        price: "16000",
        cost: "15000",
        stock: "abcde",
      })
      .auth(token, { type: "bearer" });

    expect(addProductResponse.body.status).to.eql("fail");
    expect(addProductResponse.body.message).to.eql('"stock" must be a number');
  });
  // end negative
});
