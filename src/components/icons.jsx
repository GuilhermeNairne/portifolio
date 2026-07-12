const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconWorld(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </svg>
  )
}

export function IconDeviceMobile(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  )
}

export function IconServer(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  )
}

export function IconCloud(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M7 18a4.5 4.5 0 0 1-.5-8.97A5.5 5.5 0 0 1 17.2 8.06 4 4 0 0 1 17 18H7Z" />
    </svg>
  )
}

export function IconBadge(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2.5 14.4 6l4.1.4-2.7 3.2.7 4.1L12 11.8 8.2 13.7l.7-4.1L6.2 6.4 10.3 6 12 2.5Z" />
      <path d="M9 15.5 8 21.5l4-2 4 2-1-6" />
    </svg>
  )
}

export function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.71-.23.71-.5v-1.95c-2.92.64-3.54-1.28-3.54-1.28-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.67-1.42-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.08-2.82-.11-.27-.47-1.36.1-2.83 0 0 .88-.28 2.89 1.08a10 10 0 0 1 5.26 0c2.01-1.36 2.89-1.08 2.89-1.08.57 1.47.21 2.56.1 2.83.68.73 1.08 1.67 1.08 2.82 0 4.04-2.46 4.93-4.8 5.19.38.33.72.97.72 1.96v2.9c0 .27.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  )
}

export function IconLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.02 2.02 0 1 1 0 4.04 2.02 2.02 0 0 1 0-4.04ZM3.2 8.98h3.56V21H3.2V8.98Zm6.36 0h3.41v1.64h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45V21h-3.56v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9.56V8.98Z" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
    </svg>
  )
}

export function IconDownload(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  )
}

export function IconWhatsapp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.86.5 3.65 1.44 5.23L2 22l4.9-1.4a10 10 0 0 0 5.11 1.4h.01c5.53 0 10.01-4.48 10.01-10.01C22 6.48 17.53 2 12.01 2Zm5.85 14.32c-.25.7-1.23 1.28-2 1.44-.53.11-1.23.2-3.58-.77-3.01-1.25-4.95-4.3-5.1-4.5-.15-.2-1.22-1.63-1.22-3.1 0-1.48.77-2.2 1.05-2.5.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.31.31-.13.6.17.3.77 1.28 1.66 2.08 1.14 1.03 2.1 1.35 2.4 1.5.3.15.47.13.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.3.15.5.22.57.35.07.13.07.75-.18 1.45Z" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  )
}

export function IconImage(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m5 18 5-5 3.5 3.5L18 12l3 3" />
    </svg>
  )
}

export function IconDatabase(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
      <path d="M4 12v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V12" />
    </svg>
  )
}

export function IconApi(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M8 8 4 12l4 4M16 8l4 4-4 4" />
      <path d="M13.5 6.5 10.5 17.5" />
    </svg>
  )
}

export function IconBolt(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M13 2 4.5 13.5H11L10 22l9-12h-6.5z" />
    </svg>
  )
}

export function IconSparkle(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </svg>
  )
}

export function IconTask(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m8 12.5 2.2 2.2L16 9" />
    </svg>
  )
}

export function IconFinance(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 19V10M10 19V5M16 19v-7M20 19H4" />
    </svg>
  )
}

export function IconArrow(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconBell(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 10a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10Z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </svg>
  )
}
