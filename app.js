const wrapper = document.querySelector(".sliderWrapper");
const menuitems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct = 0;

// Add Event Listeners when u click on the buttons
const product = document.querySelector('.product');
const productImg = document.querySelector('.productImg');
const productTitle = document.querySelector('.productTitle');
const productPrice = document.querySelector('.productPrice');
const productColors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll(".size");




menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        // console.log(index);
        wrapper.style.transform = `translateX(${(index)*(-100)}vw)`;
        // console.log(products[index]);
        
        // Change the product
        choosenProduct = products[index];

        // Change the texts
        productTitle.textContent = choosenProduct.title;
        productPrice.textContent = "$" + choosenProduct.price;
        productImg.src = choosenProduct.colors[0].img;

        // Change the colors
        // console.log(colors);
        productColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

productColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        productImg.src = choosenProduct.colors[index].img;
    })
})

sizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        sizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})


// Handle Payment
const payment = document.querySelector(".payment");
console.log(payment);

const handlePayment = ()=>{
  payment.style.display = "block";
}

const handleClose = ()=>{
  payment.style.display = "none";
}