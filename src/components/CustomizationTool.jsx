// src/components/CustomizationTool.jsx
import React, { useState } from 'react';

// Helper to determine if a hex color is "dark" or "light"
function isColorDark(hex) {
  if (!hex || !hex.startsWith('#') || hex.length < 7) return false;
  const color = hex.slice(1); // remove '#'
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  // YIQ formula
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 128; // returns true if color is relatively dark
}

export default function CustomizationTool() {
  const [fabric, setFabric] = useState('');
  const [color, setColor] = useState('');
  const [colorName, setColorName] = useState('');
  const [design, setDesign] = useState('');
  const [stitch, setStitch] = useState('');

  // Predefined color options
  const colorOptions = [
    { label: 'Red', value: '#FF0000' },
    { label: 'Green', value: '#00FF00' },
    { label: 'Blue', value: '#0000FF' },
    { label: 'Black', value: '#000000' },
    { label: 'White', value: '#FFFFFF' },
  ];

  // Handle color picking from swatch or manual input
  const handleColorPick = (value, label = null) => {
    setColor(value);
    if (label) {
      // Picked from a predefined swatch
      setColorName(label);
    } else {
      // Manual color input: check if it matches a known swatch
      const found = colorOptions.find(
        (c) => c.value.toLowerCase() === value.toLowerCase()
      );
      setColorName(found ? found.label : 'Custom');
    }
  };

  // Quick reset to clear all selections
  const handleReset = () => {
    setFabric('');
    setColor('');
    setColorName('');
    setDesign('');
    setStitch('');
  };

  // Determine text color for the preview box
  const darkText = isColorDark(color) ? 'text-white' : 'text-black';
  const previewColor = color || '#fff';

  return (
    <div
      className="
        shadow rounded-lg p-6
        bg-gradient-to-br from-gray-100 to-gray-200
        dark:from-gray-800 dark:to-gray-900
        transition-colors duration-300
      "
    >
      {/* Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fabric */}
        <div>
          <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">
            Choose Your Fabric
          </h3>
          <select
            value={fabric}
            onChange={(e) => setFabric(e.target.value)}
            className="
              w-full border rounded p-2
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary
              dark:bg-gray-700 dark:border-gray-600
              dark:text-gray-100
            "
          >
            <option value="">Select Fabric</option>
            <option value="Silk">Silk</option>
            <option value="Cotton">Cotton</option>
            <option value="Lawn">Lawn</option>
            <option value="Chiffon">Chiffon</option>
          </select>
        </div>

        {/* Color */}
        <div>
          <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">
            Choose Your Color
          </h3>

          {/* Predefined Color Swatches */}
          <div className="flex items-center flex-wrap gap-2 mb-2">
            {colorOptions.map((col) => (
              <div
                key={col.value}
                onClick={() => handleColorPick(col.value, col.label)}
                style={{ backgroundColor: col.value }}
                title={col.label}
                className="
                  w-8 h-8 cursor-pointer border-2 border-transparent
                  hover:border-primary
                  transition-colors duration-200
                "
              />
            ))}
          </div>

          {/* Manual Color Picker */}
          <div className="flex items-center">
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorPick(e.target.value)}
              className="
                border rounded h-10 w-full max-w-[80px]
                transition-colors duration-200 focus:outline-none
                focus:ring-2 focus:ring-primary
                dark:bg-gray-700 dark:border-gray-600
              "
            />
            {/* Small circle preview next to the color picker */}
            <div
              className="ml-2 border rounded-full w-8 h-8"
              style={{ backgroundColor: previewColor }}
            />
          </div>
        </div>

        {/* Design */}
        <div>
          <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">
            Choose Your Design
          </h3>
          <select
            value={design}
            onChange={(e) => setDesign(e.target.value)}
            className="
              w-full border rounded p-2
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary
              dark:bg-gray-700 dark:border-gray-600
              dark:text-gray-100
            "
          >
            <option value="">Select Design</option>
            <option value="Embroidery">Embroidery</option>
            <option value="Patterns">Patterns</option>
            <option value="Printed">Printed</option>
          </select>
        </div>

        {/* Stitch */}
        <div>
          <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">
            Stitching Option
          </h3>
          <select
            value={stitch}
            onChange={(e) => setStitch(e.target.value)}
            className="
              w-full border rounded p-2
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary
              dark:bg-gray-700 dark:border-gray-600
              dark:text-gray-100
            "
          >
            <option value="">Select Option</option>
            <option value="Stitched">Stitched</option>
            <option value="Unstitched">Unstitched</option>
          </select>
        </div>
      </div>

      {/* Live Preview */}
      <div
        className="
          mt-6 p-4 border rounded
          bg-gray-50 dark:bg-gray-700
          dark:border-gray-600
          transition-colors duration-200
        "
      >
        <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-100">
          Live Preview
        </h4>
        <div className="flex items-center space-x-4">
          {/* Mock Suit (or color swatch) */}
          <div
            className={`w-24 h-32 border relative flex items-center justify-center ${darkText}`}
            style={{ backgroundColor: previewColor }}
          >
            {/* Fabric overlay text */}
            <span className="text-lg font-semibold">
              {fabric || 'N/A'}
            </span>
          </div>

          {/* Textual Info */}
          <div className="text-sm leading-6 text-gray-800 dark:text-gray-100">
            <p>
              <strong>Fabric:</strong> {fabric || 'N/A'}
            </p>
            <p>
              <strong>Color:</strong>{' '}
              {colorName
                ? `${colorName} (${color || 'N/A'})`
                : color
                ? `Custom (${color})`
                : 'N/A'}
            </p>
            <p>
              <strong>Design:</strong> {design || 'N/A'}
            </p>
            <p>
              <strong>Stitching:</strong> {stitch || 'N/A'}
            </p>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleReset}
          className="
            bg-secondary text-black py-2 px-4 rounded
            hover:bg-accent hover:text-white
            transition-colors duration-300
          "
        >
          Reset
        </button>
      </div>
    </div>
  );
}
