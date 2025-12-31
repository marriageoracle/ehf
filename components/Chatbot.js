import React, { useState, useRef, useEffect } from 'https://esm.sh/react@18.2.0';
import { ChatBubbleIcon, CloseIcon, SendIcon, SparklesIcon, WhatsAppIcon } from './icons.js';
import { getFashionFaqAnswer } from '../services/geminiService.js';
import { TUTOR_WHATSAPP_LINK } from '../constants.js';

const createElement = React.createElement;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your AI fashion assistant. Ask me any questions about fashion design!", sender: 'system' }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!userInput.trim()) return;
        const newMessages = [...messages, { id: Date.now(), text: userInput, sender: 'user' }];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);
        const aiResponse = await getFashionFaqAnswer(userInput);
        setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponse, sender: 'ai' }]);
        setIsLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSend();
        }
    }

    const chatButton = createElement('button', {
            onClick: () => setIsOpen(!isOpen),
            className: `fixed bottom-6 right-6 bg-royal-pink-600 text-white shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 z-50 ${
                isOpen ? 'w-16 h-16 rounded-full' : 'h-16 px-6 rounded-full font-semibold'
            }`,
            'aria-label': isOpen ? "Close Chat" : "Open Chat"
        },
        isOpen ? createElement(CloseIcon, { className: "w-8 h-8" }) :
        createElement('div', { className: "flex items-center space-x-3" },
            createElement(ChatBubbleIcon, { className: "w-8 h-8" }),
            createElement('span', null, "Chat Now")
        )
    );

    const chatWindow = isOpen && createElement('div', { className: "fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-fade-in-up" },
        createElement('header', { className: "bg-royal-pink-600 text-white p-4 flex justify-between items-center" },
            createElement('div', { className: "flex items-center space-x-2" },
                createElement(SparklesIcon, null),
                createElement('h3', { className: "font-bold" }, "AI Fashion Helper")
            ),
            createElement('a', { href: TUTOR_WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer", className: "flex items-center space-x-1.5 bg-green-500/80 hover:bg-green-500 px-2 py-1 rounded-md transition-colors text-sm" },
                createElement(WhatsAppIcon, { className: "w-4 h-4" }),
                createElement('span', null, "Tutor")
            )
        ),
        createElement('div', { className: "flex-1 p-4 overflow-y-auto bg-royal-pink-50/50" },
            ...messages.map(msg =>
                createElement('div', { key: msg.id, className: `flex my-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}` },
                    createElement('div', { className: `max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${
                        msg.sender === 'user' ? 'bg-royal-pink-500 text-white' :
                        msg.sender === 'ai' ? 'bg-gray-200 text-gray-800' :
                        'bg-transparent text-gray-600 text-center w-full text-sm italic'
                    }`}, msg.text)
                )
            ),
            isLoading && createElement('div', { className: "flex justify-start my-2" },
                createElement('div', { className: "bg-gray-200 text-gray-800 px-4 py-2 rounded-xl" },
                    createElement('span', { className: "animate-pulse" }, "...")
                )
            ),
            createElement('div', { ref: chatEndRef })
        ),
        createElement('div', { className: "p-4 border-t border-gray-200 bg-white flex items-center" },
            createElement('input', {
                type: "text",
                value: userInput,
                onChange: (e) => setUserInput(e.target.value),
                onKeyPress: handleKeyPress,
                placeholder: "Ask a question...",
                className: "flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-pink-500",
                disabled: isLoading
            }),
            createElement('button', { onClick: handleSend, disabled: isLoading, className: "ml-3 bg-royal-pink-600 text-white p-3 rounded-full hover:bg-royal-pink-700 disabled:bg-gray-400 transition-colors" },
                createElement(SendIcon, { className: "w-5 h-5" })
            )
        )
    );

    const style = `
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
        }
    `;

    return createElement(React.Fragment, null,
        chatButton,
        chatWindow,
        createElement('style', null, style)
    );
};

export default Chatbot;