import { useEffect, useState } from 'react';

type Detail = { title: string; summary: string; built: string; patterns: string[]; outcome: string };

const details: Record<string, Detail> = {
  'node-snowflake': { title: 'Snowflake', summary: 'I design analytics-ready transformations that move source data toward reliable reporting models.', built: 'I worked with staged-to-mart transformations that make the path from raw source data to analytical consumption explicit.', patterns: ['Layered staging and mart models', 'Incremental processing where appropriate', 'SQL performance investigation'], outcome: 'Clearer, more dependable data sets for downstream analysis.' },
  'node-dbt': { title: 'dbt', summary: 'I shape transformation work around readable, maintainable model layers.', built: 'I used dbt-style model layering to organize transformations from preparation through curated analytical tables.', patterns: ['Modular SQL transformations', 'Staging-to-mart flow', 'Incremental model patterns'], outcome: 'A more legible transformation workflow that supports analytical use.' },
  'node-databricks': { title: 'Databricks', summary: 'I use distributed processing for telemetry-style data pipelines.', built: 'I worked on Databricks and PySpark pipelines for transforming IoT-style telemetry into useful downstream data sets.', patterns: ['ETL pipelines', 'PySpark transformations', 'Telemetry event processing', 'Notebook-driven pipeline work'], outcome: 'High-volume events shaped into data that is easier to use downstream.' },
  'node-azure': { title: 'Azure IaC', summary: 'I approach cloud foundations with repeatability and operational clarity in mind.', built: 'I applied infrastructure-as-code practices in Azure-oriented cloud data work to make environments and delivery more reproducible.', patterns: ['Infrastructure as code', 'Cloud data platform foundations', 'Environment-aware delivery'], outcome: 'More consistent foundations for data platform work.' },
  'node-sql': { title: 'SQL', summary: 'SQL is the connective language across my backend foundations and analytical modeling.', built: 'I used SQL across relational data work, transformation modeling, performance troubleshooting, and application-facing data access.', patterns: ['Relational modeling', 'Analytical transformations', 'Query troubleshooting'], outcome: 'Queries shaped for both practical application needs and analytical clarity.' },
  'node-api': { title: 'APIs / Kafka', summary: 'I build backend services around clear data contracts, access control, and asynchronous movement.', built: 'I built FastAPI and MongoDB services alongside Kafka-backed caching and authorization controls; I also worked with PostgreSQL, GraphQL, and RabbitMQ applications.', patterns: ['Service-oriented API design', 'Kafka-backed caching', 'Authorization and messaging'], outcome: 'Software systems with clearer boundaries around how data is accessed and moved.' },
};

export function TechMapInteractions() {
  const [active, setActive] = useState<Detail | null>(null);

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    Object.entries(details).forEach(([className, detail]) => {
      document.querySelectorAll<HTMLElement>(`.${className}`).forEach((node) => {
        node.classList.add('has-detail');
        node.tabIndex = 0;
        node.setAttribute('role', 'button');
        node.setAttribute('aria-label', `Open ${detail.title} details`);
        const open = () => setActive(detail);
        const onKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
        };
        node.addEventListener('click', open);
        node.addEventListener('keydown', onKeyDown);
        cleanups.push(() => { node.removeEventListener('click', open); node.removeEventListener('keydown', onKeyDown); });
      });
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setActive(null); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  if (!active) return null;
  return <div className="github-modal-backdrop" role="presentation" onMouseDown={() => setActive(null)}>
    <section className="github-tech-dialog" role="dialog" aria-modal="true" aria-labelledby="technology-title" onMouseDown={(event) => event.stopPropagation()}>
      <button className="github-modal-close" type="button" onClick={() => setActive(null)} aria-label="Close technology details">×</button>
      <p className="dialog-eyebrow">Technology detail</p>
      <h2 id="technology-title">{active.title}</h2>
      <p className="dialog-summary">{active.summary}</p>
      <div className="dialog-grid"><section><h3>What I built</h3><p>{active.built}</p></section><section><h3>Work patterns</h3><ul>{active.patterns.map((pattern) => <li key={pattern}>{pattern}</li>)}</ul></section></div>
      <div className="dialog-outcome"><span>Why it matters</span><p>{active.outcome}</p></div>
      <p className="dialog-close-cue">Press Escape, click outside, or use the close button to return to the map.</p>
    </section>
  </div>;
}
