---
sidebar_position: 1
---

# Welcome to DataStage Anywhere

DataStage Anywhere enables you to deploy IBM DataStage Remote Engines on Kubernetes clusters, providing flexible data integration capabilities across hybrid and multi-cloud environments.

## What is DataStage Anywhere?

DataStage Anywhere extends IBM Cloud Pak for Data's DataStage capabilities by allowing you to run data integration workloads on remote Kubernetes clusters. This architecture provides:

- **Flexibility**: Deploy engines where your data resides
- **Scalability**: Leverage Kubernetes for dynamic resource allocation
- **Security**: Keep sensitive data within your network boundaries
- **Performance**: Reduce data movement by processing data locally

## Key Capabilities

### Remote Engine Deployment
Deploy DataStage engines on any Kubernetes cluster, including:
- Red Hat OpenShift
- Amazon EKS
- Azure AKS
- Google GKE
- On-premises Kubernetes

### Centralized Management
Manage all your remote engines from a single Cloud Pak for Data control plane:
- Monitor engine health and performance
- Deploy and update jobs remotely
- Track job execution across all engines
- Centralized logging and auditing

### Enterprise Integration
Connect to diverse data sources and targets:
- Cloud databases and data warehouses
- On-premises databases
- File systems and object storage
- SaaS applications
- Streaming data sources

## Getting Started

Ready to deploy your first remote engine? Follow our step-by-step tutorial:

**[Get Started with DataStage Anywhere →](/docs/tutorials/get-started)**

The tutorial covers:
1. Installing prerequisites
2. Deploying a remote engine
3. Connecting to Cloud Pak for Data
4. Running your first job
5. Monitoring and troubleshooting

## Architecture Overview

DataStage Anywhere uses a hub-and-spoke architecture:

- **Control Plane**: Cloud Pak for Data instance managing metadata, job definitions, and orchestration
- **Remote Engines**: Kubernetes-based execution environments running DataStage jobs
- **Secure Communication**: TLS-encrypted connections between control plane and engines

## Documentation Structure

- **Tutorials**: Step-by-step guides for common tasks
- **How-To Guides**: Task-oriented instructions
- **Reference**: Technical specifications and API documentation
- **Concepts**: Understanding DataStage Anywhere architecture

## Support and Resources

- [IBM DataStage Documentation](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=services-datastage)
- [Cloud Pak for Data Documentation](https://www.ibm.com/docs/en/cloud-paks/cp-data)
- [IBM Support](https://www.ibm.com/support)

## Next Steps

Begin your DataStage Anywhere journey:

1. Review the [prerequisites](/docs/tutorials/get-started/install-prerequisites)
2. Follow the [deployment guide](/docs/tutorials/get-started/deploy-engine)
3. Explore advanced configuration options
