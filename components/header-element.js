
<script>
	import {defineComponent} from 'vue';
	export default defineComponent({
		props:[],
		setup(){
			const count = ref(0)
			return { count }
		},
		template:`
		<template>
			<button @click="count++">You clicked me {{ count }} times.</button>
		</template>`
	});
</script>