class Container {
  constructor(products = []){
    this.products = products;
  }

   saveProduct(product){
    
  }

  getAll() {
    return this.products
  }

  getRandom() {

  }

  getById(id) {
    return this.products.find(product => product.id == id);
  }

  updateProduct(product) {

  }

  deleteAll(){

  }

  deleteById(id){

  }
  
}

module.exports = Container;