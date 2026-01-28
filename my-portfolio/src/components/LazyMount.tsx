import { useEffect, useRef, useState } from 'react';

type LazyMountProps = {
	children: React.ReactNode;
	placeholder?: React.ReactNode;
	rootMargin?: string;
	minHeight?: number | string;
	once?: boolean;
};

export function LazyMount({
	children,
	placeholder,
	rootMargin = '300px 0px',
	minHeight,
	once = true,
}: LazyMountProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		if (shouldRender && once) return;
		if (typeof window === 'undefined') {
			setShouldRender(true);
			return;
		}

		if (!('IntersectionObserver' in window)) {
			setShouldRender(true);
			return;
		}

		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (!entry) return;
				if (entry.isIntersecting) {
					setShouldRender(true);
					if (once) observer.disconnect();
				}
			},
			{ rootMargin }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [once, rootMargin, shouldRender]);

	return (
		<div ref={ref} style={minHeight ? { minHeight } : undefined}>
			{shouldRender ? children : placeholder ?? null}
		</div>
	);
}
