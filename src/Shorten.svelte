<script>
  import App from './App.svelte'
  import CopyToClipboard from "./CopyToClipboard.svelte";
  let copiedText = ''
  export let link
  export let shortLink
  import { db } from './firebase.js'
  import { onMount, getContext ,afterUpdate} from 'svelte'
  export let responseAxios
  import axios from 'axios'
  import Navbar from './Navbar.svelte'
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
    import {userinfo} from './store'
    let user 
    let uid
    userinfo.subscribe(value => {
      user = value
    if(user)
    {
        uid = user.uid
            getItems()

      }
    })

  export let links = []
  function getItems() {
    let itemres = []
    db.collection('links').where('uid', '==', user.uid)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const result = {
            id: doc.id,
            link: doc.data().link,
            shortLink: doc.data().shortLink,
          }
          itemres.push(result)
        })
        links = itemres
      })
  }

  async function shortenbtn() {
    

    const axioslink =
      'https://cu8.in/api/' + '?action=short&urls=|' + link + '|'
    await axios
      .get(axioslink)
      .then(function (response) {
        responseAxios = JSON.parse(response.request.response)
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {
        shortLink = responseAxios.data.shortUrl.secure
      })

    addItemDb()
  }

  const addItemDb = () => {
    if (link != null) {
      db.collection('links').add({uid , link, shortLink })
      getItems()
    } 
  }


    onMount(async () => {
    if(user){
      await getItems()
    }
    
  
  })
</script>

<style>
  .shorten-result ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding: 0.5rem 0.75rem;
    margin-top: 1rem;
  }
  .shorten-result {
    padding: 2rem 4rem;
    width: 90%;
    margin: 0 auto;
  }
  .shorten-action button {
    margin-left: 2rem;
  }
  #shorten {
    background-image: url(./img/bg-shorten-mobile.svg);
    background-size: cover;
    background-position: 10px;
    background-repeat: no-repeat;
    height: 12rem;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--shorten-dark-violet);
    border: 1px transparent;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto;
  }
  .container {
    max-width: 100%;
    margin-top: 3rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 36%,
      rgba(240, 241, 246, 1) 100%
    );
  }
  #shorten button {
    background-color: var(--shorten-cyan);
    border: 1px var(--shorten-cyan);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: white;
    letter-spacing: 0.03rem;
    font-weight: bold;
    height: 48px;
    font-size: larger;
  }
  .shorten-action button {
    background-color: var(--shorten-cyan);
    border: 1px var(--shorten-cyan);
    padding: 0.25rem 1rem;
    border-radius: 8px;
    color: white;
    letter-spacing: 0.03rem;
    font-weight: bold;
    font-size: medium;
  }

  #shorten input {
    padding: 0.3rem;
    height: 48px;
  }
  #shorten input::placeholder {
    color: rgb(164, 163, 168);
    font-size: large;
  }
  @media screen and (min-width: 768px) {
    .shorten-result ul li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    #shorten {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 6rem;
      align-items: center;
      column-gap: 2rem;
      width: 80%;
      padding-top: 1rem;
    }
  }
</style>

<div class="container" >
  <section id="shorten">
    <input type="text" placeholder="Shorten a link here..." bind:value={link} />
    <button on:click={shortenbtn}>Shorten It!</button>
  </section>
  {#if user}
  <div class="shorten-result">
    <ul>
      {#each links as link}
        <li>
          {link.link}
          <div class="shorten-action">
            {link.shortLink}
            <CopyToClipboard text={link.shortLink} on:copy={() => copiedText = link.shortLink} let:copy>
              <button on:click={copy}>
              {#if copiedText == link.shortLink}
              Copied
              {:else}
              Copy
              {/if}
              </button>
           </CopyToClipboard>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  {/if}
</div>
