import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { staticStyles } from '../styles/static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class SCStart extends SCStaticPage {
  render() {
    return html`
    ${staticStyles}
    <div id="page-wrap">
      <main>
        <section>
          <article>
            <h1>
              ${_`Getting Started`}
            </h1>
            <p>
              ${_`When it comes to reading suttas, there are as many approaches as there are readers. The single most helpful thing to understand the suttas is a good teacher. As it says in the Boat Sutta (Snp 2.8):`}
            </p>
            <blockquote class="gatha">
              <p>
                ${_`Like one who has embarked on a strong boat,<br/> complete with oars and rudder,<br/> a person wise and skilled in means<br/> can bring many others across.`}
              </p>
            </blockquote>
            <p>
              ${_`Here we’ll offer a few tips and resources which might be helpful for people taking their first steps.`}
            </p>
            <h2>
              ${_`Good habits`}
            </h2>
            <p>
              ${_`Here are some reflective pieces about developing a regular practice of reading suttas.`}
            </p>
            <ul>
              <li>
                ${_`<strong><a href="https://discourse.suttacentral.net/t/how-to-read-the-suttas/6676" rel="noopener" target="_blank">How to Read the Suttas</a>:</strong> Words of experience by Bhante Sujato.`}
              </li>
              <li>
                ${_`<strong><a href="http://www.accesstoinsight.org/befriending.html" rel="noopener" target="_blank">Befriending the Suttas</a>:</strong> A classic guide found on the original sutta site, Access to Insight.`}
              </li>
              <li>
                ${_`<strong><a href="https://readingfaithfully.org/" rel="noopener" target="_blank">Reading Faithfully</a>:</strong> A website devoted to supporting a deeper, more emotional connection with the suttas.`}
              </li>
              <li>
                ${_`<strong><a href="https://app.box.com/shared/yifyua1nr2" rel="noopener" target="_blank">Guidelines for Sutta Reading</a>:</strong> The Sacred Mountain Sangha offers guidelines for contemplative sutta reading in a group and on your own, with instruction from Peter Woods.`}
              </li>
            </ul>
            <h2>
              ${_`Structured courses and guides`}
            </h2>
            <p>
              ${_`Some people prefer a more free-flowing, inuitive approach, but for others, a well structured course is just right.`}
            </p>
            <ul>
              <li>
                ${_`<strong><a href="https://bhikkhucintita.wordpress.com/2017/05/02/new-textbook-buddhist-lifebuddhist-path/" rel="noopener" target="_blank">Buddhist Life/Buddhist Path</a>:</strong> Bhikkhu Cintita has put together this comprehensive introduction based on many years’ experience of teaching courses on the early texts. It’s divided into two books: <cite>Buddhist Life</cite> for the foundational teachings and <cite>Buddhist Path</cite> for systematic training in the higher path leading to awakening. Each book can be studied independently and in either order.`}
              </li>
              <li>
                ${_`<strong><a href="http://www.wisdompubs.org/book/buddha%E2%80%99s-words" rel="noopener" target="_blank">In the Buddha’s Words</a>:</strong> Bhikkhu Bodhi presents selected discourses of the Buddha from the Pali Canon, the earliest record of what the Buddha taught. Divided into ten thematic chapters, <cite>In the Buddha’s Words</cite> reveals the full scope of the Buddha’s discourses, from family life and marriage to renunciation and the path of insight. A concise, informative introduction precedes each chapter, guiding the reader toward a deeper understanding of the texts that follow. The readings and introductions may be found on SuttaCentral’s forum <a href="https://discourse.suttacentral.net/t/in-the-buddha-s-words/29" rel="noopener" target="_blank">here</a>.`}
              </li>
              <li>
                ${_`<strong><a href="https://archive.org/details/guidetotipitaka029042mbp" rel="noopener" target="_blank">Guide To Tipitaka</a>:</strong> Sayagyi U Ko Lay’s classic survey of the entire Pali canon. This gives a descriptive overview from a Theravada perspective, summarizing each section and many individual texts. It’s especially handy if you encounter a new book in the canon and want to learn some more about it.`}
              </li>
              <li>
                ${_`<strong><a href="http://dharmafarer.org/wordpress/sutta-discovery" rel="noopener" target="_blank">The Sutta Discovery Series</a>:</strong> For many years, senior teacher Piya Tan has been giving sutta classes with detailed notes, translating texts himself from the Pali. This invaluable resource is entirely available online.`}
              </li>
            </ul>
            <h2>
              ${_`Listen to the suttas`}
            </h2>
            <p>
              ${_`There’s a range of sources providing audio and/or video for the suttas, including readings, classes, and vlogs.`}
            </p>
            <ul>
              <li>
                ${_`<strong><a href="https://www.youtube.com/watch?v=KuOOmGfebV8" rel="noopener" target="_blank">5 Funny Buddhist Suttas That Have a Great Message</a>:</strong> Mindah-Lee Kumar (aka “The Enthusiastic Buddhist”) shows how the Buddha used humor to make a point.`}
              </li>
              <li>
                ${_`<strong><a href="https://www.youtube.com/watch?v=z4pyC8vwOjU&amp;list=PLf9HOK_Rf1M5Z9I_amhqlldGiFL7dVSJb" rel="noopener" target="_blank">BSWA sutta classes</a>:</strong> For many years, the monks and nuns of Bodhinyana and Dhammasara, including Ajahn Brahm, have been giving sutta classes. They’re available on Youtube.`}
              </li>
              <li>
                ${_`<strong><a href="https://discourse.suttacentral.net/c/av" rel="noopener" target="_blank">SuttaCentral forum</a>:</strong> Our forum is a place where anyone can upload or link to resources on the suttas. There are plenty of readings, chanting, and classes.`}
              </li>
            </ul>
            <h2>
              ${_`Join a reading group`}
            </h2>
            <p>
              ${_`There are many reading groups for suttas, both local and online. A journey is always best if you’ve got others to share it with.`}
            </p>
            <p>
              ${_`We won’t link to any here, as they tend to be local and transient. But ask around your local centers or social media, or on our forum, and chances are you’ll find something. If there’s nothing in your area, why not start a group yourself?`}
            </p>
            <h2>
              ${_`Discuss & Discover, SuttaCentral’s forum`}
            </h2>
            <p>
              ${_`We’ve built a vibrant, diverse community of folks interested in the suttas. You’re welcome to ask questions, read essays, and join the conversation <a href="https://discourse.suttacentral.net/" rel="noopener" target="_blank">here</a>.`}
            </p>
            <h2>
              ${_`Just jump in`}
            </h2>
            <p>
              ${_`Sure, a structured course is a good way to get an overview of the teachings. But life isn’t structured. The Buddha didn’t teach everything from A–Z, he responded to the needs of those he was with. Sometimes the things we learn most from are random; a phrase we happen to overhear, or a word that comes at just the right time.`}
            </p>
            <p>
              ${_`So why not just try a random sutta? Or search to see what the Buddha had to say about cats?`}
            </p>
            <h2>
              ${_`Read them all`}
            </h2>
            <p>
              ${_`There are a lot of suttas. But not <em>that</em> many. A few years of a regular reading habit and you should be able to read all the suttas in translation. Why not?`}
            </p>
          </article>
        </section>
      </main>
    </div>`;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_start-page';
  }
}


customElements.define('sc-start', SCStart);
