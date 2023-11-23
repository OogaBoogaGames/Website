<script lang="ts">
	import { goto } from '$app/navigation';

	let usernameElem: HTMLInputElement;
	let passwordElem: HTMLInputElement;
	let confirmPasswordElem: HTMLInputElement;

	function checkSignup() {
		let username = usernameElem.value;
		let password = passwordElem.value;
		let confirmPassword = confirmPasswordElem.value;

		if (password != confirmPassword) {
			alert('Passwords do not match.');
			return;
		}

		if (password.length < 6) {
			alert('Password must be at least 6 characters long.');
			return;
		}

		if (username.length < 4) {
			alert('Username must be at least 4 characters long.');
			return;
		}

		fetch('https://api.oogabooga.games/user/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		}).then(async (res) => {
			let data = await res.json();
			if (res.ok) {
				console.log(data);
				goto('/login', { replaceState: false });
			} else {
				alert(data.error);
			}
		});
	}
</script>

<div>
	<h1
		class="text-gray-500 text-5xl font-black mb-8 text-center [text-shadow:_2px_2px_4px_rgba(0_0_0_/40%)]"
	>
		Sign Up
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
			<input
				type="password"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Confirm your password"
				minlength="6"
				bind:this={confirmPasswordElem}
				class="rounded-lg w-full max-w-xs self-center text-xl font-semibold h-[10vh] max-h-[6.4rem] min-h-[3.2rem] min-w-[10rem] bg-[#9bad8c] text-center text-stone-100 placeholder-stone-300"
			/>
			<button
				class="px-4 py-6 mt-6 rounded-lg text-xl font-semibold w-full max-w-xs self-center text-stone-100 cursor-pointer uppercase bg-[#9bad8c] hover:bg-[#6d7a62] transition-colors"
				on:click={checkSignup}>Create Account</button
			>
		</div>
	</div>
</div>
