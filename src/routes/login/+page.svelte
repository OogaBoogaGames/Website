<script>
	import { goto } from '$app/navigation';

	function checkLogin() {
		let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

		//TODO: Check if password is correct
		//if (password != passwordHash) {
		//	alert("Passwords do not match.");
		//	return;
		//}

		if (password.length < 6) {
			alert("Passwords are at least 6 characters long.");
			return;
		}

		if (username.length < 4) {
			alert("Usernames are at least 4 characters long.");
			return;
		}

		//TODO: login to account with provided info

		goto('/', { replaceState: false });
	}
</script>

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
				id = "username"
			/>
			<input
				type="password"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your password"
				id = "password"
			/>
			<button on:click={checkLogin}>Login</button>
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
        max-width: 1200px;
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
                    min-width: 10rem;
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
					margin-top: 1.5rem;
					border-radius: 12px;
					padding: 1rem 1.5rem;
                    font-size: 1.2rem;
					font-weight: 600;
                    width: 100%;
                    max-width: 20rem;
                    min-width: 10rem;
					height: 6vw;
                    max-height: 6.4rem;
                    min-height: 3.2rem;
                    align-self: center;
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
