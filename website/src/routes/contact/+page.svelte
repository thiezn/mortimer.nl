<script lang="ts">
	import BriefcaseBusiness from '@lucide/svelte/icons/briefcase-business';
	import Rss from '@lucide/svelte/icons/rss';
	import SquareCode from '@lucide/svelte/icons/square-code';

	import { siteConfig } from '$lib/site';
</script>

<section class="section page-section">
	<div class="container contact-grid">
		<div class="contact-stack page-stack">
			<p class="eyebrow">Contact</p>
			<h1>Best reached through the places where I already build in public.</h1>
			<p class="lead">
				If you want to talk about Rust, Python, infrastructure, side projects, or a problem that needs calm engineering, the social links below are the easiest way to find me.
			</p>
			<p>
				This site keeps contact simple on purpose. Reach out on GitHub for code, LinkedIn for the professional route, or X when the conversation is a little more informal.
			</p>
		</div>

		<aside class="contact-card surface-card">
			<p class="kicker">Reach out</p>
			<h2>Where to start</h2>
			<p><a href={siteConfig.socials.github} rel="noreferrer" target="_blank"><SquareCode size={16} strokeWidth={2.1} /> GitHub</a> for repositories, issues, and open source conversations.</p>
			<p><a href={siteConfig.socials.linkedin} rel="noreferrer" target="_blank"><BriefcaseBusiness size={16} strokeWidth={2.1} /> LinkedIn</a> for work, architecture, and collaboration topics.</p>
			<p><a href={siteConfig.socials.twitter} rel="noreferrer" target="_blank"><Rss size={16} strokeWidth={2.1} /> X</a> for shorter notes, links, and the occasional detour.</p>
		</aside>
	</div>
</section>
