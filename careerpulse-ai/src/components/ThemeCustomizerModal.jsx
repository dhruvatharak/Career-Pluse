import React from 'react';
import { X, Palette, Type, Check, RefreshCw, Sparkles, Moon, Sun } from 'lucide-react';

export default function ThemeCustomizerModal({
  isOpen,
  onClose,
  customTheme,
  setCustomTheme,
  resetCustomTheme
}) {
  if (!isOpen) return null;

  const fontOptions = [
    { name: 'Inter (Clean & Minimal)', value: 'Inter, sans-serif' },
    { name: 'Plus Jakarta Sans (Friendly & Crisp)', value: 'Plus Jakarta Sans, sans-serif' },
    { name: 'Sora (Modern & Tech)', value: 'Sora, sans-serif' },
    { name: 'Space Grotesk (Distinct Tech)', value: 'Space Grotesk, sans-serif' },
    { name: 'Outfit (Bold & Dynamic)', value: 'Outfit, sans-serif' },
    { name: 'Roboto (Classic Standard)', value: 'Roboto, sans-serif' }
  ];

  const presetBackgrounds = [
    { label: 'Soft White (Default)', color: '#F0F5F5', textColor: '#1E2933', isDark: false },
    { label: 'Warm Beige', color: '#F4EFEB', textColor: '#2F4157', isDark: false },
    { label: 'Sky Blue Accent', color: '#C7D9E5', textColor: '#2F4157', isDark: false },
    { label: 'Clean White', color: '#FFFFFF', textColor: '#1E2933', isDark: false },
    { label: 'Muted Slate', color: '#F1F5F9', textColor: '#0F172A', isDark: false },
    { label: 'Navy Dark', color: '#2F4157', textColor: '#F0F5F5', isDark: true }
  ];

  const presetAccents = [
    { label: 'Navy Blue (Default)', color: '#2F4157' },
    { label: 'Muted Teal', color: '#577C8E' },
    { label: 'Soft Sky Blue', color: '#8BA9C4' },
    { label: 'Royal Indigo', color: '#6366F1' },
    { label: 'Warm Amber', color: '#F59E0B' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 w-full max-w-xl max-h-[90vh] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Customize Fonts & Colors
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Choose your own background color, text font, and primary accent color
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* 1. Font Selector */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
              <Type className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>1. Choose Typography Font:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {fontOptions.map((font) => (
                <button
                  key={font.value}
                  onClick={() => setCustomTheme({ ...customTheme, fontFamily: font.value })}
                  style={{ fontFamily: font.value }}
                  className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                    customTheme.fontFamily === font.value
                      ? 'bg-indigo-50 dark:bg-indigo-950 border-indigo-500 text-indigo-700 dark:text-indigo-300 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  {font.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Background Color Picker */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                <Palette className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. Choose Canvas Background Color:</span>
              </label>

              {/* Custom Picker */}
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-slate-500">Custom Hex:</span>
                <input
                  type="color"
                  value={customTheme.bgColor}
                  onChange={(e) => setCustomTheme({
                    ...customTheme,
                    bgColor: e.target.value,
                    // Auto detect light/dark luminosity for high contrast text
                    isDark: isColorDark(e.target.value),
                    textColor: isColorDark(e.target.value) ? '#f8fafc' : '#0f172a'
                  })}
                  className="w-7 h-7 rounded-lg border border-slate-300 cursor-pointer p-0 overflow-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {presetBackgrounds.map((bg, idx) => (
                <button
                  key={idx}
                  onClick={() => setCustomTheme({
                    ...customTheme,
                    bgColor: bg.color,
                    textColor: bg.textColor,
                    isDark: bg.isDark
                  })}
                  className={`p-3 rounded-xl text-xs font-semibold text-center border flex items-center justify-center space-x-2 transition-all ${
                    customTheme.bgColor === bg.color
                      ? 'ring-2 ring-indigo-500 border-indigo-500 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:scale-102'
                  }`}
                  style={{ backgroundColor: bg.color, color: bg.textColor }}
                >
                  <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: bg.color }} />
                  <span className="truncate">{bg.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Primary Accent & Button Color Picker */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>3. Choose Primary Accent & Button Color:</span>
              </label>

              {/* Custom Accent Picker */}
              <div className="flex items-center space-x-2">
                <span className="text-[10px] text-slate-500">Custom Hex:</span>
                <input
                  type="color"
                  value={customTheme.accentColor}
                  onChange={(e) => setCustomTheme({ ...customTheme, accentColor: e.target.value })}
                  className="w-7 h-7 rounded-lg border border-slate-300 cursor-pointer p-0 overflow-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {presetAccents.map((acc, idx) => (
                <button
                  key={idx}
                  onClick={() => setCustomTheme({ ...customTheme, accentColor: acc.color })}
                  className={`p-2.5 rounded-xl text-xs font-semibold border flex items-center justify-center space-x-2 transition-all ${
                    customTheme.accentColor === acc.color
                      ? 'ring-2 ring-slate-900 dark:ring-white border-transparent shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: acc.color }} />
                  <span className="truncate">{acc.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <button
            onClick={resetCustomTheme}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-300 flex items-center space-x-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all"
          >
            Apply & Done
          </button>
        </div>

      </div>
    </div>
  );
}

// Utility function to determine if color is dark for contrast auto-adjust
function isColorDark(hexColor) {
  if (!hexColor || hexColor.charAt(0) !== '#') return false;
  const hex = hexColor.substring(1);
  const r = parseInt(hex.substring(0, 2), 16) || 0;
  const g = parseInt(hex.substring(2, 4), 16) || 0;
  const b = parseInt(hex.substring(4, 6), 16) || 0;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}
