module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/use-cases',
        'getting-started/deployment-options',
        'getting-started/quick-start',
        'getting-started/connecting-applications',
        'getting-started/language-glossary',
        'getting-started/designing-integrations',
        'getting-started/automation-inspiration',
        'getting-started/faq',
      ],
    },
    {
      type: 'category',
      label: 'Design',
      items: [
        'design/design-integration',
      ],
    },
    {
      type: 'category',
      label: 'Build',
      items: [
        'build/connecting-applications',
        'build/jobs',
        { type: 'link', label: 'Jobs Library', href: '../../library' },
        // TODO:@Jed maybe we get put jobs library link in build/jobs ##overview?
        'build/credentials',
        'build/triggers',
        'build/messages',
        'build/runs',
        'build/troubleshooting',
        'build/diy',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/platform',
        'deploy/microservices',
        'deploy/devtools',
        'deploy/core',
        'deploy/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Manage',
      items: [
        'manage/placeholder',
      ],
    },
    {
      type: 'doc',
      id: 'faqs',
    },
    {
      type: 'category',
      label: 'Writing Docs',
      items: ['style-guide'],
    },
    {
      type: 'doc',
      id: 'about',
    },
    {
      type: 'link',
      label: 'Community Forum', // The label that should be displayed (string).
      href: 'https://community.openfn.org', // The target URL (string).
    },
  ],
};
