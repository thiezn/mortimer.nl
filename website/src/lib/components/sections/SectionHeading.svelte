<script lang="ts">
	let { eyebrow, title, intro } = $props<{
		eyebrow: string;
		title: string;
		intro: string;
	}>();
</script>

<div class="section-heading">
	<p class="eyebrow">{eyebrow}</p>
	<h2>{title}</h2>
	<p>{intro}</p>
</div>
