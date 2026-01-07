import BaseNode from "./baseNode";

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Input"
      inputs={[]}
      outputs={[{ id: `${id}-value`, label: data.inputName || 'value' }]}
      color="bg-blue-50"
    >
      <label className="block">
        <span className="font-medium">Name:</span>
        <input className="mt-1 border rounded px-3 py-2 w-full nodrag" defaultValue={data.inputName || ''} />
      </label>
      <label className="block mt-3">
        <span className="font-medium">Type:</span>
        <select className="mt-1 border rounded px-3 py-2 w-full nodrag">
          <option>Text</option>
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
};