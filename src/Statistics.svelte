<script>
  import StatisticsCard from './Statistics-card.svelte'
</script>

<style>
  .container {
    max-width: 100%;
  }
  .statistics {
    text-align: center;
    background-color: rgb(240, 241, 246);
    padding: 5rem 3rem 2rem 2rem;
  }
  .statistics p {
    margin-top: 2rem;
    font-weight: 500;
    line-height: 1.8;
    color: rgb(164, 163, 168);
    text-align: center;
    font-size: large;
  }
  .statistics h3 {
    font-weight: 700;
    margin: 1rem 0;
    font-size: 28px;
    color: var(--shorten-dark-blue);
  }

  @media screen and (min-width: 940px) {
    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 2rem;
      margin-top: 2rem;
      margin-right: 4rem;
      margin-left: 4rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .cards {
      margin-right: 12rem;
      margin-left: 12rem;
    }
  }
</style>

<div class="container">
  <div class="statistics">
    <h3>Adavcned Statistics</h3>
    <p>
      track how links are performing acroos the web with our advanced statistics
      dashboard
    </p>

    <div class="cards">
      <StatisticsCard
        icon="icon-stats"
        title="Brand Recognition"
        content=" Boost your brand recognition with each click. Genric links
        don't mean a thing. Branded links help instil confidence in your content
        " />
      <StatisticsCard
        icon="icon-stats"
        title="Detailed Records"
        content=" Gain insights into who is clicking your links. Knowing when
        and where people engage with your content helps inform better decisoins.
        " />
      <StatisticsCard
        icon="icon-stats"
        title="Fully Customizable"
        content=" improve brand awareness and content discoverability through
        customizable links. supercharging audience engagement. " />

    </div>
  </div>
</div>
