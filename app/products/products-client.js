"use client";
import { useState } from 'react';
import Link from 'next/link';

const ptfeGrades = [
  { id: '01', title: 'Virgin PTFE', desc: 'Pure unfilled resin. Maximum chemical resistance, FDA compliant grades available.', tag: 'Standard', color: '#3b82f6' },
  { id: '02', title: '15% Glass Filled', desc: 'Enhanced stiffness and reduced deformation under sustained load.', tag: 'Structural', color: '#f59e0b' },
  { id: '03', title: '25% Glass Filled', desc: 'High rigidity for demanding dimensional stability requirements.', tag: 'Structural', color: '#f59e0b' },
  { id: '04', title: '25% Carbon Filled', desc: 'Improved wear resistance and thermal conductivity for dynamic sealing.', tag: 'Wear', color: '#ef4444' },
  { id: '05', title: 'Carbon + Graphite', desc: 'Dual-filler blend for extreme-wear and dry running applications.', tag: 'Premium', color: '#8b5cf6' },
  { id: '06', title: '25% Graphite Filled', desc: 'Low friction coefficient; ideal for sliding and bearing surfaces.', tag: 'Wear', color: '#ef4444' },
];

const ptfeProducts = [
  { title: 'PTFE ROD', subtitle: '(Extruded and Moulded)', slug: 'ptfe-rod', image: '/ptfe-rod-hd.jpg', specs: [{ label: 'Diameter Range', value: '6mm - 200mm' }, { label: 'Standard Lengths', value: '1mtr, 1ft, 905mm' }] },
  { title: 'PTFE SKIVED SHEET', slug: 'ptfe-sheet-skived', image: '/ptfe-skived-sheet.webp', specs: [{ label: 'Thickness Range', value: '0.5mm - 6mm' }, { label: 'Available Widths', value: '1mtr, 1.2mtr, 1.5mtr, 2mtr' }] },
  { title: 'PTFE MOULDED SHEET', slug: 'ptfe-sheet-moulded', image: '/ptfe-sheets-moulded.jpg', specs: [{ label: 'Thickness Range', value: '5mm - 100mm' }, { label: 'Standard Sizes', value: '1x1m, 2x2m, 0.6x0.6m etc.' }] },
  { title: 'PTFE TUBES', subtitle: '(Extruded and Moulded)', slug: 'ptfe-tube', image: '/ptfe-tubes.jfif', specs: [{ label: 'OD/ID Specs', value: 'Full Range Available' }, { label: 'Delivery', value: 'Coils or Straight lengths' }] },
  { title: 'PTFE BUSH', slug: 'ptfe-bush', image: '/ptfe bush.jfif', specs: [{ label: 'OD/ID Ranges', value: 'Custom Manufactured' }, { label: 'Max Length', value: 'Up to 500mm' }] },
  { title: 'PTFE BALL', slug: 'ptfe-ball', image: '/ptfe ball.jfif', specs: [{ label: 'Size Range', value: '3mm - 50mm' }, { label: 'Precision Grade', value: 'Standard Industrial' }] },
  { title: 'PTFE GLAND', slug: 'ptfe-gland', image: '/ptfe gland.jfif', specs: [{ label: 'Standard Sections', value: '3x3mm up to 12x12mm' }, { label: 'Packaging', value: 'Spools of 1kg, 5kg, 10kg' }] },
  { title: 'PTFE GASKET', slug: 'ptfe-gasket', image: '/ptfe gasket.jfif', specs: [{ label: 'Custom Cutting', value: 'As per drawings' }, { label: 'Thickness', value: '1mm - 5mm' }] },
  { title: 'PTFE RING', slug: 'ptfe-ring', image: '/ptfe ring.jfif', specs: [{ label: 'Types', value: 'Back-up, O-Rings, V-Rings' }, { label: 'Sizing', value: 'Standard & Custom' }] },
  { title: 'PTFE TAPE', slug: 'ptfe-tape', image: '/ptfe tape.jfif', specs: [{ label: 'Standard Width', value: '12mm, 19mm' }, { label: 'Roll Length', value: '7mtr, 10mtr, 12mtr' }] },
  { title: 'PTFE CUSTOM', subtitle: 'Tailored Solutions', slug: null, image: '/ptfe custom.jfif', specs: [{ label: 'Customization Options', value: 'Tailored dimensions, materials, finishes' }, { label: 'Lead Time', value: '2-6 weeks' }] }
];

const rubberProducts = [
  { title: 'O-RINGS', subtitle: '(Standard & Custom)', image: '/O Rings.jfif', specs: [{ label: 'Standards', value: 'AS568, BS, JIS, Metric' }, { label: 'Materials', value: 'NBR, Viton, EPDM, Silicone' }] },
  { title: 'OIL SEALS', subtitle: 'Rotary Shaft Seals', image: '/Oil Sealss.jfif', specs: [{ label: 'Types', value: 'Single/Double Lip (TC, SC, etc.)' }, { label: 'Size Range', value: '10mm - 500mm ID' }] },
  { title: 'RUBBER GASKETS', image: '/Rubber Gaskets.jfif', specs: [{ label: 'Processes', value: 'Die-cut, Lathe-cut, Flash-cut' }, { label: 'Hardness', value: '30 - 90 Shore A' }] },
  { title: 'EXTRUDED PROFILES', subtitle: 'Custom Cord & Strips', image: '/rubber-showcase.png', specs: [{ label: 'Shapes', value: 'D-section, P-section, Squares' }, { label: 'Customization', value: 'As per drawings' }] },
  { title: 'RUBBER SHEETS', image: '/rubber sheet.jfif', specs: [{ label: 'Materials', value: 'Neoprene, Nitrile, EPDM' }, { label: 'Thickness', value: '1mm - 50mm' }] },
  { title: 'ANTI-VIBRATION MOUNTS', image: '/anti vibration.jfif', specs: [{ label: 'Applications', value: 'Pumps, Motors, HVAC' }, { label: 'Types', value: 'Cylindrical, Sandwich' }] }
];

const rubberGrades = [
  { id: 'R1', title: 'Nitrile (NBR)', desc: 'Excellent resistance to petroleum-based oils and fuels. Standard for industrial sealing.', tag: 'Oil Resistant', color: '#10b981' },
  { id: 'R2', title: 'Viton (FKM)', desc: 'Premium fluoroelastomer for high temperature and aggressive chemical environments.', tag: 'High Temp', color: '#ef4444' },
  { id: 'R3', title: 'EPDM', desc: 'Outstanding resistance to weathering, ozone, and steam. Ideal for outdoor applications.', tag: 'Weathering', color: '#3b82f6' },
  { id: 'R4', title: 'Silicone', desc: 'Superior thermal stability and flexibility. FDA compliant grades for food & pharma.', tag: 'Food Grade', color: '#f43f5e' },
  { id: 'R5', title: 'Neoprene', desc: 'Balanced properties with good resistance to oils, chemicals, and outdoor aging.', tag: 'Versatile', color: '#64748b' }
];

const steelProducts = [
  {
    title: 'SS Round Bar',
    subtitle: 'SS 304 / 304L / 316 / 316L & more',
    tag: 'In Supply',
    specs: [
      { label: 'Diameter Range', value: '5mm – 160mm' },
      { label: 'Length', value: '3m, 6m & cut-to-length' },
      { label: 'Surface Finish', value: 'Centreless Ground, Belt Polished (Ra 0.2 microns), 24–320 Grit' },
      { label: 'Standard', value: 'ASTM A276 / ASTM A484' },
      { label: 'Grades', value: 'SS 201, 202, 303, 304, 304L, 316, 316L, 316H, 316Ti, 310S, 321, 347, 410, 420, 430, 17-4PH & more' },
      { label: 'MTC', value: 'Provided — email before dispatch' },
    ],
    icon: '⚙️',
    desc: 'Stainless steel round bars from 5mm to 160mm diameter. SS316L and SS316 actively supplied. Centreless ground and belt polished finish available up to Ra 0.2 microns. MTC sent by email for QC approval before dispatch.',
  },
  {
    title: 'SS Square Bar',
    subtitle: 'SS 304 / 316 / 316L & more',
    tag: 'In Supply',
    specs: [
      { label: 'Size Range', value: '5mm – 100mm' },
      { label: 'Length', value: '3m, 6m & cut-to-length' },
      { label: 'Crack Test', value: 'Magnetic Particle Inspection (MPI)' },
      { label: 'Surface Finish', value: 'Cold Drawn, Belt Polished' },
      { label: 'Heat Treatment', value: 'Solution Annealed, Annealed' },
      { label: 'Standard', value: 'ASTM A276 / ASTM A484' },
    ],
    icon: '🔷',
    desc: 'Stainless steel square bars from 5mm to 100mm, supplied in cold drawn and belt polished condition. MPI crack tested. Full grade range including SS304, 316, 316L.',
  },
  {
    title: 'SS Hex Bar',
    subtitle: 'SS 304 / 316 / 316L & more',
    tag: 'In Supply',
    specs: [
      { label: 'Size Range', value: '6mm – 65mm (A/F)' },
      { label: 'Length', value: '3m, 6m & cut-to-length' },
      { label: 'Crack Test', value: 'Magnetic Particle Inspection (MPI)' },
      { label: 'Surface Finish', value: 'Cold Drawn, Belt Polished' },
      { label: 'Heat Treatment', value: 'Solution Annealed, Annealed' },
      { label: 'Standard', value: 'ASTM A276 / ASTM A484' },
    ],
    icon: '⬡',
    desc: 'Stainless steel hex bars from 6mm to 65mm across flats. Used for fastener manufacture, valve stems, and precision turned components.',
  },
  {
    title: 'SS Flat Bar',
    subtitle: 'SS 304 / 316 / 316L & more',
    tag: 'In Supply',
    specs: [
      { label: 'Width Range', value: '20mm – 150mm' },
      { label: 'Thickness', value: '3mm – 50mm' },
      { label: 'Length', value: '3m, 6m & cut-to-length' },
      { label: 'Surface Finish', value: 'HRAP, CRAP' },
      { label: 'Heat Treatment', value: 'Solution Annealed' },
      { label: 'Standard', value: 'ASTM A276 / ASTM A484' },
    ],
    icon: '▬',
    desc: 'Stainless steel flat bars from 20mm to 150mm wide and 3mm to 50mm thick. Supplied in hot rolled annealed pickled (HRAP) and cold rolled annealed pickled (CRAP) condition.',
  },
  {
    title: 'SS Sheet, Plate & Coil',
    subtitle: 'SS 202 / 304 / 316 / 316L / Duplex & more',
    tag: 'In Supply',
    specs: [
      { label: 'Sheet Thickness', value: '0.2mm – 3mm' },
      { label: 'Plate Thickness', value: '3mm – 50mm' },
      { label: 'Coil Thickness', value: '0.2mm – 50mm' },
      { label: 'Width', value: '200mm – 2000mm' },
      { label: 'Finish', value: '2B, BA, No.1, No.4, No.8, Mirror, HR, CR, Hairline, Satin, Checkered' },
      { label: 'Grades', value: 'SS 202, 304, 304L, 316, 316L, 316Ti, 321, 347, 410, 430, 904L, Duplex 2205, Super Duplex 2507' },
    ],
    icon: '✨',
    desc: 'Stainless steel sheets, plates, and coils across a full thickness range from 0.2mm to 50mm. Full range of surface finishes from 2B industrial to mirror. Plates up to 6000mm length available.',
  },
  {
    title: 'SS Seamless Pipes',
    subtitle: '1/8" NB to 24" NB',
    tag: 'In Supply',
    specs: [
      { label: 'Size Range', value: '1/8" NB to 24" NB / 1/4" OD to 5" OD' },
      { label: 'Schedules', value: 'SCH 5, 10, 20, 30, 40, 60, 80, 100, 120, 140, 160, XXS' },
      { label: 'End Type', value: 'Plain End, Beveled End, Threaded' },
      { label: 'Standard', value: 'ASTM / ASME / DIN / BS / EN / IS / JIS' },
      { label: 'Grades', value: 'TP 304, 304L, 316, 316L, 316H, 316Ti, 321, 347, 904L & more' },
    ],
    icon: '🔵',
    desc: 'Stainless steel seamless pipes from 1/8" NB to 24" NB in all standard schedules. Cut length, fixed length, single random, and double random lengths available.',
  },
  {
    title: 'SS ERW Pipes & Square Tubes',
    subtitle: '1/8" NB to 12" NB',
    tag: 'In Supply',
    specs: [
      { label: 'ERW Size Range', value: '1/8" NB to 12" NB' },
      { label: 'Square Tube Size', value: '12×12mm to 150×150mm' },
      { label: 'Wall Thickness', value: '2mm – 12.7mm (ERW) / 0.8mm – 6mm (Square)' },
      { label: 'Schedules', value: 'SCH 5 to XXS' },
      { label: 'Standard', value: 'ASTM / ASME / DIN / IS / JIS / IBR' },
      { label: 'Grades', value: 'TP 304, 304L, 316, 316H, 316L, 316Ti, 321, 347, 904L' },
    ],
    icon: '🔩',
    desc: 'Stainless steel ERW pipes in round, square, rectangular, and hydraulic forms. Square and rectangular hollow sections from 12×12mm to 150×150mm. Slotted and oval profiles also available.',
  },
  {
    title: 'SS Flanges & Fittings',
    subtitle: 'Flanges / Forged / Buttweld / Valves',
    tag: 'In Supply',
    specs: [
      { label: 'Flange Size', value: '15 NB to 48 NB' },
      { label: 'Pressure Class', value: '150–2500 LBS / PN6–PN64 / DIN ND 6–40' },
      { label: 'Flange Types', value: 'Slip On, Weld Neck, Blind, Socket Weld, Orifice' },
      { label: 'Fitting Size', value: '1/8" NB to 48" NB' },
      { label: 'Fitting Types', value: 'Elbows, Tees, Reducers, Caps, Couplings, Unions' },
      { label: 'Standard', value: 'ASTM A182 / ASME SA182 / ANSI B16.9' },
    ],
    icon: '�',
    desc: 'Full range of SS flanges, forged fittings, buttweld fittings, and valve fittings. Grades from SS304 to SS316L, Duplex 2205, and Super Duplex 2507. All standard international dimensions.',
  },
  {
    title: 'MS Plates & Structural Sections',
    subtitle: 'IS 2062 / ASTM A36',
    tag: 'In Supply',
    specs: [
      { label: 'Plate Thickness', value: '3mm – 100mm' },
      { label: 'Standard Plate Sizes', value: '2500×1250mm, 3000×1500mm' },
      { label: 'Sections', value: 'Equal Angles, Channels, I-Beams, H-Beams' },
      { label: 'Angle Size Range', value: '25×25mm to 200×200mm' },
      { label: 'Grade', value: 'IS 2062 E250 / ASTM A36' },
      { label: 'Surface', value: 'HR / CR / Pickled' },
    ],
    icon: '🟫',
    desc: 'Mild steel plates, angles, channels, and beams for structural fabrication and general engineering. IS 2062 E250 grade for standard structural applications.',
  },
];

const steelGrades = [
  { id: 'S1', title: 'SS 304 / 304L', desc: 'Most widely used austenitic grade. C max 0.08% (304) / 0.03% (304L). Ni 8–10.5%, Cr 18–20%. Excellent corrosion resistance for food, chemical, and general industrial use.', tag: 'Standard', color: '#0ea5e9' },
  { id: 'S2', title: 'SS 316 / 316L', desc: 'Molybdenum-bearing grade (Mo 2–3%). C max 0.08% (316) / 0.03% (316L). Ni 10–14%, Cr 16–18%. Superior resistance to chlorides and acids. 316L preferred for welded parts. Actively supplied — MTC with every order.', tag: 'In Active Supply', color: '#6366f1' },
  { id: 'S3', title: 'SS 316Ti / 316H', desc: 'Titanium-stabilised (316Ti) and high-carbon (316H) variants of SS316. Used in high-temperature applications and where sensitisation resistance is required.', tag: 'High Temp', color: '#8b5cf6' },
  { id: 'S4', title: 'SS 310S', desc: 'High chromium-nickel grade (Cr 24–26%, Ni 19–22%). Excellent high-temperature oxidation resistance up to 1100°C. Used in furnace parts and heat exchangers.', tag: 'High Temp', color: '#ef4444' },
  { id: 'S5', title: 'SS 321 / 347', desc: 'Titanium-stabilised (321) and Niobium-stabilised (347) grades. Resistant to intergranular corrosion after welding. Used in exhaust systems and pressure vessels.', tag: 'Stabilised', color: '#f59e0b' },
  { id: 'S6', title: 'SS 410 / 420 / 430', desc: 'Martensitic (410, 420) and ferritic (430) grades. Good mechanical strength and moderate corrosion resistance. Used for cutlery, valves, shafts, and decorative applications.', tag: 'Martensitic / Ferritic', color: '#64748b' },
  { id: 'S7', title: 'Duplex 2205 / Super Duplex 2507', desc: 'High strength dual-phase stainless. Duplex 2205 (UNS S31803) and Super Duplex 2507 (UNS S32750). Exceptional resistance to stress corrosion cracking and pitting. Used in offshore and chemical plant.', tag: 'Duplex', color: '#10b981' },
  { id: 'S8', title: 'Mild Steel IS 2062 / ASTM A36', desc: 'Standard structural carbon steel for plates, sections, bars, and fabrication. IS 2062 E250 is the Indian standard equivalent. Good weldability and machinability.', tag: 'Structural MS', color: '#78716c' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ptfe');
  const [activeTab, setActiveTab] = useState('products');

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveTab('products'); // Reset to products tab when switching categories
  };

  const CustomEnquiryCard = ({ type = "Rubber" }) => (
    <div className="glass-card" style={{
      background: 'var(--primary)',
      color: 'white',
      textAlign: 'center',
      padding: '4rem 2rem',
      border: 'none',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'var(--accent-glow)', filter: 'blur(80px)', opacity: 0.2 }}></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛠️</div>
        <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>Bespoke {type} Solutions</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
          Don&apos;t see your specific requirement? We specialize in custom {type} formulations, precision-molded parts, and bespoke industrial components tailored to your engineering drawings.
        </p>
        <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Request Custom Quote</Link>
      </div>
    </div>
  );

  const subheadingStyle = {
    fontSize: '1rem',
    color: 'var(--text-main)',
    fontWeight: '600',
    opacity: 0.8,
    marginTop: '0.5rem',
    fontFamily: 'var(--font-outfit), sans-serif'
  };

  const currentProducts = activeCategory === 'ptfe' ? ptfeProducts : activeCategory === 'rubber' ? rubberProducts : steelProducts;
  const currentGrades = activeCategory === 'ptfe' ? ptfeGrades : activeCategory === 'rubber' ? rubberGrades : steelGrades;

  return (
    <div className="reveal">
      <style jsx>{`
        .layout-container { display: flex; flex-direction: row; min-height: 80vh; background: var(--bg-light); }
        .sidebar { width: 300px; min-width: 0; background: white; border-right: 1px solid var(--border); padding: 4rem 0; display: flex; flex-direction: column; }
        .content-area { flex: 1; min-width: 0; padding: 4rem; overflow: hidden; }
        .product-list-container { display: flex; flex-direction: column; gap: 2.5rem; }
        .product-card-header { padding: 2.5rem; display: flex; alignItems: center; gap: 2rem; border-bottom: 1px solid var(--border); background: rgba(0,0,0,0.01); }
        .product-card-body { padding: 2.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2.5rem; }
        .grade-card { padding: 2.5rem; }

        .tabs-header { display: flex; gap: 3rem; border-bottom: 1px solid var(--border); margin-bottom: 3rem; }
        .tab-btn { 
          padding: 1rem 0; 
          background: transparent; 
          border: none; 
          border-bottom: 3px solid transparent; 
          font-family: var(--font-outfit), sans-serif; 
          font-weight: 800; 
          text-transform: uppercase; 
          letter-spacing: 2px; 
          font-size: 0.85rem; 
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition);
        }
        .tab-btn.active { color: var(--primary); border-bottom-color: var(--accent); }

        @media (max-width: 1024px) {
          .layout-container { flex-direction: column; }
          .sidebar { width: 100% !important; border-right: none; border-bottom: 1px solid var(--border); padding: 2rem 0; }
          .content-area { padding: 2rem 1rem; }
          .sidebar-section { padding: 0 1.5rem !important; }
          .sidebar-btns { flex-direction: row !important; overflow-x: auto; padding-bottom: 1rem; gap: 0.75rem !important; }
          .product-card-header { padding: 1.5rem; gap: 1rem; flex-wrap: wrap; }
          .product-card-body { padding: 1.5rem; gap: 1.5rem; }
          .product-list-container { gap: 1.5rem; }
          .grade-card { padding: 1.5rem; }
          .tabs-header { gap: 1.5rem; margin-bottom: 2rem; }
        }

        @media (max-width: 480px) {
          .content-area { padding: 1.5rem 0.75rem; }
          .product-card-header { padding: 1rem; gap: 0.75rem; }
          .product-card-body { padding: 1rem; gap: 1rem; grid-template-columns: 1fr 1fr; }
          .tabs-header { gap: 1rem; }
          .tab-btn { font-size: 0.75rem; letter-spacing: 1px; }
        }
      `}</style>

      {/* Premium Hero */}
      <section style={{
        padding: 'clamp(100px, 15vw, 180px) 0 80px',
        background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>Product Catalogue</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>
            {activeCategory === 'ptfe' ? 'PTFE' : activeCategory === 'rubber' ? 'Rubber' : 'Steel'} <span className="gradient-text">Division Portfolio</span>
          </h1>
        </div>
      </section>

      <section className="layout-container">
        {/* Sidebar Tabs */}
        <aside className="sidebar">
          <div className="sidebar-section" style={{ padding: '0 2rem' }}>
            <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '1.5rem' }}>Main Divisions</h4>
            <div className="sidebar-btns" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button
                onClick={() => handleCategoryChange('ptfe')}
                style={{
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  background: activeCategory === 'ptfe' ? 'var(--primary)' : 'transparent',
                  color: activeCategory === 'ptfe' ? 'var(--accent)' : 'var(--text-main)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap'
                }}
              >
                PTFE Division
              </button>
              <button
                onClick={() => handleCategoryChange('rubber')}
                style={{
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  background: activeCategory === 'rubber' ? 'var(--primary)' : 'transparent',
                  color: activeCategory === 'rubber' ? 'var(--accent)' : 'var(--text-main)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap'
                }}
              >
                Rubber Division
              </button>
              <button
                onClick={() => handleCategoryChange('steel')}
                style={{
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  background: activeCategory === 'steel' ? 'var(--primary)' : 'transparent',
                  color: activeCategory === 'steel' ? 'var(--accent)' : 'var(--text-main)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Steel Division
                <span style={{
                  fontSize: '0.55rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: '#f59e0b',
                  color: '#fff',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}>New</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="content-area">
          <div className="container" style={{ padding: 0 }}>
            <div className="reveal">
              {/* Horizontal Tabs at Top */}
              <div className="tabs-header">
                <button
                  onClick={() => setActiveTab('products')}
                  className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
                >
                  Products List
                </button>
                <button
                  onClick={() => setActiveTab('grades')}
                  className={`tab-btn ${activeTab === 'grades' ? 'active' : ''}`}
                >
                  Material Grades
                </button>
              </div>

              {activeTab === 'products' ? (
                <div className="reveal">
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
                      {activeCategory === 'ptfe' ? 'Engineered PTFE' : activeCategory === 'rubber' ? 'Industrial Rubber' : 'Steel'} <span style={{ color: 'var(--accent)' }}>Products</span>
                    </h2>
                    <p style={subheadingStyle}>
                      {activeCategory === 'ptfe'
                        ? 'Precision-machined PTFE components for critical industrial applications.'
                        : activeCategory === 'rubber'
                        ? 'High-performance elastomeric solutions for sealing and fluid handling.'
                        : 'Structural and stainless steel products — actively supplying to clients across India.'}
                    </p>
                  </div>
                  <div className="product-list-container">
                    {activeCategory === 'steel' && (
                      <div style={{
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                        border: '1px solid #f59e0b44',
                        borderRadius: '12px',
                        padding: '1.5rem 2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                      }}>
                        <span style={{ fontSize: '1.5rem' }}>🚧</span>
                        <div>
                          <div style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.2rem', fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Division in Development
                          </div>
                          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Steel division is actively operational — currently delivering to clients. Full catalogue expanding shortly.
                          </div>
                        </div>
                      </div>
                    )}
                    {currentProducts.map((product, i) => (
                      activeCategory === 'steel' ? (
                        <div key={i} className="glass-card" style={{ background: 'white', padding: 0, border: '1px solid var(--border)', opacity: product.tag === 'Coming Soon' ? 0.65 : 1 }}>
                          <div className="product-card-header" style={{ alignItems: 'center' }}>
                            <div style={{
                              width: '64px', height: '64px', borderRadius: '12px',
                              background: 'linear-gradient(135deg, #1e293b, #334155)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '1.75rem', flexShrink: 0,
                            }}>
                              {product.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{product.title}</h3>
                                <span style={{
                                  fontSize: '0.6rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px',
                                  padding: '3px 8px', borderRadius: '4px',
                                  background: product.tag === 'In Supply' ? '#dcfce7' : '#fef9c3',
                                  color: product.tag === 'In Supply' ? '#15803d' : '#92400e',
                                  fontFamily: 'var(--font-outfit), sans-serif',
                                }}>
                                  {product.tag === 'In Supply' ? '✓ ' : '⏳ '}{product.tag}
                                </span>
                              </div>
                              {product.subtitle && <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif', margin: 0 }}>{product.subtitle}</p>}
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.75, fontFamily: 'var(--font-outfit), sans-serif', margin: '0.4rem 0 0', lineHeight: '1.5' }}>{product.desc}</p>
                            </div>
                          </div>
                          <div className="product-card-body">
                            {product.specs.map((spec, j) => (
                              <div key={j}>
                                <div style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                  {spec.label}
                                </div>
                                <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--primary)', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                  {spec.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                      <div key={i} className="glass-card" style={{ background: 'white', padding: 0, border: '1px solid var(--border)' }}>
                        <div className="product-card-header">
                          <div style={{
                            width: '120px', height: '100px',
                            background: 'white',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            flexShrink: 0
                          }}>
                            <img
                              src={product.image}
                              alt={product.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>
                          <div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{product.title}</h3>
                            {product.subtitle && <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif' }}>{product.subtitle}</p>}
                            {product.slug && (
                              <Link
                                href={`/products/${product.slug}`}
                                style={{
                                  display: 'inline-block',
                                  marginTop: '0.6rem',
                                  fontSize: '0.75rem',
                                  fontWeight: '700',
                                  color: 'var(--accent)',
                                  textDecoration: 'none',
                                  fontFamily: 'var(--font-outfit), sans-serif',
                                  letterSpacing: '0.5px',
                                  textTransform: 'uppercase'
                                }}
                              >
                                View Details →
                              </Link>
                            )}
                          </div>
                        </div>
                        <div className="product-card-body">
                          {product.specs.map((spec, j) => (
                            <div key={j}>
                              <div style={{
                                fontSize: '0.65rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                color: 'var(--text-muted)',
                                marginBottom: '0.5rem',
                                fontFamily: 'var(--font-outfit), sans-serif'
                              }}>
                                {spec.label}
                              </div>
                              <div style={{
                                fontSize: '1rem',
                                fontWeight: '700',
                                color: 'var(--primary)',
                                fontFamily: 'var(--font-outfit), sans-serif'
                              }}>
                                {spec.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      )
                    ))}
                    <CustomEnquiryCard type={activeCategory === 'ptfe' ? 'PTFE' : activeCategory === 'rubber' ? 'Rubber' : 'Steel'} />
                  </div>
                </div>
              ) : (
                <div className="reveal">
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>Material <span style={{ color: 'var(--accent)' }}>Grades</span></h2>
                    <p style={subheadingStyle}>
                      {activeCategory === 'ptfe'
                        ? 'Specialized PTFE formulations for specific industrial conditions.'
                        : activeCategory === 'rubber'
                        ? 'Technical elastomer compounds optimized for various operating environments.'
                        : 'Steel grades and standards we supply and source for your requirements.'}
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    {currentGrades.map((grade) => (
                      <div key={grade.id} className="glass-card grade-card" style={{ borderTop: `6px solid ${grade.color}` }}>
                        <div style={{ color: grade.color, fontWeight: '800', fontSize: '0.9rem', marginBottom: '0.75rem', fontFamily: 'var(--font-outfit), sans-serif' }}>GRADE #{grade.id}</div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{grade.title}</h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-main)', opacity: 0.8, fontFamily: 'var(--font-outfit), sans-serif' }}>{grade.desc}</p>
                        <div style={{
                          marginTop: '1.5rem',
                          background: `${grade.color}10`,
                          color: grade.color,
                          padding: '0.4rem 1rem',
                          borderRadius: '100px',
                          fontSize: '0.65rem',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          display: 'inline-block',
                          border: `1px solid ${grade.color}20`,
                          fontFamily: 'var(--font-outfit), sans-serif'
                        }}>
                          {grade.tag}
                        </div>
                      </div>
                    ))}
                  </div>
                  <CustomEnquiryCard type={activeCategory === 'ptfe' ? 'PTFE' : activeCategory === 'rubber' ? 'Rubber' : 'Steel'} />
                </div>
              )}
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
