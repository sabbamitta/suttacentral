
import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-ajax/iron-ajax.js';

import { staticStyles } from '../styles/static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import { API_ROOT } from '../../constants.js';

import '../addons/text-carousel.js';

class SCHomePage extends SCStaticPage {
  render() {
    return html`
    ${staticStyles}
    <style>
      .content {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: 2% 96% 2%;
        grid-row-gap: 80px;
        margin-top: 60px;
      }

      #page-wrap {
        max-width: 2058px;
      }

      .bottom-space {
        margin-bottom: var(--sc-size-xl) !important;
      }

      .row {
        grid-column-start: 2;
        width: 100%;
      }

      .preamble {
        @apply --sc-skolar-font-size-xl;
        color: var(--sc-primary-text-color);
        text-align: center;
      }

      .card {
        background-color: var(--sc-secondary-background-color);
        width: 100%;
        min-height: 180px;
        display: flex;
        flex-flow: column;
      }

      .card-heading {
        @apply --sc-skolar-font-size-xxl;
        width: 100%;
        background-color: var(--sc-primary-color-medium);
        color: var(--sc-tertiary-text-color);
        font-weight: bold;
        line-height: 100%;
        text-align: right;
      }

      .card-content {
        position: relative;
        width: 100%;
        background-color: var(--sc-secondary-background-color);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        padding-bottom: var(--sc-size-xxl);
      }

      .card-content-text {
        @apply --sc-skolar-font-size-md;
        padding: var(--sc-size-lg);
        text-align: center;
      }

      .button-link {
        background: none !important;
        text-decoration: none;
      }

      .card-heading-text {
        @apply --sc-sans-font;
        padding: var(--sc-size-lg);
        text-align: center;
        direction: rtl;
      }

      .card-content-video {
        width: 100%;
        padding: 0;
      }

      .d-none {
        display: none;
      }

      .card-text {
        @apply --sc-skolar-font-size-l;
        font-style: italic;
      }

      .button {
        @apply --sc-skolar-font-size-s;
        margin-top: var(--sc-size-md);
        background-color: var(--sc-primary-accent-color);
        color: var(--sc-tertiary-text-color);
        font-weight: bold;
        text-align: center;
      }

      .two-paper-cards {
        width: 100%;
      }

      .paper-cards-no-background {
        --paper-card-background-color: var(--sc-primary-background-color);
        box-shadow: none;
      }

      .card-content-wrapper {
        padding: var(--sc-size-md-larger);
      }

      .no-bottom-padding {
        padding-bottom: 0;
      }

      .transparent-card-content-wrapper {
        padding-top: var(--sc-size-md-larger);
      }

      .image-card-text,
      .text-card-text {
        margin-top: 1em;
      }

      .card-title-text {
        @apply --paper-font-headline;
        @apply --sc-serif-font;
      }

      .why-we-read {
        text-align: center;
        font-style: italic;
      }

      .first-row {
        grid-column-start: 1;
      }

      .second-row {
        grid-column-start: 2;
      }

      .three-elements-grid {
        display: grid;
        grid-gap: var(--sc-size-lg);
      }

      .full-height {
        height: 100%;
      }

      .embed-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        width: 100%;
      }

      .embed-container iframe,
      .embed-container object,
      .embed-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .paper-card-with-button {
        padding-bottom: calc(var(--sc-size-md-larger) * 2 + 36px);
      }

      paper-card {
        overflow: hidden;
        background-color: var(--sc-secondary-background-color);
        width: 100%;
      }

      .transparent-card {
        background-color: var(--sc-primary-background-color);
      }

      .cards {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 1fr;
        grid-auto-flow: row;
        grid-gap: var(--sc-size-lg);
      }

      .first-card {
        grid-row-start: 1;
      }

      .first-card-button {
        grid-row-start: 2;
      }

      .second-card {
        grid-row-start: 3;
      }

      .second-card-button {
        grid-row-start: 4;
      }

      .big-card-title {
        @apply --sc-skolar-font-size-static-subtitle;
        margin-bottom: var(--sc-size-md);
      }

      .center-text {
        text-align: center;
      }

      .card-button {
        position: absolute;
        right: var(--sc-size-md-larger);
        bottom: var(--sc-size-md-larger);
        margin-left: 0;
      }

      .grid-button {
        justify-self: end;
      }

      .carousel {
        width: 100%;
      }

      .card-heading-subtext {
        @apply --sc-skolar-font-size-md;
        font-weight: normal;
        line-height: 1em;
        margin: 0 var(--sc-size-md-larger) var(--sc-size-md-larger);
        text-align: right;
      }

      .card-button-middle {
        position: absolute;
        transform: translate(-50%);
        bottom: var(--sc-size-md-larger);
      }

      .buddhas-words-text {
        @apply --sc-skolar-font-size-xl;
        line-height: 1.1;
      }

      @media (min-width: 960px) {
        .buddhas-words-text {
          @apply --sc-skolar-font-size-static-subtitle;
        }
      }

      @media (min-width: 1280px) {
        .content {
          grid-template-columns: 5% 90% 5%;
        }

        .three-elements-grid {
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 3fr 2fr;
        }

        .three-elements-big {
          grid-column-start: 1;
          grid-row-start: 1;
          grid-row-end: span 2;
        }

        .three-elements-small {
          grid-column-start: 2;
          grid-row-start: unset;
        }

        .three-elements-first-small {
          grid-row-start: 1;
        }

        .three-elements-second-small {
          grid-row-start: 2;
        }

        .cards {
          grid-template-columns: 1fr 1fr;
          grid-gap: var(--sc-size-lg);
        }

        .second-card {
          grid-row-start: 1;
        }

        .first-card-button {
          grid-row-start: 2;
        }

        .second-card-button {
          grid-row-start: 2;
        }

        .card-heading-text {
          text-align: unset;
        }

        .card-button {
          right: unset;
          left: var(--sc-size-md-larger);
        }

        .grid-button {
          justify-self: start;
        }
      }

      @media (min-width: 1600px) {
        .content {
          grid-template-columns: 15% 70% 15%;
        }

        .card {
          flex-flow: unset;
        }

        .card-content-video,
        .card-content {
          width: 75%;
        }

        .card-heading {
          width: 25%;
        }

        .smaller-title {
          @apply --sc-skolar-font-size-dialog-header;
        }

        .d-none {
          display: unset;
        }

        #sc-video {
          z-index: 999;
        }
      }

      @media (min-width: 1680px) {
        .smaller-title {
          @apply --sc-skolar-font-size-xxl;
        }
      }

    </style>

    <div class="bottom-space" id="page-wrap">
      <div class="content">
        <div class="row preamble">
          <p>
            ${unsafeHTML(this.localize('2797e2ab111cd1d938bd327b38002092'))}
          </p>
          <p>
            ${unsafeHTML(this.localize('9db604c6c61c4cb7431619341bc037bf'))}
          </p>
        </div>
        <div class="row">
          <paper-card elevation="2">
            <div class="card">
              <div class="card-heading">
                <div class="card-heading-text">
                  ${unsafeHTML(this.localize('6fa47a464d90ac462faad21974edfb66'))}
                </div>
              </div>
              <div class="card-content">
                <div class="card-content-text">
                  <div class="card-text center-text buddhas-words-text">
                    <sc-text-carousel class="carousel" .elementsUrl="${`${API_ROOT}/epigraphs`}" link="true">
                    </sc-text-carousel>
                  </div>
                </div>
              </div>
            </div>
          </paper-card>
        </div>
        <div class="row cards">
          <paper-card class="two-paper-cards paper-cards-no-background first-card transparent-card" elevation="2" image="/img/home-page/returninghome.jpeg" alt="${this.localize('742e700832d62bb2f6a17592968b4dab')}">
            <div class="transparent-card-content-wrapper">
              <div class="card-title-text">
                ${this.localize('742e700832d62bb2f6a17592968b4dab')}
              </div>
              <div class="image-card-text">
                ${this.localize('0ae097eff8e01d83a486582e1648d803')}
              </div>
            </div>
          </paper-card>
          <paper-card class="two-paper-cards paper-cards-no-background second-card transparent-card" elevation="2" image="/img/home-page/contemplatingthemoon.jpeg" alt="${this.localize('a5172cf2c34de3fc8e2af331ac915ec9')}">
            <div class="transparent-card-content-wrapper">
              <div class="card-title-text">
                ${this.localize('a5172cf2c34de3fc8e2af331ac915ec9')}
              </div>
              <div class="image-card-text">
                ${this.localize('72b2622af85398029ea11349175e83af')}
              </div>
            </div>
          </paper-card>
          <div>
            ${unsafeHTML(this.localize('cb084786af2164b9b77d6d6c35d659a0'))}
          </div>
          <div>
            ${unsafeHTML(this.localize('b12f1da29ee701d750cb4d5580f6ff12'))}
          </div>
        </div>
        <div class="row">
          <paper-card elevation="2">
            <div class="card">
              <div class="card-heading">
                <div class="card-heading-text smaller-title">
                  ${unsafeHTML(this.localize('80c9f84bfa3911cda919d61934abc0a2'))}
                </div>
              </div>
              <div class="card-content-video">
                <div class="embed-container">
                  <iframe allowfullscreen="" frameborder="0" height="360" id="sc-video" mozallowfullscreen="" src="https://player.vimeo.com/video/257038431?color=efe700&byline=0" webkitallowfullscreen="" width="640" title="SuttaCentral.net - Early Buddhist texts, translations, and parallels">
                  </iframe>
                </div>
              </div>
            </div>
          </paper-card>
        </div>
        <div class="row">
          <div class="big-card-title">
            ${this.localize('24cbc4d3253a2779ae4dab326e42659b')}
          </div>
          <div class="three-elements-grid">
            <paper-card alt="${this.localize('5392c2400632f879aaa8bceac40a05ce')}" class="three-elements-big paper-card-with-button" elevation="2" image="/img/home-page/burmese_kammavaca.jpeg" title="${this.localize('4312510269ff1286ae8beb8ceb193c4b')}">
              <div class="card-content-wrapper no-bottom-padding">
                <div class="card-title-text">
                  ${this.localize('e30baf2773fd1ff10ac21a7ebd63198d')}
                </div>
                <div class="image-card-text">
                  ${this.localize('31f31787de5aa09d662dfef82b0b686e')}
                </div>
              </div>
              <div>
                ${unsafeHTML(this.localize('3d9cb1688e0ea52d25903a681b97e433'))}
              </div>
            </paper-card>
            <paper-card class="three-elements-small three-elements-first-small full-height paper-card-with-button" elevation="2">
              <div class="card-content-wrapper no-bottom-padding">
                <div class="card-title-text">
                  ${this.localize('09c18e7d1f00a37ba925092e7a101a05')}
                </div>
                <div class="text-card-text">
                  ${this.localize('45cc0214114c2d971cf2701f842f8926')}
                </div>
              </div>
              <div>
                ${unsafeHTML(this.localize('e7286ed5372dab8bbe92e97a271db650'))}
              </div>
            </paper-card>
            <paper-card class="three-elements-small three-elements-second-small full-height paper-card-with-button" elevation="2">
              <div class="card-content-wrapper no-bottom-padding">
                <div class="card-title-text">
                  ${this.localize('ff9331ad058b3717457b73d2bdc51534')}
                </div>
                <div class="image-card-text">
                  ${this.localize('db01f7b42cfc777fd2f2a84d3a6787fa')}
                </div>
              </div>
              <div>
                ${unsafeHTML(this.localize('8d3804209ab8b6177153a4315fc93a7e'))}
              </div>
            </paper-card>
          </div>
        </div>
        <div class="row">
          <paper-card elevation="2">
            <div class="card">
              <div class="card-heading">
                <div class="card-heading-text">
                  ${unsafeHTML(this.localize('091d2f16e012dc0e2eb6db75d4f878c6'))}
                </div>
              </div>
              <div class="card-content">
                <div class="card-content-text">
                  <div class="why-we-read">
                    <sc-text-carousel .elementsUrl="${`${API_ROOT}/whyweread`}">
                    </sc-text-carousel>
                  </div>
                </div>
              </div>
            </div>
          </paper-card>
        </div>
        <div class="row cards">
          <paper-card class="two-paper-cards first-card paper-card-with-button" elevation="2" image="/img/home-page/noword.jpeg" alt="${this.localize('078365b3da2eb8b34d23c36661309359')}">
            <div class="card-content-wrapper">
              <div class="card-title-text">
                ${this.localize('078365b3da2eb8b34d23c36661309359')}
              </div>
              <div class="image-card-text">
                ${unsafeHTML(this.localize('2e64b76d5549e9dc3e83c5845571322a'))}
              </div>
            </div>
            <div>
              ${unsafeHTML(this.localize('0b689c82a3c57190d06581150a74ae85'))}
            </div>
          </paper-card>
          <paper-card class="two-paper-cards second-card paper-card-with-button" elevation="2" image="/img/home-page/listeningtotherain.jpeg" alt="${this.localize('149842aa5477edb219ce272ec2aab269')}">
            <div class="card-content-wrapper">
              <div class="card-title-text">
                ${this.localize('149842aa5477edb219ce272ec2aab269')}
              </div>
              <div class="image-card-text">
                ${this.localize('70a49d1ca4c56cd629f76e90d6b6cc0f')}
              </div>
            </div>
            <div>
              ${unsafeHTML(this.localize('6eff00aea38733ff52246d2aa345be07'))}
            </div>
          </paper-card>
        </div>
      </div>
    </div>`;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_home-page';
  }
}

customElements.define('home-page', SCHomePage);