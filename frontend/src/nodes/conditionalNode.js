import BaseNode from './baseNode';

export const ConditionalNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="If/Else"
      inputs={[{ id: `${id}-condition`, label: 'condition' }]}
      outputs={[
        { id: `${id}-true`, label: 'true' },
        { id: `${id}-false`, label: 'false' }
      ]}
      color="bg-orange-50"
    >
      <p className="text-sm text-gray-600">Branch based on condition</p>
      <input
        className="mt-2 w-full px-3 py-2 border rounded nodrag"
        placeholder="Condition (e.g. value > 10)"
      />
    </BaseNode>
  );
};