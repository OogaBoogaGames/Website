<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { CavemanContext } from './types';
	import type { Writable } from 'svelte/store';

	export let assetid: string;

	export let packageid: string;

	let elem: HTMLImageElement;

	let ctx: Writable<CavemanContext> = getContext('CavemanContext')

	$: $ctx.packages.forEach(async (pkg, index, arr) => {
		if (pkg.id = packageid) {
			elem.src = URL.createObjectURL(await pkg.bundle.get_asset(assetid))
		}
	})

</script>

<img class={$$props.class} id={$$props.id} bind:this={elem} alt={assetid} />
