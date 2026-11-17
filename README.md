# Apergis Knitwear · Static site (GR + EN)

Στατικό HTML/CSS/JS, χωρίς build step. Ανοίγει τοπικά (διπλό κλικ στο `index.html`) και ανεβαίνει αυτούσιο σε GitHub/Netlify.

## Δομή
```
index.html                 Αρχική (Stage 1, εγκεκριμένη)
ypiresies.html             Υπηρεσίες (Stage 2, εγκεκριμένη)
paragogi.html              Παραγωγή (Stage 3)
dimiourgies.html           Δημιουργίες (Stage 4, με lightbox, εγκεκριμένη)
viotechnia.html            Η Βιοτεχνία (Stage 5, εγκεκριμένη)
epikoinonia.html           Επικοινωνία (Stage 6, φόρμα Netlify Forms)
epikoinonia-efcharistoume.html   Σελίδα επιβεβαίωσης φόρμας (noindex)
politiki-aporritou.html    Πολιτική απορρήτου (Stage 7)
en/                        Αγγλική έκδοση, 1:1 με τις ελληνικές σελίδες:
  index.html ↔ index.html · services ↔ ypiresies · production ↔ paragogi · work ↔ dimiourgies
  about ↔ viotechnia · contact ↔ epikoinonia · contact-thank-you ↔ epikoinonia-efcharistoume
  privacy-policy ↔ politiki-aporritou · 404 (σερβίρεται για /en/* μέσω _redirects)
404.html                   Δίγλωσση 404 (σχετικά paths + <base href="/"> εκτός file://: λειτουργεί σε Netlify σε κάθε βάθος URL και τοπικά)
assets/css/styles.css      Design system (cascade layers: tokens → base → layout → components → motion)
assets/js/main.js          Μενού, header, nav indicator, count-up, νήμα, ευρετήριο σταδίων, lightbox, φόρμα επικοινωνίας (χωρίς modules)
assets/img/…               AVIF + WebP + JPEG σε 2–4 πλάτη, με srcset
assets/icons/favicon.svg
_headers, _redirects, robots.txt
docs/content-status.md     Κείμενα που περιμένουν επιβεβαίωση
docs/image-credits.md      Προέλευση κάθε φωτογραφίας
```

## Γλώσσες
Το GR/EN στο header οδηγεί στην αντίστοιχη σελίδα της άλλης γλώσσας (όχι στην αρχική). Κάθε σελίδα έχει `<link rel="alternate" hreflang>` προς το ζεύγος της.
Η αγγλική φόρμα χρησιμοποιεί την ίδια Netlify φόρμα `aitima` με `glossa=en` και στέλνει στο `/en/contact-thank-you.html`.

## Τοπικό άνοιγμα
Διπλό κλικ στο `index.html`. Όλα τα links είναι σχετικά και γράφονται με `.html`.
Η `404.html` ανοίγει και τοπικά· στο Netlify σερβίρεται αυτόματα για κάθε URL που δεν υπάρχει.

## Ανέβασμα σε Netlify (νέο site, όχι το υπάρχον)
1. Netlify → **Add new site → Deploy manually** → σύρετε τον φάκελο `apergis-knitwear`.
   *ή* GitHub: νέο repository με τα περιεχόμενα του φακέλου → Netlify → Import from Git → Build command: κενό, Publish directory: `/`.
2. **Μην** το ανεβάσετε πάνω στο υπάρχον site ή repository μέχρι την τελική έγκριση.
3. Μετά το deploy ελέγξτε: clean URLs (`/ypiresies` χωρίς `.html`), τη σελίδα 404 και τα headers (`X-Robots-Tag`).

## Preview vs launch
Το preview **δεν ευρετηριάζεται**: `<meta name="robots" content="noindex, nofollow">` σε κάθε σελίδα, `X-Robots-Tag` στο `_headers`, `Disallow: /` στο `robots.txt`.
Στο launch: αφαιρέστε και τα τρία, προσθέστε `canonical`/`hreflang` με το τελικό domain και `sitemap.xml`, και ενεργοποιήστε το `_redirects`.

## Social previews (Open Graph)
Δύο εικόνες 1200×630 βασισμένες στο hero της αρχικής: `assets/img/og/apergis-og-el.jpg` (ελληνικές σελίδες) και `apergis-og-en.jpg` (σελίδες `/en/`).
Τα `og:image` και `og:url` είναι πλήρη URLs με `https://apergis-knitwear.netlify.app`. Στο launch με δικό domain: αντικαταστήστε το σε όλα τα HTML (π.χ. find/replace) και ελέγξτε με το Facebook Sharing Debugger / LinkedIn Post Inspector.

## Γραμματοσειρές
Προσωρινά από Google Fonts (EB Garamond, Commissioner). Πριν από το launch προτείνεται self-hosting (woff2 με ελληνικό subset).

## Motion
Τα signature animations (σειρά φόρτωσης hero, νήμα που σχεδιάζεται, reveals με scroll, count-up) εκτελούνται πάντα, ανεξάρτητα από τη ρύθμιση «Μείωση κίνησης» (`prefers-reduced-motion`), με απόφαση του πελάτη.
Τα reveals με scroll χρησιμοποιούν `animation-timeline: view()`· όπου δεν υποστηρίζεται (Firefox, παλαιότερο Safari) το `main.js` τα παίζει μία φορά με IntersectionObserver, με τα ίδια keyframes (`.sr-wait` / `.sr-go`).

## Φόρμα επικοινωνίας (Netlify Forms)
Η φόρμα **δεν έχει δοκιμαστεί** σε πραγματικό deployment. Τοπικά και σε previews δεν αποστέλλει τίποτα· κατά την υποβολή εμφανίζει μήνυμα προεπισκόπησης.
Μετά το πρώτο deploy:
1. Netlify → Site configuration → Forms: βεβαιωθείτε ότι το form detection είναι ενεργό και ότι εμφανίζεται η φόρμα `aitima` (μπορεί να χρειαστεί νέο deploy μετά την ενεργοποίηση).
2. Forms → Form notifications → Email notification → apergisknitwear@gmail.com.
3. Κάντε δοκιμαστική υποβολή (με και χωρίς αρχείο) και ελέγξτε το email και το Netlify dashboard.
4. Με δικό domain: προσθέστε το στο `data-live-hosts` της φόρμας στο `epikoinonia.html`.
