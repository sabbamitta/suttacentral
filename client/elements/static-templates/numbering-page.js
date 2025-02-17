import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { staticStyles } from '../styles/static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class SCNumberingPage extends SCStaticPage {
  render() {
    return html`
    ${staticStyles}
    <style>
      .pre {
        @apply --sc-monospace-font;
        margin: var(--sc-size-xxl) var(--sc-size-md);
      }
    </style>
    <div id="page-wrap">
      <main>
        <section>
          <article>
            <h1>
              ${_`Sutta Numbering`}
            </h1>
            <p>
              ${_`For any student of Buddhist texts, one of the stumbling blocks is finding your way around. How do you get that sutta you want? This problem arises partly because there are simply so many texts, and partly because there are multiple editions of each text. The problem is compounded on SuttaCentral as we incorporate texts from multiple different canonical sources, and these have never before been presented as a combined edition.`}
            </p>
            <p>
              ${_`We try to use the simplest, most rational and consistent approach for our primary numbering system. This is fine for most people, and it is what we recommend when sharing or citing our texts. But some students will be wanting to look up references from different sources, so for their convenience we supply additional references.`}
            </p>
            <p>
              ${_`Here are the general principles we follow.`}
            </p>
            <ul>
              <li>
                ${_`Prefer the more widely accepted numbering system.`}
              </li>
              <li>
                ${_`Prefer semantic numbering based on meaningful structure of content (chapter/section), rather than by physical edition (volume/page).`}
              </li>
              <li>
                ${_`Enhance old numbering systems by adding granularity, without breaking compatibility.`}
              </li>
              <li>
                ${_`Make multiple referencing systems available where this is useful.`}
              </li>
              <li>
                ${_`The primary numbering system is used for the URLs, which are simple, stable, and meaningful.`}
              </li>
            </ul>
            <h2>
              ${_`Segmented Texts`}
            </h2>
            <p>
              ${_`We are implementing texts based on segments. This means that the root text is divided up into short pieces—typically a sentence or so—which is assigned a reference ID. Subsequent translations are matched with the original segment by segment, although the relation between text and translation for a particular segment need not be exact.`}
            </p>
            <p>
              ${_`These segmented texts will be first implemented for the new translations of the four nikāyas by Bhikkhu Sujato and the Vinaya by Bhikkhu Brahmali. We will gradually roll them out for additional texts. These are designed to be the basis for a new generation of translations going forward. Note that it is not easy to retrospectively match an old translation to the new segments; it must be done by hand, one segment at a time. So for the foreseeable future we will retain unsegmented texts.`}
            </p>
            <p>
              ${_`The segmented texts add additional granularity to existing reference systems. Let’s look at an example of how this works, taken from DN 1 Brahmajala. This text inherits the section numbering from the Pali Text Society Pali edition. This is from the tenth section, numbered dn1.10. This is then broken up into four segments, named dn1.10.1, dn1.10.2, etc. These same segment numbers apply to both text and translation. Here is how this looks in the underlying file, which uses the PO file type of the open source gettext translation system.`}
            </p>
            <div class="pre">
              ${_`<code> <p>#msgctxt "dn1:10.1"<br/> msgid "‘Bījagāmabhūtagāmasamārambhā paṭivirato samaṇo gotamo’ti—"<br/> msgstr "‘The ascetic Gotama refrains from injuring plants and seeds.’"</p> <p>#msgctxt "dn1:10.2"<br/> msgid "iti vā hi, bhikkhave … pe …."<br/> msgstr ""</p> <p>#msgctxt "dn1:10.3" #. VAR: virato → vikālabhojanā paṭivirato (pts1) | paṭivirato (katthaci)<br/> msgid "‘Ekabhattiko samaṇo gotamo rattūparato virato vikālabhojanā …."<br/> msgstr "‘He eats in one part of the day, abstaining from eating at night and food at the wrong time.’"</p> <p>#msgctxt "dn1:10.4"<br/> msgid "Naccagītavāditavisūkadassanā paṭivirato samaṇo gotamo …."<br/> msgstr "‘He refrains from dancing, singing, music, and seeing shows.’"</p> </code>`}
            </div>
            <p>
              ${_`A reference to DN 1.10 would indicate this whole passage, as in older editions. But we also add the ability to reference by smaller segments. Note that in dn1:10.3 there is a variant reading. In this way the segment numbers can be used as a convenient universal address for variants, comments, and the like, all of which are easily portable between text and translations in any language.`}
            </p>
            <h2>
              ${_`Pali`}
            </h2>
            <p>
              ${_`In most cases the numbering of Pali suttas is simple and consistent between editions. “DN 2” is always the second discourse of the Dīgha Nikāya, i.e. the Sāmaññaphala Sutta. However, there are a number of marginal and edge cases where differences emerge. These often occur because in the shorter discourses there are many abbreviations and repetitions, so it is not always clear exactly how the texts should be counted.`}
            </p>
            <p>
              ${_`Generally we follow the numbering found in our Pali edition, the Mahāsaṅgīti edition of the Sixth Council text, produced by the Dhamma Society. This is a revised and corrected version of the digital Sixth Council edition produced by the Vipassana Research Institute, and follows the same numbering system. In most cases this is compatible with the numbering used in the Pali Text Society (PTS) editions. However, in the more rarely used texts such as Abhidhamma the numbering may vary from the PTS. In addition, within the scope of the main nikāyas, note the following issues.`}
            </p>
            <h3>
              ${_`Two levels, not three, for AN 1 and AN 2`}
            </h3>
            <p>
              ${_`In the first two nipātas of AN the PTS numbering recognises three levels of grouping (for <i>nipāta</i>, <i>vagga</i>, <i>sutta</i>). In such cases we follow the widely accepted practice of dispensing with the second level. This involves applying a simple mechanical principle, illustrated in the following examples:`}
            </p>
            <ul>
              <li>
                ${_`AN 1.1.6 becomes AN 1.6`}
              </li>
              <li>
                ${_`AN 1.8.1 becomes AN 1.71`}
              </li>
              <li>
                ${_`AN 2.2.9 becomes AN 2.19`}
              </li>
            </ul>
            <p>
              ${_`Nevertheless, we still retain the three-level PTS numbers for reference.`}
            </p>
            <h3>
              ${_`Two editions for SN volume 1`}
            </h3>
            <p>
              ${_`For Volume i of SN, Sagātha-Vagga, there are two sets of volume/page numbers for each sutta. This is because this text was originally edited by Feer in 1884, with a new edition by Somaratne in 1998.`}
            </p>
            <h3>
              ${_`Use the Bodhi numbering for SN and AN`}
            </h3>
            <p>
              ${_`Throughout SN and AN we follow the sutta numbering adopted in Bhikkhu Bodhi’s English translations, which in some sections differs from the PTS numbering. This is a more rational system based mainly on what is found in native-script editions and the Chaṭṭha Saṅgāyana edition. Here again, wherever there is a difference, both numbers are shown. The sections affected in this way are the following:`}
            </p>
            <ul>
              <li>
                ${_`SN: from SN 22.150 [SN 22.149] to end of <i>saṃyutta</i>`}
              </li>
              <li>
                ${_`from SN 35.136 [SN 35.135] to end of <i>saṃyutta</i>`}
              </li>
              <li>
                ${_`from SN 36.26 [SN 36.25] to end of <i>saṃyutta</i>`}
              </li>
              <li>
                ${_`AN: from AN 1.98 [AN 1.10.1] to end of <i>nipāta</i>`}
              </li>
              <li>
                ${_`from AN 2.23 [AN 2.3.3 + 2.3.4] to end of <i>nipāta</i>`}
              </li>
              <li>
                ${_`from AN 3.34 [AN 3.33] to end of <i>nipāta</i>`}
              </li>
              <li>
                ${_`from AN 4.227 [AN 4.226] to end of <i>nipāta</i>`}
              </li>
              <li>
                ${_`from AN 7.19 [AN 7.17] to end of <i>nipāta</i>`}
              </li>
              <li>
                ${_`from AN 10.211 [AN 10.200] to end of <i>nipāta</i>`}
              </li>
              <li>
                ${_`from AN 11.8 [AN 11.9] to end of <i>nipāta</i>`}
              </li>
            </ul>
            <p>
              ${_`For example, in the PTS edition of SN, the sutta titled “Etaṃ mama” in Khandha-saṃyutta is numbered SN 22.150; and in Bhikkhu Bodhi’s English translation (as also in several native-script editions of the Pali text) this sutta is instead numbered SN 22.151. In most cases there is no such ambiguity about the sutta number and therefore no alternative number.`}
            </p>
            <h3>
              ${_`Multiple sets of verse numbers`}
            </h3>
            <p>
              ${_`Verse numbers for texts such as the Dhammapada, Sutta Nipāta, and Thera- and Therīgāthā vary slightly from the PTS editions. This is sometimes due to different editorial choices in the breaking of verses, and sometimes due to different handling of abbreviations. We include the PTS numbers for reference.`}
            </p>
            <p>
              ${_`Note, too, that the Sutta Nipāta may be referenced either by simple verse count from the beginning of the collection, or by chapter and sutta number, with verse count per sutta.`}
            </p>
            <h3>
              ${_`Section numbering`}
            </h3>
            <p>
              ${_`Our texts adopt the section numbering system first implemented for DN by the PTS Pali edition, and for MN by Bhikkhu Ñāṇamoḷi, as adopted by Bhikkhu Bodhi. For the Vinaya, likewise, we adopt the section numbering of the PTS edition.`}
            </p>
            <p>
              ${_`For other texts, the PTS editions generally do not use a section system. Here we adopt numbering per paragraph. This inherits the system as used in the Mahāsaṅgīti edition, although we implement it more simply.`}
            </p>
            <h2>
              ${_`Chinese`}
            </h2>
            <p>
              ${_`Modern referencing for Chinese texts is almost always based on the Taishō edition. This is convenient, in that it offers a consistent approach, and with the use of line numbers, allows for higher granular referencing. However, it has the drawback of being bound to a particular paper edition. Line references have no relation to the semantic structure of the text. In addition, references to Taishō texts are typically redundant, specifying both the volume/page and the sūtra number. This might be helpful in a printed edition, but it is clumsy to handle in a digital text. Further, the Taishō relies heavily on the <i>juan</i> or “folio” for structuring texts, which again is entirely a print-bound convention.`}
            </p>
            <p>
              ${_`Our Chinese texts are adapted from CBETA, a digital edition of the Taishō canon. We inherit the classic Taishō system, and this is fully available. However, for our primary numbering, rather than copying the Taishō literally, we organize the texts by semantic structure, so that they may be coordinated with their parallels in Pali and other languages. Here is an overview of the main texts.`}
            </p>
            <ul>
              <li>
                ${_`For the major āgamas, we give the sutra number per āgama. Thus da1 is the first sutra in the Dīrghāgama, which is volume one, sutra one of the Taishō.`}
              </li>
              <li>
                ${_`For texts outside the āgamas, such as the “independent” sutras, we give the Taishō sutra number.`}
              </li>
              <li>
                ${_`For vinaya texts, we assign each an ID that specifies the school, division, and language. Thus lzh-mg-bu-vb-pj1 is “the Chinese text of the Mahāsaṅghika Bhikkhu Vibhaṅga, first <i>pārājika</i> rule”.`}
              </li>
            </ul>
            <h2>
              ${_`Tibetan`}
            </h2>
            <p>
              ${_`For Tibetan, we use the numbering of the Derge edition, based on the online editions. However, as for the Chinese, we apply semantic divisions where this is useful, most importantly in the Upāyika. Here we follow the sutra numbering.`}
            </p>
            <h2>
              ${_`Sanskrit and other`}
            </h2>
            <p>
              ${_`The other texts on the site are drawn from a variety of different sources and do not constitute a coherent canon. Thus there is no simple numbering system that applies across the board. Here we simply refer to texts using our own arbitrary system.`}
            </p>
          </article>
        </section>
      </main>
    </div>`;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_numbering-page';
  }
}


customElements.define('sc-numbering-page', SCNumberingPage);
