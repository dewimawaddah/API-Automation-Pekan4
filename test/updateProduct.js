const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success update product", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;

    //start positive
    const updateProductResponse = await request
      .put("/products/53c9fecb-c1f7-4bad-b8a5-9de5bfae4485")
      .send({
        category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c030",
        code: "A314ASDDFIER3452",
        name: "Yakult",
        price: "13000",
        cost: "12000",
        stock: "20",
      })
      .auth(token, { type: "bearer" });

    expect(updateProductResponse.body.data.name).to.eql("Yakult");
    //end positive
  });

  //start negative
  it("Failed update product dengan code kosong", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;

    const updateProductResponse = await request
      .put("/products/53c9fecb-c1f7-4bad-b8a5-9de5bfae4485")
      .send({
        category_id: "811f547e-a24e-4f94-bfe1-b7ed7d11c045",
        code: "",
        name: "Yakult",
        price: "13000",
        cost: "12000",
        stock: "20",
      })
      .auth(token, { type: "bearer" });

    expect(updateProductResponse.body.status).to.eql("fail");
    expect(updateProductResponse.body.message).to.eql('"code" is not allowed to be empty');
  });
  //end negative
});
