import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          DataStage as a Service Anywhere
        </Heading>
        <p className={styles.heroSubtitle}>
          Execute data pipelines as close to your data as possible
        </p>
        <p className={styles.heroDescription}>
          Deploy containerized DataStage engines on any infrastructure—AWS, Azure, Google Cloud, 
          or on-premises—while maintaining centralized design and management through IBM Cloud Pak for Data.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/tutorials">
            Get Started →
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/intro"
            style={{marginLeft: '1rem'}}>
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

function ArchitectureDiagram() {
  return (
    <section className={styles.architectureSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Architecture Overview
        </Heading>
        <div className={styles.architectureContainer}>
          <img 
            src="/datastage-docs-testing/img/datastage-anywhere-architecture.png" 
            alt="DataStage as a Service Anywhere Architecture" 
            className={styles.architectureImage}
          />
        </div>
        <div className={styles.architectureDescription}>
          <p>
            DataStage Anywhere enables you to run data integration workloads where your data resides, 
            reducing data movement costs and improving performance while maintaining full data privacy and sovereignty.
          </p>
        </div>
      </div>
    </section>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <Heading as="h3">Retain Full Data Privacy</Heading>
              <p>
                Data never leaves your environment. Process sensitive information within your security perimeter.
              </p>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <Heading as="h3">Reduce Egress/Ingress Costs</Heading>
              <p>
                Avoid unnecessary data movement costs by processing data where it lives.
              </p>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <Heading as="h3">Improved Performance</Heading>
              <p>
                Minimize latency by executing transformations close to your data sources.
              </p>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌍</div>
              <Heading as="h3">Retain Data Sovereignty</Heading>
              <p>
                Comply with data locality regulations by keeping data in specific regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeploymentOptions() {
  return (
    <section className={styles.deploymentSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Flexible Deployment Options
        </Heading>
        <div className="row">
          <div className="col col--6">
            <div className={styles.deploymentCard}>
              <Heading as="h3">🐳 Docker</Heading>
              <p>Quick setup for development and testing environments</p>
              <ul>
                <li>Single-server deployment</li>
                <li>Minimal infrastructure requirements</li>
                <li>Cost-effective for smaller workloads</li>
                <li>Easy management and maintenance</li>
              </ul>
              <Link
                className="button button--primary"
                to="/docs/tutorials/aws-docker-engine">
                View Docker Tutorial
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.deploymentCard}>
              <Heading as="h3">☸️ Kubernetes</Heading>
              <p>Enterprise-grade orchestration for production workloads</p>
              <ul>
                <li>High availability and auto-scaling</li>
                <li>Multi-tenancy support</li>
                <li>Enterprise security features</li>
                <li>Optimal resource utilization</li>
              </ul>
              <Link
                className="button button--primary"
                to="/docs/tutorials/aws-eks-kubernetes">
                View Kubernetes Tutorial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Deploy IBM DataStage Remote Engines anywhere - Execute data pipelines as close to your data as possible">
      <HomepageHeader />
      <main>
        <ArchitectureDiagram />
        <HomepageFeatures />
        <DeploymentOptions />
      </main>
    </Layout>
  );
}

// Made with Bob
