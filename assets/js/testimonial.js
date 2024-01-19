const testimonials = [
  {
    author: "Kevin",
    description: "Keren!",
    image: "assets/img/eminem.jpeg",
    rating: 4,
  },
  {
    author: "Jarwo",
    description: "Bagus sekali!",
    image: "assets/img/ye.jpeg",
    rating: 5,
  },
  {
    author: "Joko",
    description: "Lumayan Lah",
    image: "assets/img/freddy.jpeg",
    rating: 3,
  },
];

let testimonialsHTML = "";
function allTestimonial() {
  const testimonialHTML = testimonials.map((value) => {
      return `<div class="testimonial">
              <img src="${value.image}" class="profile-testimonial" />
              <p class="description">"${value.description}"</p>
              <p class="author">- ${value.author}</p>
              <p class="rating-num"> ${value.rating}<i class="fa-solid fa-star"></i></p>
          </div>`
  })
  
  document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ")
}

function filterTestimonials(rating) {
  const filteredTestimonials = testimonials.filter((value) => value.rating === rating)

  const filteredTestimonialHTML = filteredTestimonials.map((value) => {
      return `<div class="testimonial">
              <img src="${value.image}" class="profile-testimonial" />
              <p class="description">"${value.description}"</p>
              <p class="author">- ${value.author}</p>
              <p class="rating-num"> ${value.rating}<i class="fa-solid fa-star"></i></p>
          </div>`
  })

  document.getElementById("testimonials").innerHTML = filteredTestimonialHTML.join(" ")
}

allTestimonial()