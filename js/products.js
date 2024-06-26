const products = [
  {
    id: 1,
    name: "Hortifruti",
    itens: [
      {
        id: 1,
        name: "Banana",
        price: 2.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4250069-190-190?v=638144112141800000&width=190&height=190&aspect=true",
      },
      {
        id: 2,
        name: "Maçã",
        price: 3.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5176924-190-190?v=638323617929200000&width=190&height=190&aspect=true",
      },
      {
        id: 3,
        name: "Pera",
        price: 4.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4250416-190-190?v=638144112411630000&width=190&height=190&aspect=true",
      },
      {
        id: 4,
        name: "Uva",
        price: 5.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4738619-190-190?v=638238334268900000&width=190&height=190&aspect=true",
      },
      {
        id: 5,
        name: "Tomate",
        price: 6.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5146824-190-190?v=638311557953770000&width=190&height=190&aspect=true",
      },
      {
        id: 6,
        name: "Alface",
        price: 7.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4923145-190-190?v=638268609763370000&width=190&height=190&aspect=true",
      },
    ],
  },
  {
    id: 2,
    name: "Adega",
    itens: [
      {
        id: 7,
        name: "Vinho",
        price: 60.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4259425-190-190?v=638144118462530000&width=190&height=190&aspect=true",
      },
      {
        id: 8,
        name: "Cerveja",
        price: 5.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4258886-190-190?v=638144118090430000&width=190&height=190&aspect=true",
      },
      {
        id: 9,
        name: "Whisky",
        price: 150.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8446319-190-190?v=638498190577530000&width=190&height=190&aspect=true",
      },
      {
        id: 10,
        name: "Vodka",
        price: 100.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8446334-190-190?v=638498190591530000&width=190&height=190&aspect=true",
      },
      {
        id: 11,
        name: "Tequila",
        price: 80.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8446255-190-190?v=638498190516630000&width=190&height=190&aspect=true",
      },
      {
        id: 12,
        name: "Licor",
        price: 30.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8446320-190-190?v=638498190578600000&width=190&height=190&aspect=true",
      },
    ],
  },
  {
    id: 3,
    name: "Padaria",
    itens: [
      {
        id: 13,
        name: "Pão",
        price: 2.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5430775-190-190?v=638371977915300000&width=190&height=190&aspect=true",
      },
      {
        id: 14,
        name: "Bolo",
        price: 5.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5089115-190-190?v=638297664031770000&width=190&height=190&aspect=true",
      },
      {
        id: 15,
        name: "Donut",
        price: 1.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8587322-190-190?v=638513816862130000&width=190&height=190&aspect=true",
      },
      {
        id: 16,
        name: "Croissant",
        price: 3.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8446752-190-190?v=638498190976770000&width=190&height=190&aspect=true",
      },
      {
        id: 17,
        name: "Rosca",
        price: 2.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4252918-190-190?v=638144114191000000&width=190&height=190&aspect=true",
      },
      {
        id: 18,
        name: "Torta",
        price: 10.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5256751-190-190?v=638347999699270000&width=190&height=190&aspect=true",
      },
    ],
  },
  {
    id: 4,
    name: "Açougue",
    itens: [
      {
        id: 19,
        name: "Carne",
        price: 20.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5904610-190-190?v=638412765291370000&width=190&height=190&aspect=true",
      },
      {
        id: 20,
        name: "Frango",
        price: 15.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8631109-190-190?v=638520690846300000&width=190&height=190&aspect=true",
      },
      {
        id: 21,
        name: "Peixe",
        price: 30.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8446831-190-190?v=638498191049370000&width=190&height=190&aspect=true",
      },
      {
        id: 22,
        name: "Hambúrguer",
        price: 25.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8636536-190-190?v=638521699782900000&width=190&height=190&aspect=true",
      },
      {
        id: 23,
        name: "Camarão",
        price: 35.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8521658-190-190?v=638502692214170000&width=190&height=190&aspect=true",
      },
      {
        id: 24,
        name: "Filé Mignon",
        price: 40.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4916120-190-190?v=638267530607130000&width=190&height=190&aspect=true",
      },
    ],
  },
  {
    id: 5,
    name: "Mercearia",
    itens: [
      {
        id: 25,
        name: "Arroz",
        price: 10.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8446655-190-190?v=638498190892400000&width=190&height=190&aspect=true",
      },
      {
        id: 26,
        name: "Feijão",
        price: 8.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4250495-190-190?v=638144112468500000&width=190&height=190&aspect=true",
      },
      {
        id: 27,
        name: "Macarrão",
        price: 5.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4258591-190-190?v=638144117888630000&width=190&height=190&aspect=true",
      },
      {
        id: 28,
        name: "Azeite",
        price: 15.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8449069-190-190?v=638498193404770000&width=190&height=190&aspect=true",
      },
      {
        id: 29,
        name: "Sal",
        price: 2.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4250921-190-190?v=638144112783700000&width=190&height=190&aspect=true",
      },
      {
        id: 30,
        name: "Açúcar",
        price: 3.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4250583-190-190?v=638144112545030000&width=190&height=190&aspect=true",
      },
    ],
  },
  {
    id: 6,
    name: "Frios",
    itens: [
      {
        id: 31,
        name: "Queijo",
        price: 10.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4256738-190-190?v=638144116677100000&width=190&height=190&aspect=true",
      },
      {
        id: 32,
        name: "Presunto",
        price: 8.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8448205-190-190?v=638498192551670000&width=190&height=190&aspect=true",
      },
      {
        id: 33,
        name: "Salame",
        price: 5.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5904574-190-190?v=638412764776330000&width=190&height=190&aspect=true",
      },
      {
        id: 34,
        name: "Mortadela",
        price: 15.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5904573-190-190?v=638412764762900000&width=190&height=190&aspect=true",
      },
      {
        id: 35,
        name: "Iogurte",
        price: 5.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8447679-190-190?v=638498191945800000&width=190&height=190&aspect=true",
      },
      {
        id: 36,
        name: "Leite",
        price: 3.5,
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/8447157-190-190?v=638498191351470000&width=190&height=190&aspect=true",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const productsDiv = document.getElementById("products");

  if (!productsDiv) {
    console.error("Elemento #products não encontrado");
    return;
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  function createProductElement(item) {
    const productCard = document.createElement("div");
    productCard.className = "card mb-4";

    productCard.innerHTML = `
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">Preço: ${formatPrice(item.price)}</p>
          <button type="button" class="btn btn-success btn-comprar">Comprar</button>
        </div>
      `;
    return productCard;
  }

  function createCategorySection(category) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "mb-5";
    categoryDiv.id = category.name.toLowerCase();

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.name;
    categoryTitle.className = "mb-4";
    categoryDiv.appendChild(categoryTitle);

    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    category.itens.forEach((item) => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-md-2";

      const productElement = createProductElement(item);
      colDiv.appendChild(productElement);

      rowDiv.appendChild(colDiv);
    });

    categoryDiv.appendChild(rowDiv);
    return categoryDiv;
  }

  function displayProducts(products) {
    products.forEach((category) => {
      const categorySection = createCategorySection(category);
      productsDiv.appendChild(categorySection);
    });
  }

  displayProducts(products);
});
