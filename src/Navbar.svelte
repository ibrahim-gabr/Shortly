<script>
  import { auth, googleProvider } from './firebase'
  import { authState } from 'rxfire/auth'
  import { createEventDispatcher, setContext } from 'svelte'
    import {userinfo} from './store'

  let user
  let displayName
  let photoURL
  const unsubscribe = authState(auth).subscribe((u) => (user = u))
  async function login() {
    await auth.signInWithPopup(googleProvider)
        userinfo.update(value => {
          value = user
      return value = user
    })
  }
  async function logout() {
    await auth.signOut()
        userinfo.update(value => {
          value = null
      return value = null
    })
  }

</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  .nav-items {
    display: none;
  }
  .nav-btn {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .nav-items {
      display: block;
    }
    .nav-items ul {
      list-style: none;
      display: flex;

      margin-left: 2rem;
    }
    .nav-items ul a {
      text-decoration: none;
      color: rgb(153, 155, 150);
      margin-left: 1rem;
    }
    .nav-title {
      display: flex;
      align-items: center;
    }
    .nav-btn {
      display: block;
      margin: 0 1rem;
    }
    .nav-menu {
      display: flex;
      align-items: center;
    }
    .nav-menu button {
      margin: 0 0.5rem;
      padding: 0.5rem;
      color: rgb(153, 155, 150);
      border: 1px transparent;
      border-radius: 15px;
      background-color: white;
    }

    .nav-menu button:last-child {
      margin: 0 0.5rem;
      padding: 0.5rem 1rem;
      background-color: var(--shorten-cyan);
      color: white;
      border: 1px transparent;
      border-radius: 15px;
    }

    .menu-icon {
      display: none;
    }
  }
</style>

<div class="container">
  <nav>
    <div class="nav-title">
      <div class="title">
        <h1>Shortly</h1>
      </div>
      <div class="nav-items">
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="nav-menu">
      <div class="nav-btn">
        {#if user}
          <span>Hi {user.displayName}</span>
          <button class="Logout" on:click={logout}>Logout</button>
        {:else}
          <button class="login" on:click={login}>Login</button>
          <button class="signup" on:click={login}>Signup</button>
        {/if}
      </div>
      <span class="menu-icon">
        <i class="fa fa-bars" />
      </span>

    </div>
  </nav>
</div>
