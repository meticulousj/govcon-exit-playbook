/*
  Federal Signal design reminder for this page:
  editorial brutalism meets institutional intelligence; near-black ink, mineral cream,
  Signal Orange accents, asymmetric briefing layouts, Space Grotesk display + DM Sans body.
*/
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  Crosshair,
  FileText,
  FileDown,
  Menu,
  Mail,
  MoveRight,
  UserRound,
  ShieldCheck,
  Target,
  X,
  Zap,
} from "lucide-react";

const heroTexture = "/manus-storage/federal-signal-hero-texture_aeca80d7.png";
const diagramTexture = "/manus-storage/federal-signal-diagram-texture_3cc8f379.png";
const brandMark = "/manus-storage/federal-signal-mark_b83d70c3.png";
const downloadablePdf = "/manus-storage/govcon-exit-playbook-100m_086c5b14.pdf";

const navItems = [
  { id: "thesis", label: "Thesis" },
  { id: "value-bridge", label: "Value bridge" },
  { id: "roadmap", label: "Roadmap" },
  { id: "scorecard", label: "Scorecard" },
  { id: "diligence", label: "Diligence" },
  { id: "action-plan", label: "90-day plan" },
];

const scenarios = [
  {
    id: "conservative",
    label: "Conservative",
    multiple: "10.0×",
    ebitda: "$10.0M",
    revenue: "$66.7M",
    margin: "15%",
    description: "A downside-protection case that still reaches the threshold through durable earnings.",
  },
  {
    id: "base",
    label: "Base case",
    multiple: "12.5×",
    ebitda: "$8.0M",
    revenue: "$53.3M",
    margin: "15%",
    description: "The operating thesis: $8M of normalized EBITDA at a defensible institutional multiple.",
  },
  {
    id: "premium",
    label: "Premium",
    multiple: "15.0×",
    ebitda: "$6.7M",
    revenue: "$44.4M",
    margin: "15%",
    description: "A capability-rich outcome where differentiated work and lower risk earn a premium.",
  },
];

const valueDrivers = [
  { num: "01", title: "Revenue quality", copy: "Funded backlog, recurring task orders, and control of the customer relationship—not a pipeline dressed as backlog.", icon: BarChart3 },
  { num: "02", title: "Growth engine", copy: "A repeatable capture motion where each win creates past performance, referenceability, and the next adjacency.", icon: Crosshair },
  { num: "03", title: "Margin proof", copy: "Contract-level economics that show price, labor mix, utilization, indirect rates, and delivery discipline.", icon: ArrowUpRight },
  { num: "04", title: "Strategic fit", copy: "A capability, vehicle, customer, talent footprint, or technical IP a buyer cannot build as quickly.", icon: Target },
  { num: "05", title: "Compliance", copy: "Timekeeping, labor charging, cyber controls, ethics, and documented remediation that survive scrutiny.", icon: ShieldCheck },
  { num: "06", title: "Transferability", copy: "A clear plan for consents, novation, change of control, and small-business status consequences.", icon: ClipboardCheck },
];

const roadmap = [
  { phase: "01", title: "Foundation + focus", period: "Months 0–12", goal: "Make the business true", copy: "Build the contract waterfall, monthly close, niche thesis, compliance baseline, and founder-risk map.", metrics: ["Monthly close by day 15", "Funded vs. unfunded backlog", "One wedge + two adjacencies"] },
  { phase: "02", title: "Repeatable growth", period: "Months 12–30", goal: "Turn wins into a system", copy: "Create a capture engine that connects customer insight, vehicles, partner strategy, staffing, pricing, and delivery.", metrics: ["Qualified pipeline coverage", "Referenceable anchor wins", "Positive, improving EBITDA"] },
  { phase: "03", title: "Platform scale", period: "Months 30–48", goal: "Become institution-ready", copy: "Add management depth and pursue only tuck-ins that strengthen capability, access, control, or margin.", metrics: ["$35M–$50M revenue range", "$5M–$7M EBITDA path", "Founder no longer a failure point"] },
  { phase: "04", title: "Exit positioning", period: "Months 48–60+", goal: "Make the story undeniable", copy: "Prepare the data room, buyer narrative, contract-transfer plan, and competitive process without disrupting growth.", metrics: ["$8M–$10M EBITDA target", "12–24 months visibility", "Buyer-ready leadership"] },
];

const scorecard = [
  { label: "Funded backlog", value: "12–24 mo", note: "Next-year visibility", tone: "orange" },
  { label: "Prime control", value: "↑", note: "Own the customer edge", tone: "cream" },
  { label: "Book-to-bill", value: "> 1.0×", note: "Replace revenue consumed", tone: "cream" },
  { label: "Recompete cliffs", value: "< 20%", note: "Revenue exposed at once", tone: "orange" },
  { label: "EBITDA margin", value: "15–18%", note: "Normalized + repeatable", tone: "cream" },
  { label: "Founder dependency", value: "0", note: "Single points of failure", tone: "orange" },
];

const diligenceRows = [
  { title: "Contract waterfall", copy: "Funded work, option years, recompetes, new business, customer, vehicle, period, margin, and transfer requirements." },
  { title: "Financial truth", copy: "Monthly financials, EBITDA bridge, working capital, indirect rates, cash forecast, and add-back register." },
  { title: "Compliance + cyber", copy: "Policies, training, findings, corrective actions, timekeeping, systems inventory, incidents, and assessments." },
  { title: "People + leadership", copy: "Key talent, clearances, compensation, succession, recruiting, retention, and founder-dependent relationships." },
];

const actionPlan = [
  { days: "01–30", title: "Establish truth", copy: "Create the contract waterfall, reconcile financials, map concentration, and assign owners for finance, contracts, capture, delivery, compliance, and cyber." },
  { days: "31–60", title: "Establish focus", copy: "Choose the mission wedge, define target agencies, set bid/no-bid rules, and launch the remediation register." },
  { days: "61–90", title: "Establish momentum", copy: "Recruit the next layer of leadership, build the five-year model, and decide whether the next dollar goes to growth, a tuck-in, or cleanup." },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("thesis");
  const [scenarioId, setScenarioId] = useState("base");
  const [menuOpen, setMenuOpen] = useState(false);
  const [captureOpen, setCaptureOpen] = useState(false);
  const [captureName, setCaptureName] = useState("");
  const [captureEmail, setCaptureEmail] = useState("");
  const [captureError, setCaptureError] = useState("");

  const selectedScenario = useMemo(
    () => scenarios.find((scenario) => scenario.id === scenarioId) ?? scenarios[1],
    [scenarioId],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.35, 0.7] },
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  const handleExport = () => {
    setMenuOpen(false);
    setCaptureError("");
    setCaptureOpen(true);
  };

  const closeCapture = () => {
    setCaptureOpen(false);
    setCaptureError("");
  };

  const handleLeadSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = captureName.trim();
    const email = captureEmail.trim();
    if (name.length < 2) {
      setCaptureError("Enter your full name to continue.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setCaptureError("Enter a valid email address to continue.");
      return;
    }
    const link = document.createElement("a");
    link.href = downloadablePdf;
    link.download = "govcon-exit-playbook-100m.pdf";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setCaptureOpen(false);
    setCaptureError("");
  };

  return (
    <main className="site-shell">
      <aside className="signal-rail" aria-label="Playbook sections">
        <div className="rail-brand">
          <img src={brandMark} alt="Federal Signal mark" />
          <span>FS / 100</span>
        </div>
        <div className="rail-track" aria-hidden="true"><div className="rail-progress" style={{ height: `${Math.max(10, (navItems.findIndex((item) => item.id === activeSection) + 1) / navItems.length * 100)}%` }} /></div>
        <nav className="rail-nav">
          {navItems.map((item, index) => (
            <button key={item.id} className={activeSection === item.id ? "rail-link active" : "rail-link"} onClick={() => handleNav(item.id)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="rail-footer">EXIT<br />PLAYBOOK</div>
      </aside>

      <div className="page-content">
        <header className="topbar">
          <button className="mobile-brand" onClick={() => handleNav("thesis")} aria-label="Back to top">
            <img src={brandMark} alt="" />
            <span>THE $100M GOVCON EXIT PLAYBOOK</span>
          </button>
          <div className="topbar-lockup"><img src={brandMark} alt="" /><span>THE <strong>$100M</strong> GOVCON EXIT PLAYBOOK</span></div><div className="topbar-meta"><span className="status-dot" /> Strategic operating brief <span className="meta-divider" /> Sep 2026</div><button className="export-button" onClick={handleExport}><FileDown size={14} /> <span>Export PDF</span></button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle section menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {menuOpen && <nav className="mobile-menu"><button className="mobile-export" onClick={handleExport}><FileDown size={14} /><span>Download the complete playbook PDF</span></button>{navItems.map((item, index) => <button key={item.id} onClick={() => handleNav(item.id)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</button>)}</nav>}
        </header>

        <section id="thesis" className="hero-section section-anchor" style={{ backgroundImage: `linear-gradient(100deg, rgba(10,13,17,0.97) 0%, rgba(10,13,17,0.89) 54%, rgba(10,13,17,0.63) 100%), url(${heroTexture})` }}>
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-lockup"><img src={brandMark} alt="" /><div><span>FEDERAL SIGNAL</span><strong>$100M / GOVCON EXIT PLAYBOOK</strong></div></div>
              <div className="eyebrow"><span className="eyebrow-line" /> THESIS / 01</div>
              <h1>Build the asset<br /><em>buyers compete for.</em></h1>
              <p className="hero-lede">The $100M GovCon Exit Playbook turns government contracting complexity into a system for creating transferable cash flow, strategic scarcity, and exit leverage.</p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => handleNav("value-bridge")}>Inspect the value bridge <ArrowDownRight size={17} /></button>
                <button className="text-link" onClick={() => handleNav("action-plan")}>Start with the first 90 days <MoveRight size={16} /></button>
              </div>
            </div>
            <div className="hero-proof">
              <div className="proof-label">TARGET ENTERPRISE VALUE</div>
              <div className="proof-value">$100<span>M</span></div>
              <div className="proof-rule" />
              <div className="proof-grid">
                <div><span>BASE MULTIPLE</span><strong>12.5×</strong></div>
                <div><span>NORMALIZED EBITDA</span><strong>$8.0M</strong></div>
              </div>
              <p>Revenue gets attention. Transferable cash flow gets paid.</p>
              <div className="corner-mark top-left" /><div className="corner-mark bottom-right" />
            </div>
          </div>
          <div className="hero-footnote"><span>01</span><span>Government contracting is a market. A buyer-ready company is a product.</span><span>↓ Scroll to examine the proof</span></div>
        </section>

        <section id="value-bridge" className="paper-section section-anchor">
          <div className="section-intro split-intro">
            <div><div className="eyebrow dark"><span className="eyebrow-line" /> VALUE BRIDGE / 02</div><h2>Engineer the multiple.<br /><em>Protect the downside.</em></h2></div>
            <p>One target value. Three ways to underwrite it. The right question is not “How much revenue can we book?” It is “How much normalized EBITDA can a buyer trust—and what risk will they attach to it?”</p>
          </div>
          <div className="scenario-shell">
            <div className="scenario-tabs" role="tablist" aria-label="Valuation scenarios">
              {scenarios.map((scenario) => <button key={scenario.id} role="tab" aria-selected={scenario.id === scenarioId} className={scenario.id === scenarioId ? "scenario-tab active" : "scenario-tab"} onClick={() => setScenarioId(scenario.id)}>{scenario.label}<span>{scenario.multiple}</span></button>)}
            </div>
            <div className="scenario-main">
              <div className="scenario-target"><span className="tiny-label">ENTERPRISE VALUE / ALL CASES</span><strong>$100M</strong><p>{selectedScenario.description}</p></div>
              <div className="scenario-stat"><span>EXIT MULTIPLE</span><strong>{selectedScenario.multiple}</strong><small>quality-adjusted</small></div>
              <div className="scenario-stat"><span>REQUIRED EBITDA</span><strong>{selectedScenario.ebitda}</strong><small>normalized</small></div>
              <div className="scenario-stat"><span>REVENUE @ {selectedScenario.margin}</span><strong>{selectedScenario.revenue}</strong><small>sustainable margin</small></div>
            </div>
            <div className="scenario-footer"><div className="scenario-bar"><span style={{ width: scenarioId === "conservative" ? "68%" : scenarioId === "base" ? "76%" : "91%" }} /></div><div className="bar-labels"><span>OPERATING PROOF</span><span>STRATEGIC SCARCITY</span><span>BUYER CONFIDENCE</span></div></div>
          </div>
          <div className="value-drivers">
            <div className="driver-intro"><span className="vertical-number">06</span><h3>What buyers<br />actually buy</h3><p>A GovCon exit is a bundle of future cash flows and strategic options. Make every component legible.</p></div>
            <div className="driver-grid">{valueDrivers.map((driver) => { const Icon = driver.icon; return <article className="driver-card" key={driver.num}><div className="driver-top"><span>{driver.num}</span><Icon size={19} strokeWidth={1.5} /></div><h4>{driver.title}</h4><p>{driver.copy}</p></article>; })}</div>
          </div>
        </section>

        <section id="roadmap" className="ink-section section-anchor" style={{ backgroundImage: `linear-gradient(120deg, rgba(10,13,17,0.98), rgba(10,13,17,0.86)), url(${diagramTexture})` }}>
          <div className="section-intro roadmap-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> ROADMAP / 03</div><h2>Five years.<br /><em>Four operating shifts.</em></h2></div><div className="roadmap-aside"><span className="tiny-label">THE OPERATING THESIS</span><p>Scale only what can be delivered, audited, and transferred. The exit is an output of the system.</p></div></div>
          <div className="roadmap-list"><div className="datum-line" aria-hidden="true" />{roadmap.map((item, index) => <article className={index === 3 ? "roadmap-item current" : "roadmap-item"} key={item.phase}><div className="roadmap-index"><span className="index-bracket">[</span>{item.phase}<span className="index-bracket">]</span></div><div className="roadmap-body"><div className="roadmap-heading"><h3>{item.title}</h3><span>{item.period}</span></div><div className="roadmap-copy"><div><span className="goal-tag">{item.goal}</span><p>{item.copy}</p></div><div className="roadmap-metrics">{item.metrics.map((metric) => <span key={metric}><Check size={14} /> {metric}</span>)}</div></div></div><div className="roadmap-arrow"><ChevronRight size={19} /></div></article>)}</div>
        </section>

        <section id="scorecard" className="paper-section section-anchor scorecard-section">
          <div className="section-intro split-intro"><div><div className="eyebrow dark"><span className="eyebrow-line" /> SCORECARD / 04</div><h2>Leading indicators<br /><em>before the cliff.</em></h2></div><p>Run one integrated scorecard across finance, capture, delivery, and compliance. If the signal appears here, you still have time to act.</p></div>
          <div className="scorecard-table"><div className="table-datum" aria-hidden="true" />{scorecard.map((item) => <div className={`score-row ${item.tone}`} key={item.label}><div className="score-name"><span className="score-marker" />{item.label}</div><strong>{item.value}</strong><span>{item.note}</span></div>)}</div>
          <div className="callout"><CircleAlert size={20} /><p><strong>The founder-dependence test:</strong> if the founder disappeared for 90 days, would a sophisticated buyer still believe the company can win, deliver, collect cash, and remain compliant?</p><ArrowUpRight size={18} /></div>
        </section>

        <section id="diligence" className="ink-section section-anchor diligence-section">
          <div className="section-intro split-intro light"><div><div className="eyebrow"><span className="eyebrow-line" /> DILIGENCE / 05</div><h2>Make the risk<br /><em>easy to price.</em></h2></div><p>The buyer’s confidence is built before the buyer arrives. Assemble the evidence, label the uncertainty, and turn unknowns into controlled workstreams.</p></div>
          <div className="dossier-stamp">CONTROLLED / BUYER-READY</div><div className="diligence-layout"><div className="diligence-index"><span className="tiny-label">DATA ROOM / 08</span><div className="file-stack"><FileText size={68} strokeWidth={0.8} /><span>READY<br />WHEN<br />THEY<br />ASK</span></div><p>Credibility is a transaction asset. Every important claim should have a source document and an accountable executive.</p></div><div className="diligence-list">{diligenceRows.map((row, index) => <div className="diligence-row" key={row.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{row.title}</h3><p>{row.copy}</p></div><Check size={16} /></div>)}</div></div>
          <div className="red-flags"><div><span className="eyebrow"><span className="eyebrow-line" /> RED FLAGS / PRICE THEM EARLY</span><h3>Do not let a surprise<br /><em>become the deal.</em></h3></div><div className="flag-grid"><span>Unfunded backlog presented as committed work</span><span>One recompete creates the revenue cliff</span><span>Weak timekeeping or indirect cost allocation</span><span>Small-business status uncertainty</span><span>Founder is the only customer relationship</span><span>Cyber gap or undisclosed incident</span></div></div>
        </section>

        <section id="action-plan" className="paper-section section-anchor action-section">
          <div className="section-intro split-intro"><div><div className="eyebrow dark"><span className="eyebrow-line" /> ACTION PLAN / 06</div><h2>Start with the<br /><em>first 90 days.</em></h2></div><p>Momentum comes from operating truth. These first three sprints convert the $100M thesis from an aspiration into a management cadence.</p></div>
          <div className="action-grid"><div className="action-datum" aria-hidden="true" />{actionPlan.map((item, index) => <article className={index === 1 ? "action-card featured" : "action-card"} key={item.days}><div className="action-number"><span>SPRINT</span> {item.days}</div><div className="action-line" /><h3>{item.title}</h3><p>{item.copy}</p><button className="card-link" onClick={() => window.alert(`Sprint ${item.days}: ${item.title}. Add this to your operating review.`)}>Add to operating review <MoveRight size={15} /></button></article>)}</div>
          <div className="closing-block"><div className="closing-mark"><img src={brandMark} alt="" /></div><div><span className="eyebrow dark"><span className="eyebrow-line" /> FINAL DECISION</span><h2>Build the company<br /><em>that can be transferred.</em></h2><p>Revenue earns a seat at the table. Evidence, control, and a second layer of leadership earn the price.</p></div><button className="btn btn-dark" onClick={() => handleNav("thesis")}>Read the thesis again <ArrowUpRight size={17} /></button></div>
        </section>

        <footer className="site-footer"><div><span className="footer-code">FS / 100</span><p>THE $100M GOVCON EXIT PLAYBOOK</p><button className="footer-export" onClick={handleExport}><FileDown size={13} /> Download the complete PDF brief</button></div><div className="footer-disclaimer">Strategic planning content. Not financial, legal, tax, or government-contracting compliance advice. Review with qualified advisers before implementation.</div><div className="footer-ref">Source brief / September 2026</div></footer>
      </div>
      {captureOpen && <div className="capture-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeCapture(); }}><section className="capture-dialog" role="dialog" aria-modal="true" aria-labelledby="capture-title" aria-describedby="capture-description"><button className="capture-close" type="button" onClick={closeCapture} aria-label="Close PDF download form"><X size={18} /></button><div className="capture-kicker"><span className="capture-mark"><img src={brandMark} alt="" /></span><span>FEDERAL SIGNAL / PDF ACCESS</span></div><h2 id="capture-title">Take the brief<br /><em>with you.</em></h2><p id="capture-description">Enter your name and email to unlock the complete 16-page GovCon Exit Playbook PDF.</p><form onSubmit={handleLeadSubmit} noValidate><label><span>Full name</span><div className="capture-input"><UserRound size={16} /><input autoFocus value={captureName} onChange={(event) => setCaptureName(event.target.value)} placeholder="Jordan Smith" autoComplete="name" /></div></label><label><span>Email address</span><div className="capture-input"><Mail size={16} /><input type="email" value={captureEmail} onChange={(event) => setCaptureEmail(event.target.value)} placeholder="jordan@company.com" autoComplete="email" /></div></label>{captureError && <p className="capture-error" role="alert">{captureError}</p>}<button className="btn btn-primary capture-submit" type="submit"><FileDown size={16} /> Download the PDF</button></form><p className="capture-note"><ShieldCheck size={14} /> This version validates the form in-browser. Connect a CRM or secure endpoint to store submissions.</p></section></div>}
    </main>
  );
}
