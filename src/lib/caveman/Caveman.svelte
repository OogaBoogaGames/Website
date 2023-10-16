<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store'
	import init, { FlintBundle } from '@oogaboogagames/flint';
	import type { CavemanContext } from './types';
	
	export let packages: string[];
	export let mirror: string;

	let cavemanContextStore: Writable<CavemanContext> = writable({packages: []});
	setContext('CavemanContext', cavemanContextStore);
	
	async function createCtx(packages: string[]) {
		let context: CavemanContext = {
			packages: []
		}
		await new Promise<void>((resolve, reject) => {
			packages.forEach(async (pkg, index, arr) => {
				let bundle = new FlintBundle(pkg)
				await bundle.load(mirror)
				context.packages.push({ id: pkg, bundle })
				if (index === arr.length -1) resolve();
			})
		})

		return context
	}

	onMount(async () => {
		await init()
		$cavemanContextStore = await createCtx(packages);
	})


</script>
  
<slot></slot>