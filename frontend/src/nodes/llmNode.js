import BaseNode from './baseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        { id: `${id}-system`, label: 'system' },
        { id: `${id}-prompt`, label: 'prompt' }
      ]}
      outputs={[{ id: `${id}-response`, label: 'response' }]}
      color="bg-purple-50"
    >
      <p className="text-gray-600">This is an LLM node.</p>
    </BaseNode>
  );
};