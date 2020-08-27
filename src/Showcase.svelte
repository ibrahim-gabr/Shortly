<style>
  .container {
    padding: 1rem;
  }
  .showcase {
    padding: 1rem;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 1rem;
    height: 25vh;
    margin-bottom: 5rem;
  }
  .showcase-img img {
    max-width: 100%;
  }
  .showcase-title {
    font-weight: 700;
    font-size: 1em;
  }
  .showcase-text {
    line-height: 1.6;
    font-weight: 500;
    color: rgb(164, 163, 168);
    margin: 0 2rem;
    font-size: 1em;
  }

  .showcase-btn button {
    background-color: var(--shorten-cyan);
    border: 1px var(--shorten-cyan);
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: white;
    letter-spacing: 0.03rem;
    font-weight: bold;
    font-size: large;
  }

  @media screen and (min-width: 540px) {
    .showcase-title {
      font-weight: 700;
      font-size: 1.3rem;
    }

    .showcase {
      height: 100%;
      padding: 1rem 7rem;
      margin: 0 auto;
    }
    .showcase-img img {
      max-width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    #showcase {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      grid-template-rows: auto;
      margin: 2rem auto;
      align-items: center;
    }
    .showcase-title {
      font-weight: 700;
      font-size: 1.7rem;
    }

    .showcase {
      padding: 2rem;
      margin: 0 auto;
      height: 50vh;
    }
    .showcase-img {
      order: 2;
      max-width: 100%;
    }
  }

  @media screen and (min-width: 1140px) {
    .showcase-title {
      font-size: 2rem;
    }
    .showcase {
      padding: 4rem;
      margin:0 auto;
    }
  }
</style>

<section>

  <div class="container" id="showcase">
    <div class="showcase-img">
      <img src="./img/illustration-working.svg" alt="" />
    </div>
    <div class="showcase">
      <div class="showcase-title">
        <h1>More than just shorter links</h1>
      </div>
      <div class="showcase-text">
        <p>
          Build your brand's recognition and get detailed insigths on how your
          links are performing
        </p>
      </div>
      <div class="showcase-btn">
        <button>Get Started</button>
      </div>
    </div>
  </div>
</section>
