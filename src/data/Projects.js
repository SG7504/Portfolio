export const projects = [
  {
    title: 'Real-Time Fraud Detection System',
    description: 'ML-powered system deployed with FastAPI on AWS EC2. ROC AUC: 0.9458, TPR: 97.72%.',
    stack: ['AWS EC2', 'Machine Learning', 'Python'],
    code: 'https://github.com/SG7504/Fraud-Detection-System-with-AWS',
  },
  {
    title: 'Dragon’s Vault Discord Bot',
    description: 'Discord bot for a marketplace server with ticket-based system and secured roles.',
    stack: ['Python', 'Discord API', 'Github'],
    code: 'https://github.com/SG7504/Discord-Bot-DV',
  },
  {
    title: 'Offline Subtitle Translator',
    description: 'Subtitle translation app that works offline and preserves timing.',
    stack: ['Machine Learning', 'Google Colab', 'Python'],
    code: 'https://github.com/SG7504/GFGKIIT-Wanderers-Hyperthon',
  },
  {
    title: 'Support Ticket System (C#)',
    description: 'Console-based app to manage support tickets with OOP design.',
    stack: ['OOPs', 'Github', 'C#'],
    code: 'https://github.com/SG7504/Ticket-System',
  },
  {
    title: 'Customer Support Dashboard',
    description: 'Responsive UI for support tickets using HTML, CSS, JS.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    code: 'https://github.com/SG7504/Customer-Support-Dashboard',
  }
];

// Rendering function
export function renderProjects(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <div class="project">
      <div class="project-title">${project.title}</div>
      <div class="project-stack"><strong>Stack:</strong> ${project.stack.join(', ')}</div>
      <div class="project-desc">${project.description}</div>
      <a class="project-link" href="${project.code}" target="_blank">View Code</a>
    </div>
  `).join('');
}
