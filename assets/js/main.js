const clickbutton = document.querySelectorAll('.button')
let tbody = document.querySelector('tbody')
let carrito =  []

clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem) 
});

function addToCarritoItem  (e)  {
    const button = e.target;
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent
    const itemPrice = item.querySelector('.precio').textContent
    const itemImg = item.querySelector('.card-img-top').src  
    const newItem = {
        title: itemTitle,
        price: itemPrice,
        img: itemImg,
        cantidad : 1

    }
    addItemCarrito(newItem)
}

function addItemCarrito(newItem) {
    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito() {
    console.log(carrito)
    tbody.innerHTML = ""
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add("itemCarrito")
        const Content = `
        
        <td class="table__productos">
          <img src= ${item.img} alt="">
          <h6 class="table__title my-2">${item.title}</h6>
        </td>
        <td class="table__price m-0"><p class="my-2">${item.precio}</p></td>
        <td class="table__cantidad">
          <input type="number" min="1" value="${item.cantidad}">
          <button class="delete btn btn-danger">x</button>
        </td> 
        `  
        tr.innerHTML = Content;
        tbody.appendChild(tr)
    })
}