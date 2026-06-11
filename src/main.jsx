import React from 'react';
import { createRoot } from 'react-dom/client';
import { Baby, Coffee, MapPin, Users, Menu, X, Milk, Accessibility, Sparkles, Armchair, Droplets, ShieldAlert } from 'lucide-react';
import './styles.css';
import logo from './assets/logo.png';
import logo100 from './assets/logo100.png';

const guidePlaces = [
  {
    name: 'Darwin Centre Costa',
    area: 'Darwin Shopping Centre',
    summary: 'A dependable infant-mode stop: easy pram access, useful facilities, and staff who handle parent chaos well.',
    facilities: {
      toilets: '1 standard + 1 accessible',
      changing: '1 in-store, backup downstairs in the centre',
      highChairs: 'Around 3',
      hotWater: 'Provided happily, without fuss',
    },
    ratings: [
      { icon: '🚼', label: 'Pram Access', status: 'green', title: 'Roll in like you own the place', note: 'Mostly straightforward. A few spots may require someone to shift a chair.' },
      { icon: '👶', label: 'Changing Facilities', status: 'green', title: 'Staff would roll up their sleeves', note: 'Stable and usable. Bring a cover, because you are still a parent with standards.' },
      { icon: '🍼', label: 'Bottle Support', status: 'green', title: 'Happy to help', note: 'Hot water available without question.' },
      { icon: '🤱', label: 'Breastfeeding Comfort', status: 'green', title: 'No one bats an eye', note: 'Not uncommon, and not treated as a spectacle.' },
      { icon: '👥', label: 'Customer Tolerance', status: 'green', title: 'Life continues', note: 'High tolerance. Baby noise does not seem to bother regulars much.' },
      { icon: '🚨', label: 'Emergency Parent Score', status: 'green', title: "You've got this", note: 'If you need a change, feed, toilet and coffee, this is serviceable.' },
    ],
  },
];

const trafficLegend = [
  ['green', 'Yes', 'No planning spiral required.'],
  ['yellow', 'With planning / help', 'Possible, but think before entering.'],
  ['red', 'No chance', 'Technically possible does not count.'],
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [
    ['About', '#about'],
    ['Meetups', '#meetups'],
    ['Parents Guide', '#guide'],
    ['FAQ', '#faq'],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Coffee With Dad home">
        <img src={logo100} alt="Coffee With Dad" className="brand-logo" />
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Shrewsbury parent meetups</p>
        <h1>Get out of the house. Drink a coffee. Meet other parents.</h1>
        <p className="hero-text">Coffee With Dad is a simple local meet-up for dads, children, and anyone navigating town with a small human and a questionable sleep schedule.</p>
        <div className="button-row">
          <a className="button primary" href="#meetups">Meetup info</a>
          <a className="button secondary" href="#guide">Explore the guide</a>
        </div>
        <p className="small-note">No memberships. No fees. No weird organisation energy.</p>
      </div>
      <div className="hero-image">
        <img
          src={logo}
          alt="Coffee With Dad"
          className="hero-logo"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section two-col" id="about">
      <div>
        <p className="eyebrow">What is this?</p>
        <h2>Coffee, children, and an attempt at adult conversation.</h2>
      </div>
      <div className="panel">
        <p>Coffee With Dad started as a Friday tradition: one dad, one baby, and one coffee. It is now a small local community for parents who want a reason to leave the house and meet people without turning it into a formal event.</p>
        <p>It is not complicated. Bring yourself, bring the child if applicable, buy your own drink, and accept that somebody will probably need a nappy change at the least convenient moment.</p>
      </div>
    </section>
  );
}

function Meetups() {
  return (
    <section className="section" id="meetups">
      <p className="eyebrow">Meetups</p>
      <h2>Simple by design.</h2>
      <div className="cards three">
        <InfoCard icon={<MapPin />} title="Where" text="Usually Shrewsbury town centre. The Square and Darwin Centre Costa are practical starting points." />
        <InfoCard icon={<Baby />} title="Who" text="Dads, babies, children, and parent-shaped humans. Mums are not banished to the shadow realm." />
        <InfoCard icon={<Users />} title="How to join" text="Use the Facebook group or WhatsApp community for current dates and practical updates." />
      </div>
      <div className="button-row spaced">
        <a className="button primary" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook group</a>
        <a className="button secondary" href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">WhatsApp community</a>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text }) {
  return <article className="info-card"><div className="card-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}

function Guide() {
  const place = guidePlaces[0];
  return (
    <section className="section guide-section" id="guide">
      <div className="guide-heading">
        <div>
          <p className="eyebrow">Parents Guide</p>
          <h2>Places reviewed for the things parents actually notice.</h2>
          <p>Not just “is the coffee nice?” More “can I survive here with a baby, a pram, and a bag full of emergency cloths?”</p>
        </div>
        <div className="legend">
          {trafficLegend.map(([status, title, note]) => (
            <div key={status}><span className={`dot ${status}`} /> <strong>{title}</strong><small>{note}</small></div>
          ))}
        </div>
      </div>

      <article className="review-card">
        <div className="review-header">
          <div>
            <h3>{place.name}</h3>
            <p>{place.area}</p>
          </div>
          <span className="badge">Infant mode</span>
        </div>
        <p className="review-summary">{place.summary}</p>
        <div className="facility-grid">
          <Facility icon={<Droplets />} label="Toilets" value={place.facilities.toilets} />
          <Facility icon={<Baby />} label="Changing" value={place.facilities.changing} />
          <Facility icon={<Armchair />} label="High chairs" value={place.facilities.highChairs} />
          <Facility icon={<Milk />} label="Bottle support" value={place.facilities.hotWater} />
        </div>
        <div className="ratings-grid">
          {place.ratings.map((rating) => <Rating key={rating.label} {...rating} />)}
        </div>
      </article>
    </section>
  );
}

function Facility({ icon, label, value }) {
  return <div className="facility"><div className="facility-icon">{icon}</div><div><strong>{label}</strong><p>{value}</p></div></div>;
}

function Rating({ icon, label, status, title, note }) {
  return (
    <div className={`rating ${status}`}>
      <div className="rating-top"><span>{icon}</span><strong>{label}</strong></div>
      <h4>{title}</h4>
      <p>{note}</p>
    </div>
  );
}

function EasterEgg() {
  const [coffee, setCoffee] = React.useState(0);
  const [awake, setAwake] = React.useState(false);
  const [message, setMessage] = React.useState('Baby sleeping. Coffee possible.');

  const drinkCoffee = () => {
    if (awake) return;
    const nextCoffee = coffee + 1;
    const wakeChance = Math.min(0.12 + nextCoffee * 0.07, 0.78);
    if (Math.random() < wakeChance) {
      setAwake(true);
      setMessage('BABY HAS AWAKENED. Deploy snacks, songs, or surrender.');
    } else {
      setCoffee(nextCoffee);
      setMessage(nextCoffee > 5 ? 'You are flying too close to the sun.' : 'Still asleep. Dangerous confidence rising.');
    }
  };

  const reset = () => {
    setCoffee(0);
    setAwake(false);
    setMessage('Baby sleeping. Coffee possible.');
  };

  return (
    <section className="section easter" id="easter-egg">
      <p className="eyebrow">Tiny unnecessary game</p>
      <h2>Don’t Wake The Baby</h2>
      <div className={awake ? 'baby-game awake' : 'baby-game'}>
        <div className="baby-emoji">{awake ? '😭' : '😴'}</div>
        <p className="coffee-count">Coffees attempted: {coffee}</p>
        <p>{message}</p>
        <div className="button-row centre">
          <button className="button primary" onClick={drinkCoffee} disabled={awake}>☕ Drink coffee</button>
          <button className="button secondary" onClick={reset}>Reset</button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ['Do I need to book?', 'No. Current details should live in the Facebook group or WhatsApp community so nobody has to maintain a booking system while sleep deprived.'],
    ['Can mums come?', 'Yes. The dad focus matters, but this is not a checkpoint. Parents and carers are welcome.'],
    ['What age children?', 'Infants and younger children are the natural starting point. The guide will grow as the children become more mobile and more dangerous to nearby objects.'],
    ['Is this a formal organisation?', 'No. It is coffee, local knowledge, and the mild ambition of leaving the house.'],
  ];
  return <section className="section" id="faq"><p className="eyebrow">FAQ</p><h2>Questions before coffee.</h2><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>;
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Meetups />
        <Guide />
        <EasterEgg />
        <FAQ />
      </main>
      <footer className="footer">
        <span>Coffee With Dad - Shrewsbury</span>
        <span>Made with love, a baby sick stained shirt and minimum coffee.</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
