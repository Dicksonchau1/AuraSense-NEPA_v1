import type { ArchitectureNode } from '../../types/content';

interface ArchitecturePipelineProps {
  nodes: ArchitectureNode[];
  title?: string;
}

export function ArchitecturePipeline({ nodes, title }: ArchitecturePipelineProps) {
  const nodeStyles: Record<string, string> = {
    input: 'border-accent-primary/40 bg-accent-primary/5',
    process: 'border-border-active bg-bg-elevated',
    core: 'border-accent-primary bg-accent-primary/10 ring-1 ring-accent-primary/20',
    output: 'border-accent-secondary/40 bg-accent-secondary/5',
    monitor: 'border-accent-amber/40 bg-accent-amber/5',
  };

  return (
    <div className="bg-bg-surface border border-border-default rounded-sm p-6 md:p-8">
      {title && (
        <h3 className="text-xs font-mono font-medium tracking-widest uppercase text-text-muted mb-6">
          {title}
        </h3>
      )}
      <div className="flex flex-col md:flex-row items-stretch gap-0">
        {nodes.map((node, idx) => (
          <div key={node.id} className="flex flex-col md:flex-row items-center flex-1">
            {/* Node */}
            <div className={`flex flex-col items-center justify-center p-4 border rounded-sm w-full md:min-w-[140px] ${nodeStyles[node.type] || nodeStyles.process}`}>
              <span className="text-sm font-medium text-text-primary text-center leading-tight">
                {node.label}
              </span>
              {node.annotations && node.annotations.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1 justify-center">
                  {node.annotations.map((ann) => (
                    <span key={ann} className="text-[10px] font-mono text-text-muted bg-bg-primary/50 px-1.5 py-0.5 rounded-sm">
                      {ann}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* Connector */}
            {idx < nodes.length - 1 && (
              <div className="flex items-center justify-center py-2 md:py-0 md:px-2">
                <div className="hidden md:block w-8 h-px bg-border-active relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-border-active border-y-[3px] border-y-transparent" />
                </div>
                <div className="md:hidden h-6 w-px bg-border-active relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-t-[5px] border-t-border-active border-x-[3px] border-x-transparent" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
