import { useState } from 'react';
const ColorSettingsModal = ({ initialColors, onSave, onClose }) => {
  const [tempColors, setTempColors] = useState(initialColors);

  const handleChangeColor = (section, colorType, color) => {
    setTempColors((prev) => ({
      ...prev,
      [section]: { ...prev[section], [colorType]: color },
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md">
        <h2>Customize Colors</h2>

        <div>
          <label>Navbar Background</label>
          <input
            type="color"
            value={tempColors.navbar.background}
            onChange={(e) => handleChangeColor('navbar', 'background', e.target.value)}
          />
        </div>

        <div>
          <label>Sidebar Background</label>
          <input
            type="color"
            value={tempColors.sidebar.background}
            onChange={(e) => handleChangeColor('sidebar', 'background', e.target.value)}
          />
        </div>

        <button onClick={() => onSave(tempColors)}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ColorSettingsModal;
