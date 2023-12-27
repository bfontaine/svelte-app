<h1>Welcome to SvelteKit</h1>

<!-- data-sveltekit-reload to prevent Svelte from trying to navigate to /search in JS -->
<form action="/search" data-sveltekit-reload>
  <input name="q" type="search" aria-label="Search" />
  <input type="submit" value="Search" />
</form>
