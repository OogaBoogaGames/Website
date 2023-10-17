<script>
	import { goto } from '$app/navigation';

	function checkLogin() {
		let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

		//TODO: Send request to server to validate password hash with server password hash
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

<div>
	<h1 class="text-gray-500 text-5xl font-black mb-8 text-center [text-shadow:_2px_2px_4px_rgba(0_0_0_/40%)]">Login</h1>

	<div class="flex justify-between items-center w-full max-w-[1200px]">
		<div class="flex flex-col w-full gap-4">
			<input
				type="text"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your username"
				minlength = "4"
				id = "username"
				class="rounded-lg w-full max-w-xs self-center text-xl font-semibold h-[10vh] max-h-[6.4rem] min-h-[3.2rem] min-w-[10rem] bg-[#9bad8c] text-center text-stone-100 placeholder-stone-300"
			/>
			<input
				type="password"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="Enter your password"
				minlength = "6"
				id = "password"
				class="rounded-lg w-full max-w-xs self-center text-xl font-semibold h-[10vh] max-h-[6.4rem] min-h-[3.2rem] min-w-[10rem] bg-[#9bad8c] text-center text-stone-100 placeholder-stone-300"
			/>
			<button class="px-4 py-6 mt-6 rounded-lg text-xl font-semibold w-full max-w-xs self-center text-stone-100 cursor-pointer uppercase bg-[#9bad8c] hover:bg-[#6d7a62] transition-colors" on:click={checkLogin}>Login</button>
		</div>
	</div>
</div>