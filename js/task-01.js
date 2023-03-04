const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

  
categories.forEach((category) => {
   
    const title = category.firstElementChild;
     
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
 })


