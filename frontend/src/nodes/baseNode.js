import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, title = "Node", children, inputs = [], outputs = [], color = "bg-white" }) => {
  return (
    <div className={`${color} border border-gray-300 rounded-xl p-5 shadow-md min-w-60`}>
      <div className="font-bold text-lg mb-3 text-gray-800">{title}</div>
      <div className="space-y-3">{children}</div>

      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${30 + index * 40}px` }}
          className="w-3 h-3 bg-blue-500"
        >
          <div className="absolute left-[-80px] text-xs text-gray-600">{input.label}</div>
        </Handle>
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${30 + index * 40}px` }}
          className="w-3 h-3 bg-green-500"
        >
          <div className="absolute right-[-80px] text-xs text-gray-600">{output.label}</div>
        </Handle>
      ))}
    </div>
  );
};

export default BaseNode;