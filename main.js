////// nút chuyển trang fan page
var imgins = document.querySelector('.img-ins')
var imgfb = document.querySelector('.img-fb')
imgins.addEventListener('click', function(){
    location.assign("https://www.instagram.com/");
})
imgfb.addEventListener('click', function(){
    location.assign("https://www.facebook.com/HaThanhMoblie")
})

////// Nút trang chủ

// var btntrangchu = document.getElementById('btn-trangchu')
// btntrangchu.addEventListener('click', function(){
//     var a = location.assign("")
// })
// console.log(a)


////// Thiết kế danh mục
var hamDrop = document.querySelector(".btn-dropdown-danhmuc")
hamDrop.addEventListener('click', function(){
    var hamDropdown = document.querySelector(".noidung-dropdown")
    hamDropdown.classList.toggle('hienthi')
})

// function hamDropdown() {
//     document.querySelector(".noidung-dropdown").classList.toggle("hienthi");
//    }
   
window.onclick = function(e) {
    if (!e.target.matches('.btn-dropdown-danhmuc')) {
     var noiDungDropdown = document.querySelector(".noidung-dropdown");
       if (noiDungDropdown.classList.contains('hienthi')) {
         noiDungDropdown.classList.remove('hienthi');
       }
     }
   }


   //Banner

var imgBanner = document.querySelector('.img-banner')
var listImg = document.querySelectorAll('.list-img img')
var btnleft = document.querySelector('.img-left')
var btnright = document.querySelector('.img-right')

var currentIndex = 0;

function updateImgByIndex(index){
  document.querySelectorAll('.list-img div').forEach(function(item){
    item.classList.remove('active')
  })


  currentIndex = index
  imgBanner.src = listImg[index].getAttribute('src')
  listImg[index].parentElement.classList.add('active')
}


listImg.forEach(function(imgElement, index){
  imgElement.addEventListener('click', function(){
    imgBanner.style.opacity = '0'
    
    setTimeout(function(){
      updateImgByIndex(index)
      imgBanner.style.opacity = '1'
    },500)
    
    // setTimeout(function(){
      
    //   imgBanner.style.opacity = '1'
    // },2000)
  })
})

btnleft.addEventListener('click', function(){

  if (currentIndex == 0){
    currentIndex = listImg.length - 1
  }
  else{
    currentIndex--
  }
  imgBanner.style.animation = ''
  updateImgByIndex(currentIndex)
  setTimeout(function(){
    imgBanner.style.animation = 'flash 0.8s ease-in'
  })
})

btnright.addEventListener('click', function(){
  if (currentIndex == listImg.length - 1){
    currentIndex = 0
  }
  else{
    currentIndex++
  }
  imgBanner.style.animation = ''
  updateImgByIndex(currentIndex)
  setTimeout(function(){
    imgBanner.style.animation = 'flash 0.8s ease-in'
  })

})

updateImgByIndex(0)




var dangky = document.querySelector('.btn-dangki')
dangky.addEventListener('click', function(){
  location.assign('http://127.0.0.1:5500/Register.html')
})

var dangnhap = document.querySelector('.btn-dangnhap')
dangnhap.addEventListener('click', function(){
  location.assign('http://127.0.0.1:5500/Login.html')
})






   