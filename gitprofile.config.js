// gitprofile.config.js

const config = {
  github: {
    username: 'AuroraArc', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['data', 'auroraarc', 'LaTeX'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'henry-y-36b620275',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'henry.yu094@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/AuroraArc/college/blob/main/resume/Henry%20Yu%20Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'C',
    'Placeholder'
  ],
  experiences: [

  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Indiana University - Bloomington',
      degree: 'B.S. Computer Science',
      from: '2023',
      to: '2027',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Understanding the Influence of Qubit Features on Error Rates',
      description:
        'The goal of the project was to assess correlations between qubit features and ultimately predict error probability.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/AuroraArc/qubit-feature-analysis',
    },
    {
      title: 'Breaking the Cycle: Reducing Recidivism in Iowa State Prisons',
      description:
        'Analysis of the recidivm cycle and the impact of various factors on recidivism rates.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://www.soa.org/49c692/globalassets/assets/files/static-pages/research/arch/2023/arch-2023-2-breaking-the-cycle-reducing-recidivism.pdf',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-DFJQESCYS3', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'autumn',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'autumn'
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
