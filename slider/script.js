var photos = [
    {
        name: 'Nature',
        image: 'img/0.jpg',
        link: 'https://www.pexels.com/photo/photo-of-mountain-with-ice-covered-with-black-and-gray-cloud-640781/'
    },
    {
        name: 'Tree',
        image: 'img/1.jpg',
        link: 'https://www.pexels.com/photo/green-grass-field-and-trees-1287089/'
    },
    {
        name: 'Sky',
        image: 'img/2.jpg',
        link: 'https://www.pexels.com/photo/photo-of-starry-night-1421903/'
    },
    {
        name: 'House',
        image: 'img/3.jpg',
        link: 'https://www.pexels.com/photo/white-and-red-house-surrounded-by-trees-at-night-1612351/'
    },
    {
        name: 'Forest',
        image: 'img/4.jpg',
        link: 'https://www.pexels.com/photo/body-of-water-between-green-leaf-trees-709552/'
    },
    {
        name: 'Sea',
        image: 'img/5.jpg',
        link: 'https://www.pexels.com/photo/blue-sea-under-clear-blue-sky-50594/'
    }

];

var index = 0;
var sliderCount = photos.length;
var settings = {
    duration : '1500',
    random : false
};
var interval;

init(settings); 

document.querySelector('.fa-circle-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-circle-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);

});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
     init(settings);
    })
});



function init(settings) {
  
    var prev;
    interval = setInterval(function(){
    if(settings.random){
        //random fotoğraf için
        do {
            index =  Math.floor(Math.random() * sliderCount);
        } while (index == prev); 
        prev = index;       
    }else{
        //artan index fotoğraf için
        if(sliderCount == index+1){
            index = -1;
        }
        showSlide(index);
        index++;
    }
    showSlide(index);
  },settings.duration) 
};




function showSlide(i){
    index = i;
    if(i<0){
        index = sliderCount - 1;
    }
    if(i>= sliderCount){
        index = 0;
    }
    document.querySelector('.card-title').textContent = photos[index]
    .name;
    document.querySelector('.card-img').setAttribute('src', photos
    [index].image);
    document.querySelector('.card-link').setAttribute('href',photos
    [index].link);
};


