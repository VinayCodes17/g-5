import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DOMAIN_LABELS = {
  aiml: 'AI / ML', webdev: 'Web Dev', cybersec: 'Cyber Security',
  gamedev: 'Game Dev', devops: 'DevOps', dsa: 'DSA',
};

const DOMAIN_ICONS = {
  aiml: '🤖', webdev: '🌐', cybersec: '🔒',
  gamedev: '🎮', devops: '⚙️', dsa: '🧠',
};

const DOMAIN_MEMBERS = {
  aiml: 276, webdev: 189, cybersec: 145,
  gamedev: 98, devops: 112, dsa: 276,
};

const AVATAR_COLORS = {
  R: '#4f46e5',
  P: '#e11d48',
  A: '#16a34a',
  N: '#9333ea',
  Y: '#5b5ef4',
};

const DUMMY_MESSAGES = [
  { id: 1, user: 'Rahul K.', text: 'Hey everyone! Anyone solved the backprop assignment?', time: '10:12 AM' },
  { id: 2, user: 'Priya M.', text: 'Yeah! The key is getting the chain rule right. Check lecture 4.', time: '10:14 AM' },
  { id: 3, user: 'Arjun S.', text: 'Is the deadline tonight or tomorrow?', time: '10:18 AM' },
  { id: 4, user: 'Neha K.', text: 'Tonight 11:59 PM — do not sleep on it!', time: '10:19 AM' },
];

function getAvatarColor(name) {
  const initial = name[0].toUpperCase();
  return AVATAR_COLORS[initial] || '#5b5ef4';
}

const CURRENT_USER = 'Rahul K.';

export default function CommunityChat() {
  const { domain } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  const [input, setInput] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const bottomRef = useRef(null);

  const label = DOMAIN_LABELS[domain] || domain;
  const icon = DOMAIN_ICONS[domain] || '💬';
  const memberCount = DOMAIN_MEMBERS[domain] || 0;

  // SOCKET.IO STUB — Vinay will connect this to backend
  // useEffect(() => {
  //   const socket = io('http://localhost:5000');
  //   socket.emit('join-room', domain);
  //   socket.on('receive-message', (msg) => setMessages(prev => [...prev, msg]));
  //   return () => socket.disconnect();
  // }, [domain]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, {
      id: Date.now(), user: CURRENT_USER,
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    // socket.emit('send-message', { room: domain, text: input.trim() }); // Vinay uncomment this
    setInput('');
  };

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      background: '#0d0d0d', color: '#fff', fontFamily: "'Inter','Segoe UI',sans-serif",
      overflow: 'hidden',
    }}>

      {/* ── HEADER ── */}
      <div style={{
        padding: '14px 24px', borderBottom: '1px solid #2a2a2a',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#111111', flexShrink: 0,
      }}>
        {/* left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button
            onClick={() => navigate('/community')}
            style={{
              background: 'none', border: 'none', color: '#888', fontSize: 20,
              cursor: 'pointer', padding: '4px 6px', borderRadius: 6,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#888'}
          >←</button>

          <div style={{
            width: 36, height: 36, borderRadius: 10, background: '#1e1b3a',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>
            {icon}
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{label}</div>
            <div style={{ fontSize: 12, color: '#666', lineHeight: 1.2 }}>Community chat · dummy mode</div>
          </div>
        </div>

        {/* right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 12, color: '#666' }}>{memberCount} members</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 11, color: '#888', background: '#1a1a1a',
            padding: '4px 10px', borderRadius: 999,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#22c55e',
              boxShadow: '0 0 6px rgba(34,197,94,0.5)',
            }} />
            12 online
          </span>
        </div>
      </div>

      {/* ── MESSAGES AREA ── */}
      <div style={{
        flex: 1, overflowY: 'auto', padding: '24px',
        display: 'flex', flexDirection: 'column', gap: 0,
        scrollBehavior: 'smooth',
      }}>

        {/* date separator */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginBottom: 24,
        }}>
          <span style={{
            background: '#1e1e1e', color: '#666', fontSize: 12,
            padding: '4px 14px', borderRadius: 20,
          }}>
            Today
          </span>
        </div>

        {/* messages */}
        {messages.map(msg => {
          const avatarColor = getAvatarColor(msg.user);
          const isHovered = hoveredId === msg.id;
          const isMine = msg.user === CURRENT_USER;

          return (
            <div
              key={msg.id}
              onMouseEnter={() => setHoveredId(msg.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                display: 'flex', justifyContent: isMine ? 'flex-end' : 'flex-start',
                marginBottom: 6, padding: '4px 0',
              }}
            >
              <div style={{
                display: 'flex', gap: 12, maxWidth: '65%',
                flexDirection: isMine ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
              }}>
                {/* avatar — only for others */}
                {!isMine && (
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                    background: avatarColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 700, color: '#fff',
                  }}>
                    {msg.user[0]}
                  </div>
                )}

                {/* bubble */}
                <div>
                  {/* name + time */}
                  <div style={{
                    display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4,
                    justifyContent: isMine ? 'flex-end' : 'flex-start',
                  }}>
                    <span style={{ fontWeight: 600, fontSize: 12, color: '#888' }}>{isMine ? 'You' : msg.user}</span>
                    <span style={{ fontSize: 11, color: '#555' }}>{msg.time}</span>
                  </div>

                  {/* message bubble */}
                  <div style={{
                    background: isMine ? '#5b5ef4' : '#1e1e1e',
                    color: isMine ? '#fff' : '#ccc',
                    borderRadius: isMine ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    padding: '10px 14px', fontSize: 14, lineHeight: 1.6,
                    borderLeft: !isMine && isHovered ? `2px solid ${avatarColor}` : !isMine ? '2px solid transparent' : 'none',
                    transition: 'border-color 0.15s',
                  }}>
                    {msg.text}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* ── INPUT BAR ── */}
      <div style={{
        padding: '16px 24px', borderTop: '1px solid #2a2a2a',
        background: '#111111', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder={'Message ' + label + ' community...'}
            style={{
              flex: 1, background: '#1e1e1e', border: '1px solid #2a2a2a',
              borderRadius: 12, color: '#fff', padding: '12px 16px',
              fontSize: 14, outline: 'none', transition: 'border-color 0.2s',
            }}
            onFocus={e => e.currentTarget.style.borderColor = '#3a3a3a'}
            onBlur={e => e.currentTarget.style.borderColor = '#2a2a2a'}
          />
          <button
            onClick={sendMessage}
            style={{
              background: '#5b5ef4', border: 'none', color: '#fff',
              padding: '10px 20px', borderRadius: 10, fontSize: 14,
              fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#4f51d9'}
            onMouseLeave={e => e.currentTarget.style.background = '#5b5ef4'}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
