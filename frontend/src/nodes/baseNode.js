import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, title = "Node", children, inputs = [], outputs = [], color = "bg-white", type }) => {
  return (
    <div className={`node-${type} bg-white border border-gray-300 rounded-xl overflow-hidden shadow-md min-w-72`}>
      <div className="font-bold text-lg p-4 text-white">
        {title}
      </div>
      <div className="p-5 space-y-5">
        {children}
      </div>

      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${50 + index * 50}px`, background: '#1a73e8' }}
          className="w-5 h-5 border-4 border-white"
        >
          <div className="absolute left-[-160px] top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-md shadow-md text-sm font-medium text-gray-700 border border-gray-200 whitespace-nowrap">
            {input.label}
          </div>
        </Handle>
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${50 + index * 50}px`, background: '#34a853' }}
          className="w-5 h-5 border-4 border-white"
        >
          <div className="absolute right-[-160px] top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-md shadow-md text-sm font-medium text-gray-700 border border-gray-200 whitespace-nowrap">
            {output.label}
          </div>
        </Handle>
      ))}
    </div>
  );
};

export default BaseNode;