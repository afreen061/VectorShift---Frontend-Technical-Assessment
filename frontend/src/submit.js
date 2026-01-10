import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges })
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const result = await response.json();
      alert(
        `Pipeline Analysis:\n\n` +
        `Nodes: ${result.num_nodes}\n` +
        `Edges: ${result.num_edges}\n` +
        `Is valid DAG (no cycles): ${result.is_dag ? 'Yes ✓' : 'No ✗'}\n\n` +
        `${result.is_dag ? 'Pipeline is ready!' : 'Fix cycles to make it valid.'}`
      );
    } catch (err) {
      alert('Backend not running or connection failed. Make sure backend is running on port 8000.\nError: ' + err.message);
    }
  };

  return (
    <div className="flex justify-center my-16">
      <button onClick={handleSubmit} className="submit-btn">
        Submit Pipeline
      </button>
    </div>
  );
};