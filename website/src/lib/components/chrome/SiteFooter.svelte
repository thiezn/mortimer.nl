<script lang="ts">
	import SocialIcon from '$lib/components/icons/SocialIcon.svelte';
	import { siteConfig } from '$lib/site';

	const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container site-footer__inner">
		<p class="site-footer__copy">&copy; {currentYear} {siteConfig.name}</p>
		<div class="site-footer__links">
			<a class="social-link" href={siteConfig.socials.github} aria-label="GitHub" rel="noreferrer" target="_blank"><span class="sr-only">GitHub</span><SocialIcon name="github" size={15} /></a>
			<a class="social-link" href={siteConfig.socials.twitter} aria-label="X" rel="noreferrer" target="_blank"><span class="sr-only">X</span><SocialIcon name="x" size={15} /></a>
			<a class="social-link" href={siteConfig.socials.linkedin} aria-label="LinkedIn" rel="noreferrer" target="_blank"><span class="sr-only">LinkedIn</span><SocialIcon name="linkedin" size={15} /></a>
		</div>
	</div>
</footer>
