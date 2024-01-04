<script lang="ts">
	import { Caveman, CavemanImage } from '@oogaboogagames/cavemanweb';
	import { base } from '$lib/api';

	let character_sprites = [
		'__obg__.caveman.1',
		'__obg__.caveman.2',
		'__obg__.caveman.3',
		'__obg__.caveman.4',
		'__obg__.caveman.5',
		'__obg__.caveman.6',
		'__obg__.caveman.7',
		'__obg__.caveman.8',
		'__obg__.caveman.9',
		'__obg__.caveman.10'
	];
	let character_index = 0;

	$: console.log(character_sprites[character_index]);

	let packages: string[] = ['games.oogabooga.sprites'];

	let inputValue = '';

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		const enteredValue = target.value;
		const uppercaseValue = enteredValue.toUpperCase();
		const lettersOnlyValue = uppercaseValue.replace(/[^0-9A-F]/g, '');
		inputValue = lettersOnlyValue;
	}

	function leftButtonClick() {
		character_index--;
		if (character_index < 0) {
			character_index = character_sprites.length - 1;
		}
	}

	function rightButtonClick() {
		character_index++;
		if (character_index > character_sprites.length - 1) {
			character_index = 0;
		}
	}

	function joinGame() {
		//TODO: Join game
	}
</script>

<div>
	<h1
		class="text-gray-500 text-6xl font-black mb-8 text-center [text-shadow:_2px_2px_4px_rgba(0_0_0_/40%)]"
	>
		Ooga Booga Games
	</h1>

	<div class="form-container flex justify-between items-center w-full max-w-[1200px]">
		<div class="flex flex-col justify-center items-center w-2/5 gap-2">
			<Caveman {packages} mirror="{base}/assets/bundle/">
				<CavemanImage
					width="340"
					height="400"
					assetid={character_sprites[character_index]}
					packageid={packages[0]}
					class="w-[340px] h-[400px] rounded-lg max-w-none"
				/>
			</Caveman>
			<div class="flex w-full gap-2">
				<button
					class="rounded-lg p-4 text-xl font-black text-stone-100 cursor-pointer w-full bg-[#9bad8c] hover:bg-[#6d7a62] transition-colors"
					on:click={leftButtonClick}>←</button
				>
				<button
					class="rounded-lg p-4 text-xl font-black text-stone-100 cursor-pointer w-full bg-[#9bad8c] hover:bg-[#6d7a62] transition-colors"
					on:click={rightButtonClick}>→</button
				>
			</div>
		</div>

		<div class="room-form flex flex-col w-[40%] gap-4">
			<input
				type="text"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="ENTER ROOM CODE"
				maxlength={8}
				class="rounded-lg w-full h-12 text-lg font-semibold text-center text-stone-100 placeholder-stone-300 bg-[#9bad8c]"
				bind:value={inputValue}
				on:input={handleInput}
			/>
			<input
				type="text"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="ENTER YOUR NAME"
				maxlength={16}
				class="rounded-lg w-full h-12 text-lg font-semibold text-center text-stone-100 placeholder-stone-300 bg-[#9bad8c]"
			/>
			<button
				class="mt-8 py-6 px-4 rounded-lg text-xl font-semibold text-stone-100 cursor-pointer uppercase bg-[#9bad8c] hover:bg-[#6d7a62] transition-colors"
				on:click={joinGame}>Join Game</button
			>
		</div>
	</div>
</div>
