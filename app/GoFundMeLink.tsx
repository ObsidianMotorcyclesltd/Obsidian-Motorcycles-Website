const GOFUNDME_URL="https://www.gofundme.com/f/help-build-obsidian-motorcycles-a-workshop-built-by-bikers?attribution_id=sl:4500f5c8-98a5-4677-a3d9-82c735a0e1e1&lang=en_GB&ts=1786726251&utm_campaign=fp_below_fold&utm_content=amp30-treatment-4&utm_medium=customer&utm_source=copy_link";

export default function GoFundMeLink(){return <a className="gofundme-link" href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer" aria-label="Support the Obsidian Motorcycles workshop campaign on GoFundMe">
  <span className="gofundme-logo" aria-hidden="true"><i>✦</i><strong>gofundme</strong></span>
  <span className="gofundme-copy"><strong>Help build the Obsidian workshop</strong><small>Support our GoFundMe campaign →</small></span>
</a>}
