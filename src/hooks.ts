import { MutableRefObject, useCallback, useEffect } from 'react';

export function useMount(func: React.EffectCallback) {
	// useEffect should only be called once on mount
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(func, []);
}

export function useMultipleRefs<T>(refs: React.Ref<T>[]) {
	return useCallback(
		(reference: T) => {
			refs.forEach((ref) => {
				if (!ref) {
					return;
				}
				if (typeof ref === 'function') {
					ref(reference);
				} else {
					// Warnign disabled because assigning is explicitly what we want to do here
					// eslint-disable-next-line no-param-reassign
					const mutableRef = ref as MutableRefObject<T>;
					mutableRef.current = reference;
				}
			});
		},
		// refs is an array and we only want to update based on the array contents, not on the array itself
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[...refs],
	);
}
