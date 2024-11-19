document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.querySelector('.left-sidebar');
  
    
    menuIcon.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  });