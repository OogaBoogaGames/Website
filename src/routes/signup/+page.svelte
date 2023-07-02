<script>
	import { goto } from '$app/navigation';

	function checkSignup() {
		let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
		let confirmPassword = document.getElementById("confirmPassword").value;

		if (password != confirmPassword) {
			alert("Passwords do not match.");
			return;
		}

		if (password.length < 6) {
			alert("Password must be at least 6 characters long.");
			return;
		}

		if (username.length < 4) {
			alert("Username must be at least 4 characters long.");
			return;
		}

		//TODO: create account with provided info

		goto('/login', { replaceState: false });
    }
</script>

<div class="front-page">
	<h1>Sign Up</h1>

	<div class="form-container">
		<div class="login-form">
			<input
				type="text"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your username"
				minlength = "4"
				id = "username"
			/>
			<input
				type="password"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your password"
				minlength = "6"
				id = "password"
			/>
            <input
                type="password"
                autocapitalize="none"
                autocorrect="off"
                autocomplete="off"
                placeholder="Confirm your password"
				minlength = "6"
				id = "confirmPassword"
            />
			<button on:click={checkSignup}>Create Account</button>
		</div>
	</div>
</div>

<style lang="scss">
	$primary-color: #6a787e;
	$secondary-color: #9bad8c;
	$secondary-color-dark: #6d7a62;
	$background-color: #363239;

	.front-page {
        width: 20vw;
		padding: 5%;

		h1 {
			color: $primary-color;
			font-size: clamp(0vw, 3rem, 8vw);
			font-weight: 900;
			margin-bottom: 2rem;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
            text-align: center;
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
                    max-width: 20rem;
                    min-width: 12rem;
					height: 6vw;
                    max-height: 6.4rem;
                    min-height: 3.2rem;
                    align-self: center;
					font-size: 1.2rem;
					font-weight: 600;
					background-color: $secondary-color;
					text-align: center;
					color: white;
					border: none;
				}

				button {
                    border-radius: 12px;
                    width: 100%;
                    max-width: 20rem;
                    min-width: 12rem;
					height: 6vw;
                    max-height: 6.4rem;
                    min-height: 4.5rem;
                    align-self: center;
					margin-top: 1.5rem;
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
