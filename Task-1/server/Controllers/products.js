const axios = require('axios');

const urlBase = 'http://20.244.56.144/test/companies';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NzgxNjI3LCJpYXQiOjE3MTg3ODEzMjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk0NjU5ZTgxLTVmMzItNGFjYi05Yjk5LTQyNWNkZDA5Y2VkZCIsInN1YiI6IjIxMDMwMzEwODI5NUBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJQYXJ1bCBVbml2ZXJzaXR5IiwiY2xpZW50SUQiOiI5NDY1OWU4MS01ZjMyLTRhY2ItOWI5OS00MjVjZGQwOWNlZGQiLCJjbGllbnRTZWNyZXQiOiJHZVpqdW5SZlZCc3RhRVlkIiwib3duZXJOYW1lIjoiS2FyYW5rdW1hciBSYWRoZXlzaHlhbSBQcmFqYXBhdGkiLCJvd25lckVtYWlsIjoiMjEwMzAzMTA4Mjk1QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsInJvbGxObyI6IjIxMDMwMzEwODI5NSJ9.MjncWrU6zkRZcmQWrbvx4wUqz8-aNiCf6i787Xy5rTg"






const headers = {
  Authorization: `Bearer ${token}`,
};





const products = async (req, res) => {
    try {
        const { companyname, categoriesname, top, minimumPrice, maximumPrice } = req.body;
        
        const response = await axios.get(`${urlBase}/${companyname}/categories/${categoriesname}/products?top=${top}&minPrice=${minimumPrice}&maxPrice=${maximumPrice}`, { headers });
        const products = response.data;

        
        products.sort((a, b) => a.rating - b.rating);
        res.json(products);
       
      } catch (error) {
        res.status(error.response.status).json(error.response.data);
      }
};





module.exports = {
    products,
};
