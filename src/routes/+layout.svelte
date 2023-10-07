<script>
	import Navbar from '../lib/navbar.svelte';
</script>

<Navbar />

<div class="page-content">
	<slot />
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap');

	:global(body) {
		margin: 0;
		// Temporary background.
		background: url('https://media.discordapp.net/attachments/1121939717458514020/1122454022893338736/s.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		backdrop-filter: blur(4px);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		font-family: Poppins, sans-serif;
	}
	.page-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 96vh;
		max-height: calc(100vh - 40px);
		font-family: Poppins, sans-serif;
		overflow: auto;
		scroll-behavior: smooth;
	}
</style>
