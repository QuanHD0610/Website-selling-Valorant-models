const header=document.querySelector("header")
    window.addEventListener("scroll",function(){
        x=window.pageYOffset
        if(x>0){
            header.classList.add("sticky")
        }
        else{
            header.classList.remove("sticky")
        }
    })
    const imgPositon = document.querySelectorAll(".aspect-radio-169 img")
    const imgContainer=document.querySelector('.aspect-radio-169')
    const dotItem = document.querySelectorAll('.dot');

    let index=0;
    let imgNumber = imgPositon.length
    //console.log(imgPositon)
    imgPositon.forEach(function (image, index){
        image.style.left=index*100+ "%";
        dotItem[index].addEventListener("click",function()
        {
            slider(index)
        })
    })
    function imgSlide()
    {
        index++;
        if(index>=imgNumber)
        {
            index=0;
        }
        slider(index);
    }
    function slider(index){
        imgContainer.style.left="-"+index*100+"%"
        dotItem[index].classList.add('active');
        for(let i=0;i<dotItem.length;i++)
        {
            if(i!=index)
            {
                dotItem[i].classList.remove('active');
            }
        }
    }
    setInterval(imgSlide,4000);

    const block = document.querySelectorAll(".category-left-li");
    block.forEach(function(menu,index){
        menu.addEventListener("click",function(){
            menu.classList.toggle("block")
        })
    })

    //--------------------------------product--------------
    const bigImg = document.querySelector(".product-content-left-big-img img")
    const smallImg = document.querySelectorAll(".product-content-left-small-img img")
   smallImg.forEach(function(item,index){
    item.addEventListener("click",function () {
        bigImg.src=item.src;
    })
   })
    
    
    
    const chitiet = document.querySelector(".detail")
    const baoquan = document.querySelector(".baoquan")
    if(baoquan)
    {
        baoquan.addEventListener("click",function(){
            document.querySelector(".product-content-right-bottom-content-detail").style.display="none"
            document.querySelector(".product-content-right-bottom-content-baoquan").style.display="block"
        })
    }
    if(chitiet)
    {
        chitiet.addEventListener("click",function(){
            document.querySelector(".product-content-right-bottom-content-detail").style.display="block"
            document.querySelector(".product-content-right-bottom-content-baoquan").style.display="none"
        })
    }

    const btnShow = document.querySelector(".product-content-right-bottom-top")
    if(btnShow)
    {
        btnShow.addEventListener("click", function () {
           document.querySelector("product-content-right-bottom-big").classList.toggle("activeB")
    })
    }
