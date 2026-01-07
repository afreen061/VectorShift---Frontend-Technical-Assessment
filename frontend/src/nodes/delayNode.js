import BaseNode from './baseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={[{ id: `${id}-input`, label: 'input' }]}
      outputs={[{ id: `${id}-output`, label: 'output' }]}
      color="bg-indigo-50"
    >
      <label className="block">
        <span className="text-sm font-medium">Delay (ms):</span>
        <input
          type="number"
          defaultValue="1000"
          className="mt-1 w-full px-3 py-2 border rounded nodrag"
        />
      </label>
    </BaseNode>
  );
};