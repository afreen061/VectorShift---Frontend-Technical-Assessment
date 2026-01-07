import BaseNode from './baseNode';

export const RandomNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Random"
      inputs={[]}
      outputs={[{ id: `${id}-random`, label: 'random value' }]}
      color="bg-pink-50"
    >
      <p className="text-sm text-gray-600">Generates random value</p>
      <div className="mt-2">
        <label className="block text-xs">Min: <input className="w-20 px-2 py-1 border rounded nodrag" defaultValue="0" /></label>
        <label className="block text-xs">Max: <input className="w-20 px-2 py-1 border rounded nodrag" defaultValue="100" /></label>
      </div>
    </BaseNode>
  );
};