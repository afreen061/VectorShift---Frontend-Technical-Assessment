import BaseNode from './baseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={[
        { id: `${id}-a`, label: 'A' },
        { id: `${id}-b`, label: 'B' }
      ]}
      outputs={[{ id: `${id}-result`, label: 'Result' }]}
      color="bg-yellow-50"
    >
      <select className="border rounded px-3 py-2 w-full nodrag">
        <option>Add</option>
        <option>Subtract</option>
        <option>Multiply</option>
        <option>Divide</option>
      </select>
    </BaseNode>
  );
};