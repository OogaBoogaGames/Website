<script>
	let character_sprites = ['/sprite1.webp', '/sprite2.webp'];
	let character_index = 0;
	let inputValue = '';

	function handleInput(event) {
		const enteredValue = event.target.value;
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
</script>

<div class="front-page">
	<h1>Ooga Booga Games</h1>

	<div class="form-container">
		<div class="character-form">
			<img src={character_sprites[character_index]} alt="character" />
			<div class="character-form-buttons">
				<button on:click={leftButtonClick}>←</button>
				<button on:click={rightButtonClick}>→</button>
			</div>
		</div>

		<div class="room-form">
			<input
				type="text"
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				placeholder="ENTER ROOM CODE"
				maxlength={8}
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
			/>
			<button>Join Game</button>
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
			text-align: center;
			font-size: 4rem;
		}

		.form-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			max-width: 1200px;
			margin: 0 auto;
			.character-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 40%;
				gap: 0.4rem;

				img {
					width: 100%;
					max-width: 300px;
					border-radius: 12px;
				}

				.character-form-buttons {
					display: flex;
					width: 100%;
					gap: 0.4rem;
					button {
						border-radius: 12px;
						padding: 1rem;
						font-size: 1.2rem;
						font-weight: 900;
						background-color: $secondary-color;
						color: white;
						border: none;
						cursor: pointer;
						width: 100%;
						&:hover {
							background-color: $secondary-color-dark;
						}
					}
				}
			}

			.room-form {
				display: flex;
				flex-direction: column;
				width: 40%;
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
