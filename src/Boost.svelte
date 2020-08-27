<style>
  .boost button {
    background-color: var(--shorten-cyan);
    border: 1px var(--shorten-cyan);
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: white;
    letter-spacing: 0.03rem;
    font-weight: bold;
    font-size: large;
    margin-top: 1rem;
  }
  #boost {
    background-image: url('./img/bg-boost-mobile.svg');
    background-size: cover;

    background-repeat: repeat;
    height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--shorten-dark-violet);
    color: white;
  }
  .boost {
    margin: 0 auto;
    text-align: center;
  }
  .boost h3 {
    font-size: 32px;
    font-weight: 700;
  }

  @media screen and (min-width: 540px) {
    #boost {
      background-image: url('./img/bg-boost-desktop.svg');
      height: 13rem;
    }
    .boost h3 {
      font-size: 28px;
      font-weight: 700;
    }
  }
</style>

<section id="boost">
  <div class="container boost">
    <h3>Boost your links today</h3>
    <button>Get Started</button>
  </div>
</section>
