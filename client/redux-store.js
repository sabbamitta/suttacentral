/*
 This element creates and describes the redux store.
 ---
 Redux introduction: http://redux.js.org/docs/introduction/
 Polymer-redux docs: https://tur-nr.github.io/polymer-redux/
 */
import { compose, createStore } from "redux";
import PolymerRedux from "polymer-redux";

const initialState = {
    currentRoute: {
        name: 'HOME',
        path: '/',
        prefix: '',
        __queryParams: {}
    },
    dialog: undefined,
    siteLanguage: 'en',
    fullSiteLanguageName: '',
    toolbarOptions: {
        title: '',
    },
    searchParams: {},
    searchQuery: '',
    suttaText: {},
    suttaMetaText: '',
    textOptions: {
        paragraphsEnabled: false,
        paragraphDescriptions: [],
        segmentedSuttaTextView: 'none',
        script: 'latin',
        paliLookupActivated: false,
        paliLookupTargetDictRepr: 'None',
        paliLookupTargetLanguage: '',
        chineseLookupActivated: false,
        chineseLookupTargetDictRepr: 'None',
        chineseLookupTargetLanguage: ''
    },
    colorTheme: 'light',
    selectedNavigationMenuItemId: '',
    donationSuccessData: {},
    downloadedUrls: {},
    downloadedPWASettings: {
        languages: {},
        lookups: {
            pali: {},
            chinese: {}
        }
    },
    suttaplexListDisplay: false,
    isOnline: true,
    showedLanguagePrompt: false,
    //sidebar open state
    drawerOpened: false,
};

// The reducer accepts the current state and an action and returns a new state object
// (note that the old state object is unmodified).
const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_ROUTE':
            return Object.assign({}, state, { currentRoute: action.route });
        case 'CHANGE_SITE_LANGUAGE':
            return Object.assign({}, state, { siteLanguage: action.language, fullSiteLanguageName: action.fullName });
        case 'CHANGE_TOOLBAR_TITLE':
            return Object.assign({}, state,
                { toolbarOptions: Object.assign({}, state.toolbarOptions, { title: action.title }) });
        case 'INITIATE_SEARCH':
            return Object.assign({}, state, { searchParams: action.params });
        case 'CHANGE_SEARCH_QUERY':
            return Object.assign({}, state, { searchQuery: action.searchKeyword });
        case 'CHANGE_DRAWER_OPEN_STATE':
            return Object.assign({}, state, { drawerOpened: action.drawerOpened });
        case 'DOWNLOAD_SUTTA_TEXT':
            return Object.assign({}, state, { suttaText: action.text });
        case 'CHANGE_SUTTA_META_TEXT':
            return Object.assign({}, state, { suttaMetaText: action.metaText });
        case 'DOWNLOAD_PARAGRAPH_DESCRIPTIONS':
            return Object.assign({}, state,
                { textOptions: Object.assign({}, state.textOptions, { paragraphDescriptions: action.descriptions }) });
        case 'TOGGLE_TEXTUAL_INFORMATION_ENABLED':
            return Object.assign({}, state,
                { textOptions: Object.assign({}, state.textOptions, { paragraphsEnabled: action.enabled }) });
        case 'CHOOSE_SEGMENTED_SUTTA_TEXT_VIEW':
            return Object.assign({}, state,
                { textOptions: Object.assign({}, state.textOptions, { segmentedSuttaTextView: action.view }) });
        case 'CHOOSE_PALI_TEXT_SCRIPT':
            return Object.assign({}, state,
                { textOptions: Object.assign({}, state.textOptions, { script: action.script }) });
        case 'ACTIVATE_PALI_LOOKUP':
            return Object.assign({}, state, {
                textOptions: Object.assign({}, state.textOptions, {
                    paliLookupActivated: action.paliLookupActivated,
                    paliLookupTargetLanguage: action.paliLookupTargetLanguage,
                    paliLookupTargetDictRepr: action.paliLookupTargetDictRepr
                })
            });
        case 'ACTIVATE_CHINESE_LOOKUP':
            return Object.assign({}, state, {
                textOptions: Object.assign({}, state.textOptions, {
                    chineseLookupActivated: action.chineseLookupActivated,
                    chineseLookupTargetLanguage: action.chineseLookupTargetLanguage,
                    chineseLookupTargetDictRepr: action.chineseLookupTargetDictRepr
                })
            });
        case 'SELECT_NAVIGATION_MENU_ITEM':
            return Object.assign({}, state, { selectedNavigationMenuItemId: action.id });
        case 'CHANGE_COLOR_THEME':
            return Object.assign({}, state, { colorTheme: action.theme });
        case 'CHANGE_DONATION_SUCCESS':
            return Object.assign({}, state, { donationSuccessData: action.donationSuccessData });
        case 'SAVE_DOWNLOADED_URLS':
            return Object.assign({}, state, { downloadedUrls: action.downloadedUrls });
        case 'SAVE_DOWNLOADED_PWA_SETTINGS':
            return Object.assign({}, state, { downloadedPWASettings: action.downloadedPWASettings });
        case 'SUTTPLEX_LIST_DISPLAY':
            return Object.assign({}, state, { suttaplexListDisplay: action.suttaplexdisplay });
        case 'SET_ONLINE_STATUS':
            return Object.assign({}, state, { isOnline: action.isOnline });
        case 'SET_SHOWED_LANGUAGE_PROMPT':
            return Object.assign({}, state, { showedLanguagePrompt: action.showedLanguagePrompt });
        default:
            return state;
    }
};

// Before creating the store, check if it's saved in LocalStorage:
const persistedState = localStorage.getItem('reduxState');
const rememberButtonEnabled = localStorage.getItem('rememberTextSettings') === 'true';
if (rememberButtonEnabled === 'false') {
    localStorage.removeItem('rememberTextSettings');
}
const state = (persistedState && rememberButtonEnabled) ? parsePersistedState(persistedState) : initialState;

export const store = createStore(
    reducer,
    state,
    // Enable redux dev tools extension:
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : v => v)
);

// Persist the store in localStorage:
store.subscribe(() => {
    if (localStorage.getItem('rememberTextSettings') === 'true') {
        localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    }
});

// Helper function
function parsePersistedState(state) {
    const parsedState = JSON.parse(state);
    // Reset some state variables:
    parsedState.selectedNavigationMenuItemId = initialState.selectedNavigationMenuItemId;
    parsedState.toolbarOptions = initialState.toolbarOptions;
    parsedState.donationSuccessData = initialState.donationSuccessData;
    return parsedState;
}

export const ReduxMixin = PolymerRedux(store);
