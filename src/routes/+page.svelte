<script>
	let inputValue = '';

	function handleInput(event) {
		const enteredValue = event.target.value;
		const uppercaseValue = enteredValue.toUpperCase();
		const lettersOnlyValue = uppercaseValue.replace(/[^A-Z]/g, '');
		inputValue = lettersOnlyValue;
	}
</script>

<div class="login-container">
    <h1>Ooga Booga Games</h1>

    <div class="form-container">
        <div class="character-form">
            <img src="https://media.discordapp.net/attachments/1121939717458514020/1122590858861084703/sprite1.png" alt="character" />
            <div class="character-form-buttons">
            	<button>←</button>
            	<button>→</button>
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
	$background-color: #363239;
	:root {
		background: url('https://media.discordapp.net/attachments/1121939717458514020/1122454022893338736/s.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-family: Poppins, sans-serif;
	}

    .login-container {
        padding: 3rem;

	    h1 {
	    	color: $primary-color;
	    	font-size: 4rem;
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
        }

        .character-form {
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;
            width: 40%;

            img {
                width: 100%;
                max-width: 300px;
                border-radius: 12px;
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
            }

            .character-form-buttons {
                button {
                    border-radius: 12px;
                    padding: 1rem;
                    font-size: 1.2rem;
                    font-weight: 600;
                    background-color: $secondary-color;
                    color: white;
                    border: none;
                    cursor: pointer;
                    width: 49%;
                    
                    &:hover {
                        background-color: darken($secondary-color, 10%);
                    }
                }
            }
        }

	    .room-form {
	    	display: flex;
	    	flex-direction: column;
            margin-left: auto; 
            margin-right: 0;
            width: 50%;
            
	    	gap: 1rem;

	    	input {
	    		border-radius: 12px;
	    		padding: 1rem 2rem;
	    		font-size: 1.1rem;
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
	    			background-color: darken($secondary-color, 10%);
	    		}
	    	}
        }
    }
</style>
