<script>
    import { goto } from '$app/navigation';

    let logOutStatus = "Logout";

    let account_info = {
        username: "femboy",
        email: "email@gmail.com"
    }

    function logOutButton() {
        if (logOutStatus === "Logout") {
            logOutStatus = "Confirm?";
        } else {
            //TODO: log out from account

            goto('/login', { replaceState: false });
        }
    }

    function checkPassword() {
        let oldPassword = document.getElementById("password").value;
        let newPassword = document.getElementById("newPassword").value;

        if (oldPassword === newPassword) {
            alert("Your new password cannot be the same as your old password!");
            return;
        }

        if (newPassword.length < 6) {
            alert("Your new password must be at least 6 characters long!");
            return;
        }
        
        //TODO: update password in database
    }
</script>

<div class="accounts-menu">
    <div class="settings">
        <h1>Account Settings</h1>
        
        <div class="settings-item">
            <h3>Change Username</h3>
            <input type="text" placeholder="{account_info.username}">
        </div>
        <div class="settings-item">
            <h3>Change Password</h3>
            <input type="password" placeholder="Old Password" id="password">
            <input type="password" placeholder="New Password" id="newPassword">
        </div>
        <div class="settings-item">
            <h3>Change Email</h3>
            <input type="email" placeholder="{account_info.email}">
        </div>
        <button on:click={checkPassword}>Save Changes</button>
        <br>

        <button on:click={logOutButton} class="log-out-button">{logOutStatus}</button>
    </div>
</div>

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
        scroll-behavior: smooth;
        color: #6a787e;
        font-family: Poppins, sans-serif;

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