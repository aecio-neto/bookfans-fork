document.querySelectorAll('.star-rating').forEach(starRating => {
  // Cria um array a partir do NodeList
  const stars = Array.from(starRating.querySelectorAll('.star')).reverse()
  // Reverse acontece por conta do css ~ siblings operator. 
  
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      // Loop adiciona click/class. 
      stars.forEach((hoveredStar, i) => {
        hoveredStar.classList.toggle('selected', i <= index)
      })
    })
  })
})