export const personalInfo = {
  name: 'Abhimanyu KK',
  title: 'Lead Embedded Engineer',
  location: 'Bangalore, India',
  email: 'abhimanyukk01@gmail.com',
  phone: '+91 8943 521 009',
  github: 'https://github.com/Abhimanyukk',
  linkedin: 'https://linkedin.com/in/abhimanyukk',
  summary:
    'Embedded Technical Lead with 7+ years of experience architecting and delivering high-performance embedded systems across complex, mission-critical environments. Experienced in system architecture definition, PRD review & SRS authoring, hardware–software co-design, secure boot & OTA architecture, embedded Linux customisation, RTOS and low-level firmware, and Qt/QML & LVGL UI development. Strong background in customer-facing technical discussions, compliance alignment (CFR 21 Part 11, EU CRA), and scalable production-grade system design.',
  expertiseTags: [
    'System Architecture',
    'Embedded Linux',
    'RTOS & Firmware',
    'Secure Boot & OTA',
    'Hardware–Software Co-Design',
    'Qt / QML / LVGL',
    'CI/CD & DevOps',
    'CFR 21 Part 11',
    'EU CRA Compliance',
  ],
}

export const skills = {
  languages: [
    'Embedded C / C++',
    'Python',
    'Qt / QML',
    'LVGL',
    'PyQt',
    'C#',
    'JavaScript / TypeScript',
    'Node.js',
    'React',
    'Rust (Basics)',
  ],
  protocols: [
    'ModBus',
    'HiSLIP',
    'VXI-11',
    'TCP/IP',
    'USBTMC',
    'GPIB / IEEE488',
    'BLE',
    'WiFi',
    'ZigBee',
    'UART',
    'I2C',
    'SPI / QSPI / OSPI',
  ],
  tools: [
    'GitHub / GitLab / Bitbucket',
    'Docker',
    'CI/CD & Jenkins',
    'KiCAD / Altium',
    'IAR Workbench',
    'CMake / Makefile',
    'VS Code Extension Dev',
  ],
}

export const experience = [
  {
    role: 'Lead Embedded Engineer',
    company: 'Utthunga Technologies',
    website: 'https://utthunga.com',
    logo: '/logos/utthunga.svg',
    period: 'May 2021 – Present',
    highlights: [
      'Led full product lifecycle development (architecture → production)',
      'Defined system architecture for multi-functional calibrator redesign',
      'Authored SRS and reviewed PRDs across multiple product lines',
      'Designed secure boot and A/B update strategies for production devices',
      'Performed EVK bring-up & custom OS builds on embedded Linux',
      'Enforced cybersecurity compliance (CFR 21 Part 11, EU CRA)',
      'Implemented LXI compliance on networked instruments',
      'Led team of developers & testers across projects',
      'Established Git workflows & CI/CD pipelines',
      'Conducted technical recruitment & ongoing mentoring',
    ],
  },
  {
    role: 'Technology Associate',
    company: 'Toutche Electric',
    website: 'https://toutche.com',
    logo: '/logos/toutche.svg',
    period: 'Feb 2021 – May 2021',
    highlights: [
      'Developed firmware for electric bike controllers',
      'PID tuning for BLDC motors for smooth ride performance',
      'Debugged hardware power and signal integrity issues',
      'End-to-end system validation & integration',
    ],
  },
  {
    role: 'Embedded System Developer',
    company: 'ICPro Solutions',
    website: 'https://www.icpro.in',
    logo: '/logos/icpro.svg',
    period: 'Jan 2019 – Feb 2021',
    highlights: [
      'Designed Industrial IoT solutions for manufacturing environments',
      'Integrated BLE, WiFi, ZigBee & LoRa communication stacks',
      'Designed multi-layer PCBs using KiCAD / Altium',
      'Built Android BLE companion apps',
      'Implemented secure boot & OTA firmware update pipelines',
      'Integrated devices with AWS, Azure & Google Cloud platforms',
    ],
  },
]

export const projects = [
  {
    title: 'Multi-Function Calibrator',
    role: 'Technical Lead',
    tags: ['Embedded Linux', 'LVGL', 'Secure Boot', 'OTA', 'DevOps'],
    highlights: [
      'End-to-end system definition (PRD → SRS)',
      'Platform evaluation: Zephyr vs Embedded Linux',
      'Secure boot + A/B OTA strategy',
      'Layered architecture (HAL → BSP → Middleware → Application)',
      'DevOps containerised builds & CI/CD',
      'Cybersecurity compliance implementation',
      'Performance-optimised Embedded Linux for LVGL rendering',
    ],
  },
  {
    title: 'Pressure Automated & Control Equipment',
    role: 'Lead Developer',
    tags: ['Qt/QML', 'SCPI', 'Node.js', 'React', 'Docker', 'CI/CD'],
    highlights: [
      'C++ application on Torizon Linux platform',
      'SCPI protocol over USB Serial, USBTMC, Raw Socket, HiSLIP, VXI-11, GPIB',
      'Linux USBTMC kernel driver development',
      'Dockerised multi-service deployment',
      'Node.js + React embedded web server',
      'QML UI development',
      'CI/CD pipeline with GitHub Actions',
    ],
  },
  {
    title: 'Functional Safety Firmware',
    role: 'Firmware Engineer',
    tags: ['Embedded C', 'Atmel SAMD21', 'DMA', 'State Machine'],
    highlights: [
      'Embedded C on Atmel SAMD21 microcontroller',
      'Redundant dual-board architecture for safety',
      'DMA-based high-speed ADC data acquisition',
      'High-speed SPI & UART communication',
      'Active / Redundant / Fail state machine modes',
    ],
  },
  {
    title: 'Wireless IO Module',
    role: 'System Developer',
    tags: ['STM32', 'ZigBee', 'Raspberry Pi', 'OTA', 'Windows Tool'],
    highlights: [
      'STM32 firmware with ZigBee mesh networking',
      'OTA bootloader implementation for field updates',
      'Gateway using Raspberry Pi Compute Module',
      'Windows-based configuration tool',
    ],
  },
  {
    title: 'Vibration Sensor (BLE)',
    role: 'Firmware Developer',
    tags: ['Nordic BLE SoC', 'Custom GATT', 'OTA', 'Power Optimisation'],
    highlights: [
      'Nordic BLE SoC firmware development',
      'Custom BLE GATT services for sensor data',
      'OTA firmware updates via BLE DFU',
      'Aggressive power optimisation for battery life',
      'Android app integration',
    ],
  },
  {
    title: 'Electric Bike Controller',
    role: 'Firmware Engineer',
    tags: ['Infineon MCU', 'PID Control', 'CAN Bus', 'RTOS'],
    highlights: [
      'Infineon MCU firmware for motor control',
      'PID-based BLDC motor control algorithm',
      'CAN bus communication with vehicle systems',
      'Safety mechanisms and fault detection',
      'Real-time performance optimisation',
    ],
  },
]

export const education = [
  {
    degree: 'Professional Graduate Programme',
    institution: 'International Institute of Management & Technical Studies',
    period: '2022 – 2024',
    logo: '/logos/iimt.png',
  },
  {
    degree: 'Bachelor of Technology — Electronics & Communication',
    institution: 'Malabar Institute of Technology',
    period: '2014 – 2018',
    logo: '/logos/mit.svg',
  },
]

export const awards = [
  {
    type: 'utthunga' as const,
    title: 'Best Employee of the Year 2022',
    org: 'Utthunga Technologies',
    color: '#FBBC05',
    cardAccent: 'card-yellow',
  },
  {
    type: 'google' as const,
    title: 'Google Kick Start 2021',
    org: 'Global Rank 6372',
    color: '#4285F4',
    cardAccent: 'card-blue',
  },
]

export const certifications = [
  {
    title: 'Embedded Linux Training',
    issuer: 'Utthunga Technologies',
    year: '2022',
    color: '#34A853',
  },
]
