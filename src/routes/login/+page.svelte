<div class="front-page">
	<h1>Login</h1>

	<div class="form-container">
		<div class="login-form">
			<input
				type="text"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your username"
			/>
			<input
				type="password"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your password"
			/>
			<button>Login</button>
		</div>
	</div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap');
	$primary-color: #6a787e;
	$secondary-color: #9bad8c;
	$secondary-color-dark: #6d7a62;
	$background-color: #363239;

	.front-page {
		padding: 5%;

		h1 {
			color: $primary-color;
			font-size: clamp(0vw, 3rem, 8vw);
			font-weight: 900;
			margin-bottom: 2rem;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
		}

		.form-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			max-width: 1200px;
			margin: 0 auto;

            .login-form {
				display: flex;
				flex-direction: column;
				width: 100%;
				gap: 1rem;

				input {
					border-radius: 12px;
					width: 100%;
					height: 3.2rem;
					font-size: clamp(0rem, 1.1rem, 80%);
					font-weight: 600;
					background-color: $secondary-color;
					text-align: center;
					color: white;
					border: none;
				}

				button {
					margin-top: 2rem;
					border-radius: 12px;
					padding: 1rem 1.5rem;
					font-size: 1.2rem;
					font-weight: 600;
					background-color: $secondary-color;
					color: white;
					border: none;
					cursor: pointer;
					text-transform: uppercase;

					&:hover {
						background-color: $secondary-color-dark;
					}
				}
			}
		}
	}
</style>
