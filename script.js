const products = [
  {
    id: 1,
    description: "Elegantes Chesterfield-Sofa",
    price: 3500,
    category: "sofa",
    img: "sofa.png"
  },
  {
    id: 2,
    description: "Rustikaler Esstisch aus Eiche",
    price: 1200,
    category: "tisch",
    img: "sofa.png"
  },
  {
    id: 3,
    description: "Ergonomischer Bürostuhl 'ComfortPro'",
    price: 450,
    category: "stuhl",
    img: "sofa.png"
  },
  {
    id: 4,
    description: "Moderner Bücherregal 'Bibliophile'",
    price: 800,
    category: "regal",
    img: "sofa.png"
  },
  {
    id: 5,
    description: "Stilvolle Wohnlandschaft 'CosyCorner'",
    price: 2500,
    category: "sofa",
    img: "sofa.png"
  },
  {
    id: 6,
    description: "Design-Nachttisch 'Natura'",
    price: 300,
    category: "tisch",
    img: "sofa.png"
  },
  {
    id: 7,
    description: "Eleganter TV-Schrank 'MediaMaster'",
    price: 950,
    category: "schrank",
    img: "sofa.png"
  },
  {
    id: 8,
    description: "Klassischer Kleiderschrank 'Heritage'",
    price: 2000,
    category: "schrank",
    img: "sofa.png"
  },
  {
    id: 9,
    description: "Stylischer Schreibtisch 'WorkNest'",
    price: 1100,
    category: "tisch",
    img: "sofa.png"
  },
  {
    id: 10,
    description: "Vintage-Kommode 'ChicAntique'",
    price: 700,
    category: "schrank",
    img: "sofa.png"
  },
];


const productCard = document.querySelector('#product-card');
const productFilter = document.querySelector('#product-filter')


function renderProducts(arr = products) {
  arr.forEach(({id, description, price, category, img}) => {
    productCard.innerHTML += `
      <div class="product" data-product-id="${id}"  data-product-category="${category}">
        <div class="img-container">
          <img src="${img}" alt="Sofa" srcset="">  
        </div>
        <div class="description-container">
          <p class="description">${description}</p>
          <p class="price">${price}$</p>
          <button class="add-to-cart-btn">Zum Warenkorb</button>
        </div>
      </div>
    `
  })
}
renderProducts()

productFilter.addEventListener('change', (e) => {
  productCard.innerHTML = "";
  switch (e.target.value) {
    case "tisch":
      renderProducts(products.filter(product => product.category === "tisch"))
      break;
    case "schrank":
      renderProducts(products.filter(product => product.category === "schrank"))
      break
    case "regal":
      renderProducts(products.filter(product => product.category === "regal"))
      break;
    case "stuhl":
      renderProducts(products.filter(product => product.category === "stuhl"))
      break
    case "deko":
      renderProducts(products.filter(product => product.category === "deko"))
      break;
    default:
      renderProducts();
  }
})



