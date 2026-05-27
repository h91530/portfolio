'use client';

import { useState } from 'react';
import '../styles/folder.css';

interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  date: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: '2fitreport',
    description: '피트니스 리포트 생성 플랫폼',
    tags: ['React', 'Node.js', 'MySQL'],
    date: '2026-02 ~ 2026-05',
  },
  {
    id: '2',
    name: 'Shoem Website',
    description: '신발 쇼핑 웹사이트',
    tags: ['Next.js', 'PHP', 'Supabase'],
    date: '2024-03 ~ 2026-02',
  },
  {
    id: '3',
    name: 'Portfolio Website',
    description: 'Windows 11 테마 포트폴리오',
    tags: ['Next.js', 'React', 'CSS'],
    date: '2026-05',
  },
];

export default function FolderContent() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="project-folder">
      {/* Header */}
      <div className="project-header">
        <h2>프로젝트</h2>
        <p className="project-count">{projects.length}개의 프로젝트</p>
      </div>

      {/* Project List */}
      <div className="project-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${expandedId === project.id ? 'expanded' : ''}`}
            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
          >
            <div className="project-card-header">
              <div className="project-icon">📁</div>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-date">{project.date}</p>
              </div>
              <div className="project-arrow">
                {expandedId === project.id ? '▼' : '▶'}
              </div>
            </div>

            {expandedId === project.id && (
              <div className="project-card-content">
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
