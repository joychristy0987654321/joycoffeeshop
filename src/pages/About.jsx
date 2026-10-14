import { Coffee, Heart, Leaf, Award } from "lucide-react";

export default function About() {
  return (
    <main className="page-container">
      <section className="about-hero">
        <div>
          <span className="eyebrow">OUR STORY</span>
          <h1>More than coffee.<br />It's a feeling.</h1>
          <p>
            At Bean & Brew, we believe a cup of coffee can make an ordinary
            moment special. We bring together rich flavours, warm hospitality
            and a welcoming space for everyone.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000"
          alt="Warm and welcoming coffee shop"
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT MAKES US SPECIAL</span>
            <h2>Our coffee philosophy</h2>
          </div>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <Coffee size={30} />
            <h3>Freshly Brewed</h3>
            <p>Every cup is prepared to bring out the best in every bean.</p>
          </article>

          <article className="feature-card">
            <Heart size={30} />
            <h3>Made with Love</h3>
            <p>From the first pour to the final sip, quality comes first.</p>
          </article>

          <article className="feature-card">
            <Leaf size={30} />
            <h3>Quality Ingredients</h3>
            <p>Carefully selected ingredients for a wonderful coffee experience.</p>
          </article>

          <article className="feature-card">
            <Award size={30} />
            <h3>Customer First</h3>
            <p>Your happiness is at the heart of everything we do.</p>
          </article>
        </div>
      </section>
    </main>
  );
}