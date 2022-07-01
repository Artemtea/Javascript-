const tabs = document.getElementById('tabs');
const two = document.getElementById('two');
const content = document.querySelectorAll('.content');

const changeClass = el => {
  for(let i = 0; i < tabs.children.length; i++){
    tabs.children[i].classList.remove("active");
    
  }
  el.classList.add("active")  
}

const changeClass2 = el => {
  for(let i = 0; i < two.children.length; i++){
    two.children[i].classList.remove("active");
    
  }
  el.classList.add("active")  
}

tabs.addEventListener('click', e =>{
  const currTab = e.target.dataset.btn;

  if(currTab == 3){
    for(let i = 0; i < two.children.length; i++){
      two.children[i].classList.remove("none");
    }
  }else{
    for(let i = 0; i < two.children.length; i++){
      two.children[i].classList.add("none");
    }
    for(let i = 0; i < two.children.length; i++){
      two.children[i].classList.remove("active");
    }
  }

  changeClass(e.target);
  for(let i = 0; i < content.length; i++){
    content[i].classList.remove("active");
    if (content[i].dataset.content === currTab){
      content[i].classList.add("active")  
    }
  }

})

two.addEventListener('click', e =>{
  const currTab2 = e.target.dataset.two;
  changeClass2(e.target);
  for(let i = 0; i < content.length; i++){
    content[i].classList.remove("active");
    if (content[i].dataset.content === currTab2){
      content[i].classList.add("active")  
    }
  }
})

