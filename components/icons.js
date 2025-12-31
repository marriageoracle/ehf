import React from 'https://esm.sh/react@18.2.0';

const createElement = React.createElement;

export const MenuIcon = ({ className = 'w-6 h-6' }) => (
  createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
    createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" })
  )
);

export const CloseIcon = ({ className = 'w-6 h-6' }) => (
  createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
    createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })
  )
);

export const SparklesIcon = ({ className = 'w-6 h-6' }) => (
  createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
    createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5l-.259 1.035a3.375 3.375 0 00-2.455 2.456L14.25 18l1.036.259a3.375 3.375 0 002.455 2.456L18 21.75l.259-1.035a3.375 3.375 0 002.456-2.456L21.75 18l-1.035-.259a3.375 3.375 0 00-2.456-2.456z" })
  )
);

export const ChatBubbleIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.53-.388m-5.121.955a.375.375 0 01-.19-.53l.582-1.026a1.498 1.498 0 00-.063-1.638 1.94 1.94 0 01-.394-1.296C3.03 14.556 7.06 10.845 12 10.845c4.94 0 9 3.71 9 8.25z" })
    )
);

export const SendIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" })
    )
);

export const WhatsAppIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { fill: "currentColor", viewBox: "0 0 24 24", className: className },
        createElement('path', { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.905 6.104l-1.102 4.029 4.143-1.082z" })
    )
);

export const UserCircleIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" })
    )
);

export const DressIcon = ({ className = 'w-6 h-6' }) => (
  createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: className },
    createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H7.5A2.25 2.25 0 005.25 6v10.5A2.25 2.25 0 007.5 18.75h9A2.25 2.25 0 0018.75 16.5V6A2.25 2.25 0 0016.5 3.75z" }),
    createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 7.5l2.1 2.1 2.1-2.1m-4.2 3.375L12 13.5l2.1-2.625" })
  )
);

export const WeddingGownIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: className },
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 18.75l-4.243-4.243a6 6 0 118.486 0L12 18.75z" }),
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 9.75l7.5 7.5 7.5-7.5" }),
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M7.5 6.75A4.5 4.5 0 0112 2.25a4.5 4.5 0 014.5 4.5" })
    )
);

export const WardrobeIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: className },
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 3.75v16.5h16.5V3.75H3.75zM12 3.75v16.5" }),
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 7.5h-1.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V8.25a.75.75 0 00-.75-.75z" }),
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 12h-1.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V12.75a.75.75 0 00-.75-.75z" })
    )
);

export const SketchIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: className },
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" })
    )
);

export const PatternIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: className },
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" }),
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 6.75v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25z" })
    )
);

export const BusinessIcon = ({ className = 'w-6 h-6' }) => (
    createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: className },
        createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0a.75.75 0 01.75.75v.75m0 0h.75a.75.75 0 01.75.75v.75m0 0H6a.75.75 0 01.75.75v.75m0 0v.75A.75.75 0 016 12h-.75m0 0v-.75A.75.75 0 014.5 10.5h.75m0 0a.75.75 0 01.75.75v.75m0 0h.75a.75.75 0 01.75.75v.75M9 12v-.75A.75.75 0 019.75 10.5h.75m0 0a.75.75 0 01.75.75v.75m0 0h.75a.75.75 0 01.75.75v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0A.75.75 0 019 15v-.75m0 0v-.75a.75.75 0 01.75-.75h.75m0 0H12m0 0v.75a.75.75 0 01-.75.75h-.75m0 0v.75a.75.75 0 01-.75.75H9m3.75 0v.75a.75.75 0 01-.75.75h-.75M12 15h.75a.75.75 0 01.75.75v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0v.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-.75m0 0v-.75a.75.75 0 01.75-.75H12m0 0h.75a.75.75 0 01.75.75v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0v.75a.75.75 0 01-.75.75H9m9-9.75h.75a.75.75 0 01.75.75v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0A.75.75 0 0115 9.75v-.75m0 0v-.75a.75.75 0 01.75-.75h.75m0 0H18m-3.75 3.75h.75a.75.75 0 01.75.75v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0v.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-.75m0 0v-.75a.75.75 0 01.75-.75h.75m0 0h.75a.75.75 0 01.75.75v.75M15 12v-.75a.75.75 0 01.75-.75h.75m0 0h.75a.75.75 0 01.75.75v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0a.75.75 0 01-.75-.75v-.75" })
    )
);