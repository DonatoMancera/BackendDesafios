

class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const productId = this.products.length + 1
        const product = {
            id: productId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        
        this.products.push(product)
    }

    getProductById(product_id){
        const buscarId = this.products.find((product) => product.id === product_id)
        if (buscarId) {
            console.log(`Producto encontrado `)
        }else{
            console.log("Not found")
        }
    }
}

const productManager = new ProductManager()


productManager.addProduct("Manzana", "Es una maznana", "ruta", "01", "22")
productManager.addProduct("Pera", "Es unapera", "ruta", "02", "32")
productManager.addProduct("Banano", "Es u banano", "ruta", "01", "323")

const product = productManager.getProducts()

console.log(product)

productManager.getProductById(5)