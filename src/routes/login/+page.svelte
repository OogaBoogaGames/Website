<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$lib/api';
	import { authStore } from '$lib/stores';

	let usernameElem: HTMLInputElement;
	let passwordElem: HTMLInputElement;

	function checkLogin() {
		let username = usernameElem.value;
		let password = passwordElem.value;

		if (password.length < 6) {
			alert('Passwords are at least 6 characters long.');
			return;
		}

		if (username.length < 4) {
			alert('Usernames are at least 4 characters long.');
			return;
		}

		fetch(`${base}/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		}).then(async (res) => {
			if (res.ok) {
				let data = await res.json();
				$authStore = data.id + ':' + data.token;
				goto('/account', { replaceState: false });
			} else {
				alert('Invalid username or password.');
				goto('/', { replaceState: false });
			}
		});
	}
</script>

<div>
	<h1
		class="text-gray-500 text-5xl font-black mb-8 text-center [text-shadow:_2px_2px_4px_rgba(0_0_0_/40%)]"
	>
		Login
	</h1>

	<div class="flex justify-between items-center w-full max-w-[1200px]">
		<div class="flex flex-col w-full gap-4">
			<input
				type="text"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your username"
				minlength="4"
				bind:this={usernameElem}
				class="rounded-lg w-full max-w-xs self-center text-xl font-semibold h-[10vh] max-h-[6.4rem] min-h-[3.2rem] min-w-[10rem] bg-[#9bad8c] text-center text-stone-100 placeholder-stone-300"
			/>
			<input
				type="password"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your password"
				minlength="6"
				bind:this={passwordElem}
				class="rounded-lg w-full max-w-xs self-center text-xl font-semibold h-[10vh] max-h-[6.4rem] min-h-[3.2rem] min-w-[10rem] bg-[#9bad8c] text-center text-stone-100 placeholder-stone-300"
			/>
			<button
				class="px-4 py-6 mt-6 rounded-lg text-xl font-semibold w-full max-w-xs self-center text-stone-100 cursor-pointer uppercase bg-[#9bad8c] hover:bg-[#6d7a62] transition-colors"
				on:click={checkLogin}>Login</button
			>
		</div>
	</div>
</div>
