import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges })
      });
      const result = await response.json();
      alert(
        `Pipeline Analysis:\n\n` +
        `Nodes: ${result.num_nodes}\n` +
        `Edges: ${result.num_edges}\n` +
        `Is valid DAG: ${result.is_dag ? 'Yes ✓' : 'No ✗ (has cycle)'}\n\n` +
        `${result.is_dag ? 'Pipeline is ready!' : 'Fix cycles to make it valid.'}`
      );
    } catch (err) {
      alert('Backend not running or error: ' + err.message);
    }
  };

  return (
    <div className="flex justify-center my-12">
      <button onClick={handleSubmit} className="submit-btn">
        Submit Pipeline
      </button>
    </div>
  );
};