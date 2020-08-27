<style>
  #footer {
    background-color: var(--shorten-very-dark-violet);
    color: white;
    text-align: center;
  }
  ul {
    list-style: none;
  }
  ul a {
    text-decoration: none;
    color: white;
  }

  .footer h3 {
    padding: 2rem 0;
    font-size: 32px;
  }

  #footer .footer span {
    margin-top: 1.5rem;
    padding-bottom: 1rem;
    display: block;
    font-size: large;
  }
  #footer .footer ul li {
    margin: 0.5rem 0;
  }
  #footer .footer ul li a {
    color: rgb(188, 186, 189);
    font-size: medium;
  }
  #footer .footer ul li a:hover {
    color: var(--shorten-cyan);
  }
  .social ul {
    display: inline-flex;
    width: 40%;
    justify-content: space-between;
    margin: 1.5rem 0;
  }
  @media screen and (min-width: 540px) {
    .footer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      padding: 3rem 0;
    }
    .social ul {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (min-width: 768px) {
    .social ul {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      margin-right: auto;
      align-items: center;
    }
    .social ul li {
      padding-right: 0.5rem;
    }
    .footer {
      grid-template-columns: 1fr 1fr 1fr 1fr 1.5fr;
      column-gap: 0.5rem;
    }
  }
</style>

<section id="footer">
  <div class="footer container">
    <div>
      <h3>Shortly</h3>
    </div>

    <div>
      <span>Features</span>
      <ul>
        <li>
          <a href="#">Link Shortening</a>
        </li>
        <li>
          <a href="#">Branded Links</a>
        </li>
        <li>
          <a href="#">Analytics</a>
        </li>
      </ul>
    </div>

    <div>
      <span>Resources</span>
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Developers</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </div>

    <div>

      <span>Company</span>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>

    <div class="social">
      <ul>
        <li>
          <a href="#">
            <img src="./img/icon-facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./img/icon-twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./img/icon-pinterest.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./img/icon-instagram.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
