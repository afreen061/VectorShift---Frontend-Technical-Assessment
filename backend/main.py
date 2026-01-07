from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI()

# Add CORS middleware to allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3002"],  # Allow your React app
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (POST, GET, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(data: dict):
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])

    G = nx.DiGraph()
    for node in nodes:
        G.add_node(node['id'])
    for edge in edges:
        G.add_edge(edge['source'], edge['target'])

    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag
    }