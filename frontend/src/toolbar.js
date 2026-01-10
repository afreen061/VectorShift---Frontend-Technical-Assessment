import { DraggableNode } from './draggableNode';
import { useState } from 'react';

export const PipelineToolbar = () => {
  const [search, setSearch] = useState('');

  const nodesList = [
    { type: 'customInput', label: 'Input' },
    { type: 'llm', label: 'LLM' },
    { type: 'customOutput', label: 'Output' },
    { type: 'text', label: 'Text' },
    { type: 'math', label: 'Math' },
    { type: 'conditional', label: 'If/Else' },
    { type: 'delay', label: 'Delay' },
    { type: 'merge', label: 'Merge' },
    { type: 'random', label: 'Random' },
  ];

  const filtered = nodesList.filter(n => 
    n.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '16px 24px', background: 'white', borderBottom: '1px solid #dadce0' }}>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search nodes (e.g. Math, Delay)..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '12px 16px',
          border: '1px solid #dadce0',
          borderRadius: '8px',
          fontSize: '16px',
          marginBottom: '16px',
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {filtered.map(node => (
          <DraggableNode key={node.type} type={node.type} label={node.label} />
        ))}
      </div>
    </div>
  );
};