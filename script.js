// ==================== INLINE SVG ICONS ====================
const icons = {
    'clipboard-list': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
    'home': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'file-plus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
    'save': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
    'eye': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    'link': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    'share-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    'log-out': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    'user': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    'user-plus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
    'unlock': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',
    'calendar': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    'calendar-days': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
    'type': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
    'hash': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
    'clock': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    'mail': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    'phone': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    'align-left': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>',
    'chevron-down-square': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polyline points="8 10 12 14 16 10"/></svg>',
    'circle-dot': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>',
    'check-square': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    'toggle-left': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/></svg>',
    'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'star': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    'folder': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    'text-cursor-input': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"/><path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M9 7v10"/></svg>',
    'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
    'layout': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    'download': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    'settings': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    'mouse-pointer-click': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/></svg>',
    'chevron-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
    'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    'trash-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
    'globe': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    'git-branch': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    'flask-conical': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>',
    'rocket': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    'refresh-cw': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>',
    'smartphone': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    'copy': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    'cloud': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    'info': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    'alert-triangle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    'x-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    'loader': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>',
    'database': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    'building-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
    'bar-chart-3': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    'inbox': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
    'plus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    'pencil': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
    'file-text': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    'arrow-left': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'table': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
    'bar-chart-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    'wifi': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    'wifi-off': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    'check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    'x': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    'search': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    'trending-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    'edit-3': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    'list': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    'upload': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    'filter': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    'layers': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    'activity': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    'file-spreadsheet': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>',
    'code': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    'qr-code': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/></svg>',
    'scan': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>',
    'calculator': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/></svg>',
    'file-edit': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l1-3.95 5.42-5.44Z"/></svg>',
    'copy-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
};

function getIcon(name, size = 16) {
    const svg = icons[name] || icons['file-text'];
    return svg.replace(/width="24"/g, `width="${size}"`).replace(/height="24"/g, `height="${size}"`);
}

function initIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const name = el.getAttribute('data-icon');
        const size = el.getAttribute('data-size') || 16;
        el.innerHTML = getIcon(name, size);
    });
}

// ==================== CONFIGURATION ====================
const CONFIG = {
    PROXY_URL: 'https://script.google.com/macros/s/AKfycbwC9lJdYj4askujDNO2GfK-Rqq02VBcr90NXhifgvpawboEK1YCyUfbi2GA2hFL2UghkA/exec',
    AUTH_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwC9lJdYj4askujDNO2GfK-Rqq02VBcr90NXhifgvpawboEK1YCyUfbi2GA2hFL2UghkA/exec',
    LOGO_URL: 'https://github.com/mohamedsillahkanu/gdp-dashboard-2/raw/6c7463b0d5c3be150aafae695a4bcbbd8aeb1499/ICF-SL.jpg'
};

// ==================== STORAGE HELPERS ====================
const memoryStorage = {};
let storageAvailable = true;
let storageWarningShown = false;

try {
    localStorage.setItem('__test__', '1');
    localStorage.removeItem('__test__');
} catch (e) {
    storageAvailable = false;
    console.warn('localStorage not available:', e.message);
}

const safeStorage = {
    getItem: function(key) {
        if (!storageAvailable) {
            return memoryStorage[key] || null;
        }
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn('Storage read error:', e);
            return memoryStorage[key] || null;
        }
    },
    setItem: function(key, value) {
        memoryStorage[key] = value;
        if (!storageAvailable) {
            if (!storageWarningShown) {
                storageWarningShown = true;
                setTimeout(() => {
                    if (typeof notify === 'function') {
                        notify('⚠️ Storage blocked by browser. Data stored in memory only - will be lost on refresh. Host file on a web server for persistence.', 'warning');
                    }
                }, 2000);
            }
            return;
        }
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            console.warn('Storage write error:', e);
        }
    },
    removeItem: function(key) {
        delete memoryStorage[key];
        if (!storageAvailable) return;
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('Storage remove error:', e);
        }
    }
};

// ==================== PROXY CONFIGURATION ====================
const PROXIES = [
    { name: 'Direct', url: '', type: 'direct' },
    { name: 'GAS Proxy', url: 'https://script.google.com/macros/s/AKfycbx68uwmC6Hb7Vp5VGrOsUVNcOe0pzB8j8MBBHEDoIifVL6QC_3S7U0OldnhhzCwzUPMeg/exec', type: 'gas' },
    { name: 'CORS Proxy 1', url: 'https://corsproxy.io/?', type: 'cors' },
    { name: 'CORS Proxy 2', url: 'https://api.allorigins.win/raw?url=', type: 'cors' },
    { name: 'CORS Proxy 3', url: 'https://cors-anywhere.herokuapp.com/', type: 'cors' }
];

function buildProxyUrl(proxy, targetUrl, auth, method) {
    if (proxy.type === 'direct') {
        return targetUrl;
    } else if (proxy.type === 'gas') {
        let proxyUrl = proxy.url + '?url=' + encodeURIComponent(targetUrl);
        if (auth) {
            proxyUrl += '&auth=' + encodeURIComponent(auth);
        }
        if (method && method !== 'GET') {
            proxyUrl += '&method=' + method;
        }
        return proxyUrl;
    } else {
        return proxy.url + encodeURIComponent(targetUrl);
    }
}

// ==================== GLOBAL STATE ====================
const state = {
    user: null,
    fields: [],
    selectedFieldId: null,
    fieldCounter: 0,
    isSharedMode: false,
    settings: {
        title: 'My Data Collection Form',
        originalTitle: '',
        formId: '',
        logo: CONFIG.LOGO_URL,
        aggregateColumn: '',
        aggregateColumns: [],
        gpsField: ''
    },
    sheets: {
        scriptUrl: CONFIG.AUTH_SCRIPT_URL,
        sheetId: '',
        connected: true
    },
    dhis2: {
        url: '',
        username: '',
        password: '',
        syncMode: 'aggregate',
        orgUnitLevel: 5,
        periodType: 'Monthly',
        periodColumn: '',
        orgUnitColumn: '',
        programId: '',
        connected: false,
        datasetId: null,
        dataElements: {},
        orgUnits: [],
        orgUnitMap: {}
    },
    collectedData: [],
    filters: {},
    filterOrder: [],
    dateFilter: { start: '', end: '' },
    currentDataView: 'case',
    chartInstances: {}
};

const fieldDefs = {
    period: { label: 'Period', icon: 'calendar-days', defaultLabel: 'Reporting Period', valueType: 'TEXT', isDhis2: true, category: 'dhis2' },
    text: { label: 'Text', icon: 'type', defaultLabel: 'Text Field', valueType: 'TEXT', category: 'text' },
    number: { label: 'Number', icon: 'hash', defaultLabel: 'Number Field', valueType: 'NUMBER', category: 'numeric' },
    calculation: { label: 'Calculation', icon: 'calculator', defaultLabel: 'Calculated Field', valueType: 'NUMBER', category: 'numeric' },
    date: { label: 'Date', icon: 'calendar', defaultLabel: 'Date Field', valueType: 'DATE', category: 'date' },
    time: { label: 'Time', icon: 'clock', defaultLabel: 'Time Field', valueType: 'TIME', category: 'time' },
    email: { label: 'Email', icon: 'mail', defaultLabel: 'Email Address', valueType: 'TEXT', category: 'text' },
    phone: { label: 'Phone', icon: 'phone', defaultLabel: 'Phone Number', valueType: 'TEXT', category: 'text' },
    textarea: { label: 'Long Text', icon: 'align-left', defaultLabel: 'Long Text', valueType: 'LONG_TEXT', category: 'text' },
    select: { label: 'Dropdown', icon: 'chevron-down-square', defaultLabel: 'Dropdown', valueType: 'TEXT', category: 'categorical', options: ['Option 1', 'Option 2', 'Option 3'] },
    radio: { label: 'Radio', icon: 'circle-dot', defaultLabel: 'Radio Choice', valueType: 'TEXT', category: 'categorical', options: ['Option 1', 'Option 2', 'Option 3'] },
    checkbox: { label: 'Checkbox', icon: 'check-square', defaultLabel: 'Checkbox', valueType: 'TRUE_ONLY', category: 'categorical', options: ['Option 1', 'Option 2'] },
    yesno: { label: 'Yes/No', icon: 'toggle-left', defaultLabel: 'Yes/No Question', valueType: 'BOOLEAN', category: 'categorical' },
    gps: { label: 'GPS', icon: 'map-pin', defaultLabel: 'GPS Location', valueType: 'TEXT', category: 'text' },
    qrcode: { label: 'QR Code', icon: 'qr-code', defaultLabel: 'QR/Barcode Scanner', valueType: 'TEXT', category: 'text' },
    cascade: { label: 'Cascade', icon: 'git-branch', defaultLabel: 'Cascading Dropdown', valueType: 'TEXT', category: 'categorical', cascadeData: [], cascadeColumns: [] },
    rating: { label: 'Rating', icon: 'star', defaultLabel: 'Rating', valueType: 'INTEGER', category: 'categorical', max: 5 },
    section: { label: 'Section', icon: 'folder', defaultLabel: 'New Section', valueType: null, category: 'structure' }
};

// ==================== PERIODS ====================
function generatePeriods() {
    const periods = [];
    for (let year = 2020; year <= 2026; year++) {
        for (let month = 1; month <= 12; month++) {
            periods.push(`${year}${String(month).padStart(2, '0')}`);
        }
    }
    return periods;
}
const PERIODS = generatePeriods();

// ==================== NOTIFICATION FUNCTION ====================
function notify(message, type = 'success') {
    const el = document.getElementById('notification');
    el.textContent = message;
    el.className = 'notification show' + (type === 'error' ? ' error' : type === 'info' ? ' info' : type === 'warning' ? ' warning' : '');
    setTimeout(() => el.classList.remove('show'), 4000);
}

// ==================== ESCAPE HTML ====================
function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==================== GOOGLE SHEETS FUNCTIONS ====================
async function submitToGoogleSheets(data) {
    const scriptUrl = CONFIG.AUTH_SCRIPT_URL;
    if (!scriptUrl) {
        console.log('No script URL configured');
        saveOffline(data);
        return { success: false, offline: true };
    }
    
    if (!navigator.onLine) {
        console.log('Browser reports offline');
        saveOffline(data);
        return { success: false, offline: true };
    }
    
    console.log('Submitting to Google Sheets...', { formTitle: state.settings.title });
    
    const fieldDefs = state.fields
        .filter(f => f.type !== 'section')
        .map(f => ({ label: f.label, name: f.name }));
    
    fieldDefs.unshift(
        { label: 'Record ID', name: '_id' },
        { label: 'Timestamp', name: '_timestamp' },
        { label: 'Synced', name: '_synced' }
    );
    
    try {
        const oldFormTitle = state.settings.originalTitle && 
                             state.settings.originalTitle !== state.settings.title 
                             ? state.settings.originalTitle : null;
        
        const payload = {
            action: 'submit',
            formTitle: state.settings.title,
            formId: state.settings.formId || null,
            oldFormTitle: oldFormTitle,
            syncSchema: true,
            fields: fieldDefs,
            data: data
        };
        
        state.settings.originalTitle = state.settings.title;
        
        console.log('Payload:', payload);
        
        const response = await fetch(scriptUrl, {
            method: 'POST', mode: 'cors', redirect: 'follow',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(payload)
        });
        
        console.log('Response status:', response.status);
        
        const text = await response.text();
        console.log('Response text:', text);
        
        let result;
        try {
            result = JSON.parse(text);
        } catch(e) {
            console.error('Failed to parse response:', text);
            saveOffline(data);
            return { success: false, offline: true, error: 'Invalid response from server' };
        }
        
        console.log('Parsed result:', result);
        
        if (result.success) {
            data._synced = true;
            data._syncedAt = new Date().toISOString();
            console.log('✓ Submitted successfully');
            return { success: true, offline: false };
        } else {
            console.error('Sheets submission failed:', result.error);
            saveOffline(data);
            return { success: false, offline: true, error: result.error };
        }
    } catch (err) {
        console.error('Sheets submission error:', err);
        saveOffline(data);
        return { success: false, offline: true, error: err.message };
    }
}

async function loadFromGoogleSheets() {
    console.log('=== loadFromGoogleSheets called ===');
    const scriptUrl = CONFIG.AUTH_SCRIPT_URL;
    if (!scriptUrl) {
        console.log('No script URL configured');
        return [];
    }
    
    const formTitle = state.settings.title;
    console.log('Form title:', formTitle);
    
    if (!formTitle) {
        console.log('No form title set');
        return [];
    }
    
    const url = `${scriptUrl}?action=getData&formTitle=${encodeURIComponent(formTitle)}&limit=1000`;
    console.log('Fetching from:', url);
    
    try {
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            console.error('HTTP error:', response.status, response.statusText);
            return [];
        }
        
        const text = await response.text();
        console.log('Response text (first 500 chars):', text.substring(0, 500));
        
        if (!text || text.trim() === '') {
            console.log('Empty response from server');
            return [];
        }
        
        let result;
        try {
            result = JSON.parse(text);
        } catch (parseErr) {
            console.error('JSON parse error:', parseErr);
            console.error('Response was:', text.substring(0, 200));
            return [];
        }
        
        if (result.success && result.data) {
            console.log('✓ Loaded', result.data.length, 'records from Google Sheets');
            return result.data;
        } else {
            console.log('No data or error:', result.error || result.message || 'Unknown');
            return [];
        }
    } catch (err) {
        console.error('Load error:', err.name, err.message);
        return [];
    }
}

function saveOffline(data) {
    data._offline = true;
    
    const fieldDefs = state.fields
        .filter(f => f.type !== 'section')
        .map(f => ({ label: f.label, name: f.name }));
    
    fieldDefs.unshift(
        { label: 'Record ID', name: '_id' },
        { label: 'Timestamp', name: '_timestamp' },
        { label: 'Synced', name: '_synced' }
    );
    
    const offlineData = JSON.parse(safeStorage.getItem('icfOfflineData') || '[]');
    offlineData.push({ 
        formTitle: state.settings.title, 
        fields: fieldDefs,
        data: data 
    });
    safeStorage.setItem('icfOfflineData', JSON.stringify(offlineData));
}

async function syncOfflineData() {
    if (!navigator.onLine) {
        notify('No internet connection', 'error');
        return;
    }
    
    const offlineData = JSON.parse(safeStorage.getItem('icfOfflineData') || '[]');
    if (offlineData.length === 0) {
        notify('No offline data to sync', 'info');
        return;
    }
    
    notify(`Syncing ${offlineData.length} offline records...`, 'info');
    
    let synced = 0;
    let failed = 0;
    const remaining = [];
    
    for (const item of offlineData) {
        try {
            const response = await fetch(CONFIG.AUTH_SCRIPT_URL, {
                method: 'POST', mode: 'cors', redirect: 'follow',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    action: 'submit',
                    formTitle: item.formTitle,
                    fields: item.fields,
                    data: item.data
                })
            });
            
            const result = await response.json();
            
            if (result.success) {
                synced++;
                const localRecord = state.collectedData.find(d => d._id === item.data._id);
                if (localRecord) {
                    localRecord._synced = true;
                    localRecord._syncedAt = new Date().toISOString();
                    delete localRecord._offline;
                }
            } else {
                failed++;
                remaining.push(item);
            }
        } catch (err) {
            failed++;
            remaining.push(item);
        }
    }
    
    safeStorage.setItem('icfOfflineData', JSON.stringify(remaining));
    saveToStorage();
    
    if (synced > 0) {
        notify(`Synced ${synced} records to Google Sheets!`, 'success');
    }
    if (failed > 0) {
        notify(`${failed} records failed to sync`, 'error');
    }
    
    loadViewerData();
}

window.addEventListener('online', () => {
    const offlineData = JSON.parse(safeStorage.getItem('icfOfflineData') || '[]');
    if (offlineData.length > 0) {
        notify('Back online! Syncing offline data...', 'info');
        setTimeout(syncOfflineData, 1000);
    }
});

function getOfflineCount() {
    const offlineData = JSON.parse(safeStorage.getItem('icfOfflineData') || '[]');
    return offlineData.length;
}

function updateConnectionStatus() {
    const statusEl = document.getElementById('connectionStatus');
    if (!statusEl) return;
    
    const offlineCount = getOfflineCount();
    const isOnline = navigator.onLine;
    
    statusEl.className = 'connection-status ' + (isOnline ? 'online' : 'offline');
    
    if (isOnline) {
        if (offlineCount > 0) {
            statusEl.innerHTML = `<span class="inline-icon" style="color:#ffc107;">${getIcon('wifi', 14)}</span> Online (${offlineCount} pending)`;
            statusEl.style.background = '#ffc107';
            statusEl.style.color = '#000';
        } else {
            statusEl.innerHTML = `<span class="inline-icon">${getIcon('wifi', 14)}</span> Online`;
            statusEl.style.background = '#28a745';
            statusEl.style.color = '#fff';
        }
    } else {
        statusEl.innerHTML = `<span class="inline-icon">${getIcon('wifi-off', 14)}</span> Offline`;
        statusEl.style.background = '#dc3545';
        statusEl.style.color = '#fff';
    }
}

window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

// ==================== STORAGE FUNCTIONS ====================
function saveToStorage() {
    safeStorage.setItem('icfCollectForm', JSON.stringify({
        fields: state.fields,
        settings: state.settings,
        fieldCounter: state.fieldCounter,
        collectedData: state.collectedData,
        filterOrder: state.filterOrder,
        dhis2: {
            datasetId: state.dhis2?.datasetId,
            programId: state.dhis2?.programId,
            dataElements: state.dhis2?.dataElements
        }
    }));
}

function loadFromStorage() {
    const saved = safeStorage.getItem('icfCollectForm');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            state.fields = data.fields || [];
            state.settings = { ...state.settings, ...data.settings };
            state.fieldCounter = data.fieldCounter || 0;
            state.collectedData = data.collectedData || [];
            state.filterOrder = data.filterOrder || [];
            if (data.dhis2) {
                state.dhis2.datasetId = data.dhis2.datasetId;
                state.dhis2.programId = data.dhis2.programId;
                state.dhis2.dataElements = data.dhis2.dataElements || {};
            }
            
            if (!state.settings.formId) {
                state.settings.formId = 'form_' + Date.now();
            }
            state.settings.originalTitle = state.settings.title;
            
            document.getElementById('formTitle').value = state.settings.title;
            document.getElementById('previewTitle').textContent = state.settings.title;
        } catch (e) {}
    }
}

function loadConfigs() {
    const sheetsConfig = safeStorage.getItem('icfSheetsConfig');
    if (sheetsConfig) {
        try {
            const config = JSON.parse(sheetsConfig);
            state.sheets = { ...state.sheets, ...config };
        } catch (e) {}
    }
    
    const dhis2Config = safeStorage.getItem('icfDhis2Config');
    if (dhis2Config) {
        try {
            const config = JSON.parse(dhis2Config);
            if (!state.dhis2) {
                state.dhis2 = { dataElements: {}, datasetId: null, programId: '', url: '', username: '', password: '', syncMode: 'aggregate', orgUnitLevel: 5, periodType: 'Monthly', periodColumn: '', orgUnitColumn: '', connected: false, orgUnits: [], orgUnitMap: {} };
            }
            state.dhis2 = { ...state.dhis2, ...config };
        } catch (e) {}
    }
}

// ==================== FORM BUILDER FUNCTIONS ====================
function addField(type) {
    const def = fieldDefs[type];
    if (!def) return;
    
    if (type === 'period' && state.fields.find(f => f.type === 'period')) {
        notify('Period field already exists', 'error');
        return;
    }
    
    state.fieldCounter++;
    const field = {
        id: 'field_' + state.fieldCounter,
        type: type,
        label: def.defaultLabel,
        name: type + '_' + state.fieldCounter,
        required: true,
        options: def.options ? [...def.options] : [],
        max: def.max || 5
    };
    
    if (type === 'period') {
        field.name = 'period';
        field.label = 'Reporting Period';
    }
    
    state.fields.push(field);
    renderFields();
    selectField(field.id);
    saveToStorage();
}

function removeField(id) {
    event?.stopPropagation();
    if (!confirm('Delete field?')) return;
    state.fields = state.fields.filter(f => f.id !== id);
    if (state.selectedFieldId === id) { state.selectedFieldId = null; renderProperties(); }
    renderFields();
    saveToStorage();
}

function moveField(id, direction) {
    event?.stopPropagation();
    const index = state.fields.findIndex(f => f.id === id);
    if (index < 0) return;
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= state.fields.length) return;
    [state.fields[index], state.fields[newIndex]] = [state.fields[newIndex], state.fields[index]];
    renderFields();
    saveToStorage();
}

function selectField(id) {
    state.selectedFieldId = id;
    renderFields();
    renderProperties();
}

function updateField(prop, value) {
    const field = state.fields.find(f => f.id === state.selectedFieldId);
    if (field) { field[prop] = value; renderFields(); saveToStorage(); }
}

function renderFields() {
    const dropZone = document.getElementById('dropZone');
    const dataFieldCount = state.fields.filter(f => f.type !== 'section').length;
    document.getElementById('fieldCount').innerHTML = `<span data-icon="bar-chart-3" data-size="12"></span> ${dataFieldCount} fields`;
    initIcons();
    
    if (state.fields.length === 0) {
        dropZone.classList.remove('has-fields');
        dropZone.innerHTML = '<p style="font-size:48px;margin-bottom:12px;"><span class="inline-icon">' + getIcon('inbox', 48) + '</span></p><p style="font-weight:600;">Click field types to add them</p><p style="font-size:11px;color:#868e96;margin-top:10px;">Add Period + Org Unit fields for DHIS2 sync</p>';
        return;
    }
    
    dropZone.classList.add('has-fields');
    
    dropZone.innerHTML = state.fields.map(f => {
        if (f.type === 'section') {
            return `<div class="section-divider ${f.id === state.selectedFieldId ? 'selected' : ''}" data-id="${f.id}">
                <span><span class="inline-icon">${getIcon('folder', 14)}</span> ${f.label.toUpperCase()}</span>
                <div style="display:flex;gap:5px;">
                    <button class="field-action-btn" onclick="moveField('${f.id}','up')"><span class="inline-icon">${getIcon('chevron-up', 12)}</span></button>
                    <button class="field-action-btn" onclick="moveField('${f.id}','down')"><span class="inline-icon">${getIcon('chevron-down', 12)}</span></button>
                    <button class="field-action-btn delete" onclick="removeField('${f.id}')"><span class="inline-icon">${getIcon('trash-2', 12)}</span></button>
                </div>
            </div>`;
        }
        
        const def = fieldDefs[f.type];
        const isDhis2Field = f.type === 'period';
        const isNumeric = f.type === 'number';
        const isCascade = f.cascadeGroup;
        const isCalc = f.type === 'calculation';
        
        return `<div class="form-field ${f.id === state.selectedFieldId ? 'selected' : ''} ${isDhis2Field ? 'dhis2-field' : ''} ${isCascade ? 'cascade-field' : ''}" data-id="${f.id}">
            <div class="form-field-header">
                <span class="form-field-label"><span class="inline-icon">${getIcon(def?.icon || 'file-text', 14)}</span> ${f.label}</span>
                <div class="form-field-actions">
                    <button class="field-action-btn" onclick="moveField('${f.id}','up')"><span class="inline-icon">${getIcon('chevron-up', 12)}</span></button>
                    <button class="field-action-btn" onclick="moveField('${f.id}','down')"><span class="inline-icon">${getIcon('chevron-down', 12)}</span></button>
                    <button class="field-action-btn delete" onclick="removeField('${f.id}')"><span class="inline-icon">${getIcon('trash-2', 12)}</span></button>
                </div>
            </div>
            <div style="font-size:10px;color:#868e96;">
                Code: <code>${f.name}</code>
                ${f.required ? '<span class="field-badge required">Required</span>' : ''}
                ${isDhis2Field ? '<span class="field-badge dhis2">DHIS2</span>' : ''}
                ${isNumeric ? '<span class="field-badge aggregate">SUM</span>' : ''}
                ${isCascade ? `<span class="field-badge cascade">Cascade L${(f.cascadeLevel || 0) + 1}</span>` : ''}
                ${isCalc ? '<span class="field-badge calc">CALC</span>' : ''}
            </div>
        </div>`;
    }).join('');
    
    dropZone.querySelectorAll('.form-field, .section-divider').forEach(el => {
        el.addEventListener('click', (e) => {
            if (!e.target.closest('.field-action-btn')) selectField(el.dataset.id);
        });
    });
}

function renderProperties() {
    const container = document.getElementById('propertiesContent');
    if (!state.selectedFieldId) {
        container.innerHTML = '<div class="no-selection"><p style="font-size:32px;margin-bottom:12px;"><span data-icon="chevron-up" data-size="32"></span></p><p>Select a field to edit</p></div>';
        return;
    }
    
    const field = state.fields.find(f => f.id === state.selectedFieldId);
    if (!field) return;
    
    if (!field.showLogic) field.showLogic = [];
    if (!field.validation) field.validation = [];
    
    let html = `
        <div class="prop-section">
            <div class="prop-section-title"><span data-icon="edit-3" data-size="12"></span> Field Settings</div>
            <div class="property-group">
                <label class="property-label">Label</label>
                <input type="text" class="property-input" id="propLabel" value="${escapeHtml(field.label)}">
            </div>
            <div class="property-group">
                <label class="property-label">Code / Name</label>
                <input type="text" class="property-input" id="propName" value="${escapeHtml(field.name)}">
            </div>
            ${field.type !== 'section' ? `
                <div class="property-group">
                    <label class="property-checkbox">
                        <input type="checkbox" id="propRequired" ${field.required ? 'checked' : ''}>
                        <span>Required Field</span>
                    </label>
                </div>
                <div class="property-group">
                    <label class="property-checkbox">
                        <input type="checkbox" id="propCheckDuplicate" ${field.checkDuplicate ? 'checked' : ''}>
                        <span>Check for Duplicates</span>
                    </label>
                    <p style="font-size:9px;color:#868e96;margin-top:4px;">Block submission if this value already exists in Google Sheets</p>
                </div>
            ` : ''}
        </div>
    `;
    
    if (['select', 'radio', 'checkbox'].includes(field.type) && !field.cascadeGroup) {
        html += `
            <div class="prop-section">
                <div class="prop-section-title"><span data-icon="list" data-size="12"></span> Options (one per line)</div>
                <textarea class="property-textarea" id="propOptions">${(field.options || []).join('\n')}</textarea>
            </div>
        `;
    }
    
    container.innerHTML = html;
    initIcons();
    
    document.getElementById('propLabel')?.addEventListener('change', (e) => updateField('label', e.target.value));
    document.getElementById('propName')?.addEventListener('change', (e) => updateField('name', e.target.value));
    document.getElementById('propRequired')?.addEventListener('change', (e) => updateField('required', e.target.checked));
    document.getElementById('propCheckDuplicate')?.addEventListener('change', (e) => updateField('checkDuplicate', e.target.checked));
    document.getElementById('propOptions')?.addEventListener('change', (e) => updateField('options', e.target.value.split('\n').filter(o => o.trim())));
}

// ==================== FORM OPERATIONS ====================
function newForm() {
    if (state.fields.length > 0 && !confirm('Create new form?')) return;
    state.fields = [];
    state.selectedFieldId = null;
    state.fieldCounter = 0;
    
    if (!state.dhis2) {
        state.dhis2 = { dataElements: {}, datasetId: null, programId: '', url: '', username: '', password: '', syncMode: 'aggregate', orgUnitLevel: 5, periodType: 'Monthly', periodColumn: '', orgUnitColumn: '', connected: false, orgUnits: [], orgUnitMap: {} };
    }
    state.dhis2.dataElements = {};
    state.dhis2.datasetId = null;
    state.collectedData = [];
    
    const title = prompt('Form Name:', 'New Form');
    if (title) {
        state.settings.title = title;
        state.settings.originalTitle = title;
        state.settings.formId = 'form_' + Date.now();
        document.getElementById('formTitle').value = title;
        document.getElementById('previewTitle').textContent = title;
    }
    saveToStorage();
    renderFields();
    renderProperties();
    notify('New form created!');
}

function saveCurrentForm() {
    if (state.fields.length === 0) { notify('Add fields first!', 'error'); return; }
    saveToStorage();
    saveFormToList();
    notify('Form saved!');
}

function saveFormToList() {
    const forms = JSON.parse(safeStorage.getItem('icfCollectForms') || '[]');
    
    let formId = state.settings.formId;
    if (!formId) {
        const existingForm = forms.find(f => f.title === state.settings.title || f.id === state.settings.formId);
        formId = existingForm ? existingForm.id : 'form_' + Date.now();
        state.settings.formId = formId;
    }
    
    const existingIndex = forms.findIndex(f => f.id === formId);
    const formEntry = {
        id: formId,
        title: state.settings.title,
        fieldCount: state.fields.filter(f => f.type !== 'section').length,
        updatedAt: new Date().toISOString(),
        fields: state.fields,
        settings: state.settings,
        collectedData: state.collectedData,
        dhis2: {
            datasetId: state.dhis2?.datasetId,
            programId: state.dhis2?.programId,
            dataElements: state.dhis2?.dataElements
        }
    };
    if (existingIndex >= 0) forms[existingIndex] = formEntry;
    else forms.push(formEntry);
    safeStorage.setItem('icfCollectForms', JSON.stringify(forms));
    
    state.settings.originalTitle = state.settings.title;
    saveFormToCloud(formEntry);
}

async function saveFormToCloud(formEntry) {
    if (!state.sheets.scriptUrl || !state.user) return;
    
    try {
        const response = await fetch(state.sheets.scriptUrl, {
            method: 'POST', mode: 'cors', redirect: 'follow',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
                action: 'saveForm',
                email: state.user.email,
                formId: formEntry.id,
                formData: JSON.stringify(formEntry)
            })
        });
        const result = await response.json();
        if (result.success) {
            console.log('Form saved to cloud');
        }
    } catch (err) {
        console.error('Cloud save error:', err);
    }
}

// ==================== VIEWER FUNCTIONS ====================
function previewForm() {
    if (state.fields.length === 0) { notify('Add fields!', 'error'); return; }
    state.isSharedMode = false;
    document.querySelector('.header').style.display = 'none';
    document.getElementById('mainContainer').classList.remove('show');
    document.querySelector('.footer').style.display = 'none';
    document.getElementById('viewerContainer').classList.add('show');
    renderFormViewer();
}

function closeViewer() {
    document.getElementById('viewerContainer').classList.remove('show');
    document.querySelector('.header').style.display = '';
    document.getElementById('mainContainer').classList.add('show');
    document.querySelector('.footer').style.display = 'block';
}

function renderFormViewer() {
    const s = state.settings;
    let pages = [], currentPage = { title: 'Page 1', fields: [], sectionId: null };
    
    console.log('renderFormViewer - Total fields:', state.fields.length);
    
    state.fields.forEach((field, idx) => {
        console.log(`  Field ${idx}: type=${field.type}, label=${field.label}`);
        if (field.type === 'section') {
            if (currentPage.fields.length > 0) pages.push(currentPage);
            currentPage = { title: field.label, fields: [], sectionId: field.id };
        } else {
            currentPage.fields.push(field);
        }
    });
    if (currentPage.fields.length > 0) pages.push(currentPage);
    if (pages.length === 0) pages = [{ title: s.title, fields: state.fields.filter(f => f.type !== 'section'), sectionId: null }];
    
    console.log('renderFormViewer - Pages created:', pages.length);
    pages.forEach((p, i) => console.log(`  Page ${i}: "${p.title}" with ${p.fields.length} fields`));
    
    let pagesHtml = pages.map((page, pageIndex) => {
        console.log(`Rendering page ${pageIndex}: "${page.title}" with ${page.fields.length} fields`);
        
        let fieldsHtml = page.fields.map((field, fieldIdx) => {
            try {
                console.log(`  Field ${fieldIdx}: ${field.name} (${field.type}), options:`, field.options?.length || 0);
            const req = field.required ? '<span style="color:#dc3545;">*</span>' : '';
            const reqAttr = field.required ? 'required' : '';
            let input = '';
            
            let textAttrs = '';
            if (field.minLength) textAttrs += ` minlength="${field.minLength}"`;
            if (field.maxLength) textAttrs += ` maxlength="${field.maxLength}"`;
            if (field.exactLength) textAttrs += ` minlength="${field.exactLength}" maxlength="${field.exactLength}"`;
            
            let phoneAttrs = '';
            if (field.exactDigits) {
                phoneAttrs = ` pattern="[0-9]{${field.exactDigits}}" title="Must be exactly ${field.exactDigits} digits"`;
            } else if (field.minDigits || field.maxDigits) {
                const min = field.minDigits || 1;
                const max = field.maxDigits || 20;
                phoneAttrs = ` pattern="[0-9]{${min},${max}}" title="Must be ${min}-${max} digits"`;
            }
            
            let dateAttrs = '';
            const today = new Date().toISOString().split('T')[0];
            if (field.noFutureDates) dateAttrs += ` max="${today}"`;
            if (field.noPastDates) dateAttrs += ` min="${today}"`;
            if (field.minDate) dateAttrs += ` min="${field.minDate}"`;
            if (field.maxDate) dateAttrs += ` max="${field.maxDate}"`;
            
            const currentTime = new Date().toTimeString().slice(0, 5);
            const autoTimeValue = (field.autoTime !== false) ? ` value="${currentTime}"` : '';
            
            switch (field.type) {
                case 'period':
                    input = `<select name="${field.name}" class="viewer-input" ${reqAttr}>
                        <option value="">-- Select Period --</option>
                        ${PERIODS.map(p => `<option value="${p}">${p.substring(0,4)}-${p.substring(4)}</option>`).join('')}
                    </select>`;
                    break;
                case 'text':
                    input = `<input type="text" name="${field.name}" class="viewer-input" ${reqAttr}${textAttrs}>`;
                    break;
                case 'email':
                    input = `<input type="email" name="${field.name}" class="viewer-input" ${reqAttr} pattern="[^\\s@]+@[^\\s@]+\\.[^\\s@]+" title="Please enter a valid email (e.g., name@example.com)">`;
                    break;
                case 'phone':
                    input = `<input type="tel" name="${field.name}" class="viewer-input" ${reqAttr}${phoneAttrs}>`;
                    break;
                case 'date':
                    input = `<input type="date" name="${field.name}" class="viewer-input" ${reqAttr}${dateAttrs}>`;
                    break;
                case 'time':
                    input = `<input type="time" name="${field.name}" class="viewer-input" ${reqAttr}${autoTimeValue} readonly style="background:#f0f0f0;">`;
                    break;
                case 'number':
                    input = `<input type="number" name="${field.name}" class="viewer-input" ${reqAttr}>`;
                    break;
                case 'calculation':
                    input = `<input type="text" name="${field.name}" class="viewer-input calculation-field" 
                        data-formula="${escapeHtml(field.formula || '')}" 
                        readonly 
                        style="background:#e9ecef;font-weight:600;color:#004080;">`;
                    break;
                case 'textarea':
                    input = `<textarea name="${field.name}" class="viewer-input" rows="3" ${reqAttr}${textAttrs}></textarea>`;
                    break;
                case 'select':
                    if (field.cascadeGroup) {
                        const isFirst = (field.cascadeLevel || 0) === 0;
                        const cascadeLevel = field.cascadeLevel || 0;
                        input = `<select name="${field.name}" class="viewer-input cascade-field" 
                            data-cascade-group="${field.cascadeGroup}" 
                            data-cascade-level="${cascadeLevel}"
                            data-cascade-column="${field.cascadeColumn || ''}"
                            onchange="handleCascadeChange(this)"
                            ${isFirst ? '' : 'disabled'} ${reqAttr}>
                            <option value="">-- Select ${escapeHtml(field.label)} --</option>
                        </select>`;
                    } else {
                        input = `<select name="${field.name}" class="viewer-input" ${reqAttr}><option value="">-- Select --</option>${(field.options||[]).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('')}</select>`;
                    }
                    break;
                case 'radio': case 'yesno':
                    const opts = field.type === 'yesno' ? ['Yes','No'] : (field.options||[]);
                    input = `<div class="viewer-radio-group">${opts.map(o => `<label class="viewer-radio-option"><input type="radio" name="${field.name}" value="${escapeHtml(o)}" ${reqAttr}><span>${escapeHtml(o)}</span></label>`).join('')}</div>`;
                    break;
                case 'checkbox':
                    input = `<div class="viewer-radio-group">${(field.options||[]).map((o, idx) => `<label class="viewer-radio-option"><input type="checkbox" name="${field.name}" value="${escapeHtml(o)}"><span>${escapeHtml(o)}</span></label>`).join('')}</div>`;
                    break;
                case 'gps':
                    input = `<div><button type="button" onclick="captureGPS(this)" style="padding:10px 20px;background:#004080;color:white;border:none;border-radius:6px;cursor:pointer;"><span data-icon="map-pin" data-size="14"></span> Get Location</button><input type="hidden" name="${field.name}"><div class="gps-status" style="margin-top:6px;font-size:11px;"></div>
                `;
                    break;
                case 'qrcode':
                    input = `<div class="qr-scanner-container">
                        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
                            <button type="button" onclick="startQRScanner(this)" style="padding:10px 20px;background:#6f42c1;color:white;border:none;border-radius:6px;cursor:pointer;"><span data-icon="scan" data-size="14"></span> Scan QR/Barcode</button>
                            <input type="hidden" name="${field.name}" ${reqAttr}>
                            <span class="qr-value" style="font-size:12px;color:#28a745;font-weight:600;"></span>
                        </div>
                        <div class="qr-preview" style="margin-top:10px;display:none;">
                            <video class="qr-video" style="width:100%;max-width:300px;border-radius:8px;"></video>
                            <button type="button" onclick="stopQRScanner(this)" style="margin-top:8px;padding:6px 12px;background:#dc3545;color:white;border:none;border-radius:4px;cursor:pointer;">Stop Scanner</button>
                        </div>
                        <div class="qr-status" style="margin-top:6px;font-size:11px;"></div>
                    </div>`;
                    break;
                case 'cascade':
                    const cascadeColumns = field.cascadeColumns || [];
                    const cascadeId = field.id;
                    if (cascadeColumns.length > 0 && field.cascadeData && field.cascadeData.length > 0) {
                        input = `<div class="cascade-container" data-cascade-id="${cascadeId}" data-field-name="${field.name}" data-value-column="${field.cascadeValueColumn || cascadeColumns[cascadeColumns.length - 1]}">
                            ${cascadeColumns.map((col, idx) => `
                                <div class="cascade-level" data-level="${idx}">
                                    <label class="cascade-label">${escapeHtml(col)}</label>
                                    <select class="viewer-input cascade-select" data-column="${col}" data-level="${idx}" onchange="handleCascadeSelect(this)" ${idx === 0 ? '' : 'disabled'}>
                                        <option value="">-- Select ${escapeHtml(col)} --</option>
                                    </select>
                                </div>
                            `).join('')}
                            <input type="hidden" name="${field.name}" ${reqAttr}>
                        </div>`;
                    } else {
                        input = `<div style="background:#fff3cd;padding:10px;border-radius:6px;font-size:11px;color:#856404;">
                            <span data-icon="alert-triangle" data-size="12"></span> Cascade data not configured. Upload Excel in form builder.
                        </div>`;
                    }
                    break;
                case 'rating':
                    input = `<div>${Array(field.max || 5).fill().map((_, i) => `<span onclick="setRating(this,${i+1})" class="rating-star" style="font-size:24px;cursor:pointer;opacity:0.3;color:#ffc107;">★</span>`).join('')}<input type="hidden" name="${field.name}"></div>`;
                    break;
                default:
                    input = `<input type="text" name="${field.name}" class="viewer-input" ${reqAttr}>`;
            }
            
            return `<div class="viewer-field" data-field-name="${field.name}" data-field-id="${field.id}"><label class="viewer-field-label">${escapeHtml(field.label)} ${req}</label>${input}<div class="field-error-msg"></div></div>`;
            } catch (err) {
                console.error('Error rendering field:', field, err);
                return `<div class="viewer-field" style="color:red;">Error rendering field: ${field.label || field.name}</div>`;
            }
        }).join('');
        
        const isFirst = pageIndex === 0, isLast = pageIndex === pages.length - 1;
        
        return `
            <div class="form-page" data-page="${pageIndex}" data-section-id="${page.sectionId || ''}" style="${pageIndex === 0 ? '' : 'display:none;'}">
                ${pages.length > 1 ? `<div class="page-header"><span class="page-indicator">Page ${pageIndex + 1}/${pages.length}</span><h3 class="page-title">${escapeHtml(page.title)}</h3></div>` : ''}
                ${fieldsHtml}
                <div class="page-navigation">
                    ${!isFirst ? `<button type="button" class="nav-btn back-btn" onclick="goToPrevPage(${pageIndex})"><span class="inline-icon">${getIcon('arrow-left', 14)}</span> Back</button>` : '<div></div>'}
                    ${!isLast ? `<button type="button" class="nav-btn next-btn" onclick="goToNextPage(${pageIndex})">Next <span class="inline-icon">${getIcon('arrow-right', 14)}</span></button>` : ''}
                    ${isLast ? `<button type="submit" class="nav-btn submit-btn"><span data-icon="check" data-size="14"></span> Submit</button>` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    const backBtn = state.isSharedMode ? '' : '<button class="viewer-back-btn" onclick="closeViewer()"><span class="inline-icon">' + getIcon('arrow-left', 14) + '</span> Back</button>';
    
    document.getElementById('viewerContainer').innerHTML = `
        <div class="viewer-nav">
            ${backBtn}
            <button class="viewer-nav-btn active" style="background:#004080;color:#fff;" onclick="showTab('form',this)"><span data-icon="edit-3" data-size="14"></span> Form</button>
            <button class="viewer-nav-btn" style="background:#28a745;color:#fff;" onclick="showTab('data',this)"><span data-icon="table" data-size="14"></span> Data</button>
            <button class="viewer-nav-btn" style="background:#17a2b8;color:#fff;" onclick="showTab('dashboard',this)"><span data-icon="bar-chart-2" data-size="14"></span> Dashboard</button>
            ${state.dhis2.url ? `<div class="connection-status" style="background:#17a2b8;"><span class="inline-icon">${getIcon('link', 14)}</span> DHIS2</div>` : ''}
            <div id="connectionStatus" class="connection-status ${navigator.onLine ? 'online' : 'offline'}">
                ${navigator.onLine ? '<span class="inline-icon" style="color:#28a745;">' + getIcon('wifi', 14) + '</span> Online' : '<span class="inline-icon" style="color:#dc3545;">' + getIcon('wifi-off', 14) + '</span> Offline'}
            </div>
        </div>
        
        <div id="tabForm" class="viewer-tab active">
            <div class="viewer-form">
                <div class="viewer-form-box">
                    <div class="viewer-header">
                        <img src="${s.logo}" alt="Logo">
                        <h1>${escapeHtml(s.title)}</h1>
                        <p>ICF-SL Data Collection System</p>
                    </div>
                    <div class="viewer-body">
                        <form id="viewerForm">${pagesHtml}</form>
                        
                        <div class="draft-actions-bar">
                            <button type="button" class="draft-save-btn" onclick="saveDraft()">
                                <span data-icon="file-edit" data-size="14"></span> Save as Draft
                            </button>
                            <button type="button" class="draft-toggle-btn" onclick="toggleDraftsPanel()">
                                <span data-icon="folder" data-size="14"></span> <span id="draftsCount">Drafts (0)</span>
                            </button>
                        </div>
                        
                        <div id="draftsPanelWrapper" class="drafts-panel-wrapper" style="display:none;">
                            <div class="drafts-panel-header">
                                <span><span data-icon="file-edit" data-size="14"></span> Saved Drafts</span>
                                <button onclick="toggleDraftsPanel()" style="background:none;border:none;cursor:pointer;color:#666;">✕</button>
                            </div>
                            <div id="draftsPanel"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="tabData" class="viewer-tab">
            <div style="max-width:1100px;margin:0 auto;" id="dataContent">
                <p style="text-align:center;padding:40px;"><span data-icon="loader" data-size="14"></span> Loading...</p>
            </div>
        </div>
        
        <div id="tabDashboard" class="viewer-tab">
            <div class="dashboard-container" id="dashboardContent">
                <p style="text-align:center;padding:40px;"><span data-icon="loader" data-size="14"></span> Loading...</p>
            </div>
        </div>
    `;
    
    window.totalPages = pages.length;
    setupFormSubmit();
    loadViewerData();
    initIcons();
    
    setTimeout(() => {
        renderDraftsPanel();
        updateDraftsCount();
    }, 100);
    
    setTimeout(() => {
        applyFormLogic();
        initCascades();
    }, 100);
}

function setupFormSubmit() {
    const form = document.getElementById('viewerForm');
    if (!form) return;
    
    form.addEventListener('input', () => { applyFormLogic(); runCalculations(); });
    form.addEventListener('change', () => { applyFormLogic(); runCalculations(); });
    
    form.onsubmit = async function(e) {
        e.preventDefault();
        
        const validationResult = validateAllFields();
        if (!validationResult.valid) {
            notify(validationResult.message, 'error');
            return;
        }
        
        const data = { _id: Date.now(), _timestamp: new Date().toISOString(), _synced: false };
        new FormData(form).forEach((v, k) => data[k] = v);
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
            submitBtn.innerHTML = '<span class="spin" style="display:inline-block;">' + getIcon('loader', 14) + '</span> Checking...';
            submitBtn.disabled = true;
        }
        
        const duplicateFields = state.fields.filter(f => f.checkDuplicate && data[f.name]);
        if (duplicateFields.length > 0) {
            const duplicateResult = await checkDuplicates(data, duplicateFields);
            if (duplicateResult.hasDuplicate) {
                if (submitBtn) {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }
                notify(`Duplicate found: ${duplicateResult.field} = "${duplicateResult.value}" already exists`, 'error');
                return;
            }
        }
        
        if (submitBtn) {
            submitBtn.innerHTML = '<span class="spin" style="display:inline-block;">' + getIcon('loader', 14) + '</span> Submitting...';
        }
        
        const result = await submitToGoogleSheets(data);
        
        if (result.success && !result.offline) {
            data._synced = true;
        }
        
        state.collectedData.push(data);
        saveToStorage();
        saveFormToList();
        
        const draftId = form.dataset.draftId ? parseInt(form.dataset.draftId) : null;
        if (draftId) {
            removeDraft(draftId);
            delete form.dataset.draftId;
            updateDraftsCount();
        }
        
        form.reset();
        goToPage(0);
        
        setTimeout(() => applyFormLogic(), 100);
        
        if (submitBtn) {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
        
        if (result.success && !result.offline) {
            notify('Submitted to Google Sheets!', 'success');
        } else if (result.offline) {
            notify('Saved offline (will sync when online)', 'info');
        } else {
            notify('Saved locally', 'info');
        }
        
        loadViewerData();
    };
}

async function checkDuplicates(data, duplicateFields) {
    try {
        for (const field of duplicateFields) {
            const value = data[field.name];
            const localDuplicate = state.collectedData.find(d => d[field.name] === value);
            if (localDuplicate) {
                return { hasDuplicate: true, field: field.label, value: value };
            }
        }
        
        const existingData = await loadFromGoogleSheets();
        for (const field of duplicateFields) {
            const value = data[field.name];
            const sheetDuplicate = existingData.find(d => d[field.name] === value);
            if (sheetDuplicate) {
                return { hasDuplicate: true, field: field.label, value: value };
            }
        }
        
        return { hasDuplicate: false };
    } catch (err) {
        console.error('Duplicate check error:', err);
        return { hasDuplicate: false };
    }
}

async function loadViewerData() {
    console.log('=== loadViewerData called ===');
    console.log('Form title:', state.settings.title);
    console.log('Fields count:', state.fields.length);
    console.log('Existing collected data:', state.collectedData.length);
    
    const dataContainer = document.getElementById('dataContent');
    const dashContainer = document.getElementById('dashboardContent');
    
    if (dataContainer) {
        dataContainer.innerHTML = `<p style="text-align:center;padding:40px;"><span class="spin" style="display:inline-block;">${getIcon('loader', 20)}</span> Loading data from Google Sheets...</p>`;
    }
    if (dashContainer) {
        dashContainer.innerHTML = `<p style="text-align:center;padding:40px;"><span class="spin" style="display:inline-block;">${getIcon('loader', 20)}</span> Loading dashboard...</p>`;
    }
    
    try {
        console.log('Calling loadFromGoogleSheets...');
        const sheetsData = await loadFromGoogleSheets();
        console.log('Sheets data received:', sheetsData?.length || 0, 'records');
        
        if (sheetsData && sheetsData.length > 0) {
            state.collectedData = sheetsData.map(d => {
                const sanitized = { ...d };
                sanitized._id = d._id ? (typeof d._id === 'string' ? parseInt(d._id) || d._id : d._id) : Date.now();
                sanitized._synced = true;
                return sanitized;
            });
            console.log('✓ Data loaded from Google Sheets:', state.collectedData.length, 'records');
        } else {
            console.log('No data in Sheets, using local data:', state.collectedData.length, 'records');
        }
    } catch (err) {
        console.error('Could not load from Sheets:', err.message);
        console.log('Fallback to local data:', state.collectedData.length, 'records');
    }
    
    console.log('Rendering data content...');
    renderDataContent();
    console.log('Rendering dashboard...');
    renderDashboard();
    updateConnectionStatus();
    console.log('=== loadViewerData complete ===');
}

function renderDataContent() {
    console.log('=== renderDataContent called ===');
    const container = document.getElementById('dataContent');
    if (!container) {
        console.log('Data content container not found!');
        return;
    }
    
    try {
    console.log('Collected data count:', state.collectedData.length);
    
    const orderedFilterFields = getOrderedFilterFields();
    const filteredData = getFilteredData();
    const aggregateData = calculateAggregateData();
    console.log('Filtered data:', filteredData.length, 'Aggregate:', aggregateData.length);
    
    const activeFilterCount = Object.keys(state.filters).filter(k => state.filters[k]).length + 
                             (state.dateFilter.start || state.dateFilter.end ? 1 : 0);
    
    let filtersHtml = `
        <div class="filter-group">
            <label class="filter-label"><span class="inline-icon">${getIcon('calendar', 12)}</span> From</label>
            <input type="date" class="filter-input" value="${state.dateFilter.start}" onchange="updateDateFilter('start', this.value)">
        </div>
        <div class="filter-group">
            <label class="filter-label"><span class="inline-icon">${getIcon('calendar', 12)}</span> To</label>
            <input type="date" class="filter-input" value="${state.dateFilter.end}" onchange="updateDateFilter('end', this.value)">
        </div>
    `;
    
    orderedFilterFields.forEach((field, idx) => {
        const uniqueValues = [...new Set(state.collectedData.map(d => d[field.name]).filter(Boolean))];
        filtersHtml += `
            <div class="filter-group with-arrows">
                <button class="filter-arrow-btn left" onclick="moveFilter('${field.name}','up')" title="Move Left">◀</button>
                <label class="filter-label">${escapeHtml(field.label)}</label>
                <select class="filter-select" onchange="updateFilter('${field.name}', this.value)">
                    <option value="">All</option>
                    ${uniqueValues.map(v => `<option value="${escapeHtml(v)}" ${state.filters[field.name] === v ? 'selected' : ''}>${escapeHtml(v)}</option>`).join('')}
                </select>
                <button class="filter-arrow-btn right" onclick="moveFilter('${field.name}','down')" title="Move Right">▶</button>
            </div>
        `;
    });
    
    const aggregatableFields = state.fields.filter(f => 
        ['select', 'radio', 'yesno', 'text'].includes(f.type) && f.type !== 'section'
    );
    const selectedColumns = state.settings.aggregateColumns || [];
    const aggregateColumnHtml = `
        <div class="config-section" style="margin-bottom:15px;padding:12px;">
            <div style="display:flex;align-items:flex-start;gap:15px;flex-wrap:wrap;">
                <div style="display:flex;flex-direction:column;gap:8px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span class="inline-icon">${getIcon('layers', 14)}</span>
                        <strong style="font-size:11px;">Aggregate By (select one or more):</strong>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:500px;">
                        ${aggregatableFields.map(f => `
                            <label style="display:flex;align-items:center;gap:4px;padding:4px 8px;background:${selectedColumns.includes(f.name) ? '#004080' : '#f1f3f5'};color:${selectedColumns.includes(f.name) ? '#fff' : '#333'};border-radius:4px;cursor:pointer;font-size:11px;">
                                <input type="checkbox" value="${f.name}" ${selectedColumns.includes(f.name) ? 'checked' : ''} onchange="toggleAggregateColumn('${f.name}')" style="margin:0;">
                                ${escapeHtml(f.label)}
                            </label>
                        `).join('')}
                    </div>
                </div>
                <div style="font-size:10px;color:#28a745;">
                    ${selectedColumns.length > 0 ? `<span class="inline-icon">${getIcon('check-circle', 12)}</span> Grouping by: ${selectedColumns.map(c => {
                        const field = aggregatableFields.find(f => f.name === c);
                        return field ? field.label : c;
                    }).join(' + ')}` : '<span style="color:#868e96;">Select columns to group data</span>'}
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = `
        <div class="filter-panel">
            <div class="filter-header">
                <div class="filter-title"><span class="inline-icon">${getIcon('filter', 14)}</span> Filters ${activeFilterCount > 0 ? `<span class="filter-count">${activeFilterCount} active</span>` : ''}</div>
                <button class="filter-btn clear" onclick="clearAllFilters()"><span class="inline-icon">${getIcon('trash-2', 12)}</span> Clear</button>
            </div>
            <div class="filter-controls">${filtersHtml}</div>
        </div>
        
        ${aggregateColumnHtml}
        
        <div class="data-view-tabs">
            <div class="data-view-tab ${state.currentDataView === 'case' ? 'active' : ''}" onclick="switchDataView('case')"><span class="inline-icon">${getIcon('list', 14)}</span> Case-Based (${filteredData.length})</div>
            <div class="data-view-tab ${state.currentDataView === 'aggregate' ? 'active aggregate' : ''}" onclick="switchDataView('aggregate')"><span class="inline-icon">${getIcon('bar-chart-3', 14)}</span> Aggregate (${aggregateData.length})</div>
        </div>
        
        <div id="dataTableContainer">${state.currentDataView === 'case' ? renderCaseTable(filteredData) : renderAggregateTable(aggregateData)}</div>
        
        <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;">
            <button class="modal-btn primary" onclick="refreshData()"><span class="inline-icon">${getIcon('refresh-cw', 14)}</span> Refresh</button>
            <button class="modal-btn success" onclick="downloadCSV()"><span class="inline-icon">${getIcon('download', 14)}</span> Download CSV</button>
            ${getOfflineCount() > 0 ? `<button class="modal-btn" style="background:#ffc107;color:#000;" onclick="syncOfflineData()"><span class="inline-icon">${getIcon('upload', 14)}</span> Sync Offline (${getOfflineCount()})</button>` : ''}
            ${state.dhis2.url ? `<button class="modal-btn" style="background:#6f42c1;color:#fff;" onclick="syncCaseBased()"><span class="inline-icon">${getIcon('list', 14)}</span> Sync Case-Based</button>` : ''}
            ${state.dhis2.url ? `<button class="modal-btn" style="background:#17a2b8;color:#fff;" onclick="syncAggregate()"><span class="inline-icon">${getIcon('bar-chart-3', 14)}</span> Sync Aggregate</button>` : ''}
        </div>
    `;
    initIcons();
    
    } catch (err) {
        console.error('Error in renderDataContent:', err);
        container.innerHTML = `<div style="text-align:center;padding:40px;color:#dc3545;"><p>Error loading data</p><p style="font-size:12px;">${escapeHtml(err.message)}</p></div>`;
    }
}

function renderCaseTable(data) {
    if (data.length === 0) {
        return '<p style="text-align:center;padding:40px;color:#868e96;"><span data-icon="inbox" data-size="20"></span> No records found</p>';
    }
    
    const fields = state.fields.filter(f => f.type !== 'section');
    
    let html = '<div style="overflow-x:auto;"><table class="data-table"><thead><tr><th>#</th><th><span data-icon="calendar" data-size="12"></span> Timestamp</th>';
    fields.slice(0, 8).forEach(f => html += `<th>${escapeHtml(f.label)}</th>`);
    html += '<th>Status</th></tr></thead><tbody>';
    
    data.slice().reverse().forEach((row, i) => {
        const syncStatus = row._synced ? 
            '<span class="sync-badge synced"><span data-icon="check" data-size="10"></span> Synced</span>' : 
            (row._syncError ? '<span class="sync-badge failed"><span data-icon="x" data-size="10"></span> Failed</span>' : '<span class="sync-badge pending"><span data-icon="clock" data-size="10"></span> Pending</span>');
            
        html += `<tr><td>${data.length - i}</td><td style="font-size:10px;">${new Date(row._timestamp).toLocaleString()}</td>`;
        fields.slice(0, 8).forEach(f => html += `<td>${escapeHtml(String(row[f.name] || '-').substring(0, 25))}</td>`);
        html += `<td>${syncStatus}</td></tr>`;
    });
    
    html += '</tbody></table></div>';
    return html;
}

function renderAggregateTable(data) {
    if (data.length === 0) {
        return '<p style="text-align:center;padding:40px;color:#868e96;"><span data-icon="inbox" data-size="20"></span> No aggregate data available</p>';
    }
    
    const periodColumn = state.dhis2.periodColumn;
    const aggregateColumn = state.settings.aggregateColumn || state.dhis2.orgUnitColumn;
    
    const skipFields = [periodColumn, aggregateColumn].filter(Boolean);
    const skipTypes = ['phone', 'gps', 'email', 'text', 'textarea', 'date', 'time'];
    
    const dataFields = state.fields.filter(f => 
        f.type !== 'section' && 
        !skipFields.includes(f.name) &&
        !skipTypes.includes(f.type)
    );
    
    const columns = [];
    const categoricalTypes = ['select', 'radio', 'yesno', 'checkbox'];
    
    dataFields.forEach(f => {
        const def = fieldDefs[f.type];
        
        if (categoricalTypes.includes(f.type)) {
            const options = f.type === 'yesno' ? ['Yes', 'No'] : (f.options || []);
            options.forEach(opt => {
                columns.push({
                    key: `${f.name}_${opt}`,
                    label: `${f.label} (${opt})`,
                    type: 'categorical'
                });
            });
        } else if (def?.category === 'numeric' || f.type === 'number') {
            columns.push({
                key: f.name,
                label: `${f.label} (SUM)`,
                type: 'numeric'
            });
        }
    });
    
    const aggregateField = state.fields.find(f => f.name === aggregateColumn);
    const aggregateLabel = aggregateField?.label || 'Group';
    
    let html = '<div style="overflow-x:auto;"><table class="aggregate-table"><thead><tr>';
    html += '<th style="position:sticky;left:0;background:#004080;z-index:2;"><span class="inline-icon">' + getIcon('layers', 14) + '</span> ' + escapeHtml(aggregateLabel) + '</th>';
    html += '<th><span class="inline-icon">' + getIcon('calendar', 14) + '</span> Period</th>';
    html += '<th><span class="inline-icon">' + getIcon('bar-chart-3', 14) + '</span> N</th>';
    
    columns.forEach(col => {
        const bgColor = col.type === 'categorical' ? '#0066cc' : '#004080';
        html += `<th style="background:${bgColor};white-space:nowrap;font-size:11px;">${escapeHtml(col.label)}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    data.forEach(row => {
        html += `<tr>`;
        html += `<td style="position:sticky;left:0;background:#fff;z-index:1;font-weight:600;">${escapeHtml(row._group)}</td>`;
        html += `<td>${escapeHtml(row._period)}</td>`;
        html += `<td class="aggregate-value" style="font-weight:600;">${row._count}</td>`;
        
        columns.forEach(col => {
            const value = row[col.key];
            const displayVal = value !== undefined && value !== null ? value : 0;
            html += `<td class="aggregate-value">${displayVal}</td>`;
        });
        html += '</tr>';
    });
    
    html += '</tbody></table></div>';
    return html;
}

function switchDataView(view) {
    state.currentDataView = view;
    renderDataContent();
}

function toggleAggregateColumn(columnName) {
    if (!state.settings.aggregateColumns) {
        state.settings.aggregateColumns = [];
    }
    
    const index = state.settings.aggregateColumns.indexOf(columnName);
    if (index >= 0) {
        state.settings.aggregateColumns.splice(index, 1);
    } else {
        state.settings.aggregateColumns.push(columnName);
    }
    
    state.settings.aggregateColumn = state.settings.aggregateColumns[0] || '';
    
    saveToStorage();
    renderDataContent();
    renderDashboard();
}

function refreshData() {
    notify('Refreshing...');
    loadViewerData();
    notify('Refreshed!');
}

function downloadCSV() {
    const isAggregate = state.currentDataView === 'aggregate';
    const data = isAggregate ? calculateAggregateData() : getFilteredData();
    if (data.length === 0) { notify('No data', 'error'); return; }
    
    const nameToLabel = {};
    state.fields.forEach(f => {
        if (f.name && f.label) {
            nameToLabel[f.name] = f.label;
        }
    });
    nameToLabel['_timestamp'] = 'Timestamp';
    nameToLabel['_id'] = 'Record ID';
    nameToLabel['_group'] = 'Group';
    nameToLabel['_period'] = 'Period';
    nameToLabel['_count'] = 'Count';
    
    const headers = Object.keys(data[0]).filter(k => {
        if (isAggregate) {
            return k === '_group' || k === '_period' || k === '_count' || !k.startsWith('_');
        }
        return !k.startsWith('_') || k === '_timestamp';
    });
    
    const headerLabels = headers.map(h => nameToLabel[h] || h);
    let csv = headerLabels.map(h => `"${String(h).replace(/"/g, '""')}"`).join(',') + '\n';
    
    data.forEach(row => {
        csv += headers.map(h => `"${String(row[h] || '').replace(/"/g, '""')}"`).join(',') + '\n';
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.settings.title}_${state.currentDataView}_data.csv`;
    a.click();
    URL.revokeObjectURL(url);
    notify('Downloaded!');
}

function renderDashboard() {
    console.log('=== renderDashboard called ===');
    const container = document.getElementById('dashboardContent');
    if (!container) {
        console.log('Dashboard container not found!');
        return;
    }
    
    try {
    const orderedFilterFields = getOrderedFilterFields();
    const filteredData = getFilteredData();
    const aggregateData = calculateAggregateData();
    console.log('Filtered data:', filteredData.length, 'Aggregate data:', aggregateData.length);
    
    const activeFilterCount = Object.keys(state.filters).filter(k => state.filters[k]).length + 
                             (state.dateFilter.start || state.dateFilter.end ? 1 : 0);
    
    Object.values(state.chartInstances).forEach(chart => { if (chart) chart.destroy(); });
    state.chartInstances = {};
    
    const synced = state.collectedData.filter(d => d._synced).length;
    const pending = state.collectedData.filter(d => !d._synced && !d._syncError).length;
    const periodColumn = state.dhis2.periodColumn;
    const uniquePeriods = periodColumn ? [...new Set(filteredData.map(d => d[periodColumn]).filter(Boolean))].length : 0;
    
    const aggregateColumn = state.settings.aggregateColumn || state.dhis2.orgUnitColumn;
    const aggregateField = state.fields.find(f => f.name === aggregateColumn);
    const uniqueGroups = aggregateColumn ? [...new Set(filteredData.map(d => d[aggregateColumn]).filter(Boolean))].length : 0;
    
    let filtersHtml = `
        <div class="filter-group">
            <label class="filter-label"><span class="inline-icon">${getIcon('calendar', 12)}</span> From</label>
            <input type="date" class="filter-input" value="${state.dateFilter.start}" onchange="updateDateFilter('start', this.value)">
        </div>
        <div class="filter-group">
            <label class="filter-label"><span class="inline-icon">${getIcon('calendar', 12)}</span> To</label>
            <input type="date" class="filter-input" value="${state.dateFilter.end}" onchange="updateDateFilter('end', this.value)">
        </div>
    `;
    
    orderedFilterFields.forEach((field, idx) => {
        const uniqueValues = [...new Set(state.collectedData.map(d => d[field.name]).filter(Boolean))];
        filtersHtml += `
            <div class="filter-group with-arrows">
                <button class="filter-arrow-btn left" onclick="moveFilter('${field.name}','up')" title="Move Left">◀</button>
                <label class="filter-label">${escapeHtml(field.label)}</label>
                <select class="filter-select" onchange="updateFilter('${field.name}', this.value)">
                    <option value="">All</option>
                    ${uniqueValues.map(v => `<option value="${escapeHtml(v)}" ${state.filters[field.name] === v ? 'selected' : ''}>${escapeHtml(v)}</option>`).join('')}
                </select>
                <button class="filter-arrow-btn right" onclick="moveFilter('${field.name}','down')" title="Move Right">▶</button>
            </div>
        `;
    });
    
    const categoricalTypes = ['select', 'radio', 'yesno', 'checkbox'];
    const categoricalFields = state.fields.filter(f => 
        categoricalTypes.includes(f.type) && 
        f.name !== aggregateColumn && 
        f.name !== periodColumn
    );
    const numericFields = state.fields.filter(f => f.type === 'number');
    
    let chartsHtml = '';
    
    categoricalFields.forEach((field, idx) => {
        const valueCounts = {};
        filteredData.forEach(row => {
            const value = row[field.name];
            if (value) valueCounts[value] = (valueCounts[value] || 0) + 1;
        });
        
        if (Object.keys(valueCounts).length > 0) {
            chartsHtml += `
                <div class="chart-container">
                    <h4><span class="inline-icon">${getIcon('bar-chart-3', 16)}</span> ${escapeHtml(field.label)}</h4>
                    <div class="chart-wrapper">
                        <div class="chart-box"><canvas id="barChart_${idx}"></canvas></div>
                        <div class="chart-box"><canvas id="pieChart_${idx}"></canvas></div>
                    </div>
                </div>
            `;
        }
    });
    
    if (numericFields.length > 0 && aggregateData.length > 0) {
        chartsHtml += `
            <div class="chart-container">
                <h4><span data-icon="hash" data-size="14"></span> Numeric Summary (Aggregate)</h4>
                <div style="overflow-x:auto;">
                    <table class="data-table">
                        <thead><tr><th>Field</th><th>Total Sum</th><th>Average per Location</th><th>Min</th><th>Max</th></tr></thead>
                        <tbody>
                            ${numericFields.map(field => {
                                const values = aggregateData.map(d => d[field.name] || 0);
                                const sum = values.reduce((a, b) => a + b, 0);
                                const avg = values.length > 0 ? (sum / values.length).toFixed(2) : 0;
                                const min = values.length > 0 ? Math.min(...values) : 0;
                                const max = values.length > 0 ? Math.max(...values) : 0;
                                return `<tr><td><strong>${escapeHtml(field.label)}</strong></td><td>${sum}</td><td>${avg}</td><td>${min}</td><td>${max}</td></tr>`;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="filter-panel">
            <div class="filter-header">
                <div class="filter-title"><span class="inline-icon">${getIcon('filter', 14)}</span> Filters ${activeFilterCount > 0 ? `<span class="filter-count">${activeFilterCount} active</span>` : ''}</div>
                <button class="filter-btn clear" onclick="clearAllFilters()"><span class="inline-icon">${getIcon('trash-2', 12)}</span> Clear</button>
            </div>
            <div class="filter-controls">${filtersHtml}</div>
        </div>
        
        <div class="dashboard-header">
            <img src="${state.settings.logo}" alt="Logo">
            <h2><span class="inline-icon">${getIcon('bar-chart-2', 20)}</span> ${escapeHtml(state.settings.title)} - Dashboard</h2>
            <p>ICF-SL Data Analytics</p>
        </div>
        
        <div class="dashboard-stats">
            <div class="stat-card"><div class="stat-value">${filteredData.length}</div><div class="stat-label">Total Records</div></div>
            <div class="stat-card success"><div class="stat-value">${synced}</div><div class="stat-label">Synced</div></div>
            <div class="stat-card warning"><div class="stat-value">${pending}</div><div class="stat-label">Pending</div></div>
            ${periodColumn ? `<div class="stat-card info"><div class="stat-value">${uniquePeriods}</div><div class="stat-label">Periods</div></div>` : ''}
            ${aggregateColumn ? `<div class="stat-card purple"><div class="stat-value">${uniqueGroups}</div><div class="stat-label">${escapeHtml(aggregateField?.label || 'Groups')}</div></div>` : ''}
            <div class="stat-card"><div class="stat-value">${aggregateData.length}</div><div class="stat-label">Aggregate Rows</div></div>
        </div>
        
        ${chartsHtml || '<div class="chart-container"><p style="text-align:center;color:#868e96;padding:30px;"><span class="inline-icon">' + getIcon('bar-chart-3', 18) + '</span> Add categorical fields for charts</p></div>'}
        
        ${renderGpsMapSection(filteredData, 'dashboard')}
    `;
    
    setTimeout(() => {
        const colors = ['#004080', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1', '#fd7e14', '#20c997', '#e83e8c', '#6c757d'];
        
        categoricalFields.forEach((field, idx) => {
            const valueCounts = {};
            filteredData.forEach(row => {
                const value = row[field.name];
                if (value) valueCounts[value] = (valueCounts[value] || 0) + 1;
            });
            
            if (Object.keys(valueCounts).length === 0) return;
            
            const labels = Object.keys(valueCounts);
            const values = Object.values(valueCounts);
            const total = values.reduce((a, b) => a + b, 0);
            
            const barCtx = document.getElementById(`barChart_${idx}`);
            if (barCtx && typeof Chart !== 'undefined') {
                state.chartInstances[`bar_${idx}`] = new Chart(barCtx, {
                    type: 'bar',
                    data: { labels, datasets: [{ label: 'Count', data: values, backgroundColor: colors.slice(0, labels.length) }] },
                    options: {
                        responsive: true,
                        plugins: { legend: { display: false }, title: { display: true, text: 'Bar Chart', font: { family: 'Oswald' } } },
                        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
                    }
                });
            } else if (barCtx && typeof Chart === 'undefined') {
                barCtx.parentElement.innerHTML = '<p style="text-align:center;color:#868e96;padding:20px;">Charts unavailable (Chart.js not loaded)</p>';
            }
            
            const pieCtx = document.getElementById(`pieChart_${idx}`);
            if (pieCtx && typeof Chart !== 'undefined') {
                state.chartInstances[`pie_${idx}`] = new Chart(pieCtx, {
                    type: 'pie',
                    data: { 
                        labels: labels.map((l, i) => `${l} (${((values[i] / total) * 100).toFixed(1)}%)`), 
                        datasets: [{ data: values, backgroundColor: colors.slice(0, labels.length) }] 
                    },
                    options: {
                        responsive: true,
                        plugins: { legend: { position: 'bottom', labels: { font: { family: 'Oswald', size: 10 } } }, title: { display: true, text: 'Pie Chart', font: { family: 'Oswald' } } }
                    }
                });
            }
        });
        
        initGpsMap(filteredData, 'dashboard');
    }, 100);
    
    } catch (err) {
        console.error('Error in renderDashboard:', err);
        container.innerHTML = `<div style="text-align:center;padding:40px;color:#dc3545;"><p>Error loading dashboard</p><p style="font-size:12px;">${escapeHtml(err.message)}</p></div>`;
    }
}

function renderGpsMapSection(filteredData, suffix = '') {
    const gpsFields = state.fields.filter(f => f.type === 'gps');
    
    if (gpsFields.length === 0) {
        return '';
    }
    
    const selectedGpsField = state.settings.gpsField || gpsFields[0]?.name;
    let recordsWithGps = 0;
    if (selectedGpsField) {
        recordsWithGps = filteredData.filter(d => {
            const gpsValue = d[selectedGpsField];
            return gpsValue && parseGpsCoordinates(gpsValue);
        }).length;
    }
    
    const gpsFieldOptions = gpsFields.length > 0 ? gpsFields.map(f => 
        `<option value="${f.name}" ${selectedGpsField === f.name ? 'selected' : ''}>${escapeHtml(f.label)}</option>`
    ).join('') : '<option value="">No GPS field in form</option>';
    
    const mapId = suffix ? `gpsMap_${suffix}` : 'gpsMap';
    
    return `
        <div class="gps-map-container">
            <h4><span class="inline-icon">${getIcon('map-pin', 16)}</span> GPS Points Map (${recordsWithGps} locations)</h4>
            
            <div style="display:flex;gap:15px;margin-bottom:15px;flex-wrap:wrap;align-items:center;">
                <div style="display:flex;align-items:center;gap:8px;">
                    <label style="font-size:11px;font-weight:bold;">GPS Field:</label>
                    <select class="filter-select" onchange="setGpsField(this.value)" style="min-width:150px;">
                        ${gpsFieldOptions}
                    </select>
                </div>
            </div>
            
            <div id="${mapId}"></div>
            
            <div class="map-controls">
                <button class="modal-btn" onclick="zoomToAllPoints()" style="font-size:11px;padding:8px 12px;">
                    <span class="inline-icon">${getIcon('maximize-2', 12)}</span> Fit All Points
                </button>
                <button class="modal-btn success" onclick="downloadGeoJSON()" style="font-size:11px;padding:8px 12px;">
                    <span class="inline-icon">${getIcon('download', 12)}</span> Download GeoJSON
                </button>
                <button class="modal-btn" onclick="downloadKML()" style="font-size:11px;padding:8px 12px;background:#17a2b8;color:white;">
                    <span class="inline-icon">${getIcon('download', 12)}</span> Download KML
                </button>
            </div>
        </div>
    `;
}

function parseGpsCoordinates(gpsString) {
    if (!gpsString) return null;
    
    try {
        if (typeof gpsString === 'object') {
            if (gpsString.lat && gpsString.lng) {
                return { lat: parseFloat(gpsString.lat), lng: parseFloat(gpsString.lng) };
            }
        }
        
        const str = String(gpsString).trim();
        
        if (str.startsWith('{')) {
            const obj = JSON.parse(str);
            if (obj.lat && obj.lng) {
                return { lat: parseFloat(obj.lat), lng: parseFloat(obj.lng) };
            }
        }
        
        const parts = str.split(',').map(p => parseFloat(p.trim()));
        if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            return { lat: parts[0], lng: parts[1] };
        }
    } catch (e) {
        console.log('Failed to parse GPS:', gpsString);
    }
    
    return null;
}

const gpsMapInstances = {};
const gpsMarkersLayers = {};

function initGpsMap(filteredData, suffix = '') {
    const mapId = suffix ? `gpsMap_${suffix}` : 'gpsMap';
    const mapContainer = document.getElementById(mapId);
    if (!mapContainer) return;
    
    if (typeof L === 'undefined') {
        mapContainer.innerHTML = '<p style="text-align:center;padding:40px;color:#868e96;">Map unavailable (Leaflet not loaded)</p>';
        return;
    }
    
    if (gpsMapInstances[suffix]) {
        try {
            gpsMapInstances[suffix].remove();
        } catch (e) {}
        delete gpsMapInstances[suffix];
        delete gpsMarkersLayers[suffix];
    }
    
    const gpsFields = state.fields.filter(f => f.type === 'gps');
    const selectedGpsField = state.settings.gpsField || gpsFields[0]?.name;
    
    const points = [];
    if (selectedGpsField) {
        filteredData.forEach((record, idx) => {
            const coords = parseGpsCoordinates(record[selectedGpsField]);
            if (coords) {
                points.push({
                    ...coords,
                    record: record,
                    index: idx
                });
            }
        });
    }
    
    if (points.length === 0) {
        if (!selectedGpsField) {
            mapContainer.innerHTML = '<p style="text-align:center;padding:40px;color:#868e96;"><span class="inline-icon">' + getIcon('map', 16) + '</span> Add a GPS field to your form to see the map.</p>';
        } else {
            mapContainer.innerHTML = '<p style="text-align:center;padding:40px;color:#868e96;"><span class="inline-icon">' + getIcon('map-pin', 16) + '</span> No GPS data collected yet. Submit data with GPS coordinates to see points on map.</p>';
        }
        return;
    }
    
    const defaultCenter = points.length > 0 ? [points[0].lat, points[0].lng] : [8.4606, -11.7799];
    const map = L.map(mapId).setView(defaultCenter, 8);
    gpsMapInstances[suffix] = map;
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    gpsMarkersLayers[suffix] = L.layerGroup().addTo(map);
    
    const colorField = state.settings.aggregateColumns?.[0] || state.settings.aggregateColumn;
    const colorMap = {};
    const colors = ['#dc3545', '#28a745', '#007bff', '#ffc107', '#17a2b8', '#6f42c1', '#fd7e14', '#20c997', '#e83e8c', '#6c757d'];
    let colorIdx = 0;
    
    points.forEach(point => {
        let markerColor = '#004080';
        if (colorField && point.record[colorField]) {
            const val = point.record[colorField];
            if (!colorMap[val]) {
                colorMap[val] = colors[colorIdx % colors.length];
                colorIdx++;
            }
            markerColor = colorMap[val];
        }
        
        const markerIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background:${markerColor};width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 0 4px rgba(0,0,0,0.4);"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6]
        });
        
        const marker = L.marker([point.lat, point.lng], { icon: markerIcon });
        
        let popupContent = '<div style="max-width:250px;max-height:200px;overflow-y:auto;">';
        popupContent += `<strong style="color:#004080;">Record #${point.index + 1}</strong><br>`;
        popupContent += `<small>${point.record._timestamp || 'No timestamp'}</small><hr style="margin:5px 0;">`;
        
        state.fields.filter(f => f.type !== 'section' && f.type !== 'gps').slice(0, 5).forEach(field => {
            const val = point.record[field.name];
            if (val) {
                popupContent += `<strong>${escapeHtml(field.label)}:</strong> ${escapeHtml(String(val))}<br>`;
            }
        });
        
        popupContent += '</div>';
        marker.bindPopup(popupContent);
        
        gpsMarkersLayers[suffix].addLayer(marker);
    });
    
    if (colorField && Object.keys(colorMap).length > 0) {
        const legend = L.control({ position: 'bottomright' });
        legend.onAdd = function() {
            const div = L.DomUtil.create('div', 'map-legend');
            div.innerHTML = '<strong style="font-size:10px;display:block;margin-bottom:5px;">' + escapeHtml(state.fields.find(f => f.name === colorField)?.label || colorField) + '</strong>';
            Object.entries(colorMap).forEach(([val, color]) => {
                div.innerHTML += `<div class="map-legend-item"><div class="map-legend-color" style="background:${color};"></div><span>${escapeHtml(val)}</span></div>`;
            });
            return div;
        };
        legend.addTo(map);
    }
    
    if (points.length > 0) {
        const bounds = L.latLngBounds(points.map(p => [p.lat, p.lng]));
        map.fitBounds(bounds, { padding: [20, 20] });
    }
}

function setGpsField(fieldName) {
    state.settings.gpsField = fieldName;
    saveToStorage();
    renderDashboard();
}

function zoomToAllPoints() {
    const suffixes = Object.keys(gpsMapInstances);
    if (suffixes.length === 0) return;
    
    suffixes.forEach(suffix => {
        const map = gpsMapInstances[suffix];
        const markersLayer = gpsMarkersLayers[suffix];
        if (!map || !markersLayer) return;
        
        const markers = [];
        markersLayer.eachLayer(m => markers.push(m.getLatLng()));
        
        if (markers.length > 0) {
            const bounds = L.latLngBounds(markers);
            map.fitBounds(bounds, { padding: [20, 20] });
        }
    });
}

function downloadGeoJSON() {
    const gpsFields = state.fields.filter(f => f.type === 'gps');
    const selectedGpsField = state.settings.gpsField || gpsFields[0]?.name;
    const filteredData = getFilteredData();
    
    const features = [];
    filteredData.forEach((record, idx) => {
        const coords = parseGpsCoordinates(record[selectedGpsField]);
        if (coords) {
            const properties = {};
            state.fields.filter(f => f.type !== 'section').forEach(field => {
                properties[field.label || field.name] = record[field.name] || '';
            });
            properties['_timestamp'] = record._timestamp || '';
            properties['_id'] = record._id || idx;
            
            features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [coords.lng, coords.lat]
                },
                properties: properties
            });
        }
    });
    
    const geojson = {
        type: 'FeatureCollection',
        features: features
    };
    
    const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.settings.title}_gps_points.geojson`;
    a.click();
    URL.revokeObjectURL(url);
    notify('GeoJSON downloaded!');
}

function downloadKML() {
    const gpsFields = state.fields.filter(f => f.type === 'gps');
    const selectedGpsField = state.settings.gpsField || gpsFields[0]?.name;
    const filteredData = getFilteredData();
    
    let kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
    <name>${escapeHtml(state.settings.title)} GPS Points</name>
    <description>Exported from ICF Collect</description>
    <Style id="pointStyle">
        <IconStyle>
            <color>ff0000ff</color>
            <scale>1.0</scale>
            <Icon><href>http://maps.google.com/mapfiles/kml/paddle/red-circle.png</href></Icon>
        </IconStyle>
    </Style>
`;
    
    filteredData.forEach((record, idx) => {
        const coords = parseGpsCoordinates(record[selectedGpsField]);
        if (coords) {
            const name = record._id || `Point ${idx + 1}`;
            let description = '';
            state.fields.filter(f => f.type !== 'section' && f.type !== 'gps').slice(0, 10).forEach(field => {
                if (record[field.name]) {
                    description += `${field.label}: ${record[field.name]}\n`;
                }
            });
            
            kml += `    <Placemark>
        <name>${escapeHtml(String(name))}</name>
        <description><![CDATA[${description}]]></description>
        <styleUrl>#pointStyle</styleUrl>
        <Point><coordinates>${coords.lng},${coords.lat},0</coordinates></Point>
    </Placemark>
`;
        }
    });
    
    kml += `</Document>
</kml>`;
    
    const blob = new Blob([kml], { type: 'application/vnd.google-earth.kml+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.settings.title}_gps_points.kml`;
    a.click();
    URL.revokeObjectURL(url);
    notify('KML downloaded!');
}

function showTab(tab, btn) {
    console.log('=== showTab called ===', tab);
    document.querySelectorAll('.viewer-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.viewer-nav-btn').forEach(b => b.classList.remove('active'));
    const tabEl = document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1));
    console.log('Tab element ID:', 'tab' + tab.charAt(0).toUpperCase() + tab.slice(1));
    console.log('Tab element found:', !!tabEl);
    if (tabEl) tabEl.classList.add('active');
    if (btn) btn.classList.add('active');
    
    if (tab === 'data') {
        console.log('Rendering data tab...');
        renderDataContent();
    }
    if (tab === 'dashboard') {
        console.log('Rendering dashboard tab...');
        renderDashboard();
    }
}

function goToPage(pageIndex, direction = 1) {
    console.log('=== goToPage called, pageIndex:', pageIndex, 'direction:', direction, '===');
    const pages = document.querySelectorAll('.form-page');
    const totalPages = pages.length;
    
    if (totalPages === 0) {
        console.log('No pages found');
        return;
    }
    
    let targetPage = pageIndex;
    let attempts = 0;
    
    while (attempts < totalPages) {
        if (targetPage < 0 || targetPage >= totalPages) {
            targetPage = direction > 0 ? totalPages - 1 : 0;
            break;
        }
        
        const page = document.querySelector(`.form-page[data-page="${targetPage}"]`);
        if (page) {
            if (page.classList.contains('section-hidden')) {
                console.log('Page', targetPage, 'is section-hidden, skipping');
                targetPage += direction;
                attempts++;
                continue;
            }
            
            const visibleFields = page.querySelectorAll('.viewer-field:not(.field-hidden)');
            if (visibleFields.length === 0) {
                console.log('Page', targetPage, 'has no visible fields, skipping');
                targetPage += direction;
                attempts++;
                continue;
            }
            
            console.log('Page', targetPage, 'is valid with', visibleFields.length, 'visible fields');
            break;
        }
        
        targetPage += direction;
        attempts++;
    }
    
    if (targetPage < 0) targetPage = 0;
    if (targetPage >= totalPages) targetPage = totalPages - 1;
    
    pages.forEach(p => p.style.display = 'none');
    const targetPageEl = document.querySelector(`.form-page[data-page="${targetPage}"]`);
    if (targetPageEl) {
        targetPageEl.style.display = 'block';
        console.log('Now showing page', targetPage);
    } else {
        console.log('Target page element not found');
    }
}

function validateCurrentPage(currentPageIndex) {
    console.log('=== validateCurrentPage called for page', currentPageIndex, '===');
    const currentPageEl = document.querySelector(`.form-page[data-page="${currentPageIndex}"]`);
    if (!currentPageEl) {
        console.log('Page element not found');
        return true;
    }
    
    if (currentPageEl.classList.contains('section-hidden')) {
        console.log('Page is hidden, skipping validation');
        return true;
    }
    
    let isValid = true;
    let firstInvalid = null;
    
    const allFieldEls = currentPageEl.querySelectorAll('.viewer-field');
    console.log('Found', allFieldEls.length, 'total fields on page');
    
    allFieldEls.forEach(fieldEl => {
        if (fieldEl.classList.contains('field-hidden')) {
            return;
        }
        
        if (fieldEl.offsetParent === null && !fieldEl.closest('.viewer-body')) {
            return;
        }
        
        const fieldName = fieldEl.dataset.fieldName;
        if (!fieldName) {
            console.log('Field element has no data-field-name');
            return;
        }
        
        const fieldDef = state.fields.find(f => f.name === fieldName);
        if (!fieldDef) {
            console.log('Field definition not found for:', fieldName);
            return;
        }
        
        if (!fieldDef.required) {
            return;
        }
        
        console.log('Validating required field:', fieldName, 'type:', fieldDef.type);
        
        const existingError = fieldEl.querySelector('.field-error');
        if (existingError) existingError.remove();
        fieldEl.querySelectorAll('input, select, textarea').forEach(el => {
            el.style.borderColor = '';
        });
        
        let fieldValue = '';
        let inputEl = null;
        let validationFailed = false;
        
        if (fieldDef.type === 'checkbox') {
            const checkboxes = fieldEl.querySelectorAll('input[type="checkbox"]');
            const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
            if (!anyChecked) {
                validationFailed = true;
                inputEl = checkboxes[0];
                if (inputEl) showFieldError(inputEl, 'Please select at least one option');
                console.log('  - FAILED: No checkbox checked');
            }
        } else if (fieldDef.type === 'radio' || fieldDef.type === 'yesno') {
            const radios = fieldEl.querySelectorAll('input[type="radio"]');
            const anySelected = Array.from(radios).some(r => r.checked);
            if (!anySelected) {
                validationFailed = true;
                inputEl = radios[0];
                if (inputEl) showFieldError(inputEl, 'Please select an option');
                console.log('  - FAILED: No radio selected');
            }
        } else if (fieldDef.type === 'cascade') {
            const hiddenInput = fieldEl.querySelector('input[type="hidden"]');
            fieldValue = hiddenInput ? hiddenInput.value.trim() : '';
            inputEl = fieldEl.querySelector('select');
            if (!fieldValue) {
                validationFailed = true;
                if (inputEl) showFieldError(inputEl, 'Please complete all selections');
                console.log('  - FAILED: Cascade not completed');
            }
        } else if (fieldDef.type === 'gps' || fieldDef.type === 'qrcode' || fieldDef.type === 'rating') {
            const hiddenInput = fieldEl.querySelector('input[type="hidden"]');
            fieldValue = hiddenInput ? hiddenInput.value.trim() : '';
            inputEl = hiddenInput;
            if (!fieldValue) {
                validationFailed = true;
                const btn = fieldEl.querySelector('button');
                if (btn) showFieldError(btn, 'This field is required');
                console.log('  - FAILED: Hidden input empty');
            }
        } else {
            inputEl = fieldEl.querySelector('input, select, textarea');
            if (inputEl) {
                fieldValue = inputEl.value ? inputEl.value.trim() : '';
            }
            if (!fieldValue) {
                validationFailed = true;
                if (inputEl) showFieldError(inputEl, 'This field is required');
                console.log('  - FAILED: Empty value');
            } else {
                console.log('  - PASSED: Value =', fieldValue.substring(0, 20));
            }
        }
        
        if (validationFailed) {
            isValid = false;
            if (!firstInvalid && inputEl) firstInvalid = inputEl;
        }
    });
    
    if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        try { firstInvalid.focus(); } catch(e) {}
    }
    
    console.log('Validation result:', isValid ? 'VALID' : 'INVALID');
    return isValid;
}

function showFieldError(field, message) {
    field.style.borderColor = '#dc3545';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = 'color:#dc3545;font-size:12px;margin-top:4px;';
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
}

function goToNextPage(currentPage) {
    console.log('=== goToNextPage called from page', currentPage, '===');
    
    if (!validateCurrentPage(currentPage)) {
        notify('Please fill in all required fields', 'error');
        return;
    }
    
    const pages = document.querySelectorAll('.form-page');
    let nextPage = currentPage + 1;
    
    while (nextPage < pages.length) {
        const pageEl = pages[nextPage];
        if (pageEl.classList.contains('section-hidden')) {
            console.log('Skipping hidden page', nextPage);
            nextPage++;
            continue;
        }
        const visibleFields = pageEl.querySelectorAll('.viewer-field:not(.field-hidden)');
        if (visibleFields.length === 0) {
            console.log('Skipping page', nextPage, 'with no visible fields');
            nextPage++;
            continue;
        }
        break;
    }
    
    if (nextPage >= pages.length) {
        console.log('No more visible pages');
        return;
    }
    
    console.log('Moving to page', nextPage);
    goToPage(nextPage, 1);
}

function goToPrevPage(currentPage) {
    console.log('=== goToPrevPage called from page', currentPage, '===');
    
    const pages = document.querySelectorAll('.form-page');
    let prevPage = currentPage - 1;
    
    while (prevPage >= 0) {
        const pageEl = pages[prevPage];
        if (pageEl.classList.contains('section-hidden')) {
            console.log('Skipping hidden page', prevPage);
            prevPage--;
            continue;
        }
        const visibleFields = pageEl.querySelectorAll('.viewer-field:not(.field-hidden)');
        if (visibleFields.length === 0) {
            console.log('Skipping page', prevPage, 'with no visible fields');
            prevPage--;
            continue;
        }
        break;
    }
    
    if (prevPage < 0) {
        console.log('No previous visible pages');
        return;
    }
    
    console.log('Moving to page', prevPage);
    goToPage(prevPage, -1);
}

function initCascades() {
    document.querySelectorAll('.cascade-container').forEach(container => {
        const cascadeId = container.dataset.cascadeId;
        const field = state.fields.find(f => f.id === cascadeId);
        if (!field || !field.cascadeData || field.cascadeData.length === 0) return;
        
        const columns = field.cascadeColumns || [];
        if (columns.length === 0) return;
        
        const firstSelect = container.querySelector('select[data-level="0"]');
        if (firstSelect) {
            const uniqueValues = [...new Set(field.cascadeData.map(row => row[columns[0]]).filter(Boolean))].sort();
            uniqueValues.forEach(val => {
                const option = document.createElement('option');
                option.value = val;
                option.textContent = val;
                firstSelect.appendChild(option);
            });
        }
    });
    
    const cascadeGroups = {};
    state.fields.forEach(f => {
        if (f.cascadeGroup) {
            if (!cascadeGroups[f.cascadeGroup]) {
                cascadeGroups[f.cascadeGroup] = [];
            }
            cascadeGroups[f.cascadeGroup].push(f);
        }
    });
    
    Object.keys(cascadeGroups).forEach(groupId => {
        const fields = cascadeGroups[groupId].sort((a, b) => (a.cascadeLevel || 0) - (b.cascadeLevel || 0));
        const firstField = fields[0];
        
        if (!firstField || !firstField.cascadeData || firstField.cascadeData.length === 0) return;
        
        const firstSelect = document.querySelector(`select[data-cascade-group="${groupId}"][data-cascade-level="0"]`);
        if (firstSelect && firstSelect.options.length <= 1) {
            const column = firstField.cascadeColumn;
            if (!column) return;
            const uniqueValues = [...new Set(firstField.cascadeData.map(row => row[column]).filter(Boolean))].sort();
            
            uniqueValues.forEach(val => {
                const option = document.createElement('option');
                option.value = val;
                option.textContent = val;
                firstSelect.appendChild(option);
            });
        }
    });
}

function handleCascadeSelect(select) {
    const container = select.closest('.cascade-container');
    const cascadeId = container.dataset.cascadeId;
    const field = state.fields.find(f => f.id === cascadeId);
    if (!field || !field.cascadeData) return;
    
    const columns = field.cascadeColumns || [];
    const level = parseInt(select.dataset.level);
    const selectedValue = select.value;
    
    for (let i = level + 1; i < columns.length; i++) {
        const nextSelect = container.querySelector(`select[data-level="${i}"]`);
        if (nextSelect) {
            nextSelect.innerHTML = `<option value="">-- Select ${columns[i]} --</option>`;
            nextSelect.disabled = true;
            nextSelect.value = '';
        }
    }
    
    const hiddenInput = container.querySelector('input[type="hidden"]');
    if (hiddenInput) hiddenInput.value = '';
    
    if (!selectedValue) return;
    
    const filters = {};
    for (let i = 0; i <= level; i++) {
        const sel = container.querySelector(`select[data-level="${i}"]`);
        if (sel && sel.value) {
            filters[columns[i]] = sel.value;
        }
    }
    
    const filteredData = field.cascadeData.filter(row => {
        return Object.keys(filters).every(col => row[col] === filters[col]);
    });
    
    if (level + 1 < columns.length) {
        const nextSelect = container.querySelector(`select[data-level="${level + 1}"]`);
        if (nextSelect) {
            const nextColumn = columns[level + 1];
            const uniqueValues = [...new Set(filteredData.map(row => row[nextColumn]).filter(Boolean))].sort();
            
            uniqueValues.forEach(val => {
                const option = document.createElement('option');
                option.value = val;
                option.textContent = val;
                nextSelect.appendChild(option);
            });
            
            nextSelect.disabled = false;
        }
    }
    
    const valueColumn = container.dataset.valueColumn;
    if (level === columns.length - 1 && filteredData.length > 0) {
        const value = filteredData[0][valueColumn] || filteredData[0][columns[columns.length - 1]];
        if (hiddenInput) hiddenInput.value = value;
    }
}

function handleCascadeChange(select) {
    const groupId = select.dataset.cascadeGroup;
    const level = parseInt(select.dataset.cascadeLevel) || 0;
    const selectedValue = select.value;
    
    if (!groupId) return;
    
    const groupFields = state.fields.filter(f => f.cascadeGroup === groupId).sort((a, b) => (a.cascadeLevel || 0) - (b.cascadeLevel || 0));
    const firstField = groupFields[0];
    
    if (!firstField || !firstField.cascadeData || firstField.cascadeData.length === 0) return;
    
    const cascadeData = firstField.cascadeData;
    
    for (let i = level + 1; i < groupFields.length; i++) {
        const nextSelect = document.querySelector(`select[data-cascade-group="${groupId}"][data-cascade-level="${i}"]`);
        if (nextSelect) {
            const col = groupFields[i]?.cascadeColumn || '';
            nextSelect.innerHTML = `<option value="">-- Select ${col} --</option>`;
            nextSelect.disabled = true;
            nextSelect.value = '';
        }
    }
    
    if (!selectedValue) return;
    
    const filters = {};
    for (let i = 0; i <= level; i++) {
        const sel = document.querySelector(`select[data-cascade-group="${groupId}"][data-cascade-level="${i}"]`);
        const col = groupFields[i]?.cascadeColumn;
        if (sel && sel.value && col) {
            filters[col] = sel.value;
        }
    }
    
    const filteredData = cascadeData.filter(row => {
        return Object.keys(filters).every(col => row[col] === filters[col]);
    });
    
    if (level + 1 < groupFields.length) {
        const nextField = groupFields[level + 1];
        const nextSelect = document.querySelector(`select[data-cascade-group="${groupId}"][data-cascade-level="${level + 1}"]`);
        if (nextSelect && nextField) {
            const nextColumn = nextField.cascadeColumn;
            if (nextColumn) {
                const uniqueValues = [...new Set(filteredData.map(row => row[nextColumn]).filter(Boolean))].sort();
                
                uniqueValues.forEach(val => {
                    const option = document.createElement('option');
                    option.value = val;
                    option.textContent = val;
                    nextSelect.appendChild(option);
                });
            }
            nextSelect.disabled = false;
        }
    }
}

function runCalculations() {
    const form = document.getElementById('viewerForm');
    if (!form) return;
    
    const calcFields = state.fields.filter(f => f.type === 'calculation' && f.formula);
    
    calcFields.forEach(field => {
        const input = form.querySelector(`input[name="${field.name}"]`);
        if (!input) return;
        
        let formula = field.formula;
        
        const fieldRefs = formula.match(/\{([^}]+)\}/g) || [];
        fieldRefs.forEach(ref => {
            const fieldName = ref.replace(/[{}]/g, '');
            const fieldInput = form.querySelector(`[name="${fieldName}"]`);
            const value = fieldInput ? (parseFloat(fieldInput.value) || 0) : 0;
            formula = formula.replace(ref, value);
        });
        
        try {
            const safeFormula = formula.replace(/[^0-9+\-*/().%\s]/g, '');
            if (safeFormula.trim()) {
                const result = Function('"use strict"; return (' + safeFormula + ')')();
                input.value = isNaN(result) || !isFinite(result) ? '' : Math.round(result * 100) / 100;
            }
        } catch (err) {
            input.value = 'Error';
        }
    });
}

function captureGPS(btn) {
    const container = btn.parentElement;
    const status = container.querySelector('.gps-status');
    const input = container.querySelector('input[type="hidden"]');
    status.innerHTML = '<span class="inline-icon">' + getIcon('loader', 12) + '</span> Getting location...';
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => {
                const coords = `[${pos.coords.latitude.toFixed(6)},${pos.coords.longitude.toFixed(6)}]`;
                input.value = coords;
                status.innerHTML = '<span class="inline-icon" style="color:#28a745;">' + getIcon('check-circle', 12) + '</span> ' + coords;
            },
            err => { status.innerHTML = '<span class="inline-icon" style="color:#dc3545;">' + getIcon('x-circle', 12) + '</span> ' + err.message; }
        );
    } else {
        status.innerHTML = '<span class="inline-icon" style="color:#dc3545;">' + getIcon('x-circle', 12) + '</span> Not supported';
    }
}

function setRating(star, val) {
    const container = star.parentElement;
    container.querySelectorAll('span').forEach((s, i) => s.style.opacity = i < val ? '1' : '0.3');
    container.querySelector('input').value = val;
}

let activeQRStream = null;

function startQRScanner(btn) {
    const container = btn.closest('.qr-scanner-container');
    const preview = container.querySelector('.qr-preview');
    const video = container.querySelector('.qr-video');
    const status = container.querySelector('.qr-status');
    const input = container.querySelector('input[type="hidden"]');
    const valueDisplay = container.querySelector('.qr-value');
    
    status.innerHTML = '<span class="inline-icon">' + getIcon('loader', 12) + '</span> Starting camera...';
    preview.style.display = 'block';
    
    try {
        const stream = navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
        });
        video.srcObject = stream;
        video.play();
        activeQRStream = stream;
        
        status.innerHTML = '<span class="inline-icon" style="color:#17a2b8;">' + getIcon('scan', 12) + '</span> Point camera at QR code or barcode...';
        
        if ('BarcodeDetector' in window) {
            const detector = new BarcodeDetector({ formats: ['qr_code', 'ean_13', 'ean_8', 'code_128', 'code_39', 'code_93', 'upc_a', 'upc_e', 'itf', 'codabar'] });
            
            const scanLoop = async () => {
                if (!activeQRStream) return;
                
                try {
                    const barcodes = await detector.detect(video);
                    if (barcodes.length > 0) {
                        const value = barcodes[0].rawValue;
                        input.value = value;
                        if (valueDisplay) valueDisplay.textContent = value;
                        status.innerHTML = '<span class="inline-icon" style="color:#28a745;">' + getIcon('check-circle', 12) + '</span> Scanned!';
                        stopQRScanner(btn);
                        return;
                    }
                } catch (err) {
                    console.log('Scan error:', err);
                }
                
                if (activeQRStream) {
                    requestAnimationFrame(scanLoop);
                }
            };
            
            scanLoop();
        } else {
            status.innerHTML = '<span class="inline-icon" style="color:#dc3545;">' + getIcon('x-circle', 12) + '</span> Scanner not supported on this device';
        }
    } catch (err) {
        status.innerHTML = '<span class="inline-icon" style="color:#dc3545;">' + getIcon('x-circle', 12) + '</span> Camera error: ' + err.message;
        preview.style.display = 'none';
    }
}

function stopQRScanner(btn) {
    const container = btn.closest('.qr-scanner-container');
    const preview = container.querySelector('.qr-preview');
    const video = container.querySelector('.qr-video');
    
    if (activeQRStream) {
        activeQRStream.getTracks().forEach(track => track.stop());
        activeQRStream = null;
    }
    
    video.srcObject = null;
    preview.style.display = 'none';
}

function updateOnlineStatus() {
    const indicator = document.getElementById('offlineIndicator');
    if (indicator) {
        indicator.style.display = navigator.onLine ? 'none' : 'block';
    }
}

window.addEventListener('online', () => {
    updateOnlineStatus();
    notify('Back online!', 'success');
    syncOfflineData();
});

window.addEventListener('offline', () => {
    updateOnlineStatus();
    notify('You are offline - data will be saved locally', 'warning');
});

// ==================== SHORT URL FUNCTIONS (NEW) ====================
function generateShortHash() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let hash;
    do {
        hash = '';
        for (let i = 0; i < 6; i++) {
            hash += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    } while (localStorage.getItem('icfCollectShortForms') && 
             JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}')[hash]);
    
    return hash;
}

function saveFormWithHash(hash, formData) {
    const forms = JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}');
    forms[hash] = formData;
    localStorage.setItem('icfCollectShortForms', JSON.stringify(forms));
    saveFormToGoogleSheetsBackup(hash, formData);
}

function loadFormFromHash(hash) {
    const forms = JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}');
    let formData = forms[hash];
    
    if (!formData) {
        loadFormFromGoogleSheetsBackup(hash).then(backupData => {
            if (backupData) {
                formData = backupData;
                forms[hash] = formData;
                localStorage.setItem('icfCollectShortForms', JSON.stringify(forms));
                renderFormFromData(formData);
            } else {
                document.getElementById('viewerContainer').innerHTML = `
                    <div style="text-align:center;padding:40px;color:#dc3545;">
                        <h3>Form not found</h3>
                        <p>The form with code <code>${hash}</code> doesn't exist or has expired.</p>
                        <button onclick="window.location='/'">Go Home</button>
                    </div>
                `;
            }
        });
    } else {
        renderFormFromData(formData);
    }
}

function renderFormFromData(formData) {
    state.fields = formData.fields || [];
    state.settings = formData.settings || { title: formData.title || 'Form' };
    state.dhis2 = formData.dhis2 || {};
    
    document.getElementById('formTitle').value = state.settings.title;
    document.getElementById('previewTitle').textContent = state.settings.title;
    
    renderFormViewer();
}

async function saveFormToGoogleSheetsBackup(hash, formData) {
    try {
        await fetch(CONFIG.AUTH_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
                action: 'saveShortFormBackup',
                hash: hash,
                formData: formData,
                timestamp: new Date().toISOString()
            })
        });
    } catch (err) {
        console.log('Cloud backup failed, but local storage works');
    }
}

async function loadFormFromGoogleSheetsBackup(hash) {
    try {
        const response = await fetch(`${CONFIG.AUTH_SCRIPT_URL}?action=getShortFormBackup&hash=${hash}`, {
            mode: 'cors'
        });
        const result = await response.json();
        if (result.success && result.formData) {
            return result.formData;
        }
    } catch (err) {
        console.log('Cloud load failed');
    }
    return null;
}

// NEW: Share form with fixed-length URL
async function shareForm() {
    if (state.fields.length === 0) { 
        notify('Add fields!', 'error'); 
        return; 
    }
    
    const hash = generateShortHash();
    
    const formData = {
        title: state.settings.title,
        fields: state.fields.map(f => ({
            id: f.id,
            type: f.type,
            label: f.label,
            name: f.name,
            required: f.required,
            options: f.options,
            max: f.max,
            showLogic: f.showLogic,
            validation: f.validation,
            minLength: f.minLength,
            maxLength: f.maxLength,
            exactLength: f.exactLength,
            exactDigits: f.exactDigits,
            minDigits: f.minDigits,
            maxDigits: f.maxDigits,
            noFutureDates: f.noFutureDates,
            noPastDates: f.noPastDates,
            minDate: f.minDate,
            maxDate: f.maxDate,
            autoTime: f.autoTime,
            checkDuplicate: f.checkDuplicate,
            cascadeGroup: f.cascadeGroup,
            cascadeLevel: f.cascadeLevel,
            cascadeColumn: f.cascadeColumn,
            cascadeColumns: f.cascadeColumns,
            cascadeDataRef: f.cascadeDataRef,
            cascadeValueColumn: f.cascadeValueColumn,
            formula: f.formula
        })),
        settings: state.settings,
        dhis2: state.dhis2 ? {
            url: state.dhis2.url,
            username: state.dhis2.username,
            password: btoa(state.dhis2.password || ''),
            syncMode: state.dhis2.syncMode,
            orgUnitLevel: state.dhis2.orgUnitLevel,
            periodType: state.dhis2.periodType,
            periodColumn: state.dhis2.periodColumn,
            orgUnitColumn: state.dhis2.orgUnitColumn,
            programId: state.dhis2.programId
        } : null
    };
    
    saveFormWithHash(hash, formData);
    
    const baseUrl = window.location.origin + window.location.pathname;
    const shortUrl = baseUrl + '#' + hash;
    
    document.getElementById('shareUrl').textContent = shortUrl;
    document.getElementById('shareModal').classList.add('show');
    state.currentShortHash = hash;
    
    notify(`Short URL created! Length: ${shortUrl.length} characters`, 'success');
}

function createNewShortUrl() {
    if (!state.fields || state.fields.length === 0) {
        notify('No form to share', 'error');
        return;
    }
    
    const hash = generateShortHash();
    
    const formData = {
        title: state.settings.title,
        fields: state.fields.map(f => ({
            id: f.id,
            type: f.type,
            label: f.label,
            name: f.name,
            required: f.required,
            options: f.options
        })),
        settings: state.settings,
        dhis2: state.dhis2
    };
    
    saveFormWithHash(hash, formData);
    
    const baseUrl = window.location.origin + window.location.pathname;
    const shortUrl = baseUrl + '#' + hash;
    
    document.getElementById('shareUrl').textContent = shortUrl;
    state.currentShortHash = hash;
    
    notify('New URL generated!', 'success');
}

function showShortUrls() {
    const forms = JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}');
    const baseUrl = window.location.origin + window.location.pathname;
    
    let html = '<div style="max-width:600px;margin:20px auto;">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">';
    html += '<h2 style="color:#004080;"><span class="inline-icon">' + getIcon('link', 20) + '</span> Your Short URLs</h2>';
    html += '<button onclick="closeHome()" style="padding:10px 20px;background:#28a745;color:#fff;border:none;border-radius:6px;cursor:pointer;">Back to Builder</button>';
    html += '</div>';
    
    if (Object.keys(forms).length === 0) {
        html += '<div style="text-align:center;padding:40px;background:#f8f9fa;border-radius:8px;">';
        html += '<p style="font-size:48px;margin-bottom:12px;"><span class="inline-icon">' + getIcon('inbox', 48) + '</span></p>';
        html += '<p style="color:#666;">No short URLs created yet</p>';
        html += '<button onclick="shareForm()" style="margin-top:20px;padding:12px 24px;background:#004080;color:#fff;border:none;border-radius:6px;cursor:pointer;">Create Your First Short URL</button>';
        html += '</div>';
    } else {
        html += '<div style="background:#e8f4fc;padding:15px;border-radius:8px;margin-bottom:20px;">';
        html += '<p style="margin:0;font-size:12px;color:#004080;"><span class="inline-icon">' + getIcon('info', 14) + '</span> Each URL is exactly 6 characters + domain name. Always the same length!</p>';
        html += '</div>';
        
        Object.keys(forms).forEach(hash => {
            const form = forms[hash];
            const shortUrl = baseUrl + '#' + hash;
            const createdDate = form.createdAt ? new Date(form.createdAt).toLocaleDateString() : 'Unknown';
            
            html += `
                <div style="background:#fff;padding:15px;margin-bottom:15px;border-radius:8px;border-left:4px solid #004080;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="margin:0 0 5px 0;font-size:16px;">${escapeHtml(form.title || 'Untitled')}</h3>
                    <div style="font-size:12px;color:#666;margin-bottom:8px;">
                        <span class="inline-icon">${getIcon('calendar', 12)}</span> Created: ${createdDate}
                        <span style="margin-left:10px;"><span class="inline-icon">${getIcon('bar-chart-3', 12)}</span> ${form.fields?.length || 0} fields</span>
                    </div>
                    <div style="background:#f1f3f5;padding:10px;border-radius:4px;font-family:monospace;margin-bottom:10px;word-break:break-all;">
                        ${shortUrl}
                    </div>
                    <div style="display:flex;gap:5px;flex-wrap:wrap;">
                        <button onclick="copyUrl('${shortUrl}')" style="padding:8px 15px;background:#004080;color:#fff;border:none;border-radius:4px;cursor:pointer;"><span class="inline-icon">${getIcon('copy', 12)}</span> Copy</button>
                        <button onclick="testUrl('${hash}')" style="padding:8px 15px;background:#28a745;color:#fff;border:none;border-radius:4px;cursor:pointer;"><span class="inline-icon">${getIcon('eye', 12)}</span> Preview</button>
                        <button onclick="deleteShortUrl('${hash}')" style="padding:8px 15px;background:#dc3545;color:#fff;border:none;border-radius:4px;cursor:pointer;"><span class="inline-icon">${getIcon('trash-2', 12)}</span> Delete</button>
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    
    document.getElementById('homeContainer').innerHTML = html;
    document.querySelector('.header').style.display = 'none';
    document.getElementById('homeContainer').classList.add('show');
    initIcons();
}

function copyUrl(url) {
    navigator.clipboard.writeText(url);
    notify('Copied to clipboard!');
}

function testUrl(hash) {
    window.open(window.location.origin + window.location.pathname + '#' + hash, '_blank');
}

function deleteShortUrl(hash) {
    if (confirm('Delete this short URL? The form will no longer be accessible.')) {
        const forms = JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}');
        delete forms[hash];
        localStorage.setItem('icfCollectShortForms', JSON.stringify(forms));
        showShortUrls();
        notify('Short URL deleted');
    }
}

// ==================== YOUR EXISTING AUTH FUNCTIONS ====================
function checkAuth() {
    const saved = safeStorage.getItem('icfCollectUser');
    if (saved) { state.user = JSON.parse(saved); showBuilder(); }
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector(`.auth-tab[data-tab="${tab}"]`)?.classList.add('active');
    document.getElementById(tab + 'Form')?.classList.add('active');
}

function showForgotPassword() {
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('forgotForm').classList.add('active');
    document.getElementById('authError').style.display = 'none';
    document.getElementById('authSuccess').style.display = 'none';
}

function showAuthLoading(show) {
    document.getElementById('authLoading').style.display = show ? 'block' : 'none';
    document.querySelectorAll('.auth-btn').forEach(btn => btn.disabled = show);
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    document.getElementById('authError').style.display = 'none';
    showAuthLoading(true);
    
    try {
        const response = await fetch(CONFIG.AUTH_SCRIPT_URL, {
            method: 'POST', mode: 'cors', redirect: 'follow',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
                action: 'login',
                email: email,
                password: password
            })
        });
        const result = await response.json();
        
        showAuthLoading(false);
        
        if (result.success && result.user) {
            state.user = result.user;
            safeStorage.setItem('icfCollectUser', JSON.stringify(result.user));
            showBuilder();
        } else {
            document.getElementById('authError').style.display = 'block';
            document.getElementById('authError').textContent = result.error || 'Invalid credentials';
        }
    } catch (error) {
        showAuthLoading(false);
        const users = JSON.parse(safeStorage.getItem('icfCollectUsers') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            state.user = user;
            safeStorage.setItem('icfCollectUser', JSON.stringify(user));
            showBuilder();
        } else {
            document.getElementById('authError').style.display = 'block';
            document.getElementById('authError').textContent = 'Connection error. Please try again.';
        }
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    
    document.getElementById('authError').style.display = 'none';
    document.getElementById('authSuccess').style.display = 'none';
    showAuthLoading(true);
    
    try {
        const response = await fetch(CONFIG.AUTH_SCRIPT_URL, {
            method: 'POST', mode: 'cors', redirect: 'follow',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
                action: 'signup',
                name: name,
                email: email,
                password: password
            })
        });
        const result = await response.json();
        
        showAuthLoading(false);
        
        if (result.success) {
            const users = JSON.parse(safeStorage.getItem('icfCollectUsers') || '[]');
            if (!users.find(u => u.email === email)) {
                users.push({ id: result.user?.id || Date.now().toString(), name, email, password });
                safeStorage.setItem('icfCollectUsers', JSON.stringify(users));
            }
            
            document.getElementById('authSuccess').style.display = 'block';
            document.getElementById('authSuccess').textContent = 'Account created! Please login.';
            setTimeout(() => switchAuthTab('login'), 1500);
        } else {
            document.getElementById('authError').style.display = 'block';
            document.getElementById('authError').textContent = result.error || 'Registration failed';
        }
    } catch (error) {
        showAuthLoading(false);
        document.getElementById('authError').style.display = 'block';
        document.getElementById('authError').textContent = 'Connection error. Please try again.';
    }
}

async function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim();
    
    document.getElementById('authError').style.display = 'none';
    document.getElementById('authSuccess').style.display = 'none';
    showAuthLoading(true);
    
    try {
        const response = await fetch(CONFIG.AUTH_SCRIPT_URL + '?action=forgotPassword&email=' + encodeURIComponent(email), {
            mode: 'cors',
            redirect: 'follow'
        });
        const result = await response.json();
        
        showAuthLoading(false);
        
        if (result.success) {
            document.getElementById('authSuccess').style.display = 'block';
            document.getElementById('authSuccess').textContent = 'Password sent to your email!';
            setTimeout(() => switchAuthTab('login'), 2000);
        } else {
            document.getElementById('authError').style.display = 'block';
            document.getElementById('authError').textContent = result.message || 'Email not found';
        }
    } catch (error) {
        showAuthLoading(false);
        document.getElementById('authError').style.display = 'block';
        document.getElementById('authError').textContent = 'Connection error. Please try again.';
    }
}

function showBuilder() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('mainContainer').classList.add('show');
    document.getElementById('headerUser').innerHTML = '<span data-icon="user" data-size="14"></span> ' + (state.user?.name || 'User');
    renderFields();
    initIcons();
}

function logout() {
    state.user = null;
    safeStorage.removeItem('icfCollectUser');
    document.getElementById('mainContainer').classList.remove('show');
    document.getElementById('authContainer').style.display = 'flex';
}

// ==================== HOME FUNCTIONS ====================
function showHome() {
    document.querySelector('.header').style.display = 'none';
    document.getElementById('mainContainer').classList.remove('show');
    document.querySelector('.footer').style.display = 'none';
    document.getElementById('homeContainer').classList.add('show');
    
    renderHomeContent(false);
    
    if (state.user) {
        syncFormsInBackground();
    }
}

async function syncFormsInBackground() {
    try {
        console.log('Background sync started...');
        const cloudForms = await loadFormsFromCloud();
        
        if (cloudForms.length > 0) {
            const localForms = JSON.parse(safeStorage.getItem('icfCollectForms') || '[]');
            const mergedForms = {};
            
            localForms.forEach(f => { mergedForms[f.id] = f; });
            cloudForms.forEach(f => {
                if (!mergedForms[f.id] || new Date(f.updatedAt) > new Date(mergedForms[f.id].updatedAt)) {
                    mergedForms[f.id] = f;
                }
            });
            
            const finalForms = Object.values(mergedForms);
            safeStorage.setItem('icfCollectForms', JSON.stringify(finalForms));
            
            if (document.getElementById('homeContainer').classList.contains('show')) {
                renderHomeContent(true);
            }
        }
        console.log('Background sync complete');
    } catch (err) {
        console.error('Background sync error:', err);
    }
}

function renderHomeContent(synced) {
    const forms = JSON.parse(safeStorage.getItem('icfCollectForms') || '[]');
    const isLoggedIn = !!state.user;
    
    let formsHtml = forms.length === 0 ? `
        <div style="text-align:center;padding:60px;color:#868e96;">
            <p style="font-size:64px;margin-bottom:12px;"><span class="inline-icon">${getIcon('inbox', 64)}</span></p>
            <h3 style="color:#004080;">No Forms Yet</h3>
            <p style="font-size:12px;margin-top:10px;">Create your first data collection form</p>
            <button onclick="closeHome()" style="padding:15px 30px;background:#28a745;color:#fff;border:none;border-radius:8px;cursor:pointer;margin-top:20px;font-weight:bold;"><span class="inline-icon">${getIcon('plus', 14)}</span> Create Form</button>
        </div>
    ` : forms.map((f, i) => `
        <div style="background:#fff;border-radius:12px;margin-bottom:15px;box-shadow:0 2px 10px rgba(0,0,0,0.1);overflow:hidden;">
            <div style="background:linear-gradient(135deg,#004080,#002855);color:#fff;padding:12px 15px;">
                <h3 style="margin:0;font-size:14px;"><span class="inline-icon">${getIcon('clipboard-list', 14)}</span> ${escapeHtml(f.title)}</h3>
            </div>
            <div style="padding:12px 15px;">
                <div style="font-size:11px;color:#666;margin-bottom:10px;">
                    <span class="inline-icon">${getIcon('bar-chart-3', 12)}</span> ${f.fieldCount} fields | <span class="inline-icon">${getIcon('edit-3', 12)}</span> ${(f.collectedData || []).length} records
                    ${f.dhis2?.datasetId ? '<span style="color:#17a2b8;margin-left:8px;"><span class="inline-icon">' + getIcon('link', 12) + '</span> DHIS2</span>' : ''}
                </div>
                <div style="display:flex;gap:6px;">
                    <button onclick="editForm(${i})" style="flex:1;padding:8px;background:#004080;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:11px;"><span class="inline-icon">${getIcon('pencil', 12)}</span> Edit</button>
                    <button onclick="deleteForm(${i})" style="padding:8px 12px;background:#dc3545;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:11px;"><span class="inline-icon">${getIcon('trash-2', 12)}</span></button>
                </div>
            </div>
        </div>
    `).join('');
    
    const syncStatus = isLoggedIn ? (synced ? 
        '<span style="color:#28a745;"><span class="inline-icon">' + getIcon('check-circle', 12) + '</span> Synced</span>' : 
        '<span style="color:#ffc107;"><span class="inline-icon">' + getIcon('loader', 12) + '</span> Syncing...</span>') : '';
    
    document.getElementById('homeContainer').innerHTML = `
        <div style="max-width:600px;margin:0 auto;padding:20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
                <h2 style="color:#004080;"><span class="inline-icon">${getIcon('home', 20)}</span> My Forms</h2>
                <div style="display:flex;gap:8px;align-items:center;">
                    ${syncStatus}
                    ${isLoggedIn ? `
                        <button onclick="syncFormsManually()" style="padding:10px 15px;background:#17a2b8;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;" title="Sync with Cloud">
                            <span class="inline-icon">${getIcon('refresh-cw', 14)}</span>
                        </button>
                    ` : ''}
                    <button onclick="closeHome()" style="padding:10px 20px;background:#28a745;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;"><span class="inline-icon">${getIcon('plus', 14)}</span> New</button>
                </div>
            </div>
            
            ${isLoggedIn ? `
                <div style="background:#d4edda;border:1px solid #c3e6cb;border-radius:8px;padding:10px 15px;margin-bottom:15px;display:flex;align-items:center;gap:10px;">
                    <span class="inline-icon" style="color:#155724;">${getIcon('cloud', 16)}</span>
                    <span style="font-size:12px;color:#155724;">Signed in as <strong>${escapeHtml(state.user.email)}</strong> - Forms sync across devices</span>
                </div>
            ` : `
                <div style="background:#fff3cd;border:1px solid #ffeeba;border-radius:8px;padding:10px 15px;margin-bottom:15px;display:flex;align-items:center;gap:10px;">
                    <span class="inline-icon" style="color:#856404;">${getIcon('alert-triangle', 16)}</span>
                    <span style="font-size:12px;color:#856404;">Forms are stored locally. Sign in to sync across devices.</span>
                </div>
            `}
            
            ${formsHtml}
        </div>
    `;
    
    initIcons();
}

async function syncFormsManually() {
    notify('Syncing forms...', 'info');
    try {
        await syncForms();
        notify('Forms synced!', 'success');
        renderHomeContent(true);
    } catch (err) {
        notify('Sync failed: ' + err.message, 'error');
    }
}

function closeHome() {
    document.getElementById('homeContainer').classList.remove('show');
    document.querySelector('.header').style.display = 'flex';
    document.getElementById('mainContainer').classList.add('show');
    document.querySelector('.footer').style.display = 'block';
}

function editForm(index) {
    const forms = JSON.parse(safeStorage.getItem('icfCollectForms') || '[]');
    const form = forms[index];
    if (!form) return;
    
    state.fields = form.fields || [];
    state.settings = { ...state.settings, ...form.settings };
    state.fieldCounter = Math.max(...state.fields.map(f => parseInt(f.id.replace('field_', '')) || 0), 0) + 1;
    state.collectedData = form.collectedData || [];
    
    if (form.dhis2) {
        state.dhis2.datasetId = form.dhis2.datasetId;
        state.dhis2.dataElements = form.dhis2.dataElements || {};
    }
    
    document.getElementById('formTitle').value = state.settings.title;
    document.getElementById('previewTitle').textContent = state.settings.title;
    saveToStorage();
    closeHome();
    renderFields();
    renderProperties();
    notify('Form loaded!');
}

function deleteForm(index) {
    const forms = JSON.parse(safeStorage.getItem('icfCollectForms') || '[]');
    const form = forms[index];
    if (!form || !confirm(`Delete "${form.title}"?\n\nThis will also delete the data sheet in Google Sheets.`)) return;
    
    deleteFormFromCloud(form.id, form.title);
    
    forms.splice(index, 1);
    safeStorage.setItem('icfCollectForms', JSON.stringify(forms));
    showHome();
    notify('Deleted');
}

// ==================== RENDER SHARED FORM ====================
function renderSharedForm(data) {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('mainContainer').classList.remove('show');
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    
    document.getElementById('viewerContainer').classList.add('show');
    document.getElementById('viewerContainer').innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;">
            <div style="font-size:48px;margin-bottom:20px;">⏳</div>
            <div style="color:#004080;font-weight:600;">Loading form...</div>
        </div>
    `;
    
    state.settings = { title: data.s?.t || 'Form', logo: data.s?.l || state.settings.logo, aggregateColumn: data.s?.ac || '' };
    
    state.fields = (data.f || []).map(f => ({
        id: f.i, type: f.y, label: f.l, name: f.n, required: f.r || false, options: f.o || [], max: f.mx || 5,
        showLogic: f.sl || [],
        validation: f.v || [],
        minLength: f.mnl, maxLength: f.mxl, exactLength: f.el,
        exactDigits: f.ed, minDigits: f.mnd, maxDigits: f.mxd,
        noFutureDates: f.nfd, noPastDates: f.npd, minDate: f.mid, maxDate: f.mxd2,
        autoTime: f.at !== false,
        checkDuplicate: f.cd || false,
        cascadeGroup: f.cg || null,
        cascadeLevel: typeof f.cl === 'number' ? f.cl : null,
        cascadeColumn: f.ccol || null,
        cascadeColumns: f.cc || [],
        cascadeData: [],
        cascadeDataRef: f.cref || null,
        cascadeValueColumn: f.cvc || null,
        formula: f.frm || ''
    }));
    
    const cascadeFields = state.fields.filter(f => f.cascadeDataRef && f.cascadeColumns && f.cascadeColumns.length > 0);
    if (cascadeFields.length > 0) {
        console.log(`Loading cascade data for ${cascadeFields.length} fields...`);
        for (const field of cascadeFields) {
            try {
                const cloudData = await loadCascadeDataFromCloud(field.cascadeDataRef, field.cascadeColumns);
                if (cloudData && cloudData.data) {
                    field.cascadeData = cloudData.data;
                    console.log(`Loaded cascade data for ${field.name}: ${field.cascadeData.length} rows`);
                }
            } catch (err) {
                console.error('Failed to load cascade data for', field.name, err);
            }
        }
    }
    
    if (data.d) {
        state.dhis2.datasetId = data.d.id || '';
        state.dhis2.programId = data.d.pid || '';
        state.dhis2.dataElements = data.d.de || {};
    }
    
    if (data.h) {
        state.dhis2.url = data.h.u || '';
        state.dhis2.username = data.h.n || '';
        state.dhis2.password = data.h.p ? atob(data.h.p) : '';
        state.dhis2.syncMode = data.h.m || 'aggregate';
        state.dhis2.orgUnitLevel = data.h.ol || 5;
        state.dhis2.periodType = data.h.pt || 'Monthly';
        state.dhis2.periodColumn = data.h.pc || '';
        state.dhis2.orgUnitColumn = data.h.oc || '';
        state.dhis2.connected = true;
        
        if (state.dhis2.url) {
            fetchOrgUnits().catch(err => console.log('Could not fetch org units:', err));
        }
    }
    
    renderFormViewer();
}

// ==================== INIT FUNCTION ====================
function init() {
    // Check for hash-based short URL first
    const hash = window.location.hash.substring(1);
    
    if (hash && hash.length === 6) {
        document.getElementById('authContainer').style.display = 'none';
        document.getElementById('viewerContainer').classList.add('show');
        document.getElementById('viewerContainer').innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;">
                <div style="font-size:48px;margin-bottom:20px;">⏳</div>
                <div style="color:#004080;font-weight:600;">Loading form <code>${hash}</code>...</div>
            </div>
        `;
        
        loadFormFromHash(hash);
        return;
    }
    
    // Check for compressed data (backward compatibility)
    const urlParams = new URLSearchParams(window.location.search);
    const compressedData = urlParams.get('d');
    
    if (compressedData) {
        try {
            const decoded = atob(decodeURIComponent(compressedData));
            const charData = decoded.split('').map(c => c.charCodeAt(0));
            const binData = new Uint8Array(charData);
            const decompressed = pako.inflate(binData, { to: 'string' });
            const data = JSON.parse(decompressed);
            
            const cacheKey = 'shared_form_' + window.location.search.substring(0, 100);
            try {
                safeStorage.setItem(cacheKey, decompressed);
            } catch (e) {}
            
            state.isSharedMode = true;
            renderSharedForm(data);
            return;
        } catch (err) { 
            console.error('Decode error:', err);
            
            if (!navigator.onLine) {
                const cacheKey = 'shared_form_' + window.location.search.substring(0, 100);
                const cached = safeStorage.getItem(cacheKey);
                if (cached) {
                    try {
                        const data = JSON.parse(cached);
                        state.isSharedMode = true;
                        renderSharedForm(data);
                        return;
                    } catch (e) {}
                }
            }
        }
    }
    
    loadFromStorage();
    loadConfigs();
    setupEventListeners();
    checkAuth();
}

function setupEventListeners() {
    document.querySelectorAll('.auth-tab').forEach(tab => tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab)));
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    document.getElementById('forgotForm').addEventListener('submit', handleForgotPassword);
    document.querySelectorAll('.field-type').forEach(el => el.addEventListener('click', () => addField(el.dataset.type)));
    document.getElementById('formTitle').addEventListener('input', (e) => {
        state.settings.title = e.target.value;
        document.getElementById('previewTitle').textContent = e.target.value;
        saveToStorage();
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });
    });
}

// ==================== DHIS2 FUNCTIONS (placeholders - implement fully) ====================
function openDhis2Config() { /* Implement */ }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }
function selectSyncMode(mode) { /* Implement */ }
function testDhis2Connection() { /* Implement */ }
function saveDhis2Config() { /* Implement */ }
function setupDhis2() { /* Implement */ }
function syncCaseBased() { /* Implement */ }
function syncAggregate() { /* Implement */ }
function fetchOrgUnits() { /* Implement */ }

// ==================== DRAFT FUNCTIONS ====================
function getDraftStorageKey() {
    return `icf_drafts_${state.settings.title.replace(/\s+/g, '_')}`;
}

function loadDrafts() {
    try {
        return JSON.parse(safeStorage.getItem(getDraftStorageKey()) || '[]');
    } catch (err) {
        return [];
    }
}

function saveDrafts(drafts) {
    safeStorage.setItem(getDraftStorageKey(), JSON.stringify(drafts));
}

function saveDraft() {
    const form = document.getElementById('viewerForm');
    if (!form) return;
    
    const formData = new FormData(form);
    const tempData = {};
    formData.forEach((v, k) => tempData[k] = v);
    
    const hasData = state.fields.some(f => f.type !== 'section' && tempData[f.name]);
    if (!hasData) {
        notify('No data to save as draft', 'info');
        return;
    }
    
    const draftName = prompt('Enter a name for this draft:', 'Draft ' + (loadDrafts().length + 1));
    if (!draftName) return;
    
    const data = { 
        _draftId: Date.now(), 
        _draftName: draftName.trim(),
        _savedAt: new Date().toISOString()
    };
    formData.forEach((v, k) => data[k] = v);
    
    const drafts = loadDrafts();
    drafts.push(data);
    saveDrafts(drafts);
    
    notify(`Draft "${draftName}" saved!`, 'success');
    renderDraftsPanel();
    updateDraftsCount();
}

function loadDraft(draftId) {
    const drafts = loadDrafts();
    const draft = drafts.find(d => d._draftId === draftId);
    if (!draft) return;
    
    const form = document.getElementById('viewerForm');
    if (!form) return;
    
    state.fields.forEach(field => {
        if (field.type === 'section') return;
        const value = draft[field.name];
        if (value === undefined) return;
        
        const input = form.querySelector(`[name="${field.name}"]`);
        if (!input) return;
        
        if (input.type === 'radio') {
            const radio = form.querySelector(`input[name="${field.name}"][value="${value}"]`);
            if (radio) radio.checked = true;
        } else if (input.type === 'checkbox') {
            const values = Array.isArray(value) ? value : [value];
            form.querySelectorAll(`input[name="${field.name}"]`).forEach(cb => {
                cb.checked = values.includes(cb.value);
            });
        } else {
            input.value = value;
        }
    });
    
    form.dataset.draftId = draftId;
    
    notify('Draft loaded!', 'info');
    goToPage(0);
    setTimeout(() => applyFormLogic(), 100);
}

function deleteDraft(draftId) {
    if (!confirm('Delete this draft?')) return;
    removeDraft(draftId);
    notify('Draft deleted');
    renderDraftsPanel();
    updateDraftsCount();
}

function removeDraft(draftId) {
    if (!draftId) return;
    const drafts = loadDrafts();
    const filtered = drafts.filter(d => d._draftId !== draftId);
    saveDrafts(filtered);
}

function renderDraftsPanel() {
    const container = document.getElementById('draftsPanel');
    if (!container) return;
    
    const drafts = loadDrafts();
    
    if (drafts.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#868e96;font-size:11px;padding:10px;">No saved drafts</p>';
        return;
    }
    
    let html = '<div class="drafts-list">';
    drafts.forEach(draft => {
        const savedDate = new Date(draft._savedAt).toLocaleString();
        const draftName = draft._draftName || 'Unnamed Draft';
        const preview = state.fields
            .filter(f => f.type !== 'section' && draft[f.name])
            .slice(0, 2)
            .map(f => String(draft[f.name]).substring(0, 15))
            .join(', ') || '';
        
        html += `
            <div class="draft-item">
                <div class="draft-info">
                    <div class="draft-preview" style="font-weight:700;">${escapeHtml(draftName)}</div>
                    <div class="draft-date">${savedDate}${preview ? ' • ' + escapeHtml(preview) : ''}</div>
                </div>
                <div class="draft-actions">
                    <button class="draft-btn load" onclick="loadDraft(${draft._draftId})" title="Load Draft">
                        <span data-icon="file-edit" data-size="12"></span>
                    </button>
                    <button class="draft-btn delete" onclick="deleteDraft(${draft._draftId})" title="Delete Draft">
                        <span data-icon="trash-2" data-size="12"></span>
                    </button>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
    initIcons();
}

function toggleDraftsPanel() {
    const wrapper = document.getElementById('draftsPanelWrapper');
    if (wrapper) {
        wrapper.style.display = wrapper.style.display === 'none' ? 'block' : 'none';
        if (wrapper.style.display === 'block') {
            renderDraftsPanel();
        }
    }
}

function updateDraftsCount() {
    const countEl = document.getElementById('draftsCount');
    if (countEl) {
        const drafts = loadDrafts();
        countEl.textContent = `Drafts (${drafts.length})`;
    }
}

// ==================== FILTER FUNCTIONS ====================
function getFilterableFields() {
    const categoricalTypes = ['select', 'radio', 'yesno', 'checkbox', 'rating'];
    return state.fields.filter(f => categoricalTypes.includes(f.type));
}

function getFilteredData() {
    let data = [...state.collectedData];
    
    if (state.dateFilter.start || state.dateFilter.end) {
        data = data.filter(row => {
            const ts = row._timestamp;
            if (!ts) return true;
            const rowDate = new Date(ts);
            
            if (state.dateFilter.start && rowDate < new Date(state.dateFilter.start)) return false;
            if (state.dateFilter.end) {
                const endDate = new Date(state.dateFilter.end);
                endDate.setHours(23, 59, 59, 999);
                if (rowDate > endDate) return false;
            }
            return true;
        });
    }
    
    Object.keys(state.filters).forEach(fieldName => {
        const filterValue = state.filters[fieldName];
        if (filterValue) {
            data = data.filter(row => {
                const rowValue = row[fieldName];
                return rowValue && rowValue.toString().trim() === filterValue;
            });
        }
    });
    
    return data;
}

function updateFilter(fieldName, value) {
    if (value) {
        state.filters[fieldName] = value;
    } else {
        delete state.filters[fieldName];
    }
    applyFilters();
}

function updateDateFilter(type, value) {
    state.dateFilter[type] = value;
    applyFilters();
}

function clearAllFilters() {
    state.filters = {};
    state.dateFilter = { start: '', end: '' };
    document.querySelectorAll('.filter-select, .filter-input').forEach(el => el.value = '');
    applyFilters();
    notify('Filters cleared');
}

function moveFilter(fieldName, direction) {
    const filterableFields = getFilterableFields();
    const fieldNames = filterableFields.map(f => f.name);
    
    if (state.filterOrder.length === 0) {
        state.filterOrder = [...fieldNames];
    }
    
    fieldNames.forEach(name => {
        if (!state.filterOrder.includes(name)) {
            state.filterOrder.push(name);
        }
    });
    
    state.filterOrder = state.filterOrder.filter(name => fieldNames.includes(name));
    
    const idx = state.filterOrder.indexOf(fieldName);
    if (idx === -1) return;
    
    if (direction === 'up' && idx > 0) {
        [state.filterOrder[idx], state.filterOrder[idx - 1]] = [state.filterOrder[idx - 1], state.filterOrder[idx]];
    } else if (direction === 'down' && idx < state.filterOrder.length - 1) {
        [state.filterOrder[idx], state.filterOrder[idx + 1]] = [state.filterOrder[idx + 1], state.filterOrder[idx]];
    }
    
    saveToStorage();
    renderDataContent();
    renderDashboard();
}

function getOrderedFilterFields() {
    const filterableFields = getFilterableFields();
    
    if (state.filterOrder.length === 0) {
        return filterableFields;
    }
    
    const ordered = [];
    state.filterOrder.forEach(name => {
        const field = filterableFields.find(f => f.name === name);
        if (field) ordered.push(field);
    });
    
    filterableFields.forEach(field => {
        if (!ordered.find(f => f.name === field.name)) {
            ordered.push(field);
        }
    });
    
    return ordered;
}

function applyFilters() {
    renderDataContent();
    renderDashboard();
}

// ==================== AGGREGATE FUNCTIONS ====================
function calculateAggregateData() {
    const periodColumn = state.dhis2.periodColumn;
    const orgUnitColumn = state.dhis2.orgUnitColumn;
    
    let aggregateColumns = state.settings.aggregateColumns || [];
    if (aggregateColumns.length === 0 && state.settings.aggregateColumn) {
        aggregateColumns = [state.settings.aggregateColumn];
    }
    if (aggregateColumns.length === 0 && orgUnitColumn) {
        aggregateColumns = [orgUnitColumn];
    }
    
    const useDefaultGrouping = aggregateColumns.length === 0 && !periodColumn;
    
    const grouped = {};
    const data = getFilteredData();
    
    if (data.length === 0) return [];
    
    const skipFields = [periodColumn, ...aggregateColumns].filter(Boolean);
    const skipTypes = ['phone', 'gps', 'email', 'text', 'textarea', 'date', 'time'];
    
    data.forEach(record => {
        let period, groupValue, key;
        
        if (useDefaultGrouping) {
            const ts = record._timestamp ? new Date(record._timestamp) : new Date();
            period = `${ts.getFullYear()}${String(ts.getMonth() + 1).padStart(2, '0')}`;
            groupValue = 'All';
            key = `${groupValue}|||${period}`;
        } else {
            if (periodColumn && record[periodColumn]) {
                period = record[periodColumn];
            } else {
                const ts = record._timestamp ? new Date(record._timestamp) : new Date();
                period = `${ts.getFullYear()}${String(ts.getMonth() + 1).padStart(2, '0')}`;
            }
            
            if (aggregateColumns.length > 0) {
                const groupParts = aggregateColumns.map(col => record[col] || 'Unknown');
                groupValue = groupParts.join(' | ');
            } else {
                groupValue = 'All';
            }
            key = `${groupValue}|||${period}`;
        }
        
        if (!grouped[key]) {
            grouped[key] = {
                _group: groupValue,
                _period: period,
                _count: 0
            };
            
            aggregateColumns.forEach(col => {
                grouped[key]['_grp_' + col] = record[col] || 'Unknown';
            });
        }
        
        grouped[key]._count++;
        
        state.fields.forEach(field => {
            if (field.type === 'section') return;
            if (skipFields.includes(field.name)) return;
            if (skipTypes.includes(field.type)) return;
            
            const value = record[field.name];
            const def = fieldDefs[field.type];
            
            if (def?.category === 'numeric' || field.type === 'number') {
                const numVal = parseFloat(value) || 0;
                grouped[key][field.name] = (grouped[key][field.name] || 0) + numVal;
            } else if ((def?.category === 'categorical' || field.type === 'yesno') && field.type !== 'text') {
                const options = field.type === 'yesno' ? ['Yes', 'No'] : (field.options || []);
                
                options.forEach(opt => {
                    const colName = `${field.name}_${opt}`;
                    if (grouped[key][colName] === undefined) {
                        grouped[key][colName] = 0;
                    }
                });
                
                if (value && options.includes(value)) {
                    const colName = `${field.name}_${value}`;
                    grouped[key][colName] = (grouped[key][colName] || 0) + 1;
                }
            }
        });
    });
    
    return Object.values(grouped);
}

// ==================== MAKE FUNCTIONS GLOBAL ====================
window.init = init;
window.shareForm = shareForm;
window.createNewShortUrl = createNewShortUrl;
window.showShortUrls = showShortUrls;
window.copyUrl = copyUrl;
window.testUrl = testUrl;
window.deleteShortUrl = deleteShortUrl;
window.switchAuthTab = switchAuthTab;
window.showForgotPassword = showForgotPassword;
window.logout = logout;
window.showHome = showHome;
window.newForm = newForm;
window.saveCurrentForm = saveCurrentForm;
window.previewForm = previewForm;
window.openDhis2Config = openDhis2Config;
window.closeModal = closeModal;
window.selectSyncMode = selectSyncMode;
window.testDhis2Connection = testDhis2Connection;
window.saveDhis2Config = saveDhis2Config;
window.setupDhis2 = setupDhis2;
window.syncCaseBased = syncCaseBased;
window.syncAggregate = syncAggregate;
window.closeViewer = closeViewer;
window.copyShareUrl = function() {
    navigator.clipboard.writeText(document.getElementById('shareUrl').textContent)
        .then(() => notify('Copied to clipboard!'))
        .catch(() => notify('Copy failed', 'error'));
};
window.captureGPS = captureGPS;
window.setRating = setRating;
window.startQRScanner = startQRScanner;
window.stopQRScanner = stopQRScanner;
window.goToNextPage = goToNextPage;
window.goToPrevPage = goToPrevPage;
window.showTab = showTab;
window.updateFilter = updateFilter;
window.updateDateFilter = updateDateFilter;
window.clearAllFilters = clearAllFilters;
window.moveFilter = moveFilter;
window.refreshData = refreshData;
window.downloadCSV = downloadCSV;
window.switchDataView = switchDataView;
window.toggleAggregateColumn = toggleAggregateColumn;
window.setGpsField = setGpsField;
window.zoomToAllPoints = zoomToAllPoints;
window.downloadGeoJSON = downloadGeoJSON;
window.downloadKML = downloadKML;
window.saveDraft = saveDraft;
window.loadDraft = loadDraft;
window.deleteDraft = deleteDraft;
window.toggleDraftsPanel = toggleDraftsPanel;
window.handleCascadeSelect = handleCascadeSelect;
window.handleCascadeChange = handleCascadeChange;
window.downloadCascadeTemplate = downloadCascadeTemplate;
window.handleCascadeUpload = handleCascadeUpload;
window.insertFieldRef = insertFieldRef;
window.insertFormulaText = insertFormulaText;
window.clearFormula = clearFormula;
window.addLogicRule = addLogicRule;
window.deleteLogicRule = deleteLogicRule;
window.addLogicCondition = addLogicCondition;
window.deleteLogicCondition = deleteLogicCondition;
window.updateLogicCondition = updateLogicCondition;
window.addValidationRule = addValidationRule;
window.deleteValidationRule = deleteValidationRule;
window.updateValidationRule = updateValidationRule;
window.updateFieldValidation = updateFieldValidation;
window.removeField = removeField;
window.moveField = moveField;
window.selectField = selectField;

// ==================== INITIALIZE ====================
// Start the app
init();
initIcons();
updateOnlineStatus();
</script>
