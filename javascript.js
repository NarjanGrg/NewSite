const readMoreBtn = document.querySelector ('.read-more-btn');
const pcontent = document.querySelector ('.pcontent');
const loadMoreBtn = document.querySelector('.load-img');
const more = document.querySelector('.more');
readMoreBtn.addEventListener ('click',(e)=> {
  pcontent.classList.toggle ('show-more');
  if(readMoreBtn.innerText === "Read More"){
    readMoreBtn.innerText = "Read Less";
  }
  else{
    readMoreBtn.innerText = "Read More";
  }
});

loadMoreBtn.addEventListener ('click', (e)=> {
  more.classList.toggle('more-img');
  if(loadMoreBtn.innerText === "Load More"){
    loadMoreBtn.innerText = "Load Less";
  }
  else{
    loadMoreBtn.innerText = "Load More";
  }
});
