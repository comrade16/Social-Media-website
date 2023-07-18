// sidebar 
const menuitems = document.querySelectorAll('.menu-item');

// messagess
const messagesNotifications = document.querySelector('#Message-notifacation');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');



// theme 
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');


// background

const bg1= document.querySelector('.bg-1');
const bg2= document.querySelector('.bg-2');
const bg3= document.querySelector('.bg-3');


const colorpalette = document.querySelectorAll('.choose-color span');

// remove active class for all menu-item 
const changeActiveItem = () =>{
    menuitems.forEach(item =>{
        item.classList.remove('active');
    });
};


menuitems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display='none';
        }
        else{
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    });
});


//   messagess ................

// searches chats ...
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    });
};
// search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlighting message card when message is clicked
messagesNotifications.addEventListener('click' , ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notification-count').style.display = 'none';

    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },2000);
});


// theme customization...............

// open model
const openThemeModel = () =>{
   themeModel.style.display = 'grid';
};

// closeThemeModel

const closeThemeModel = (e) =>{
   if(e.target.classList.contains('customize-theme')){
       themeModel.style.display = 'none';
   }
};
// close model
themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);


// FONTS


  const removesizeselector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
  }
fontSizes.forEach(size =>{
    
    size.addEventListener('click', () => {
        removesizeselector();
        let fontsize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontsize='10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontsize='13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontsize='16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontsize= '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontsize='22px';
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-right','-35rem');
        }
        //  CHANGE FONT SIZE OF ROOT ELEMENT 
       document.querySelector('html').style.fontSize=fontsize;

    })

})


//  CHANGR PRIMARY COLOR

// REMOVE CLASS ACTIVE
const changeactivecolorclass = () =>{
       colorpalette.forEach(colorpikker =>{
           colorpikker.classList.remove('active');
       })
}

// CHANGE PRIMARY COLOR
colorpalette.forEach(color => {

    color.addEventListener('click',()=>{
        changeactivecolorclass();
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue = 252;      
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active'); 
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})


//  CHANGE BACKGROUND

let lightcolorlightness;
let darkcolorlightness;
let whitecolorlightness;

const changebg = ()=>{
    root.style.setProperty('--color-light-lightness', lightcolorlightness);
    root.style.setProperty('--color-dark-lightness', darkcolorlightness);
    root.style.setProperty('--color-white-lightness', whitecolorlightness);
}
bg2.addEventListener('click', ()=>{
    darkcolorlightness='95%';
    whitecolorlightness='20%';
    lightcolorlightness='15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changebg();
})

bg3.addEventListener('click', ()=>{
    darkcolorlightness='95%';
    whitecolorlightness='10%';
    lightcolorlightness='0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changebg();
})

bg1.addEventListener('click', ()=>{

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changebg();
})





