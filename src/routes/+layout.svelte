<script>
	import Navbar from '../lib/navbar.svelte';
	import "../app.css"
</script>

<Navbar />

<div class="flex flex-col items-center justify-center h-[96vh] max-h-[calc(100vh_-_40px)] overflow-auto scroll-smooth">
	<slot />
</div>