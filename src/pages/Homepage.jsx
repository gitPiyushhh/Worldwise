import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from './../components/PageNav'

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section style={{height: '100%', position: 'relative'}}>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to='./app' className="cta">Start trekking now</Link>
        
        {/* <Link to='https://piyushsultaniya.netlify.app/' style={{position: 'absolute', bottom: 0, width: '96.5vw', backgroundColor: 'white', padding: '1.2rem', fontSize: '1.4rem', textDecoration: 'none', color: 'black'}}>Created with ❤️ by Piyush</Link> */}
      </section>
    </main>
  );
}
