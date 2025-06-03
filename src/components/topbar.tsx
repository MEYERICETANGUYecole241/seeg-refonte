// components/topbar.tsx
export default function Topbar() {
  return (
    <div className="bg-[#004225] text-white text-sm py-1 px-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <span>📞 +241 01 76 00 00</span>
        <span>📧 contact@seeg.ga</span>
        <span>🕘 Lun - Ven: 8h - 16h</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="hidden sm:inline">Langue :</span>
        <select
          className="bg-transparent border border-white text-white px-2 py-0.5 text-sm rounded"
          defaultValue="fr"
          onChange={(e) => {
            
            // à connecter à ton système i18n plus tard
            alert(`Langue changée vers : ${e.target.value}`);
          }}
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
}
