# Salonul Universitar

Un site web simplu și elegant pentru cercul studențesc "Salonul Universitar", inspirat de saloanele intelectuale europene.

## Despre Proiect

Website-ul prezintă Salonul Universitar, un cerc studențesc care organizează evenimente intelectuale, discuții, dezbateri, seri de film și întâlniri cu invitați speciali.

## Caracteristici

- **Design Responsive**: Optimizat pentru toate dispozitivele (desktop, tablet, mobile)
- **Single-Page Design**: Navigare fluidă între secțiuni cu smooth scrolling
- **Interfață Elegantă**: Estetică minimalistă inspirată de saloanele intelectuale
- **Performanță Optimizată**: Cod curat și rapid

## Structura

```
salonul-universitar/
│
├── index.html              # Pagina principală (single-page)
├── README.md              # Documentație
│
├── css/
│   └── styles.css         # Stiluri complete
│
├── js/
│   └── main.js            # JavaScript pentru navigare
│
└── assets/                # Director pentru imagini
```

## Secțiuni

1. **Hero** - Titlu și tagline
2. **Cine suntem?** - Prezentarea cercului
3. **De ce?** - Trei valori fundamentale
4. **Cum?** - Modul de organizare
5. **Meet the Team** - Membrii echipei
6. **Contact** - Informații de contact

## Tehnologii

- **HTML5** - Semantic markup
- **CSS3** - Design modern cu CSS Grid și Flexbox
- **Vanilla JavaScript** - Navigare și smooth scrolling
- **Google Fonts** - Playfair Display + Inter

## Personalizare

### Culori

Culorile sunt definite în `css/styles.css`:

```css
:root {
    --color-primary: #000000;
    --color-secondary: #FFFFFF;
    --color-light: #F5F5F5;
    --color-accent: #7A1C3F;  /* Burgundy - schimbă această culoare */
}
```

### Adăugare Imagini Echipă

Înlocuiește `<div class="member-placeholder"></div>` cu:

```html
<img src="assets/team/nume.jpg" alt="Nume" class="member-placeholder">
```

Apoi actualizează CSS:

```css
.member-placeholder {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
}
```

## Utilizare

### Metoda 1: Deschidere Directă
Deschide `index.html` în browser.

### Metoda 2: Server Local

**Python:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server -p 8000
```

**VS Code:**
Folosește extensia "Live Server"

## Deployment

Website-ul poate fi hostuit gratuit pe:
- **Netlify** - Drag & drop deployment
- **Vercel** - Git integration
- **GitHub Pages** - Hosting gratuit pentru proiecte statice

## Contact

- **Email**: salonul.universitar@outlook.com
- **Telefon**: +40 752 652 564 / +40 753 317 800
- **Social Media**: @salonuluniversitar

---

© 2025 Salonul Universitar
