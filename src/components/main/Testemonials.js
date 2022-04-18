import React from 'react';
import dave from "../../img/customers/dave.jpg";
import ben from "../../img/customers/ben.jpg";
import steve from "../../img/customers/steve.jpg";
import hannah from "../../img/customers/hannah.jpg";
import gallery1 from "../../img/gallery/gallery1.jpg";
import gallery2 from "../../img/gallery/gallery2.jpg";
import gallery3 from "../../img/gallery/gallery3.jpg";
import gallery4 from "../../img/gallery/gallery4.jpg";
import gallery5 from "../../img/gallery/gallery5.jpg";
import gallery6 from "../../img/gallery/gallery6.jpg";
import gallery7 from "../../img/gallery/gallery7.jpg";
import gallery8 from "../../img/gallery/gallery8.jpg";
import gallery9 from "../../img/gallery/gallery9.jpg";
import gallery10 from "../../img/gallery/gallery10.jpg";
import gallery11 from "../../img/gallery/gallery11.jpg";
import gallery12 from "../../img/gallery/gallery12.jpg";
import "./Testemonials.css";

function Testemonials() {
  return (
    <section class="section-testimonials" id="testimonials">
        <div class="testimonials-container">
          <span class="subheading">Testimonials</span>
          <h2 class="heading-secondary">Once you try it, you can't go back</h2>

          <div class="testimonials">
            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Dave Bryson"
                src={dave}
              />
              <blockquote class="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p class="testimonial-name">&mdash; Dave Bryson</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Ben Hadley"
                src={ben}
              />
              <blockquote class="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p class="testimonial-name">&mdash; Ben Hadley</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Steve Miller"
                src={steve}
              />
              <blockquote class="testimonial-text">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p class="testimonial-name">&mdash; Steve Miller</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Hannah Smith"
                src={hannah}
              />
              <blockquote class="testimonial-text">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p class="testimonial-name">&mdash; Hannah Smith</p>
            </figure>
          </div>
        </div>

        <div class="gallery">
          <figure class="gallery-item">
            <img
              src={gallery1}
              alt="Photo of beautifully
            arranged food"
            />
            {/* <figcaption>Caption</figcaption> */}
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery2}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery3}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery4}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery5}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery6}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery7}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery8}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery9}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery10}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery11}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure class="gallery-item">
            <img
              src={gallery12}
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
        </div>
      </section>

  )
}

export default Testemonials