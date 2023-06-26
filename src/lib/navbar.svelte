<script>
	import { goto } from '$app/navigation';
</script>

<div class="navbar">
	<div class="logo" on:click={() => goto('/', { replaceState: false })}>
		<img src="obg-logo-placeholder.png" alt="Logo" />
	</div>

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
		height: 8vh;
		width: 100%;
		color: white;
		font-size: 24px;

		.logo {
			font-weight: bold;
			cursor: pointer;

			img {
				height: 8vh;
				width: auto;
			}
		}

		.buttons {
			display: flex;
			height: 100%;
			align-items: center;
			gap: 0.5rem;
			margin: 0 0.5rem;
			button {
				height: calc(100% - 1rem);
				background-color: $secondary-color;
				padding: 0.5rem 1.5rem;
				color: white;
				border: none;
				border-radius: 4px;
				cursor: pointer;
				font-size: 1.2rem;

				&:hover {
					background-color: darken($secondary-color, 10%);
				}
			}
		}
	}
</style>
