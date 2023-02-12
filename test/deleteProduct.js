const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success delete product", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;
    const getProductDeleteResponse = await request.delete("/products/5cadf7da-15fa-4848-98f6-3d86b0ebe643").auth(token, { type: "bearer" });
    expect(getProductDeleteResponse.body.status).to.eql("success");
    expect(getProductDeleteResponse.body.message).to.eql("Product berhasil dihapus");
  });
});
