<script>
	import { goto } from '$app/navigation';
</script>

<div class="navbar">
	<a class="logo" href="/">
		<img src="/obg-logo-placeholder.webp" alt="Logo" />
	</a>

	<div class="buttons">
		<button on:click={() => goto('/login', { replaceState: false })}>Login</button>
		<button on:click={() => goto('/signup', { replaceState: false })}>Signup</button>
	</div>
</div>

<style lang="scss">
	$primary-color: #9bad8c;
	$secondary-color: #6d7a62;

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: $primary-color;
		height: 6vh;
		min-height: 2rem;
		width: 100%;
		color: white;
		font-size: 24px;

		.logo {
			cursor: pointer;
			height: 100%;

			img {
				height: 100%;
				width: auto;
			}
		}

		.buttons {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;
			height: 100%;
			margin: 0.5rem;
			button {
				height: calc(100% - 1rem);
				background-color: $secondary-color;
				padding: 0 1.5rem;
				color: white;
				border: none;
				border-radius: 4px;
				cursor: pointer;
				font-size: 1.1rem;

				&:hover {
					background-color: darken($secondary-color, 10%);
				}
			}
		}
	}
</style>
