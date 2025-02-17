import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import { ReduxMixin } from '../redux-store.js';
import { API_ROOT } from '../constants.js';
import { Localized } from './addons/localization-mixin.js';
import { dictStyles } from './styles/sc-dict-styles.js';
import { scrollbarStyle } from './styles/sc-scrollbar-style.js';

const polymer_dictStyles = html([dictStyles.strings.join('')]);
const polymer_scrollbarStyle = html([scrollbarStyle.strings.join('')]);
class SCPageDictionary extends ReduxMixin(Localized(PolymerElement)) {  
  static get template() {
    return html`
    ${polymer_dictStyles}
    ${polymer_scrollbarStyle}    
    <style>
      .dictionary-results-container, .related-terms {
        padding: var(--sc-size-xxl) 0;
      }

      .dictionary-results-main {
        max-width: 720px;
        margin: 0 auto;
      }

      @media (max-width: 740px) {
        .dictionary-results-main {
          padding: 0 5%;
        }
      }

      .dictionary-results-head {
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin-bottom:
      }

      h1 {
        @apply --paper-font-display1;
        color: var(--sc-secondary-text-color);
        display: inline-block;
        margin: 0 0 0 -2px;
      }

      .dictionary-results-term {
        @apply --sc-serif-font;
        font-weight: bold;
        color: var(--sc-primary-accent-color);
      }

      .terms-button {
        color: var(--sc-disabled-text-color);
      }

      .related-terms {
        margin: 0 var(--sc-size-md) var(--sc-size-xl) 0;
        text-align: left;
        }

      .related-terms ul {
        margin: var(--sc-size-sm) 0 0 0;
        display: block;
        list-style: none;
        padding: 0;
      }

      .related-terms h3 {
        @apply --paper-font-body1;
        color: var(--sc-secondary-text-color);
        margin: var(--sc-size-md-larger) 0 0 var(--sc-size-md);
        font-weight: bold;
      }

      .dictionary-entries {
        padding: var(--sc-size-xl) 0 var(--sc-size-md);
      }

      .related-terms li {
        @apply --paper-font-body1;
      }

      .related-terms a {
        color: var(--sc-primary-accent-color);
        padding: var(--sc-size-xs) 0 var(--sc-size-xs) var(--sc-size-md);
        margin: var(--sc-size-xs) 0;
        text-decoration: none;
        display: inline-block;
      }

      .related-terms em {
        color: var(--sc-primary-text-color);
      }

      .dictionary-source {
        @apply --paper-font-body1;
        color: var(--sc-secondary-text-color);
        margin: var(--sc-size-sm) 0 var(--sc-size-md);
        font-weight: bold;
        @apply --sc-serif-font;
      }

      .dictionary-book-entry {
        border-bottom: var(--sc-border);
      }

      #drawer {
        --app-drawer-content-container: {
          overflow-y: scroll;
          background-color: var(--sc-secondary-background-color);
        }
      }

      .sc-tooltip {
        --paper-tooltip-opacity: 0.98;
        --paper-tooltip-background: var(--sc-paper-tooltip-color);
        --paper-tooltip: {
          @apply --sc-skolar-font-size-xs;
          line-height: var(--sc-size-md);
          padding: var(--sc-size-sm) var(--sc-size-md);
          text-shadow: 0 0 var(--sc-secondary-background-color);
          white-space: normal;
        }
      }

      .selected-terms-item {
        background: linear-gradient(to right, var(--sc-primary-color) var(--sc-size-xs), transparent var(--sc-size-xs));
      }

      .selected-terms-item > a {
          color: var(--sc-primary-color);
      }
    </style>

    <iron-ajax auto="" id="glossary_ajax" url="/api/glossary" handle-as="json" last-response="{{glossaryReturns}}"></iron-ajax>

    <iron-ajax id="ajax" handle-as="json" last-response="{{dictionaryReturns}}" on-response="_didRespond"></iron-ajax>

    <iron-ajax id="adjacent_ajax" handle-as="json" last-response="{{adjacentReturns}}"></iron-ajax>

    <iron-ajax id="similar_ajax" handle-as="json" last-response="{{similarReturns}}"></iron-ajax>

    <div class="dictionary-results-container">
      <main class="dictionary-results-main">
        <div class="dictionary-results-head">
          <h1><span class="dictionary-results-description">{{localize('definitionsFor')}}</span> <span class="dictionary-results-term">[[dictionaryWord]]</span></h1>
          <span class="terms-button">
            <paper-icon-button icon="sc-iron-icons:menu" id="menu_icon" on-tap="_toggleDrawer"></paper-icon-button>
            <paper-tooltip for="menu_icon" class="sc-tooltip" fit-to-visible-bounds="">{{localize('relatedItems')}}</paper-tooltip>
          </span>
        </div>
        <div class="dictionary-entries">
          <template is="dom-repeat" items="[[dictionaryResults]]" as="result">
            <div class="dictionary-book-entry">
              <div class="dictionary-source">[[_getDictionaryTitle(result.dictname)]]</div>
              <div class="dictionary-text" inner-h-t-m-l="[[result.text]]"></div>
            </div>
          </template>
        </div>

        <app-drawer id="drawer" align="right" class="sc-scrollbar" swipe-open="">
          <div class="related-terms sc-scrollbar">
            <h3>{{localize('adjacentTerms')}}</h3>
            <ul class="near-terms">
              <template is="dom-repeat" items="[[dictionaryAdjacent]]">
                <li class$="[[_calculateClass(item.glossWord)]]" inner-h-t-m-l="[[item.glossText]]"></li>
              </template>
            </ul>
            <h3>{{localize('similarSpelling')}}</h3>
            <ul class="fuzzy-terms">
              <template is="dom-repeat" items="[[dictionarySimilar]]">
                <li class$="[[_calculateClass(item.glossWord)]]" inner-h-t-m-l="[[item.glossText]]"></li>
              </template>
            </ul>
          </div>
        </app-drawer>

      </main>
    </div>

    [[_createMetaData(dictionaryWord, localize)]]`;
  }

  static get properties() {
    return {
      dictionaryResults: Array,
      dictionaryReturns: Array,
      glossaryReturns: Array,
      adjacentReturns: Array,
      similarReturns: Array,
      dictionaryWord: {
        type: String,
        observer: '_loadNewResult'
      },
      localizedStringsPath: {
        type: String,
        value: '/localization/elements/sc-page-dictionary'
      },
      dictionaryTitles: {
        type: Object,
        value: {
          'ncped': 'New Concise Pali English Dictionary',
          'cped': 'Concise Pali English Dictionary',
          'dhammika': 'Nature and the Environment in Early Buddhism by S. Dhammika',
          'dppn': 'Dictionary of Pali Proper Names',
          'pts': 'PTS Pali English Dictionary'
        }
      },
      adjacent: {
        type: Boolean,
        value: true
      },
      dictionaryAdjacent: Array,
      dictionarySimilar: Array
    }
  }

  static get observers() {
    return [
      '_getGlossaryItems(glossaryReturns,adjacentReturns,adjacent)',
      '_getGlossaryItems(glossaryReturns,similarReturns)'
    ];
  }

  _computeUrl() {
    return `${API_ROOT}/dictionary_full/${this.dictionaryWord}`;
  }

  _loadNewResult() {
    this._loadAdjacent();
    this._loadSimilar();
    this.$.ajax.url = this._computeUrl();
    return this.$.ajax.generateRequest();
  }

  _didRespond() {
    let dictsUsed = {};
    let finalResults = [];
    for (let key in this.dictionaryTitles) {
      dictsUsed = this._sortDictionaryResults(key);
      if (dictsUsed) {
        finalResults.push(dictsUsed);
      }
    }
    this.dictionaryResults = finalResults;
  }

  _sortDictionaryResults(dictionary) {
    for (let item in this.dictionaryReturns) {
      if (this.dictionaryReturns[item].dictname == dictionary) {
        return this.dictionaryReturns[item];
      }
    }
  }

  _getDictionaryTitle(dictname) {
    return this.dictionaryTitles[dictname];
  }

  // Adding Adjacent Terms
  _computeAdjacentUrl() {
    return `${API_ROOT}/dictionary_full/adjacent/${this.dictionaryWord}`;
  }

  _loadAdjacent() {
    this.$.adjacent_ajax.url = this._computeAdjacentUrl();
    return this.$.adjacent_ajax.generateRequest();
  }

  // Adding Similar Terms
  _computeSimilarUrl() {
    return `${API_ROOT}/dictionary_full/similar/${this.dictionaryWord}`;
  }

  _loadSimilar() {
    this.$.similar_ajax.url = this._computeSimilarUrl();
    return this.$.similar_ajax.generateRequest();
  }

  // Calculating if the current item is selected
  _calculateClass(item) {
    return (item === this.dictionaryWord) ? 'selected-terms-item' : '';
  }

  _getGlossaryItems(glossaryReturns, inputArray, adjacent = false) {
    if (inputArray) {
      let glossary = [];
      let glossaryObject = {};
      let glossText = '';
      if (glossaryReturns) {
        for (let glossWord in inputArray[0]) {
          let glossLookup = inputArray[0][glossWord];
          glossText = `<a href="/define/${glossLookup}">${glossLookup}</a>`;
          if (glossaryReturns[0][glossLookup]) {
            glossText += `<em> (${glossaryReturns[0][glossLookup]})</em>`
          }
          glossaryObject = { "glossWord": glossLookup, "glossText": glossText };
          glossary.push(glossaryObject);
        }
        if (adjacent) {
          return this.dictionaryAdjacent = glossary;
        } else {
          return this.dictionarySimilar = glossary;
        }
      }
    }
  }

  // toggles the drawer on the right to show the related/similar items.
  _toggleDrawer() {
    this.$.drawer.toggle();
  }

  _createMetaData(dictionaryWord, localize) {
    if (!localize) return;
    const description = localize('metaDescriptionText');
    const dictionaryResultsText = localize('dictionaryResultsText');

    document.dispatchEvent(new CustomEvent('metadata', {
      detail: {
        pageTitle: `Define: ${dictionaryWord}`,
        title: `${dictionaryResultsText} ${dictionaryWord}`,
        description: description,
        bubbles: true,
        composed: true
      }
    }));
  }
}

customElements.define('sc-page-dictionary', SCPageDictionary);
