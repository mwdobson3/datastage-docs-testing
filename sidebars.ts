import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'tutorials',
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'AWS EKS (Kubernetes)',
          link: {
            type: 'doc',
            id: 'tutorials/aws-eks-kubernetes',
          },
          items: [
            'tutorials/aws-eks-kubernetes/prerequisites',
            'tutorials/aws-eks-kubernetes/provision-eks',
            'tutorials/aws-eks-kubernetes/configure-kubectl',
            'tutorials/aws-eks-kubernetes/prepare-config',
            'tutorials/aws-eks-kubernetes/deploy-engine',
            'tutorials/aws-eks-kubernetes/monitor-verify',
          ],
        },
        {
          type: 'category',
          label: 'AWS EC2 (Docker)',
          link: {
            type: 'doc',
            id: 'tutorials/aws-docker-engine',
          },
          items: [
            'tutorials/aws-docker-engine/prerequisites',
            'tutorials/aws-docker-engine/launch-ec2',
            'tutorials/aws-docker-engine/install-docker',
            'tutorials/aws-docker-engine/generate-keys',
            'tutorials/aws-docker-engine/deploy-engine',
            'tutorials/aws-docker-engine/verify-configure',
          ],
        },
      ],
    },
  ],
};

export default sidebars;

// Made with Bob
