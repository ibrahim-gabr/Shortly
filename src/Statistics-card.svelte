<script>
  export let icon
  export let title
  export let content
</script>

<style>
  .icon-stats:before {
    content: '\e902';
    font-family: 'icomoon';
  }
  .card {
    background-color: white;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    margin: 6.5rem 0;
    position: relative;
    z-index: 1;
    hyphens: auto;
  }
  .card-icon {
    position: absolute;
    left: calc((100% - 6rem) / 2);
    top: -15%;
    background-color: var(--shorten-dark-violet);
    color: var(--shorten-cyan);
    font-size: 60px;
    border: 1px transparent;
    border-radius: 50%;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
  }
  .card-title {
    font-weight: 700;
    margin-top: 3rem;
    font-size: 1.5rem;
    color: var(--shorten-dark-blue);
  }
  .card-content {
    font-weight: 500;
    line-height: 1.8;
    color: rgb(164, 163, 168);
    text-align: center;
    font-size: medium;
  }

  .card::after {
    content: '';
    position: absolute;
    left: calc((100% - 1rem) / 2);
    top: 100%;
    width: 1rem;
    height: 5rem;
    z-index: 10;
    background-color: var(--shorten-cyan);
  }
  .card:last-of-type::after {
    content: '';
    position: absolute;
    background-color: transparent;
  }

  @media screen and (min-width: 940px) {
    .card {
      height: 25rem;
      padding: 2rem;
    }
    .card-icon {
      left: 2rem;
    }
    .card:nth-last-of-type(2) {
      margin-top: 9rem;
    }
    .card:nth-last-of-type(1) {
      margin-top: 12rem;
    }
    .card:nth-last-of-type(2)::after {
      left: 100%;
      top: 10.3rem;
      width: 5rem;
      height: 1rem;
      z-index: -1;
      background-color: var(--shorten-cyan);
    }
    .card-content,
    .card-title {
      text-align: left;
    }
    .card-title {
      font-size: 1.2rem;
    }
    .card::after {
      left: 100%;
      top: 50%;
      width: 5rem;
      height: 1rem;
      z-index: -1;
      background-color: var(--shorten-cyan);
    }
  }

  @media screen and (min-width: 1200px) {
    .card {
      height: 20rem;
    }
  }
</style>

<div class="card">
  <div class="card-icon">
    <span class={icon} />
  </div>

  <div class="card-title">
    <h3>{title}</h3>
  </div>

  <div class="card-content">
    <p>{content}</p>
  </div>
</div>
