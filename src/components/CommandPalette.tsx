import React, { useState, useEffect, useRef } from 'react';
import { Search, FolderGit2, Briefcase, Code, GraduationCap, Award, Mail, ExternalLink, Moon, Sun, ArrowRight } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  isLight: boolean;
  setIsLight: (val: boolean) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  isLight,
  setIsLight,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = [
    { label: 'About', sectionId: 'about', category: 'Navigation', icon: Code },
    { label: 'Projects', sectionId: 'projects', category: 'Navigation', icon: FolderGit2 },
    { label: 'Work Experience', sectionId: 'experience', category: 'Navigation', icon: Briefcase },
    { label: 'Tech Stack', sectionId: 'skills', category: 'Navigation', icon: Code },
    { label: 'GitHub Activity', sectionId: 'github-activity', category: 'Navigation', icon: FolderGit2 },
    { label: 'Education', sectionId: 'education', category: 'Navigation', icon: GraduationCap },
    { label: 'Certifications', sectionId: 'certifications', category: 'Navigation', icon: Award },
    { label: 'Contact', sectionId: 'contact', category: 'Navigation', icon: Mail },
    { label: 'NLP Resume Scoring System', sectionId: 'projects', category: 'Project', icon: FolderGit2 },
    { label: 'Pollify - Realtime Polling', sectionId: 'projects', category: 'Project', icon: FolderGit2 },
    { label: 'Resonology AI - Concept', sectionId: 'projects', category: 'Project', icon: FolderGit2 },
    { label: 'GitHub Profile (@Vishal795-knightrider)', href: 'https://github.com/Vishal795-knightrider', category: 'External', icon: ExternalLink },
    { label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/vishal-kashyap-aa8b43328/', category: 'External', icon: ExternalLink },
    { label: 'Twitter / X Profile', href: 'https://x.com/VishalxKodes', category: 'External', icon: ExternalLink },
    { label: 'Send Email (vk3293801@gmail.com)', href: 'mailto:vk3293801@gmail.com', category: 'Action', icon: Mail },
    { label: isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode', action: 'toggleTheme', category: 'Theme', icon: isLight ? Moon : Sun },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          handleSelect(filtered[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  const handleSelect = (item: typeof items[0]) => {
    if (item.action === 'toggleTheme') {
      setIsLight(!isLight);
    } else if (item.href) {
      window.open(item.href, '_blank');
    } else if (item.sectionId) {
      const el = document.getElementById(item.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cmd-backdrop" onClick={onClose}>
      <div className="cmd-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-header">
          <Search size={18} className="cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button className="cmd-close" onClick={onClose} aria-label="Close command palette">
            <kbd>ESC</kbd>
          </button>
        </div>

        <div className="cmd-results">
          {filtered.length === 0 ? (
            <div className="cmd-empty">No results found for "{query}"</div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={idx}
                  className={`cmd-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="cmd-item-left">
                    <span className="cmd-icon-box">
                      <Icon size={15} />
                    </span>
                    <span className="cmd-item-title">{item.label}</span>
                  </div>
                  <div className="cmd-item-right">
                    <span className="cmd-item-badge">{item.category}</span>
                    <ArrowRight size={13} className="cmd-item-arrow" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="cmd-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span><kbd>↵</kbd> to select</span>
          <span><kbd>esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
