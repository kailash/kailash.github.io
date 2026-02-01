import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function AIDisclaimer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Button - Top Right */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-24 right-6 z-40 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                title="AI Creation Info"
                aria-label="Toggle AI disclaimer"
            >
                <Sparkles className="w-5 h-5" />
            </button>

            {/* Disclaimer Card - Minimal One Line */}
            {isOpen && (
                <div className="fixed top-40 right-6 z-50 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-purple-200 dark:border-purple-800 p-4 animate-in slide-in-from-top-2">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0" />
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                This portfolio was created with <span className="font-semibold text-purple-600 dark:text-purple-400">AI assistance</span> to showcase modern development practices.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
                            aria-label="Close disclaimer"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
