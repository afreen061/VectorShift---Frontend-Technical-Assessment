import BaseNode from './baseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      inputs={[
        { id: `${id}-input1`, label: 'input 1' },
        { id: `${id}-input2`, label: 'input 2' }
      ]}
      outputs={[{ id: `${id}-output`, label: 'merged' }]}
      color="bg-teal-50"
    >
      <p className="text-sm text-gray-600">Combine multiple inputs</p>
    </BaseNode>
  );
};