<script lang="ts">
	import type { PageData } from './$types';
  
   let { data } = $props<{ data: PageData }>();
  
 
     
  </script>



 
 <nav>
    <ul class="flex justify-center gap-3">
        <li>  <a class="text-blue-500 text-sm font-semibold" href="/">Home</a></li>
        <li>  <a class="text-blue-500 text-sm font-semibold" href="/marketplace">Marketplace</a></li>
    </ul>
 </nav>
<header class="appbar">
    <h1>Hydroponics Marketplace</h1>
</header>
<main>
     <div class="marketplace">
  {#each data.items as item}
    <article>{item.name}</article>
  {/each}
</div>
</main>
<style>
    .marketplace{
        background-color: var(--brand-green-300);
        padding-block:1rem;
        text-align: center;
    }
</style>