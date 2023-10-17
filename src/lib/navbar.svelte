<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex items-center justify-between bg-[#9bad8c] h-[6vh] min-h-[2rem] w-full text-stone-100 text-2xl">
	<a class="cursor-pointer h-full" href="/">
		<img class="h-full w-auto" src="/favicon.webp" alt="Logo" />
	</a>

	<div class="flex flex-row items-center gap-2 h-full m-2">
		<button class="h-[calc(100%_-_1rem)] bg-[#6d7a62] p-[0_1.5rem] text-stone-100 rounded cursor-pointer text-[1.1rem] hover:bg-[#626e58] transition-colors" on:click={() => goto('/login', { replaceState: false })}>Login</button>
		<button class="h-[calc(100%_-_1rem)] bg-[#6d7a62] p-[0_1.5rem] text-stone-100 rounded cursor-pointer text-[1.1rem] hover:bg-[#626e58] transition-colors" on:click={() => goto('/signup', { replaceState: false })}>Signup</button>
	</div>
</div>
