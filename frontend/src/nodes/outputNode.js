import BaseNode from './baseNode';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={[{ id: `${id}-value`, label: data.outputName || 'value' }]}
      outputs={[]}
      color="bg-red-50"
    >
      <label className="block">
        <span className="font-medium">Name:</span>
        <input className="mt-1 border rounded px-3 py-2 w-full nodrag" defaultValue={data.outputName || ''} />
      </label>
      <label className="block mt-3">
        <span className="font-medium">Type:</span>
        <select className="mt-1 border rounded px-3 py-2 w-full nodrag">
          <option>Text</option>
          <option>Image</option>
        </select>
      </label>
    </BaseNode>
  );
};