<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import ArticleCard from '$lib/components/articles/ArticleCard.svelte';
	import SocialIcon from '$lib/components/icons/SocialIcon.svelte';
	import SectionHeading from '$lib/components/sections/SectionHeading.svelte';
	import { siteConfig } from '$lib/site';

	let { data } = $props();

	const focusAreas = [
		'Rust systems programming',
		'Python tooling and automation',
		'Infrastructure and cloud architecture',
		'Hobby electronics and robotics'
	];

	const currentThreads = [
		{
			title: 'Building reliable tools',
			copy: 'Most of the interesting work starts at the seam between software and operations: deployment flows, wrappers, CLIs, integrations, and the odd bit of low-level debugging.'
		},
		{
			title: 'Working across stacks',
			copy: 'Rust and Python are recurring anchors, but I keep drifting into iOS, Swift, bug bounty work, photography, and other projects that reward curiosity and patience.'
		}
	];
</script>

<section class="section section--hero" id="about">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">About me</p>
			<h1>Rust, Python, infrastructure, and a habit of building small useful things.</h1>
			<p class="lead">
				I'm Mathijs Mortimer, a developer from the Netherlands focused on tools, systems, and infrastructure that should feel boring in production and enjoyable to build.
			</p>
			<p>
				A lot of that work lives in Rust and Python. Around the edges, it turns into cloud plumbing, hobby electronics, robotics, iOS experiments, and the occasional security rabbit hole.
			</p>
			<div class="pills">
				{#each focusAreas as area}
					<span class="pill">{area}</span>
				{/each}
			</div>
			<div class="button-row">
				<a class="button" href="/articles">Read the articles</a>
				<a class="button button--secondary" href="/#contact">Get in touch</a>
			</div>
		</div>

		<aside class="hero-panel surface-card">
			<p class="kicker">Currently</p>
			<h2>Shipping tools, refining infra, and writing notes worth reusing.</h2>
			<dl class="detail-list surface-card">
				<div>
					<dt>Base</dt>
					<dd>Netherlands</dd>
				</div>
				<div>
					<dt>Stack</dt>
					<dd>Rust, Python, cloud</dd>
				</div>
				<div>
					<dt>Output</dt>
					<dd>{data.articleCount} published article{data.articleCount === 1 ? '' : 's'}</dd>
				</div>
			</dl>
			<div class="link-row">
				<a class="social-link" href={siteConfig.socials.github} aria-label="GitHub" rel="noreferrer" target="_blank"><span class="sr-only">GitHub</span><SocialIcon name="github" size={16} /></a>
				<a class="social-link" href={siteConfig.socials.twitter} aria-label="X" rel="noreferrer" target="_blank"><span class="sr-only">X</span><SocialIcon name="x" size={16} /></a>
				<a class="social-link" href={siteConfig.socials.linkedin} aria-label="LinkedIn" rel="noreferrer" target="_blank"><span class="sr-only">LinkedIn</span><SocialIcon name="linkedin" size={16} /></a>
			</div>
		</aside>
	</div>
</section>

<section class="section">
	<div class="container section-grid">
		<div class="section-stack">
			<SectionHeading
				eyebrow="Work"
				title="The useful overlap between engineering depth and practical delivery."
				intro="I like work that has a clear operational edge: tools people keep using, systems that become easier to reason about, and documentation that shortens the next debugging session."
			/>
		</div>
		<div class="section-stack">
			{#each currentThreads as thread}
				<article class="stacked-card surface-card">
					<h3>{thread.title}</h3>
					<p>{thread.copy}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section" id="articles">
	<div class="container">
		<SectionHeading
			eyebrow="Articles"
			title="Markdown-backed notes with actual publish and update metadata."
			intro="Articles are written in mdsvex, surfaced from the dedicated articles folder, and rendered with consistent metadata, routing, and syntax highlighting for code-heavy posts."
		/>

		<div class="article-grid">
			{#each data.featuredArticles as article}
				<ArticleCard article={article} featured={true} />
			{/each}
		</div>

		<div class="section-actions">
			<a class="button button--ghost" href="/articles">Browse all articles <ArrowRight size={16} strokeWidth={2.3} /></a>
		</div>
	</div>
</section>

<section class="section section--contact" id="contact">
	<div class="container">
		<div class="contact-inline surface-card">
			<p class="eyebrow">Contact</p>
			<p>Best reached on X or GitHub.</p>
			<div class="link-row">
				<a class="social-link" href={siteConfig.socials.twitter} aria-label="X" rel="noreferrer" target="_blank"><span class="sr-only">X</span><SocialIcon name="x" size={16} /></a>
				<a class="social-link" href={siteConfig.socials.github} aria-label="GitHub" rel="noreferrer" target="_blank"><span class="sr-only">GitHub</span><SocialIcon name="github" size={16} /></a>
			</div>
		</div>
	</div>
</section>
