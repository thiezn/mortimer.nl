import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import bash from 'highlight.js/lib/languages/bash';
import ini from 'highlight.js/lib/languages/ini';
import python from 'highlight.js/lib/languages/python';
import rust from 'highlight.js/lib/languages/rust';
import yaml from 'highlight.js/lib/languages/yaml';
import { relative, sep } from 'node:path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const mdsvexConfig = {
	extensions: ['.md'],
	remarkPlugins: [remarkGfm],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'append',
				properties: {
					ariaLabel: 'Jump to section',
					className: ['heading-anchor']
				}
			}
		],
		[
			rehypeHighlight,
			{
				detect: false,
				ignoreMissing: true,
				languages: {
					bash,
					sh: bash,
					rust,
					rs: rust,
					python,
					py: python,
					yaml,
					yml: yaml,
					ini,
					toml: ini
				}
			}
		]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex(mdsvexConfig)],
	compilerOptions: {
		// defaults to rune mode for the project, execept for `node_modules`. Can be removed in svelte 6.
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes('node_modules');

			return isExternalLibrary ? undefined : true;
		}
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
