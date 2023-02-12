const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success delete product", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;
    const getProductDeleteResponse = await request.delete("/products/fbeaf21c-141f-4a96-bbcf-18c6745a72a3").auth(token, { type: "bearer" });
    expect(getProductDeleteResponse.body.status).to.eql("success");
    expect(getProductDeleteResponse.body.message).to.eql("Product berhasil dihapus");
  });

  //start negative
  it("Success delete product dengan id tidak valid", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;
    const getProductDeleteResponse = await request.delete("/products/5cadf7da-15fa-4848").auth(token, { type: "bearer" });
    expect(getProductDeleteResponse.body.status).to.eql("fail");
    expect(getProductDeleteResponse.body.message).to.eql("id tidak valid");
  });
  //end negative
});
