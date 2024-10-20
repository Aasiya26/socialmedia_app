//sidebar
const menuItems = document.querySelectorAll('.menu-item');
//messages

const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelector('.message');
const messageSearch =  document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//remove acrive class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}


menuItems.forEach(item=>{
    item.addEventListener('click',() =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//messages
// search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}
messageSearch.addEventListener('keyup',searchMessage);


//highlight messages
messagesNotifications.addEventListener('click',()=> {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },2000);
})
//theme customization
const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}
const closedThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click',closedThemeModal);
theme.addEventListener('click',openThemeModal);