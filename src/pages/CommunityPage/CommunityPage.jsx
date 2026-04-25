import React from 'react';
import { useNavigate } from 'react-router-dom';

const BADGE_STYLES = {
  active: { dot: '#22c55e', bg: 'rgba(34,197,94,0.10)', text: '#22c55e', label: 'Active' },
  hot: { dot: '#ef4444', bg: 'rgba(239,68,68,0.10)', text: '#ef4444', label: 'Hot' },
  growing: { dot: '#f59e0b', bg: 'rgba(245,158,11,0.10)', text: '#f59e0b', label: 'Growing' },
  top: { dot: '#a78bfa', bg: 'rgba(167,139,250,0.10)', text: '#a78bfa', label: 'Top' },
};

const CARDS = [
  {
    id: 'webdev', name: 'Web Dev', icon: '🌐', iconBg: 'rgba(99,102,241,0.15)',
    desc: 'React, Node, fullstack development', members: 189, badge: 'active',
    avatars: [
      { initial: 'R', bg: '#6366f1' },
      { initial: 'P', bg: '#e11d48' },
      { initial: 'A', bg: '#22c55e' },
    ],
  },
  {
    id: 'cybersec', name: 'Cyber Security', icon: '🔒', iconBg: 'rgba(239,68,68,0.12)',
    desc: 'Ethical hacking, networks, CTFs', members: 145, badge: 'hot',
    avatars: [
      { initial: 'N', bg: '#a855f7' },
      { initial: 'V', bg: '#06b6d4' },
    ],
  },
  {
    id: 'gamedev', name: 'Game Dev', icon: '🎮', iconBg: 'rgba(245,158,11,0.12)',
    desc: 'Unity, Unreal, game design', members: 98, badge: 'growing',
    avatars: [
      { initial: 'G', bg: '#f59e0b' },
    ],
  },
  {
    id: 'devops', name: 'DevOps', icon: '⚙️', iconBg: 'rgba(239,68,68,0.12)',
    desc: 'Docker, CI/CD, cloud infra', members: 112, badge: 'active',
    avatars: [
      { initial: 'D', bg: '#ef4444' },
      { initial: 'K', bg: '#14b8a6' },
    ],
  },
  {
    id: 'dsa', name: 'DSA', icon: '🧠', iconBg: 'rgba(167,139,250,0.12)',
    desc: 'Data structures, algorithms, CP', members: 276, badge: 'top',
    avatars: [
      { initial: 'S', bg: '#8b5cf6' },
      { initial: 'T', bg: '#f97316' },
      { initial: 'M', bg: '#3b82f6' },
    ],
  },
];

/* ── tiny reusable components ── */

function Badge({ type }) {
  const s = BADGE_STYLES[type];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: s.bg, color: s.text, fontSize: 11, fontWeight: 600,
      padding: '3px 10px', borderRadius: 999, lineHeight: 1,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.dot }} />
      {s.label}
    </span>
  );
}

function AvatarStack({ avatars }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {avatars.map((a, i) => (
        <div key={i} style={{
          width: 24, height: 24, borderRadius: '50%', background: a.bg,
          border: '2px solid #1a1a1a', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff',
          marginLeft: i === 0 ? 0 : -6, position: 'relative', zIndex: avatars.length - i,
        }}>
          {a.initial}
        </div>
      ))}
    </div>
  );
}

/* ── main page ── */

export default function CommunityPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#111111', color: '#fff', fontFamily: "'Inter','Segoe UI',sans-serif" }}>

      {/* ── NAV BAR ── */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 32px', borderBottom: '1px solid #1f1f1f',
      }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', cursor: 'pointer' }}
          onClick={() => navigate('/')}>
          <span style={{ color: '#fff' }}>IIIT</span>
          <span style={{ color: '#6b8cff' }}>Learn</span>
        </div>

        <div style={{ display: 'flex', gap: 6 }}>
          {[
            { label: 'Home', path: '/' },
            { label: 'Community', path: '/community', active: true },
            { label: 'Courses', path: '/courses' },
          ].map(link => (
            <button key={link.label}
              onClick={() => navigate(link.path)}
              style={{
                background: link.active ? '#1f1f1f' : 'transparent',
                border: 'none', color: link.active ? '#fff' : '#888',
                padding: '7px 16px', borderRadius: 999, fontSize: 13,
                fontWeight: link.active ? 600 : 400, cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { if (!link.active) e.currentTarget.style.background = '#1a1a1a'; }}
              onMouseLeave={e => { if (!link.active) e.currentTarget.style.background = 'transparent'; }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px 64px' }}>

        {/* heading */}
        <h1 style={{ fontSize: 30, fontWeight: 700, marginBottom: 6 }}>Learning Communities</h1>
        <p style={{ color: '#777', fontSize: 14, marginBottom: 28, lineHeight: 1.5 }}>
          Connect with peers, share resources, and discuss lectures — all in one place.
        </p>

        {/* stats row */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
          {[
            { value: '1,200+', label: 'students' },
            { value: '6', label: 'communities' },
            { value: '48', label: 'online now' },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ color: '#333' }}>·</span>}
              <span style={{ fontSize: 13 }}>
                <span style={{ fontWeight: 700, color: '#fff' }}>{s.value}</span>{' '}
                <span style={{ color: '#777' }}>{s.label}</span>
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* ── HERO CARD (AI / ML) ── */}
        <div
          onClick={() => navigate('/community/aiml')}
          style={{
            background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 14,
            padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            cursor: 'pointer', marginBottom: 36, transition: 'border-color 0.2s', flexWrap: 'wrap', gap: 16,
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#3a3a3a'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a2a'}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12, background: 'rgba(139,92,246,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
            }}>🤖</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
                AI / ML <span style={{ fontWeight: 400, fontSize: 13, color: '#888', marginLeft: 6 }}>— Most Active</span>
              </div>
              <div style={{ fontSize: 12, color: '#777' }}>276 members · 12 online now · Last message 2 min ago</div>
            </div>
          </div>
          <button
            onClick={e => { e.stopPropagation(); navigate('/community/aiml'); }}
            style={{
              background: '#fff', color: '#111', border: 'none', padding: '9px 20px',
              borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Open chat →
          </button>
        </div>

        {/* ── SECTION LABEL ── */}
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', color: '#555',
          textTransform: 'uppercase', marginBottom: 16,
        }}>
          All Domains
        </div>

        {/* ── CARD GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {CARDS.map(card => (
            <div key={card.id}
              onClick={() => navigate('/community/' + card.id)}
              style={{
                background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 14,
                padding: 20, cursor: 'pointer', transition: 'border-color 0.2s',
                display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#3a3a3a'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a2a'}
            >
              {/* top row: icon + badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10, background: card.iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                }}>
                  {card.icon}
                </div>
                <Badge type={card.badge} />
              </div>

              {/* title + desc */}
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{card.name}</div>
              <div style={{ fontSize: 13, color: '#777', marginBottom: 18, lineHeight: 1.4 }}>{card.desc}</div>

              {/* footer */}
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <AvatarStack avatars={card.avatars} />
                  <span style={{ fontSize: 12, color: '#555' }}>{card.members} members</span>
                </div>
                <span style={{ fontSize: 12, color: '#6b8cff', fontWeight: 600 }}>Join →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
