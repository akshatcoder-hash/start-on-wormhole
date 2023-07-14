import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Start on Wormhole",
      social: {
        github: "https://github.com/akshatcoder-hash/start-on-wormhole",
      },
      sidebar: [
        {
          label: "Introduction to Wormhole",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Wormhole 101", link: "/introduction/wormhole101" },
            {
              label: "Evolution of Cross Network Communication",
              link: "/introduction/evolution",
            },
            {
              label: "Understanting Wormhole",
              link: "/introduction/understanding",
            },
            { label: "Why Wormhole", link: "/introduction/why" },
            { label: "Terminology", link: "/introduction/terminology" },
            { label: "How Bridging Works?", link: "/introduction/bridging" },
            { label: "Architecture", link: "/introduction/architecture" },
          ],
        },
        {
          label: "Setting up Development Environment",
          items: [
            {
              label: "Developer Environment",
              link: "/environment/environment",
            },
            { label: "What is Tilt?", link: "/environment/tilt/what" },
            { label: "Setting up Tilt", link: "/environment/tilt/setup" },
            { label: "Resolving Errors", link: "/environment/tilt/errors" },
          ],
        },
        {
          label: "Creating a Token Bridge",
          items: [
            { label: "Token Bridges", link: "/wh-connect/bridges" },
            {
              label: "Initialise the Bridge App",
              link: "/wh-connect/initialise",
            },
            {
              label: "Integrating Wormhole Connect",
              link: "/wh-connect/integrate",
            },
            { label: "Bridging Tokens", link: "/wh-connect/bridging" },
            { label: "Customising the Bridge", link: "/wh-connect/customise" },
          ],
        },
        {
          label: "Cross Chain Mailbox",
          items: [
            { label: "Introduction", link: "/automatic-relayers/intro" },
            {
              label: "Working of Automatic Relayers", link: "/automatic-relayers/working",
            },
            {
              label: "Initializing the Project", link: "/automatic-relayers/init",
            },
          ],
        },
      ],
    }),
  ],
});
