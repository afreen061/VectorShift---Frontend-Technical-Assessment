import { useState, useEffect, useRef } from 'react';
import BaseNode from './baseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || 'Hello {{name}}!\nWelcome {{user}}. Today is {{day}}.');
  const textareaRef = useRef(null);
  const updateNodeField = useStore(state => state.updateNodeField);

  // Extract unique variables from {{variable}}
  const getVariables = (txt) => {
    const matches = txt.match(/{{(.*?)}}/g) || [];
    const unique = [...new Set(matches.map(m => m.slice(2, -2).trim()))];
    return unique.map(varName => ({
      id: `${id}-${varName}`,
      label: varName
    }));
  };

  const inputHandles = getVariables(text);

  // Auto-resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateNodeField(id, 'text', newText);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={inputHandles}
      outputs={[{ id: `${id}-output`, label: 'output' }]}
      color="bg-green-50"
    >
      <label className="block">
        <span className="font-medium text-gray-700">Text Template:</span>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg resize-none nodrag focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={1}
          placeholder="Use {{variable}} to create inputs"
        />
      </label>
      <p className="text-xs text-gray-500 mt-2">
        Variables: {inputHandles.map(h => h.label).join(', ') || 'none'}
      </p>
    </BaseNode>
  );
};