class Card {
  author = "";
  image = "";
  description = "";

  constructor(author, image, description) {
    this.author = author;
    this.image = image;
    this.description = description;
  }

  set author(val) {
    this.author = val;
  }

  set image(val) {
    this.image = val;
  }

  set description(val) {
    this.description = val;
  }

  get author() {
    return this.author;
  }

  get image() {
    return this.image;
  }

  get description() {
    return this.description;
  }

  html(){}
}

class TestimonialCard extends Card {
  html() {
    return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.description}"</p>
            <p class="author">- ${this.author}</p>
        </div>`;
  }
}

const testimonialOne = new TestimonialCard(
  "Kevin",
  "assets/img/eminem.jpeg",
  "Keren!"
);
const testimonialTwo = new TestimonialCard(
  "Jarwo",
  "assets/img/ye.jpeg",
  "Bagus sekali"
);
const testimonialThree = new TestimonialCard(
  "Joko",
  "assets/img/freddy.jpeg",
  "Lumayan Lah"
);

const testimonials = [testimonialOne, testimonialTwo, testimonialThree];
let testimonialsHTML = "";

for (let index = 0; index < testimonials.length; index++) {
  testimonialsHTML += testimonials[index].html();
}

document.getElementById("testimonials").innerHTML = testimonialsHTML;
console.log(testimonials);