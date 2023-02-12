const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success get product detail", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;
    const getProductDetailResponse = await request.get("/products/5cadf7da-15fa-4848-98f6-3d86b0ebe643").auth(token, { type: "bearer" });
    expect(getProductDetailResponse.body.status).to.eql("success");
    expect(getProductDetailResponse.body.data.product.code).to.eql("A314ASDDFIER3452");
    expect(getProductDetailResponse.body.data.product.name).to.eql("Roti");
  });
});
