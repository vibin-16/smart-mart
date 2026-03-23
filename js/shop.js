// let cart = document.getElementById('productCart');

// cart.addEventListener('click',function(){
//   alert('you clicked');
// });


//let addToCartButtons = document.querySelectorAll('.addToCart');

//function addToCart(){
 // console.log('clicked');
//}

//addToCartButtons.forEach((element)=>{
 // element.addEventListener('click', addToCart);
//})

let cartButtons = document.querySelectorAll('.addToCart')

function addToCart(event){
  // console.log(event);

  let dataset = event.currentTarget.dataset;

  const product = {
    'name':dataset.name,
    'price':dataset.price
  }

  localStorage.setItem(dataset.id, JSON.stringify(product));

  console.log(localStorage);
}

cartButtons.forEach((item)=>{
  item.addEventListener('click', addToCart)
})



let deleteButtons = document.querySelectorAll('.removeCart')

function removeCart(event){
  let dataset = event.currentTarget.dataset;
  console.log(event.currentTarget);

  localStorage.removeItem(dataset.id);

  console.log(localStorage);


}

deleteButtons.forEach((item)=>{
  item.addEventListener('click', removeCart)
})