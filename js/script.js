/******************************************
Treehouse Techdegree:
Matthew George
FSJS project 2 - List Filter and Pagination
******************************************/
   
//Declare Global variables for the DOM elements
const mainDiv = document.querySelector('.page');
const ulListChildren = document.querySelector('.student-list').children;
const itemsPerPage = 10;


// Create function to show hide all of the items in the list except for 10 items per page 
const showPage = (list,page) => { 
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage) - 1;  
   for (let i = 0; i < list.length; i ++){
      if (i >= startIndex && i <= endIndex ) {
         list[i].style.display = '';
      }else {
         list[i].style.display = 'none';
      }
   }
};

// Create function to generate, append and add functionality to the pagination buttons.

const appendPageLinks = (list) => {
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   mainDiv.appendChild(paginationDiv);
   const ul = document.createElement('ul');
   const li = ul.children;
   paginationDiv.appendChild(ul);
   const numOfPages = Math.ceil(list.length / itemsPerPage);

   //Code to create pagination HTML dynamically
   for (let i = 0; i < numOfPages; i ++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      if (i === 0) {
         a.className = 'active';
      }
      ul.appendChild(li);
      li.appendChild(a);
      a.href = '#';
      a.textContent = i + 1;
      aNumText = a.textContent; 
   }    
  
  
  // Code to make the target page active
  const links = document.querySelectorAll('a');  
  for(i = 0; i < links.length; i++) {
    let link = links[i];
    // Make only the selected link active
    link.addEventListener('click', (e) => {    
      for(i = 0; i < links.length; i++) {
        if (links[i].innerHTML == e.target.innerHTML) {
          links[i].className = 'active'
        } else {
          links[i].className = ''
        }
      }
      showPage(ulListChildren, e.target.innerHTML);
    });
  }
};

// Function call to show and create pagination buttons
showPage(ulListChildren,1);
appendPageLinks(ulListChildren);