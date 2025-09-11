---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/images/Venky1.png',
    name: 'Venkatraman Mahadevan',
    title: 'Co-founder',
    desc: "Venky essayed the role of Architect for several Supply Chain Execution products while at Yantra/Sterling Commerce/IBM. He is a strong advocate of decentralized and open systems that democratises digital commerce at its core. He volunteers with FIDE(Foundation for interoperability in digital economy) in the evolution of Beckn Protocol, which powers India's ONDC Network. Venky is an active contributor in the creation of reference implementations for several Infrastructural components needed in the Beckn Ecosystem. When not authoring/ improving his own web - frameworks to help developers at - large, Venky mentors and coaches software engineers in several organizations.Venky has a MSc Statistics degree from IIT Kanpur.",
    links: [
      { icon: 'github', link: 'https://github.com/venkatramanm' },
      { icon: 'twitter', link: 'https://twitter.com/venkatramanm' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/venky-mahadevan-6060952' },
    ]
  },
  {
    avatar: '/images/Amar1.png',
    name: 'Amarnath Kalale',
    title: 'Co-founder',
    desc: "Prior to founding Bizlocal, Amar was co founder of shipx and Yantra solutions, a Boston based supply chain solution provider.Amar has more than 30 years of experience in providing technology solutions for logistics and supply chain problems.Amar has a Bachelor's degree in Engineering and a Masters in Computer Science.Amar is acknowledged in the Industry for providing meaningful, implementable and functionally complete solutions and is a firm believer that solutions to problems need to be simple, and are often simple",
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amarnath-kalale-1910244' },
    ]
  },    

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Builders of several supply chain solutions together and separately have come together to create HumBhiOnline, an open network on Beckn protocol.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>