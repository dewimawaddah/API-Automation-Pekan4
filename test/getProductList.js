const request = require('supertest')
const expect = require('chai').expect

before(function(){
    
})

describe('Kasir Aja API Product', () => {
    const getResponse = request ('https://kasir-api.belajarqa.com')
    .get('/products?page=1&q=taro&withStock=true&withCategory=true&categoryId=a8851b17-9de-4c66-bc16-d4279a9a7c77')
    it('success get product list', async() => {
        expect((await getResponse).status).to.eql(200)
    })
})