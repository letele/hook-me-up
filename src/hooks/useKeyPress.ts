import { useEffect } from 'react';
/**
 * Hook that listens for specific key presses and invokes a callback when 
 * those keys are pressed.
 * @param {string[]} keysToUse - An array of strings representing the keys to listen for.
 * @param {(key: string) => void} callback - A callback function to be invoked 
 * when the specified keys are pressed.
 */
export const useKeyPress = (keysToUse: string[], callback: (key: string) => void) => {
	useEffect(() => {
	  	const handleKeyDown = (event: KeyboardEvent) => {
			if (keysToUse.includes(event.key)) {
			  event.preventDefault();
			  callback(event.key);
			}
	  	};
  
	  	document.addEventListener('keydown', handleKeyDown);
  
	  	return () => 
		document.removeEventListener('keydown', handleKeyDown);
	  
	}, [keysToUse, callback]);
};
