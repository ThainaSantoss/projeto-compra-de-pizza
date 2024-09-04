const c = (e)=> document.querySelector(e); // retorna apenas o item
const cs = (e) => document.querySelectorAll(e); // retorna o item que achou

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
   

    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    c


    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
        c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
    
   });
  
   
   c('.pizza-area').append(pizzaItem);
});


