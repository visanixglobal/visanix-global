"use client";
import { useState, useRef } from 'react';

const CORRECT_PASSWORD = "2580";

const GRADES = [
  { name: "Virgin PTFE", d: 2.16 },
  { name: "15% Glass Filled", d: 2.22 },
  { name: "25% Glass Filled", d: 2.26 },
  { name: "25% Carbon Filled", d: 2.08 },
  { name: "Carbon + Graphite Filled", d: 2.05 },
  { name: "25% Graphite Filled", d: 2.20 },
  { name: "Bronze Filled 40%", d: 3.45 },
  { name: "Custom…", d: null },
];


function crossSectionArea(shape, dims) {
  if (shape === "rod") {
    const r = dims.d / 2;
    return Math.PI * r * r;
  }
  if (shape === "sheet") {
    return dims.w * dims.t;
  }
  if (shape === "tube") {
    const ro = dims.od / 2, ri = dims.id / 2;
    return Math.max(0, Math.PI * (ro * ro - ri * ri));
  }
  return 0;
}

function massFromLength(area_mm2, length_mm, density) {
  return area_mm2 * length_mm * density * 1e-6;
}

function lengthFromMass(area_mm2, mass_kg, density) {
  if (area_mm2 <= 0 || density <= 0) return 0;
  return (mass_kg * 1e6) / (area_mm2 * density);
}

// ─── Password Gate ───────────────────────────────────────────────────────────
function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (value === CORRECT_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(var(--paper-line,#D8D3C6) 1px, transparent 1px) 0 0/100% 28px,' +
        'linear-gradient(90deg,var(--paper-line,#D8D3C6) 1px,transparent 1px) 0 0/28px 100%,' +
        '#EDEAE2',
    }}>
      <div style={{
        background: '#FAF9F5',
        border: '1px solid #20211F',
        boxShadow: '4px 4px 0 rgba(32,33,31,0.12)',
        padding: '40px 36px',
        maxWidth: '360px',
        width: '100%',
        animation: shake ? 'shakeGate 0.5s ease' : 'none',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔒</div>
          <h2 style={{
            fontFamily: 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '.1em',
            color: '#20211F',
            margin: '0 0 6px',
          }}>ViFlon Calculator</h2>
          <p style={{
            fontFamily: 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace',
            fontSize: '10.5px',
            color: '#5B5C56',
            margin: 0,
          }}>Internal use · Visanix Global</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{
              display: 'block',
              fontFamily: 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace',
              fontSize: '10.5px',
              color: '#5B5C56',
              textTransform: 'uppercase',
              letterSpacing: '.06em',
              marginBottom: '5px',
            }}>Access Code</label>
            <input
              type="password"
              value={value}
              onChange={e => { setValue(e.target.value); setError(false); }}
              autoFocus
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '10px',
                border: error ? '1px solid #8B3B2A' : '1px solid #20211F',
                background: '#FAF9F5',
                fontFamily: 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace',
                fontSize: '16px',
                color: '#20211F',
                borderRadius: '2px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            {error && (
              <p style={{
                fontFamily: 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace',
                fontSize: '10px',
                color: '#8B3B2A',
                margin: '5px 0 0',
              }}>Incorrect password. Try again.</p>
            )}
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '10px',
            background: '#A65A2E',
            color: '#FAF9F5',
            border: '1px solid #7C4220',
            fontFamily: 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace',
            fontSize: '11.5px',
            textTransform: 'uppercase',
            letterSpacing: '.05em',
            cursor: 'pointer',
            borderRadius: '2px',
          }}>Unlock →</button>
        </form>
      </div>
    </div>
  );
}

// ─── Quick Converter ─────────────────────────────────────────────────────────
function QuickConverter() {
  const [shape, setShape] = useState('rod');
  const [gradeIdx, setGradeIdx] = useState(0);
  const [customDensity, setCustomDensity] = useState(2.16);
  const [mode, setMode] = useState('kg'); // 'kg' → length, 'len' → kg
  const [inputVal, setInputVal] = useState(1);

  // dims state per shape
  const [rod, setRod] = useState({ d: 12 });
  const [sheet, setSheet] = useState({ w: 500, t: 3 });
  const [tube, setTube] = useState({ od: 40, id: 30 });

  function getDims() {
    if (shape === 'rod') return rod;
    if (shape === 'sheet') return sheet;
    return tube;
  }

  function getDensity() {
    const g = GRADES[gradeIdx];
    return g.d === null ? (parseFloat(customDensity) || 0) : g.d;
  }

  const density = getDensity();
  const dims = getDims();
  const area = crossSectionArea(shape, dims);

  let resultVal, resultUnit, resultSub;
  let lengthMm = 0, massKg = 0;

  if (mode === 'kg') {
    lengthMm = lengthFromMass(area, inputVal, density);
    massKg = inputVal;
    const length_m = lengthMm / 1000;
    resultVal = length_m >= 1 ? length_m.toFixed(3) : lengthMm.toFixed(1);
    resultUnit = length_m >= 1 ? 'metres' : 'millimetres';
    resultSub = `${inputVal} kg  ·  density ${density.toFixed(2)} g/cm³  ·  area ${area.toFixed(1)} mm²`;
  } else {
    lengthMm = inputVal * 1000;
    massKg = massFromLength(area, lengthMm, density);
    resultVal = massKg.toFixed(3);
    resultUnit = 'kilograms';
    resultSub = `${inputVal} m  ·  density ${density.toFixed(2)} g/cm³  ·  area ${area.toFixed(1)} mm²`;
  }

  // All length conversions
  const lengthM   = lengthMm / 1000;
  const lengthCm  = lengthMm / 10;
  const lengthIn  = lengthMm / 25.4;
  const lengthFt  = lengthMm / 304.8;
  const lengthYd  = lengthMm / 914.4;

  // All weight conversions
  const massG   = massKg * 1000;
  const massLbs = massKg * 2.20462;
  const massOz  = massKg * 35.274;

  function drawDiagram() {
    if (shape === 'rod') {
      const r = Math.min(60, Math.max(16, dims.d / 1.2));
      return (
        <svg viewBox="0 0 220 160" width="220" style={{ maxWidth: '100%', height: 'auto' }}>
          <circle cx="110" cy="80" r={r} fill="#F1E9DC" stroke="#20211F" strokeWidth="2" />
          <line x1="50" y1="140" x2="170" y2="140" stroke="#5B5C56" strokeWidth="1" />
          <text x="110" y="155" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="11" fill="#7C4220" fontWeight="600">⌀ {dims.d || 0} mm</text>
          <text x="110" y="20" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10" fill="#5B5C56">ROD — CROSS SECTION</text>
        </svg>
      );
    }
    if (shape === 'sheet') {
      const w = Math.min(160, Math.max(40, dims.w / 6));
      const t = Math.min(60, Math.max(6, dims.t * 4));
      return (
        <svg viewBox="0 0 220 160" width="220" style={{ maxWidth: '100%', height: 'auto' }}>
          <rect x={110 - w / 2} y={90 - t / 2} width={w} height={t} fill="#F1E9DC" stroke="#20211F" strokeWidth="2" />
          <text x="110" y="130" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="11" fill="#7C4220" fontWeight="600">{dims.w || 0} × {dims.t || 0} mm</text>
          <text x="110" y="20" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10" fill="#5B5C56">SHEET — W × T</text>
        </svg>
      );
    }
    const rOut = Math.min(60, Math.max(20, dims.od / 1.4));
    const rIn = Math.max(4, rOut * (dims.id / (dims.od || 1)));
    return (
      <svg viewBox="0 0 220 160" width="220" style={{ maxWidth: '100%', height: 'auto' }}>
        <circle cx="110" cy="80" r={rOut} fill="#F1E9DC" stroke="#20211F" strokeWidth="2" />
        <circle cx="110" cy="80" r={rIn} fill="#EDEAE2" stroke="#20211F" strokeWidth="2" />
        <text x="110" y="150" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="11" fill="#7C4220" fontWeight="600">OD {dims.od || 0} / ID {dims.id || 0} mm</text>
        <text x="110" y="20" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10" fill="#5B5C56">TUBE — CROSS SECTION</text>
      </svg>
    );
  }

  const monoFont = 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace';
  const fieldLabel = { display: 'block', fontFamily: monoFont, fontSize: '10.5px', color: '#5B5C56', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '5px' };
  const fieldInput = { width: '100%', padding: '9px 10px', border: '1px solid #20211F', background: '#FAF9F5', fontFamily: monoFont, fontSize: '14px', color: '#20211F', borderRadius: '2px', boxSizing: 'border-box' };

  return (
    <div className="calc-panel">
      <h2 className="calc-panel-title">Quick convert — single item</h2>
      <div className="calc-quick-grid">
        <div>
          {/* Mode toggle */}
          <div style={{ display: 'flex', border: '1px solid #20211F', borderRadius: '2px', overflow: 'hidden', marginBottom: '16px' }}>
            {[['kg', 'kg → length'], ['len', 'length → kg']].map(([val, label]) => (
              <button key={val} onClick={() => { setMode(val); setInputVal(1); }} style={{
                flex: 1, padding: '9px', fontFamily: monoFont, fontSize: '11.5px', textTransform: 'uppercase',
                letterSpacing: '.05em', border: 'none', cursor: 'pointer',
                background: mode === val ? '#20211F' : '#FAF9F5',
                color: mode === val ? '#FAF9F5' : '#5B5C56',
              }}>{label}</button>
            ))}
          </div>

          {/* Shape */}
          <div style={{ marginBottom: '14px' }}>
            <label style={fieldLabel}>Product form</label>
            <select value={shape} onChange={e => setShape(e.target.value)} style={fieldInput}>
              <option value="rod">Rod (round bar)</option>
              <option value="sheet">Sheet</option>
              <option value="tube">Tube (pipe)</option>
            </select>
          </div>

          {/* Grade */}
          <div style={{ marginBottom: '14px' }}>
            <label style={fieldLabel}>Grade</label>
            <select value={gradeIdx} onChange={e => setGradeIdx(parseInt(e.target.value))} style={fieldInput}>
              {GRADES.map((g, i) => <option key={i} value={i}>{g.name}{g.d ? ` (${g.d})` : ''}</option>)}
            </select>
          </div>
          {GRADES[gradeIdx].d === null && (
            <div style={{ marginBottom: '14px' }}>
              <label style={fieldLabel}>Custom density (g/cm³)</label>
              <input type="number" step="0.01" value={customDensity} onChange={e => setCustomDensity(e.target.value)} style={fieldInput} />
            </div>
          )}

          {/* Dims */}
          {shape === 'rod' && (
            <div style={{ marginBottom: '14px' }}>
              <label style={fieldLabel}>Diameter (mm)</label>
              <input type="number" step="0.1" value={rod.d} onChange={e => setRod({ d: parseFloat(e.target.value) || 0 })} style={fieldInput} />
            </div>
          )}
          {shape === 'sheet' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
              <div>
                <label style={fieldLabel}>Width (mm)</label>
                <input type="number" step="1" value={sheet.w} onChange={e => setSheet(s => ({ ...s, w: parseFloat(e.target.value) || 0 }))} style={fieldInput} />
              </div>
              <div>
                <label style={fieldLabel}>Thickness (mm)</label>
                <input type="number" step="0.1" value={sheet.t} onChange={e => setSheet(s => ({ ...s, t: parseFloat(e.target.value) || 0 }))} style={fieldInput} />
              </div>
            </div>
          )}
          {shape === 'tube' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
              <div>
                <label style={fieldLabel}>Outer dia. OD (mm)</label>
                <input type="number" step="0.1" value={tube.od} onChange={e => setTube(s => ({ ...s, od: parseFloat(e.target.value) || 0 }))} style={fieldInput} />
              </div>
              <div>
                <label style={fieldLabel}>Inner dia. ID (mm)</label>
                <input type="number" step="0.1" value={tube.id} onChange={e => setTube(s => ({ ...s, id: parseFloat(e.target.value) || 0 }))} style={fieldInput} />
              </div>
            </div>
          )}

          {/* Input value */}
          <div style={{ marginBottom: '14px' }}>
            <label style={fieldLabel}>{mode === 'kg' ? 'Weight (kg)' : 'Length (metres)'}</label>
            <input type="number" step="0.01" value={inputVal} onChange={e => setInputVal(parseFloat(e.target.value) || 0)} style={fieldInput} />
          </div>
        </div>

        <div>
          {/* Result box */}
          <div style={{
            background: '#20211F', color: '#FAF9F5', padding: '20px', borderRadius: '3px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            textAlign: 'center', gap: '6px', minHeight: '110px',
          }}>
            <div style={{ fontFamily: monoFont, fontSize: '34px', fontWeight: '700', letterSpacing: '.01em' }}>{resultVal || '—'}</div>
            <div style={{ fontFamily: monoFont, fontSize: '12px', color: '#C9BFA8', textTransform: 'uppercase', letterSpacing: '.1em' }}>{resultUnit}</div>
            <div style={{ fontFamily: monoFont, fontSize: '10.5px', color: '#8B8577', marginTop: '4px' }}>{resultSub}</div>
          </div>

          {/* All-units conversion table */}
          {area > 0 && (
            <div style={{ marginTop: '12px' }}>
              {/* Length conversions */}
              <div style={{ fontFamily: monoFont, fontSize: '9.5px', color: '#5B5C56', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>
                Length equivalents
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '10px' }}>
                {[
                  { label: 'mm',   val: lengthMm.toFixed(1) },
                  { label: 'cm',   val: lengthCm.toFixed(2) },
                  { label: 'm',    val: lengthM.toFixed(4) },
                  { label: 'inch', val: lengthIn.toFixed(3) },
                  { label: 'ft',   val: lengthFt.toFixed(3) },
                  { label: 'yd',   val: lengthYd.toFixed(4) },
                ].map(({ label, val }) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    background: '#FAF9F5', border: '1px solid #D8D3C6',
                    padding: '5px 8px', borderRadius: '2px',
                  }}>
                    <span style={{ fontFamily: monoFont, fontSize: '9px', color: '#5B5C56', textTransform: 'uppercase', letterSpacing: '.06em' }}>{label}</span>
                    <span style={{ fontFamily: monoFont, fontSize: '12px', fontWeight: '700', color: '#20211F' }}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Weight conversions */}
              <div style={{ fontFamily: monoFont, fontSize: '9.5px', color: '#5B5C56', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>
                Weight equivalents
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                {[
                  { label: 'g',   val: massG.toFixed(1) },
                  { label: 'kg',  val: massKg.toFixed(4) },
                  { label: 'lbs', val: massLbs.toFixed(4) },
                  { label: 'oz',  val: massOz.toFixed(3) },
                ].map(({ label, val }) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    background: '#FAF9F5', border: '1px solid #D8D3C6',
                    padding: '5px 8px', borderRadius: '2px',
                  }}>
                    <span style={{ fontFamily: monoFont, fontSize: '9px', color: '#5B5C56', textTransform: 'uppercase', letterSpacing: '.06em' }}>{label}</span>
                    <span style={{ fontFamily: monoFont, fontSize: '12px', fontWeight: '700', color: '#20211F' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
            {drawDiagram()}
          </div>
        </div>
      </div>
      <p style={{ fontFamily: monoFont, fontSize: '10px', color: '#5B5C56', marginTop: '10px', lineHeight: '1.6' }}>
        Densities are typical values for each grade — actual density varies by supplier batch and filler ratio. Edit &quot;Custom&quot; to match your material&apos;s datasheet figure for precise dealer quotes.
      </p>
    </div>
  );
}

// ─── Batch Row ────────────────────────────────────────────────────────────────
function BatchRow({ onRemove }) {
  const [shape, setShape] = useState('rod');
  const [gradeIdx, setGradeIdx] = useState(0);
  const [customDensity, setCustomDensity] = useState(2.16);
  const [know, setKnow] = useState('kg');
  const [val, setVal] = useState(1);
  const [rod, setRod] = useState({ d: 12 });
  const [sheet, setSheet] = useState({ w: 500, t: 3 });
  const [tube, setTube] = useState({ od: 40, id: 30 });

  function getDims() {
    if (shape === 'rod') return rod;
    if (shape === 'sheet') return sheet;
    return tube;
  }
  function getDensity() {
    const g = GRADES[gradeIdx];
    return g.d === null ? (parseFloat(customDensity) || 0) : g.d;
  }

  const density = getDensity();
  const area = crossSectionArea(shape, getDims());
  const lengthMm = know === 'kg' ? lengthFromMass(area, val, density) : val * 1000;
  const massKg   = know === 'kg' ? val : massFromLength(area, val * 1000, density);

  const lengthM   = lengthMm / 1000;
  const lengthIn  = lengthMm / 25.4;
  const lengthFt  = lengthMm / 304.8;
  const massG     = massKg * 1000;
  const massLbs   = massKg * 2.20462;

  const monoFont = 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace';
  const cellInput = { padding: '6px', fontFamily: monoFont, fontSize: '12px', border: '1px solid #20211F', background: '#FAF9F5', color: '#20211F', borderRadius: '2px', boxSizing: 'border-box' };

  // Primary output label
  let primaryOut;
  if (know === 'kg') {
    primaryOut = lengthM >= 1 ? `${lengthM.toFixed(3)} m` : `${lengthMm.toFixed(1)} mm`;
  } else {
    primaryOut = `${massKg.toFixed(3)} kg`;
  }

  return (
    <tr>
      <td>
        <select value={shape} onChange={e => setShape(e.target.value)} style={{ ...cellInput, width: '80px' }}>
          <option value="rod">Rod</option>
          <option value="sheet">Sheet</option>
          <option value="tube">Tube</option>
        </select>
      </td>
      <td>
        <select value={gradeIdx} onChange={e => setGradeIdx(parseInt(e.target.value))} style={{ ...cellInput, width: '100%' }}>
          {GRADES.map((g, i) => <option key={i} value={i}>{g.name}{g.d ? ` (${g.d})` : ''}</option>)}
        </select>
        {GRADES[gradeIdx].d === null && (
          <input type="number" step="0.01" value={customDensity} onChange={e => setCustomDensity(e.target.value)}
            style={{ ...cellInput, marginTop: '3px', width: '70px' }} title="Custom density g/cm³" />
        )}
      </td>
      <td style={{ fontFamily: monoFont, fontSize: '12px' }}>{density.toFixed(2)}</td>
      <td>
        {shape === 'rod' && (
          <><input type="number" step="0.1" value={rod.d} onChange={e => setRod({ d: parseFloat(e.target.value) || 0 })}
            style={{ ...cellInput, width: '60px' }} title="Diameter mm" /> ⌀mm</>
        )}
        {shape === 'sheet' && (
          <><input type="number" step="1" value={sheet.w} onChange={e => setSheet(s => ({ ...s, w: parseFloat(e.target.value) || 0 }))}
            style={{ ...cellInput, width: '55px' }} title="Width mm" />×
            <input type="number" step="0.1" value={sheet.t} onChange={e => setSheet(s => ({ ...s, t: parseFloat(e.target.value) || 0 }))}
              style={{ ...cellInput, width: '45px', marginLeft: '2px' }} title="Thickness mm" />mm</>
        )}
        {shape === 'tube' && (
          <><input type="number" step="0.1" value={tube.od} onChange={e => setTube(s => ({ ...s, od: parseFloat(e.target.value) || 0 }))}
            style={{ ...cellInput, width: '55px' }} title="OD mm" />/
            <input type="number" step="0.1" value={tube.id} onChange={e => setTube(s => ({ ...s, id: parseFloat(e.target.value) || 0 }))}
              style={{ ...cellInput, width: '55px', marginLeft: '2px' }} title="ID mm" />mm</>
        )}
      </td>
      <td>
        <select value={know} onChange={e => setKnow(e.target.value)} style={{ ...cellInput, width: '80px' }}>
          <option value="kg">kg</option>
          <option value="len">metres</option>
        </select>
      </td>
      <td>
        <input type="number" step="0.01" value={val} onChange={e => setVal(parseFloat(e.target.value) || 0)}
          style={{ ...cellInput, width: '80px' }} />
      </td>
      <td style={{ fontFamily: monoFont, fontSize: '11px', color: '#7C4220', whiteSpace: 'nowrap' }}>
        <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '2px' }}>{primaryOut}</div>
        {know === 'kg' ? (
          <div style={{ color: '#5B5C56', fontSize: '10px', lineHeight: '1.6' }}>
            {lengthMm.toFixed(1)} mm &nbsp;·&nbsp; {lengthIn.toFixed(2)}&Prime; &nbsp;·&nbsp; {lengthFt.toFixed(3)} ft
          </div>
        ) : (
          <div style={{ color: '#5B5C56', fontSize: '10px', lineHeight: '1.6' }}>
            {massG.toFixed(1)} g &nbsp;·&nbsp; {massLbs.toFixed(3)} lbs
          </div>
        )}
      </td>
      <td>
        <button onClick={onRemove} title="Remove row" style={{ color: '#8B3B2A', cursor: 'pointer', fontFamily: monoFont, fontSize: '15px', border: 'none', background: 'none' }}>✕</button>
      </td>
    </tr>
  );
}

// ─── Batch Table ──────────────────────────────────────────────────────────────
function BatchTable() {
  const [rows, setRows] = useState(() => [
    { id: 0, defaultShape: 'rod' },
    { id: 1, defaultShape: 'sheet' },
    { id: 2, defaultShape: 'tube' },
  ]);
  const nextId = useRef(3);

  function addRow() {
    setRows(r => [...r, { id: nextId.current++ }]);
  }
  function removeRow(id) {
    setRows(r => r.filter(row => row.id !== id));
  }

  const monoFont = 'ui-monospace,SFMono-Regular,"Roboto Mono",Consolas,monospace';

  return (
    <div className="calc-panel">
      <h2 className="calc-panel-title">Multi-product sheet — convert a whole order at once</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: monoFont, fontSize: '12.5px' }}>
          <thead>
            <tr>
              {['Product', 'Grade', 'Density g/cm³', 'Dimensions (mm)', 'Know', 'Value', 'Converts to', ''].map((h, i) => (
                <th key={i} style={{
                  textAlign: 'left', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em',
                  color: '#5B5C56', borderBottom: '2px solid #20211F', padding: '6px', fontWeight: '600',
                  whiteSpace: 'nowrap',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <BatchRow key={row.id} id={row.id} onRemove={() => removeRow(row.id)} />
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', flexWrap: 'wrap', gap: '8px' }}>
        <button onClick={addRow} style={{
          fontFamily: monoFont, fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '.05em',
          padding: '8px 14px', border: '1px solid #20211F', background: '#FAF9F5', cursor: 'pointer', borderRadius: '2px',
        }}>+ Add product</button>
        <button onClick={() => setRows([])} style={{
          fontFamily: monoFont, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '.05em',
          padding: '6px 10px', border: '1px solid #5B5C56', color: '#5B5C56', background: '#FAF9F5', cursor: 'pointer', borderRadius: '2px',
        }}>Clear all rows</button>
      </div>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function CalculatorClient() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="calc-bg">
        <div className="calc-sheet">
          <header className="calc-header">
            <div>
              <h1>Weight ⇄ Length Converter</h1>
              <div className="calc-tag">PTFE / fluoropolymer stock — rod · sheet · tube</div>
            </div>
            <div className="calc-doc-meta">
              ViFlon by Visanix Global<br />ref: internal conversion sheet
            </div>
          </header>
          <QuickConverter />
          <BatchTable />
        </div>
      </div>
  );
}
