import React from 'react';
import { createRoot } from 'react-dom/client';
import { Baby, Coffee, MapPin, Users, Menu, X, Milk, Accessibility, Sparkles, Armchair, Droplets, ShieldAlert } from 'lucide-react';
import './styles.css';
import logo from './assets/logo.png';
import logo100 from './assets/logo100.png';
import dad from './assets/dad.jpg';
import host from './assets/host.png';
import son from './assets/vanya.jpeg';
import guidePlaces from './data/guidePlaces';

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
        <p className="eyebrow">Shrewsbury family meetups</p>
        <h1>Leave the house. <br></br> Drink coffee. <br></br> Meet fellow parents.</h1>
        <p className="hero-text">Coffee With Dad is a simple local meet-up for dads, children, and anyone navigating town with a small human and a questionable sleep schedule.</p>
        <div className="button-row">
          <a className="button primary" href="#meetups">Meetup info</a>
          <a className="button secondary" href="#guide">Explore the guide (WIP)</a>
        </div>
        <p className="small-note">No memberships. No fees. No commitments.</p>
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
        <p className="eyebrow">What is it?</p>
        <h2>Coffee, <br></br> children, <br></br>and an attempt at adult conversation.</h2>
      </div>
      <div className="panel">
        <p>Coffee With Dad started as a Friday tradition: one dad, one son and two coffees. The dad passed away, the son had a boy and the tradition became one dad, one son and one coffee.</p> 
        <p>It is now a small local community for parents who want a reason to leave the house and meet people without turning it into a formal event.</p>
        <p>It is not complicated. Bring yourself, bring the child or children if applicable, buy your own drink, and accept that somebody will probably need a nappy change at the least convenient moment.</p>
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
        <InfoCard icon={<MapPin />} title="Where" text="Shrewsbury town centre outside the old market hall - under it when raining" />
        <InfoCard icon={<Baby />} title="Who" text="Dads, babies, children, and parent-shaped humans. Mums are not blamed for leaving us to it, but they're also always welcome." />
        <InfoCard icon={<Users />} title="How to join" text="Use the Facebook group or WhatsApp community for current dates and practical updates." />
      </div>
      <div className="button-row spaced">
        <a className="button primary" href="https://www.facebook.com/groups/1668492864386326/" target="_blank" rel="noreferrer">Facebook group</a>
        <a className="button secondary" href="https://chat.whatsapp.com/BxxHdGIv4MR5Vrv1j4C0Am" target="_blank" rel="noreferrer">WhatsApp community</a>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text }) {
  return <article className="info-card"><div className="card-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}

function Guide() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const place = guidePlaces[activeIndex];

  const nextPlace = () => {
    setActiveIndex((current) => (current + 1) % guidePlaces.length);
  };

  const previousPlace = () => {
    setActiveIndex((current) =>
      current === 0 ? guidePlaces.length - 1 : current - 1
    );
  };

  return (
    <section className="section guide-section" id="guide">
      <div className="guide-heading">
        <div>
          <p className="eyebrow">Parents Guide (WIP)</p>
          <h2>Places reviewed for the things parents actually notice.</h2>
          <p>
            Not “is the coffee nice?” More “can I survive here with a baby, a
            pram, and a bag full of emergency cloths?”
          </p>
        </div>

        <div className="legend">
          <div><span className="dot easy" /> <strong>No problem</strong><small>Low parent energy required.</small></div>
          <div><span className="dot effort" /> <strong>With energy</strong><small>Possible, but plan before entering or take help.</small></div>
          <div><span className="dot avoid" /> <strong>Just no</strong><small>Technically possible does not count.</small></div>
        </div>
      </div>

      <div className="review-deck">
        {guidePlaces.length > 1 && (
          <>
            <div className="deck-card ghost ghost-one" />
            <div className="deck-card ghost ghost-two" />
          </>
        )}

        <article className="review-card active-review-card" key={place.name}>
          <div className="review-header">
            <div>
              <h3>{place.name}</h3>
              <p>{place.area}</p>
            </div>
            <span className="badge">{place.mode}</span>
          </div>

          <p className="review-summary">{place.summary}</p>

          <div className="facility-grid">
            <Facility icon={<Droplets />} label="Toilets" value={place.facilities.toilets} />
            <Facility icon={<Baby />} label="Changing" value={place.facilities.changing} />
            <Facility icon={<Armchair />} label="High chairs" value={place.facilities.highChairs} />
            <Facility icon={<Milk />} label="Bottle support" value={place.facilities.hotWater} />
          </div>

          <div className="ratings-grid">
            {place.ratings.map((rating) => (
              <Rating key={rating.label} {...rating} />
            ))}
          </div>
        </article>
      </div>

      <div className="deck-controls">
        <button className="button secondary" onClick={previousPlace} disabled={guidePlaces.length <= 1}>
          Previous
        </button>
        <span>
          {activeIndex + 1} / {guidePlaces.length}
        </span>
        <button className="button primary" onClick={nextPlace} disabled={guidePlaces.length <= 1}>
          Next
        </button>
      </div>
    </section>
  );
}

function Facility({ icon, label, value }) {
  return <div className="facility"><div className="facility-icon">{icon}</div><div><strong>{label}</strong><p>{value}</p></div></div>;
}

function Rating({ icon, label, verdict, title, note }) {
  return (
    <div className={`rating ${verdict}`}>
      <div className="rating-top">
        <span>{icon}</span>
        <strong>{label}</strong>
      </div>
      <span className={`verdict-pill ${verdict}`}>{title}</span>
      <p>{note}</p>
    </div>
  );
}

function StoryBehindName() {
  const people = [
    {
      image: dad,
      title: "The Original Dad",
      text: "The reason the tradition exists.",
      note: "Occasionally mistaken for Joey from Friends.",
    },
    {
      image: host,
      title: "The Current Dad",
      text: "If you're looking for the organiser, this is the one you're looking for.",
      note: "Usually near coffee. Often near a pram. Frequently supervised by a cat.",
    },
    {
      image: son,
      title: "The Current Son",
      text: "Chief coffee companion and future guide reviewer.",
      note: "Has neither picked his house, his starter Pokémon, nor his Warhammer faction yet.\n\n He's going to be a footballer, isn't he...",
    },
  ];

  return (
    <section className="section story-section" id="story">
      <div className="story-layout">
        <div>
          <p className="eyebrow">The story behind the name</p>
          <h2>Coffee With Dad started long before the group existed.</h2>
        </div>

        <div className="story-card">
          <p>
            It was simply what the name suggests, without embellishment. My dad and I
            met for coffee whenever I was in Britain and, when I was living abroad,
            we'd often have one virtually instead. Most Fridays, one way or another,
            we'd have a coffee and a chat.
          </p>
          <p>
            When my dad passed away, I continued the tradition on my own for a while.
          </p>
          <p>
            Then my son was born. Now he and I go for coffee every Friday, usually at
            Costa in the Darwin Centre at around 1pm.
          </p>
          <p>What started as one dad and one son became another dad and another son. Let's see how big it grows from there.</p>
        </div>
      </div>

      <div className="people-grid">
        {people.map((person) => (
          <article className="person-card" key={person.title}>
            <img src={person.image} alt={person.title} />
            <div>
              <h3>{person.title}</h3>
              <p>{person.text}</p>
              <small>{person.note}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ['Do I need to book?', 'No. Current details should live in the Facebook group so nobody has to maintain a booking system while sleep deprived.'],
    ['Can mums come?', 'Of course. The dad focus matters, but this is not a checkpoint. All parents and carers are welcome.'],
    ['What age children?', 'Infants and younger children are the natural starting point. The in progress guide will grow with the host\'s child who is currently 8 weeks old'],
    ['Is this a formal organisation?', 'No. It is coffee, local knowledge, and the mild ambition of leaving the house. It grew big enough a website felt necessary though.'],
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
        <StoryBehindName />
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
