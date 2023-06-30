<script>
    import { page } from '$app/stores';
</script>
  
<p id="error-message">Looks like you stumbled into a <strong>{$page.status}</strong> error!</p>
<p id="home-link"><a href="/">Back to safety</a></p>

<style lang="scss">
    $primary-color: #6a787e;
	$secondary-color: #9bad8c;
	$secondary-color-dark: #6d7a62;
	$background-color: #363239;

    #error-message {
        color: $primary-color;
		font-size: clamp(0vw, 3rem, 8vw);
        font-weight: 500;
		margin-bottom: 2rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
		text-align: center;
		font-size: 4rem;
    }

    a {
        color: $primary-color;
        font-size: clamp(0vw, 3rem, 8vw);
        font-weight: 700;
        margin-bottom: 2rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        text-align: center;
        font-size: 4rem;
        text-decoration: none;

        &:hover {
			color: darken($primary-color, 10%);
	    }
    }
</style>