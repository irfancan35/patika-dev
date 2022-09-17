const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
]

// Category types definiton (1st way)
const kitchenCategories = menu.reduce(
  function (ctgNames, menuItem) {
    if (!ctgNames.includes(menuItem.category)) {
      ctgNames.push(menuItem.category)
    }
    return ctgNames
  },
  ['All']
)

/*
// 2nd way
let kitchenCategories = ['All']
menu.forEach((menuItem) => {
  if (!kitchenCategories.includes(menuItem.category)) {
    kitchenCategories.push(menuItem.category)
  }
})

// 3rd way
let kitchenCategories = menu.map(menuItem => menuItem.category)
kitchenCategories = ['All', ...new Set(kitchenCategories)]
*/

// HTML - DOM Elements
const btnContainerDOM = document.querySelector('.btn-container')
const menuItemsDOM = document.querySelector('.section-center')


// Render Category Buttons by using Template Literals
function renderCategoryButtonsWithHTMLString() {
  const categoryBtnsHTML = kitchenCategories.map((category) => {
    return `<button class='btn btn-outline-dark btn-item' data-id=${category}>${category}</button>`
  }).join("")
  btnContainerDOM.innerHTML = categoryBtnsHTML

  // Bind event listeners to Category Buttons
  const bindCategoryButtonsListeners = () => {
    const filterBtnsDOM = document.querySelectorAll('.btn-item')
    filterBtnsDOM.forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        const categoryName = event.currentTarget.dataset.id
        // Filter menu by kitchen category
        const targetMenu = (categoryName == 'All') ? menu : menu.filter((item) => {
          return item.category === categoryName
        })
        renderMenuWithHTMLString(targetMenu)
      })
    })
  }
  bindCategoryButtonsListeners()
}

// Render Category Buttons by using DOM functions
function renderCategoryButtonsWithElementCreation() {
  // Adding Menu Buttons - with createElement
  kitchenCategories.forEach((ctgName) => {
    let categoryBtn = document.createElement('button')
    categoryBtn.classList.add('btn', 'btn-outline-dark', 'btn-item')
    categoryBtn.setAttribute('data-id', ctgName)
    categoryBtn.innerHTML = ctgName
    categoryBtn.addEventListener('click', selectCategory)
    // Append element to the DOM
    btnContainerDOM.append(categoryBtn)
  })
}

// Select Category, filter Menu, then render Menu
function selectCategory() {
  const categoryName = this.getAttribute('data-id')
  // Filter menu by kitchen category
  const targetMenu = (categoryName == 'All') ? menu : menu.filter((item) => {
    return item.category == categoryName
  })
  renderMenuWithElementCreation(targetMenu)
}

// Render Menu Items by using Template Literals
function renderMenuWithHTMLString(kitchenMenu) {
  let menuItemsHTML = kitchenMenu.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
              <img src=${item.img} alt=${item.title} class="photo">
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>`
  }).join("")
  menuItemsDOM.innerHTML = menuItemsHTML
}

// Render Menu Items by using DOM functions
function renderMenuWithElementCreation(kitchenMenu) {
  menuItemsDOM.innerHTML = ""
  kitchenMenu.forEach((menuItem) => {
    let menuItemsElement = document.createElement('div')
    menuItemsElement.classList.add('menu-items', 'col-lg-6', 'col-sm-12')

    let imageElement = document.createElement('img')
    imageElement.setAttribute('src', menuItem.img)
    imageElement.setAttribute('alt', menuItem.title)
    imageElement.classList.add('photo')

    let menuInfoElement = document.createElement('div')
    menuInfoElement.classList.add('menu-info')

    let menuTitleElement = document.createElement('div')
    menuTitleElement.classList.add('menu-title')

    let mealNameElement = document.createElement('h4')
    mealNameElement.innerHTML = menuItem.title

    let priceElement = document.createElement('h4')
    priceElement.classList.add('price')
    priceElement.innerHTML = menuItem.price

    let menuTextElement = document.createElement('div')
    menuTextElement.classList.add('menu-text')
    menuTextElement.innerHTML = menuItem.desc

    menuItemsElement.append(imageElement, menuInfoElement)
    menuInfoElement.append(menuTitleElement, menuTextElement)
    menuTitleElement.append(mealNameElement, priceElement)
    // Append element to the DOM
    menuItemsDOM.appendChild(menuItemsElement)
  })
}

/* Run functions when page is loaded */
/* 1st way: Render by using DOM functions  */
renderCategoryButtonsWithElementCreation()
renderMenuWithElementCreation(menu)

/* 2nd way: Render by using Template Literals */
// renderCategoryButtonsWithHTMLString()
// renderMenuWithHTMLString(menu)
