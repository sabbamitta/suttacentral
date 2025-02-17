import { html } from 'lit-element';

export const textHeadingStyles = html`
<style>

  [lang="he"] .sutta h1, [lang="he"] .sutta h2, [lang="he"] .sutta h3 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
  }

  [lang="fa"] .sutta h1, [lang="ar"] .sutta h1, 
  [lang="hi"] .sutta h1, [lang="mr"] .sutta h1, 
  [lang="my"] .sutta h1, [lang="si"] .sutta h1,
  [lang="ta"] .sutta h1, [lang="th"] .sutta h1,
  [lang="xct"] .sutta h1, [lang="ev"] .sutta h1,
  [lang="kln"] .sutta h1, [lang="au"] .sutta h1,
  [lang="bn"] .sutta h1 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-h1-md;
  }

  [lang="vu"] .sutta h1 {
    font-family: inherit;
    @apply --sc-tall-font-size-h1-md;
  }

  [lang="zh"] .sutta h1, [lang="lzh"] .sutta h1, 
  [lang="ko"] .sutta h1, [lang="jpn"] .sutta h1 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
    @apply --sc-dense-font-size-h1-md;
  }

  [lang="vi"] .sutta h1 {
    @apply --sc-tall-font-size-h1-md;
  }

  [lang="fa"] .sutta h2, [la2ng="ar"] .sutta h2, 
  [lang="hi"] .sutta h2, [lang="mr"] .sutta h2, 
  [lang="my"] .sutta h2, [lang="si"] .sutta h2,
  [lang="ta"] .sutta h2, [lang="th"] .sutta h2,
  [lang="xct"] .sutta h2, [lang="ev"] .sutta h2,
  [lang="kln"] .sutta h2, [lang="vu"] .sutta h2,
  [lang="bn"] .sutta h2 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-static-subtitle;
  }

  [lang="zh"] .sutta h2, [lang="lzh"] .sutta h2, 
  [lang="ko"] .sutta h2, [lang="jpn"] .sutta h2 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
    @apply --sc-dense-font-size-static-subtitle;
  }

  [lang="vi"] .sutta h2 {
    @apply --sc-tall-font-size-static-subtitle;
  }

  [lang="fa"] .sutta h3, [la2ng="ar"] .sutta h3, 
  [lang="hi"] .sutta h3, [lang="mr"] .sutta h3, 
  [lang="my"] .sutta h3, [lang="si"] .sutta h3,
  [lang="ta"] .sutta h3, [lang="th"] .sutta h3,
  [lang="xct"] .sutta h3, [lang="ev"] .sutta h3,
  [lang="kln"] .sutta h3, [lang="vu"] .sutta h3,
  [lang="bn"] .sutta h3 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-xl;
  }

  [lang="zh"] .sutta h3, [lang="lzh"] .sutta h3, 
  [lang="ko"] .sutta h3, [lang="jpn"] .sutta h3 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
    @apply --sc-dense-font-size-xl;
  }

  [lang="vi"] .sutta h3 {
    @apply --sc-tall-font-size-xl;
  }

  [lang="fa"] .sutta h4, [la2ng="ar"] .sutta h4, 
  [lang="hi"] .sutta h4, [lang="mr"] .sutta h4, 
  [lang="my"] .sutta h4, [lang="si"] .sutta h4,
  [lang="ta"] .sutta h4, [lang="th"] .sutta h4,
  [lang="xct"] .sutta h4, [lang="ev"] .sutta h4,
  [lang="bn"] .sutta h4 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-l;
  }

  [lang="zh"] .sutta h4, [lang="lzh"] .sutta h4, 
  [lang="ko"] .sutta h4, [lang="jpn"] .sutta h4 {
    font-family: inherit;
    @apply --sc-transform-caps-to-bold;
    @apply --sc-dense-font-size-l;
  }

  [lang="vi"] .sutta h4 {
    @apply --sc-tall-font-size-l;
  }

  [lang="vi"] .sutta h5, [lang="vi"] .sutta h6 {
    @apply --sc-tall-font-size-md;
  }

  h1 [lang="pli-Sinh"], h2 [lang="pli-Sinh"],
  h3 [lang="pli-Sinh"], h4 [lang="pli-Sinh"],
  .sinhala-script h1 .word, .sinhala-script h2 .word,
  .sinhala-script h3 .word, .sinhala-script h4 .word {
    @apply --sc-sinhala-serif-font;
  }

  h1 [lang="pli-Deva"], h2 [lang="pli-Deva"],
  h3 [lang="pli-Deva"], h4 [lang="pli-Deva"],
  .devanagari-script h1 .word, .devanagari-script h2 .word,
  .devanagari-script h3 .word, .devanagari-script h4 .word {
    @apply --sc-devanagari-serif-font;
  }

  h1 [lang="pli-Thai"], h2 [lang="pli-Thai"],
  h3 [lang="pli-Thai"], h4 [lang="pli-Thai"],
  .thai-script h1 .word, .thai-script h2 .word,
  .thai-script h3 .word, .thai-script h4 .word {
    @apply --sc-thai-serif-font;
  }

  h1 [lang="pli-Mymr"], h2 [lang="pli-Mymr"],
  h3 [lang="pli-Mymr"], h4 [lang="pli-Mymr"],
  .myanmar-script h1 .word, .myanmar-script h2 .word,
  .myanmar-script h3 .word, .myanmar-script h4 .word {
    @apply --sc-myanmar-serif-font;
  }

  h1 [lang="pli-Sinh"], .sinhala-script h1 .word,
  h1 [lang="pli-Deva"], .devanagari-script h1 .word,
  h1 [lang="pli-Thai"], .thai-script h1 .word,
  h1 [lang="pli-Mymr"], .myanmar-script h1 .word {
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-h1-md;
  }

  h2 [lang="pli-Sinh"], .sinhala-script h2 .word,
  h2 [lang="pli-Deva"], .devanagari-script h2 .word,
  h2 [lang="pli-Thai"], .thai-script h2 .word,
  h2 [lang="pli-Mymr"], .myanmar-script h2 .word {
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-static-subtitle;
  }

  h3 [lang="pli-Sinh"], .sinhala-script h3 .word,
  h3 [lang="pli-Deva"], .devanagari-script h3 .word,
  h3 [lang="pli-Thai"], .thai-script h3 .word,
  h3 [lang="pli-Mymr"], .myanmar-script h3 .word {
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-xl;
  }

  h4 [lang="pli-Sinh"], .sinhala-script h4 .word,
  h4 [lang="pli-Deva"], .devanagari-script h4 .word,
  h4 [lang="pli-Thai"], .thai-script h4 .word,
  h4 [lang="pli-Mymr"], .myanmar-script h4 .word {
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-l;
  }

  h5 [lang="pli-Sinh"], .sinhala-script h5 .word,
  h5 [lang="pli-Deva"], .devanagari-script h5 .word,
  h5 [lang="pli-Thai"], .thai-script h5 .word,
  h5 [lang="pli-Mymr"], .myanmar-script h5 .word, 
  h6 [lang="pli-Sinh"], .sinhala-script h6 .word,
  h6 [lang="pli-Deva"], .devanagari-script h6 .word,
  h6 [lang="pli-Thai"], .thai-script h6 .word,
  h6 [lang="pli-Mymr"], .myanmar-script h6 .word {
    @apply --sc-transform-caps-to-bold;
    @apply --sc-tall-font-size-md;
  }

  .sutta h1, .sutta h2, .sutta h3, .sutta h4, .sutta h5, .sutta h6, .hgroup p, .subheading {
    text-align: center;
    font-weight: normal;
    font-style: normal;
  }

  h1, h1 a, h2, h2 a, h3, h3 a, h4, h4 a, h5, h5 a, h6, h6 a, .hgroup p, .hgroup p a {
    color: var(--sc-secondary-text-color);
  }

  /* This is the defaults for texts using a skolar font */

  .sutta h1, .sutta h2, .sutta h3, .sutta h4, .sutta h5, .sutta h6 {
    @apply --sc-serif-font;
    @apply --sc-mixed-small-caps;
    white-space: initial;
  }

  h1 {
    @apply --paper-font-display1;

  }

  h2 {
    @apply --paper-font-headline;
  }

  h3 {
    @apply --paper-font-title;
  }

  h4 {
    @apply --paper-font-subhead;
    @apply --sc-skolar-font-size-l;
  }

  h5 {
    @apply --paper-font-subhead;
  }

  h6 {
    text-align: left;
    @apply --sc-all-small-caps;
    @apply --paper-font-subhead;
  }

  .hgroup p,
  .hgroup p sc-seg.original-text {
    @apply --sc-sans-font;
    @apply --sc-skolar-font-size-md;
    @apply --sc-all-small-caps;
    margin: 0;
    padding: 0;
  }

  .draft-notice {
    background-color: var(--sc-secondary-background-color);
    padding: var(--sc-size-md);
    display: table;
    @apply --sc-sans-font;
    @apply --sc-skolar-font-size-md;
    margin: var(--sc-size-md) auto 0;
    border-radius: var(--sc-size-xxs);
    @apply --shadow-elevation-2dp;
    font-feature-settings: initial;
    letter-spacing: normal;
    line-height: initial;
    font-style: italic;
  }

  #segmented_text_content.line-by-line h1 [lang="en"]:after {
    margin-bottom: var(--sc-size-md-larger);
  }

  .hgroup p .latin {
    @apply --sc-noto-sans-font;
  }

  p + h1 {
    margin-top: 12px;
  }

  .hgroup p.subheading {
    @apply --sc-serif-font;
    font-style: italic;
    text-transform: none;
    font-feature-settings: normal
  }

  [lang="th"] .hgroup p.subheading,
  [lang="lzh"] .hgroup p.subheading {
    font-family: inherit;
    font-style: inherit;
  }

  .hgroup .collection,
  .hgroup .division,
  .hgroup .subdivision,
  .hgroup .subsubdivision,
  .hgroup .vagga,
  .hgroup .pannasa,
  .hgroup .nipata,
  .hgroup .collection sc-seg,
  .hgroup .division sc-seg,
  .hgroup .subdivision sc-seg,
  .hgroup .subsubdivision sc-seg,
  .hgroup .vagga sc-seg,
  .hgroup .pannasa sc-seg,
  .hgroup .nipata sc-seg {
    font-style: inherit;
  }

  /*bilingual headings*/
  .mirror {
    display: table;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4.6em;
  }

  .mirror > * {
    display: table-row;
  }

  .mirror-left {
    padding-right: var(--sc-size-md);
    border-right: var(--sc-border);
    text-align: right;
    display: table-cell;
    width: 50%;
  }

  .mirror-right {
    padding-left: var(--sc-size-md);
    text-align: left;
    display: table-cell;
  }

  .mirror-middle {
    text-align: right;
    position: absolute;
    margin-top: 0.2em;
  }

  h1.mirror-row {
    line-height: 1.2
  }

</style>`;
