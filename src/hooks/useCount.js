import { useState, useCallback } from 'react';

const useCount = (defaultCount) => {
	const [count, setCount] = useState(defaultCount);
	const incCount = useCallback(
		() => { setCount(curCount => curCount + 1) },
		[]
	);
	const decCount = useCallback(
		() => { setCount(curCount => curCount - 1) },
		[]
	);
	return { count, incCount, decCount }
}

export default useCount;