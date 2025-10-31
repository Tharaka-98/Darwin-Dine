export default function ContactPage() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-8 md:grid-cols-2">
			<div>
				<h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
				<p className="mt-2 text-neutral-500 dark:text-neutral-300">12 Esplanade, Darwin City, NT</p>
				<p className="mt-1 text-neutral-500 dark:text-neutral-300">Tue–Sun: 12pm–10pm</p>
				<p className="mt-1 text-neutral-500 dark:text-neutral-300">+61 8 0000 0000</p>
			</div>
			<div className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 min-h-72">
				<iframe
					title="Map"
					className="h-full w-full"
					src="https://www.google.com/maps?q=Darwin%20NT&output=embed"
					loading="lazy"
				/>
			</div>
		</div>
	);
}
