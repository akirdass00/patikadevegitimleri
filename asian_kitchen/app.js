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
];

// Butonlar??n ve men??n??n bulundu??u k??sm??n class'??nn?? se??iyoruz.
const btnContainer = document.querySelector('.btn-container')
const menuSection = document.querySelector('.section-center')



//butonu olu??turup btn de??i??keninin i??ine bootstrap'tan ald??????m??z Dark butonu yerle??tiriyoruz.
function createButton(buttonName) {
  let btn =`<button type="button" id="${buttonName}" class="btn btn-outline-dark">${buttonName}</button>`
  return btn
}
// Butona t??kland??????nda nereye ula??aca????n?? belirtiyoruz.
function addBtn() {
btnContainer.innerHTML = createButton("All") + "  " + createButton("Korea") + "  " + createButton("Japan") + "  " + createButton("China")

document.getElementById('All').addEventListener('click', addFoodAll)
document.getElementById('Korea').addEventListener('click', addFoodKorea)
document.getElementById('Japan').addEventListener('click', addFoodJapan)
document.getElementById('China').addEventListener('click', addFoodChina)

}
// Yemek listesi olu??umu. 
function foodCreate(name) {
  let item = `<div class="menu-items col-lg-6 col-sm-12">
  <img src="${name.img}" alt="${name.title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${name.title}</h4>
      <h4 class="price">${name.price}</h4>
    </div>
    <div class="menu-text">
      ${name.desc}
    </div>
  </div>`
return item
}
//Bu fonksiyon ile Yemekleri ??lkelere g??re filtreleyip kulan??c??ya g??steriyoruz.
function addFoodAll(){
menuSection.innerHTML = " "
menu.forEach(element => {
  menuSection.innerHTML += (" "+ foodCreate(element))
});
}

function addFoodKorea(){
  menuSection.innerHTML = ""
  const koreanMenu = menu.filter(x => x.category =="Korea")
  koreanMenu.forEach(element => {
    menuSection.innerHTML += (" "+ foodCreate(element))
  });
  }
  
  function addFoodJapan(){
    menuSection.innerHTML = ""
    const japanMenu = menu.filter(x => x.category == "Japan")
    japanMenu.forEach(element => {
      menuSection.innerHTML += (" "+ foodCreate(element))
    });
    }

    function addFoodChina(){
      menuSection.innerHTML = ""
      const chinaMenu = menu.filter(x => x.category =="China")
      chinaMenu.forEach(element => {
        menuSection.innerHTML += (" "+ foodCreate(element))
      });
      }
      
      window.addEventListener('load',addBtn)
      window.addEventListener('load',addFoodAll)
    

    
    
  
