import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Introduction to Wormhole',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Wormhole 101', link: '/introduction/wormhole101' },
            { label: 'Evolution of Cross Network Communication', link: '/introduction/evolution' },
            { label: 'Understanting Wormhole', link: '/introduction/understanding' },
            { label: 'Why Wormhole', link: '/introduction/why' },
            { label: 'Terminology', link: '/introduction/terminology' },
            { label: 'How Bridging Works?', link: '/introduction/bridging' },
            { label: 'Architecture', link: '/introduction/architecture' },
          ],
        },
        {
          label: 'Setting up Development Environment',
          items: [
            { label: 'Developer Environment', link: '/environment/environment' },
            { label: 'What is Tilt?', link: '/environment/tilt/what' },
            { label: 'Setting up Tilt', link: '/environment/tilt/setup' },
            { label: 'Resolving Errors', link: '/environment/tilt/errors' },
          ],
        },
      ],
    }),
  ],
});
