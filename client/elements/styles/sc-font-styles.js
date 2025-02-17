import '@polymer/polymer/lib/elements/custom-style.js';

const template=document.createElement('template');

template.innerHTML=` <custom-style > <style > @font-face {
    font-family: "Skolar Sans PE";
    src: url('/files/fonts/RaloksSansPE-Rg_2.004.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Skolar Sans PE";
    src: url('/files/fonts/RaloksSansPE-Bd_2.004.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: "Skolar Sans PE";
    src: url('/files/fonts/RaloksSansPE-It_2.004.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: "Skolar PE";
    src: url('/files/fonts/RaloksPE-Regular_3.007.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Skolar PE";
    src: url('/files/fonts/RaloksPE-Bold_3.007.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: "Skolar PE";
    src: url('/files/fonts/RaloksPE-Italic_3.007.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: "Skolar Devanagari";
    src: url('/files/fonts/RaloksDevanagari-Regular_3.007.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Skolar Devanagari";
    src: url('/files/fonts/RaloksDevanagari-Bold_3.007.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Thai';
    src: local('Noto Serif Thai Regular'), local('NotoSerifThai-Regular'),
    url('/files/fonts/NotoSerifThai-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Myanmar';
    src: local('Noto Serif Myanmar Bold'), local('NotoSerifMyanmar-Bold'),
    url('/files/fonts/NotoSerifMyanmar-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans Bold'), local('NotoSans-Bold'),
    url('/files/fonts/NotoSans-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans Regular'), local('NotoSans-Regular'),
    url('/files/fonts/NotoSans-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Myanmar';
    src: local('Noto Sans Myanmar Regular'), local('NotoSansMyanmar-Regular'),
    url('/files/fonts/NotoSansMyanmar-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Devanagari';
    src: local('Noto Sans Devanagari Regular'), local('NotoSansDevanagari-Regular'),
    url('/files/fonts/NotoSansDevanagari-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Hebrew';
    src: local('Noto Sans Hebrew Bold'), local('NotoSansHebrew-Bold'),
    url('/files/fonts/NotoSansHebrew-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Tamil';
    src: local('Noto Sans Tamil Bold'), local('NotoSansTamil-Bold'),
    url('/files/fonts/NotoSansTamil-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Arabic';
    src: local('Noto Sans Arabic Regular'), local('NotoSansArabic-Regular'),
    url('/files/fonts/NotoSansArabic-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Hebrew';
    src: local('Noto Serif Hebrew Bold'), local('NotoSerifHebrew-Bold'),
    url('/files/fonts/NotoSerifHebrew-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Sinhala';
    src: local('Noto Serif Sinhala Regular'), local('NotoSerifSinhala-Regular'),
    url('/files/fonts/NotoSerifSinhala-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Tibetan';
    src: local('Noto Sans Tibetan'), local('NotoSansTibetan'),
    url('/files/fonts/NotoSansTibetan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Sinhala';
    src: local('Noto Sans Sinhala Bold'), local('NotoSansSinhala-Bold'),
    url('/files/fonts/NotoSansSinhala-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Tibetan';
    src: local('Noto Sans Tibetan Bold'), local('NotoSansTibetan-Bold'),
    url('/files/fonts/NotoSansTibetan-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Tamil';
    src: local('Noto Sans Tamil Regular'), local('NotoSansTamil-Regular'),
    url('/files/fonts/NotoSansTamil-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Tamil';
    src: local('Noto Serif Tamil Bold'), local('NotoSerifTamil-Bold'),
    url('/files/fonts/NotoSerifTamil-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Tamil';
    src: local('Noto Serif Tamil Regular'), local('NotoSerifTamil-Regular'),
    url('/files/fonts/NotoSerifTamil-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Bengali';
    src: local('Noto Sans Bengali Regular'), local('NotoSansBengali-Regular'),
    url('/files/fonts/NotoSansBengali-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Bengali';
    src: local('Noto Sans Bengali Bold'), local('NotoSansBengali-Bold'),
    url('/files/fonts/NotoSansBengali-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Bengali';
    src: local('Noto Serif Bengali Bold'), local('NotoSerifBengali-Bold'),
    url('/files/fonts/NotoSerifBengali-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Bengali';
    src: local('Noto Serif Bengali Regular'), local('NotoSerifBengali-Regular'),
    url('/files/fonts/NotoSerifBengali-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Thai';
    src: local('Noto Serif Thai Bold'), local('NotoSerifThai-Bold'),
    url('/files/fonts/NotoSerifThai-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Naskh Arabic';
    src: local('Noto Naskh Arabic Bold'), local('NotoNaskhArabic-Bold'),
    url('/files/fonts/NotoNaskhArabic-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Sinhala';
    src: local('Noto Serif Sinhala Bold'), local('NotoSerifSinhala-Bold'),
    url('/files/fonts/NotoSerifSinhala-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Myanmar';
    src: local('Noto Serif Myanmar Regular'), local('NotoSerifMyanmar-Regular'),
    url('/files/fonts/NotoSerifMyanmar-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Hebrew';
    src: local('Noto Sans Hebrew Regular'), local('NotoSansHebrew-Regular'),
    url('/files/fonts/NotoSansHebrew-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Thai';
    src: local('Noto Sans Thai Bold'), local('NotoSansThai-Bold'),
    url('/files/fonts/NotoSansThai-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans Italic'), local('NotoSans-Italic'),
    url('/files/fonts/NotoSans-Italic.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Noto Sans Myanmar';
    src: local('Noto Sans Myanmar Bold'), local('NotoSansMyanmar-Bold'),
    url('/files/fonts/NotoSansMyanmar-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Devanagari';
    src: local('Noto Sans Devanagari Bold'), local('NotoSansDevanagari-Bold'),
    url('/files/fonts/NotoSansDevanagari-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Sinhala';
    src: local('Noto Sans Sinhala Regular'), local('NotoSansSinhala-Regular'),
    url('/files/fonts/NotoSansSinhala-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Naskh Arabic';
    src: local('Noto Naskh Arabic'), local('NotoNaskhArabic'),
    url('/files/fonts/NotoNaskhArabic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif Hebrew';
    src: local('Noto Serif Hebrew Regular'), local('NotoSerifHebrew-Regular'),
    url('/files/fonts/NotoSerifHebrew-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif';
    src: local('Noto Serif Bold'), local('NotoSerif-Bold'),
    url('/files/fonts/NotoSerif-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Thai';
    src: local('Noto Sans Thai Regular'), local('NotoSansThai-Regular'),
    url('/files/fonts/NotoSansThai-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Serif';
    src: local('Noto Serif Regular'), local('NotoSerif-Regular'),
    url('/files/fonts/NotoSerif-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans Arabic';
    src: local('Noto Sans Arabic Bold'), local('NotoSansArabic-Bold'),
    url('/files/fonts/NotoSansArabic-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: "Tengwar Annatar Italic";
    src: url('/files/fonts/tngani.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Klingon";
    src: url('/files/fonts/Klingon.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Vulcan";
    src: url('/files/fonts/Vulcan.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Aurebesh";
    src: url('/files/fonts/Aurebesh.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK JP';
    src: url('/files/fonts/noto-sans-jp_regular_jp_462a49732c9d.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK JP';
    src: url('/files/fonts/noto-sans-jp_bold_jp_e5ebd509a112.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK KR';
    src: url('/files/fonts/noto-sans-kr_regular_ko_92fbb158dfd5.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK KR';
    src: url('/files/fonts/noto-sans-kr_bold_ko_94d8d803ed69.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK TC';
    src: url('/files/fonts/noto-sans-tc_regular_zh_lzh_785da7cebd0b.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK TC';
    src: url('/files/fonts/noto-sans-tc_bold_zh_lzh_bbcfc9a4d4b2.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK SC';
    src: url('/files/fonts/noto-sans-sc_regular_zh_lzh_b3bccbd8d25b.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans CJK SC';
    src: url('/files/fonts/noto-sans-sc_bold_zh_lzh_f57371fc2dca.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}


html {
    --sc-skolar-font-scale: 1.13;
    --sc-tall-font-scale: 1.13;
    --sc-dense-font-scale: 1.13;

    --sc-sans-font: {
        font-family: "Skolar Sans PE", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: ‘calt’ 0;
    }
    ;

    --sc-serif-font: {
        font-family: "Skolar PE", "Noto Serif", "Skolar Sans PE", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: ‘calt’ 0;
    }
    ;

    --sc-monospace-font: {
        font-family: "Source Code Pro", monospace;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: ‘calt’ 0;
    }
    ;

    --sc-noto-sans-font: {
        font-family: "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: ‘calt’ 0;
    }
    ;

    --sc-arabic-sans-font: {
        font-family: "Noto Sans Arabic", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-arabic-serif-font: {
        font-family: "Noto Naskh Arabic", "Noto Serif", "Noto Sans Arabic", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-hebrew-sans-font: {
        font-family: "Noto Sans Hebrew", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-hebrew-serif-font: {
        font-family: "Noto Serif Hebrew", "Noto Serif", "Noto Sans Hebrew", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-devanagari-sans-font: {
        font-family: "Noto Sans Devanagari", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-devanagari-serif-font: {
        font-family: "Skolar Devanagari", "Skolar PE", "Noto Serif", "Noto Sans Devanagari", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-myanmar-sans-font: {
        font-family: "Noto Sans Myanmar", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-myanmar-serif-font: {
        font-family: "Noto Serif Myanmar", "Noto Serif", "Noto Sans Myanmar", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-sinhala-sans-font: {
        font-family: "Noto Sans Sinhala", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-sinhala-serif-font: {
        font-family: "Noto Serif Sinhala", "Noto Serif", "Noto Sans Sinhala", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-tamil-sans-font: {
        font-family: "Noto Sans Tamil", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-tamil-serif-font: {
        font-family: "Noto Serif Tamil", "Noto Serif", "Noto Sans Tamil", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-bengali-sans-font: {
        font-family: "Noto Sans Bengali", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-bengali-serif-font: {
        font-family: "Noto Serif Bengali", "Noto Serif", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-thai-sans-font: {
        font-family: "Noto Sans Thai", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-thai-serif-font: {
        font-family: "Noto Serif Thai", "Noto Serif", "Noto Sans Thai", "Noto Sans", serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-tibetan-font: {
        font-family: "Noto Sans Tibetan", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-tengwar-font: {
        font-family: "Tengwar Annatar Italic", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-klingon-font: {
        font-family: "Klingon", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-vulcan-font: {
        font-family: "Vulcan", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-aurebesh-font: {
        font-family: "Aurebesh", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-japanese-font: {
        font-family: "Noto Sans CJK JP", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-korean-font: {
        font-family: "Noto Sans CJK KR", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-traditional-chinese-font: {
        font-family: "Noto Sans CJK TC", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-simple-chinese-font: {
        font-family: "Noto Sans CJK SC", "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    ;

    --sc-skolar-font-size-xxs: {
        font-size: calc(10px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-xs: {
        font-size: calc(12px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-s: {
        font-size: calc(14px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-md: {
        font-size: calc(16px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-l: {
        font-size: calc(18px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-xl: {
        font-size: calc(19px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-static-subtitle: {
        font-size: calc(24px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-dialog-header: {
        font-size: calc(26px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-xxl: {
        font-size: calc(32px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-h1-md: {
        font-size: calc(34px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-skolar-font-size-static-main-title: {
        font-size: calc(50px * var(--sc-skolar-font-scale));
    }
    ;

    --sc-tall-font-size-xs: {
        font-size: calc(13px * var(--sc-tall-font-scale));
    }
    ;

    --sc-tall-font-size-s: {
        font-size: calc(15px * var(--sc-tall-font-scale));
        line-height: 23px;
    }
    ;

    --sc-tall-font-size-md: {
        font-size: calc(17px * var(--sc-tall-font-scale));
        line-height: 34px;
    }
    ;

    --sc-tall-font-size-l: {
        font-size: calc(19px * var(--sc-tall-font-scale));
    }
    ;

    --sc-tall-font-size-xl: {
        font-size: calc(20px * var(--sc-tall-font-scale));
        line-height: 30px;
    }
    ;

    --sc-tall-font-size-static-subtitle: {
        font-size: calc(24px * var(--sc-tall-font-scale));
        line-height: 34px;
    }
    ;

    --sc-tall-font-size-dialog-header: {
        font-size: calc(26px * var(--sc-tall-font-scale));
    }
    ;

    --sc-tall-font-size-xxl: {
        font-size: calc(32px * var(--sc-tall-font-scale));
    }
    ;

    --sc-tall-font-size-h1-md: {
        font-size: calc(34px * var(--sc-tall-font-scale));
        line-height: 48px;
    }
    ;

    --sc-tall-font-size-static-main-title: {
        font-size: calc(50px * var(--sc-tall-font-scale));
    }
    ;

    --sc-dense-font-size-xs: {
        font-size: calc(13px * var(--sc-dense-font-scale));
    }
    ;

    --sc-dense-font-size-s: {
        font-size: calc(15px * var(--sc-dense-font-scale));
        line-height: 23px;
    }
    ;

    --sc-dense-font-size-md: {
        font-size: calc(17px * var(--sc-dense-font-scale));
        line-height: 26px;
    }
    ;

    --sc-dense-font-size-l: {
        font-size: calc(19px * var(--sc-dense-font-scale));
    }
    ;

    --sc-dense-font-size-xl: {
        font-size: calc(20px * var(--sc-dense-font-scale));
        line-height: 30px;
    }
    ;

    --sc-dense-font-size-static-subtitle: {
        font-size: calc(24px * var(--sc-dense-font-scale));
        line-height: 34px;
    }
    ;

    --sc-dense-font-size-dialog-header: {
        font-size: calc(26px * var(--sc-dense-font-scale));
    }
    ;

    --sc-dense-font-size-xxl: {
        font-size: calc(32px * var(--sc-dense-font-scale));
    }
    ;

    --sc-dense-font-size-h1-md: {
        font-size: calc(34px * var(--sc-dense-font-scale));
        line-height: 48px;
    }
    ;

    --sc-dense-font-size-static-main-title: {
        font-size: calc(50px * var(--sc-dense-font-scale));
    }
    ;

    --sc-paper-font-body: {
        @apply --paper-font-common-base;
        @apply --sc-skolar-font-size-md;
        font-weight: 400;
        line-height: 24px;
    }
    ;

    --sc-paper-font-body-serif: {
        @apply --sc-serif-font;
        @apply --sc-skolar-font-size-md;
        font-weight: 400;
        line-height: 24px;
    }
    ;

    --sc-all-small-caps: {
        font-feature-settings: "smcp", "c2sc";
        text-transform: lowercase;
        letter-spacing: 0.02em;
    }
    ;

    --sc-mixed-small-caps: {
        font-feature-settings: "smcp";
        letter-spacing: 0.02em;
    }
    ;

    --sc-all-caps: {
        letter-spacing: 0.02em;
        text-transform: uppercase;
    }
    ;

    --sc-transform-caps-to-bold: {
        @apply --sc-remove-small-caps;
        font-weight: 700;
    }
    ;

    --sc-remove-small-caps: {
        font-feature-settings: normal;
        letter-spacing: normal;
        text-transform: none;
    }
    ;

    --paper-font-common-base: {
        @apply --sc-sans-font;
    }
    ;

    --paper-font-subhead: {
        @apply --sc-sans-font;
        @apply --sc-skolar-font-size-md;
    }
    ;

    --paper-font-caption: {
        @apply --sc-skolar-font-size-xs;
    }
    ;

    --paper-font-display1: {
        @apply --sc-skolar-font-size-h1-md;
        @apply --paper-font-common-base;
        font-weight: 400;
        line-height: 40px;
    }
    ;

    --paper-font-body1: {
        @apply --paper-font-common-base;
        @apply --sc-skolar-font-size-s;
        font-weight: 400;
        line-height: 20px;
    }
    ;

    --paper-font-body2: {
        @apply --paper-font-common-base;
        @apply --sc-skolar-font-size-s;
        font-weight: 400;
        line-height: 24px;
    }
    ;

    --paper-font-body2-chinese: {
        @apply --sc-traditional-chinese-font;
        @apply --sc-dense-font-size-s;
        font-weight: 400;
        line-height: 26px;
    }
    ;

    --paper-font-headline: {
        @apply --paper-font-common-base;
        @apply --sc-skolar-font-size-static-subtitle;
        font-weight: 400;
        line-height: 32px;
    }
    ;

    --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --sc-skolar-font-size-xl;
        font-weight: 400;
        line-height: 28px;
    }
    ;

    --paper-font-compact-title: {
        @apply --sc-serif-font;
        @apply --sc-skolar-font-size-xl;
        font-weight: 400;
        line-height: 28px;
    }
    ;
}
</style > </custom-style > `;

document.head.appendChild(template.content);