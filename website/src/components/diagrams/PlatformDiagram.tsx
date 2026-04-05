export function PlatformDiagram() {
  return (
    <div className="bg-bg-surface border border-border-default rounded-sm p-6 md:p-8">
      <h3 className="text-xs font-mono font-medium tracking-widest uppercase text-text-muted mb-6">
        Platform Architecture
      </h3>
      
      {/* NEPA Platform box */}
      <div className="border border-accent-primary/30 rounded-sm p-6 bg-accent-primary/5">
        <div className="text-center mb-6">
          <span className="text-xs font-mono tracking-widest uppercase text-accent-primary">NEPA Platform</span>
          <p className="text-sm text-text-muted mt-1">Deterministic Neuromorphic Edge Runtime</p>
        </div>
        
        {/* Product modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-border-active rounded-sm p-4 bg-bg-primary/50 text-center">
            <div className="text-sm font-medium text-text-primary mb-1">SFSVC</div>
            <div className="text-xs text-text-muted">Compression & Perception SDK</div>
          </div>
          <div className="border border-border-active rounded-sm p-4 bg-bg-primary/50 text-center">
            <div className="text-sm font-medium text-text-primary mb-1">NERMN</div>
            <div className="text-xs text-text-muted">Robotic Navigation Module</div>
          </div>
          <div className="border border-border-active rounded-sm p-4 bg-bg-primary/50 text-center">
            <div className="text-sm font-medium text-text-primary mb-1">NSSIM</div>
            <div className="text-xs text-text-muted">Surveillance Intelligence Module</div>
          </div>
        </div>
      </div>

      {/* Infrastructure layers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {[
          'Deterministic Execution',
          'Replay Verification',
          'Audit Chain',
          'Edge Deployment',
        ].map((layer) => (
          <div key={layer} className="border border-border-default rounded-sm p-3 bg-bg-primary/30 text-center">
            <span className="text-xs text-text-muted">{layer}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
