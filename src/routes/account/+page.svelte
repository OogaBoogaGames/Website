<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { authStore } from '$lib/stores';
	import { base } from '$lib/api';

	let usernameElem: HTMLHeadingElement;
	let oldPasswordElem: HTMLInputElement;
	let newPasswordElem: HTMLInputElement;

	type AccoutInfo = {
		username: string;
		id: string;
	};

	let logOutStatus = 'Logout';

	const fetch_acount_info = async (auth: String): Promise<AccoutInfo> => {
		let [id, token] = auth.split(':');

		let res = await fetch(`${base}/user/info`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id,
				token
			})
		});

		if (!res.ok) {
			goto('/login', { replaceState: false });
			// User is not logged in, so we don't need to return anything

			return {
				username: 'Deleted User',
				id: '0'
			};
		}

		return await res.json();
	};

	function logOutButton() {
		if (logOutStatus === 'Logout') {
			logOutStatus = 'Confirm?';
			setTimeout(() => {
				logOutStatus = 'Logout';
			}, 3000);
		} else {
			$authStore = ':';

			goto('/login', { replaceState: false });
		}
	}

	function checkPassword() {
		let oldPassword = oldPasswordElem.value;
		let newPassword = newPasswordElem.value;

		if (oldPassword === newPassword) {
			alert('Your new password cannot be the same as your old password!');
			return;
		}

		if (newPassword.length < 6) {
			alert('Your new password must be at least 6 characters long!');
			return;
		}

		//TODO: update password in database
	}

	let account_info = {
		username: 'Deleted User',
		id: '0'
	};

	onMount(async () => {
		let auth = $authStore;
		if (!auth || auth == ':') {
			goto('/login', { replaceState: false });
			return;
		}
		account_info = await fetch_acount_info(auth);
		usernameElem.innerHTML = 'Username: ' + account_info.username;
	});
</script>

<div class="accounts-menu">
	<div class="settings">
		<h1>Account Info</h1>
		<h3 bind:this={usernameElem}>Username: Deleted User</h3>
		<br />

		<h1>Account Settings</h1>

		<div class="settings-item">
			<h3>Change Username</h3>
			<input type="text" placeholder="Epic User123" minlength="4" />
		</div>
		<div class="settings-item">
			<h3>Change Password</h3>
			<input type="password" placeholder="Old Password" bind:this={oldPasswordElem} minlength="6" />
			<input type="password" placeholder="New Password" bind:this={newPasswordElem} minlength="6" />
		</div>
		<button on:click={checkPassword}>Save Changes</button>
		<br /><br />

		<button on:click={logOutButton} class="log-out-button">{logOutStatus}</button>
	</div>
</div>

<!-- TODO: Rewrite styles in Tailwind -->

<style lang="scss">
	$primary-color: #6a787e;
	$secondary-color: #9bad8c;
	$secondary-color-dark: #6d7a62;
	$log-out-color: #c74848;

	.accounts-menu {
		width: 96%;
		height: 90%;
		backdrop-filter: blur(6.9px);
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 12px;
		overflow: scroll;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		scroll-behavior: smooth;
		color: #6a787e;

		.settings {
			margin-left: 3vw;
			margin-top: 3vh;

			.settings-item {
				gap: 0.6rem;
				display: flex;
				align-items: center;

				input {
					border-radius: 12px;
					height: 2rem;
					font-size: clamp(0rem, 1.1rem, 80%);
					font-weight: 600;
					background-color: $secondary-color;
					text-align: center;
					color: white;
					border: none;
				}
			}

			button {
				margin-top: 1rem;
				border-radius: 12px;
				padding: 1rem 1.5rem;
				font-size: clamp(0rem, 1.1rem, 80%);
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

			.log-out-button {
				background-color: $log-out-color;

				&:hover {
					background-color: darken($log-out-color, 10%);
				}
			}
		}
	}
</style>
