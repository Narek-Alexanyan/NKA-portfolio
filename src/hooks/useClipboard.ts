import { useState } from 'react';

const useClipboard = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = async () => {
        const email = 'narek.alexanyan.96@gmail.com';

        try {
            await navigator.clipboard.writeText(email);
            setHasCopied(true);

            // Reset the state after 2 seconds
            setTimeout(() => {
                setHasCopied(false);
            }, 2000);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            // Optionally, you might want to notify the user of the failure
        }
    };

    return { handleCopy, hasCopied };
};

export default useClipboard;