

class ProductManager{
    constructor(){
        this.products = []
        this.nextId = 1
    }

    getProducts(){
        return this.products
    }

    addProduct(product){

        if (!this.isProductValid(product)) {
            console.log("Error: el codigo no es valido")
            return
        }
        if (this.isDuplicate(product.code)) {
            console.log('Error: el codigo del producto ya esta en uso')
            return
        }
        product.id = this.nextId++
        this.products.push(product)
    }

    getProductById(id){
        const buscarId = this.products.find((p) => p.id === id)
        if (buscarId) {
            return buscarId
        }else{
            console.log("Not found")
        }
    }

    isProductValid(product){
        return (
            product.title && 
            product.description &&
            product.price &&
            product.thumbnail &&
            product.stock !== undefined
        )
    }

    isDuplicate(code){
        return this.products.some((p) => p.code === code)
    }
}

const productManager = new ProductManager()


productManager.addProduct({
    title: "Manzana",
    description: "Descripcion",
    price: 100,
    thumbnail: 'Ruta/imagen',
    code: "P001",
    stock: 10
})

productManager.addProduct({
    title: "Pera",
    description: "Descripcion",
    price: 200,
    thumbnail: 'Ruta/imagen2',
    code: "P002",
    stock: 11
})

const productos = productManager.getProducts()
const productos2 = productManager.getProductById()
console.log(productos)
console.log(productos2)