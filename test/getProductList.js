const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Kasir Aja API Product", () => {
  it("Success get product list", async function () {
    const response = await request.post("/authentications").send({
      email: "dewi@gmail.com",
      password: "123yayaya",
    });
    const token = response.body.data.accessToken;

    const getProductListResponse = await request.get("/products").auth(token, { type: "bearer" });

    console.log(getProductListResponse.body);
  });

  //   const getResponse = request("https://kasir-api.belajarqa.com").get("/products?page=1&q=taro&withStock=true&withCategory=true&categoryId=a8851b17-9de-4c66-bc16-d4279a9a7c77");
  //   it("success get product list", async () => {
  //     expect((await getResponse).status).to.eql(200);
  //   });
});
