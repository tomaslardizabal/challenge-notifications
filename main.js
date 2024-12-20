const markAll = document.querySelector('#markall');
const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post');


posts.forEach(post => {
    post.addEventListener('click', () =>{
        post.querySelector('.status').classList.remove('notread');
        updateNotifications();
    })
})

markAll.addEventListener('click', () => {
    const notReadElements = document.querySelectorAll('.notread');
    notReadElements.forEach(notReadElements =>{
        notReadElements.classList.remove('notread');
    })
    updateNotifications();
})

const updateNotifications = () => {
    const notReadElementsActual = document.querySelectorAll('.notread');
    numberElement.innerText = notReadElementsActual.length;
}