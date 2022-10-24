class Container {
  constructor(products = []){
    this.products = products;
  }

   saveProduct(product){
    product.id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;    
    this.products.push(product)
    return product.id;
  }

  getAll() {
    return this.products
  }

  getRandom() {

  }

  getById(id) {
    return this.products.find(product => product.id == id);
  }

  update(productid, data) {
    const current = this.getById(productid);
    const currentIndex = this.products.indexOf(current);
    this.products[currentIndex] = {...current, ...data};
    return this.products[currentIndex]
  }

  deleteAll(){
    return this.products = [];
  }

  deleteById(id){
    this.products = this.products.filter(product => product.id != id);
    return this.products  

  }
  
}

module.exports = Container;