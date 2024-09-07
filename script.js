let modalQt = 1;

const c = (e)=> document.querySelector(e); // retorna apenas o item
const cs = (e) => document.querySelectorAll(e); // retorna o item que achou


// listagem das pizzas
pizzaJson.map((item, index)=>{
   let pizzaItem = c('.models .pizza-item').cloneNode(true);
    
   pizzaItem.setAttribute('data-key', index);
   pizzaItem.querySelector('.pizza-item--img img').src = item.img;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
   pizzaItem.querySelector('a').addEventListener('click', (e)=>{
    e.preventDefault();
    let key = e.target.closest('.pizza-item').getAttribute('data-key');
   modalQt = 1;

    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

    c('.pizzaInfo--size.selected').classList.remove('selected')
    cs('.pizzaInfo--size').forEach((size, sizeIndex) =>{
        if(sizeIndex == 2) {
            size.classList.add('selected') // sempre que abrir ativar o botão grande
        }
        size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]; // acessando info das gramas da pizza

    })

    c('.pizzaInfo--qt').innerHTML = modalQt;

    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;


    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
        c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
    
   });
  
   
   c('.pizza-area').append(pizzaItem);
});

// eventos do modal 

function closeModal () {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout (() => {
    c('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal)
});

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(modalQt > 1 ) {
        modalQt--
    c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++
    c('.pizzaInfo--qt').innerHTML = modalQt;
});
cs('.pizzaInfo--size').forEach((size, sizeIndex) =>{
    size.addEventListener('click', (e) => {
        c('.pizzaInfo--size.selected').classList.remove('selected');
       size.classList.add('selected') // adicionar o proprio item
    });
});

