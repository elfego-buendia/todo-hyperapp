import { h } from 'hyperapp';
/** @jsx h */

const Header = () => (
  <header>
    <section class="hero is-bold is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            My ToDo App
          </h1>
          <h2 class="subtitle">
            ToDo app using Hyperapp and Parcel
          </h2>
        </div>
      </div>
    </section>
  </header>
);

export default Header;
