# Memory della Frontiera

Gioco del memory fatto per mio padre (65 anni). Temi: western, auto d'epoca, musica (Morricone, Dire Straits, Phil Collins).
Obiettivo: un gioco tranquillo e quotidiano, senza fretta e senza giudizi. Non è uno strumento diagnostico.

## Struttura

- `index.html`: tutto il gioco (HTML, CSS, JS) in un file, senza dipendenze né build.
- `sw.js`: service worker per l'uso offline. **A ogni modifica dei file aumentare `VERSION`** ("v1" → "v2"…), altrimenti i telefoni tengono la versione vecchia. Se si aggiunge un file, aggiungerlo anche a `FILES`.
- `manifest.webmanifest`, `icons/`: installazione come app (icona: stella da sceriffo ocra su cuoio).
- `fonts/`: Rye (titoli) e Atkinson Hyperlegible (testo, scelta per la leggibilità), ospitati in locale per l'offline. Licenza OFL.
- Pubblicato con GitHub Pages dalla radice del branch `main`. Percorsi tutti relativi.
- `file-claude/` è esclusa da git.

## Decisioni di progetto

### Livelli
- Griglie 4×4, 6×6, 8×8, 10×10 (8, 18, 32, 50 coppie).
- Scartati 16×16 e 32×32: carte troppo piccole, plancia da scorrere, partite che non si finiscono. Il 10×10 è il gradino "sfida".
- Sblocco a scalini: ogni griglia si sblocca finendo quella prima (4 → 6 → 8 → 10). Lo sblocco si ricava dallo storico: un livello è aperto se esiste almeno una partita finita del livello precedente.

### Figure
- 16 figure SVG disegnate nel codice (cappello, stella, cactus, ferro di cavallo, stivale, ruota, tramonto, chitarra, tamburo, tromba, disco, cassetta, auto d'epoca, volante, pompa di benzina, armonica).
- Niente copertine, loghi o volti degli artisti: la musica è evocata dagli strumenti.
- Oltre le 16 coppie le figure si ripetono in colori diversi; oltre le 128 servirebbero anche le cornici (codice presente, oggi non usato).
- I colori delle figure restano volutamente distinti (rosso, verde acqua, giallo, blu, verde, viola, marrone, nero) e NON terrosi: dal 6×6 il colore è l'unico indizio tra due figure uguali, e con l'età si distinguono peggio i toni vicini.
- I nomi dei colori concordano con il genere della figura ("Cappello rosso", "Stella rossa").

### Nomi sotto le figure
- Attivabili con l'interruttore "Nomi sulle carte".
- Nascosti in automatico sotto gli 80 px per carta: sulle carte piccole conta solo l'immagine (scelta mia dopo averlo provato).
- Da verificare con mio padre se i nomi lo aiutano o lo rallentano.

### Telefono
- Si gioca soprattutto da telefono.
- La plancia non è per forza quadrata: `size()` sceglie colonne e righe in modo che tutte le carte stiano nello schermo senza scorrere. Fino al 6×6 (36 carte) niente righe incomplete e preferenza per forme quadrate; oltre, è ammessa un'ultima riga incompleta per avere carte più grandi.
- Barra fissa in alto con: pulsante ?, griglia in gioco, coppie, mosse, tempo, "Nuova". Il contatore aiuti è nel badge del ?.
- Niente zoom da doppio tocco né selezione del testo sulle carte.

### Suggerimento (?)
- Mostra una coppia per un attimo. Se è già girata una carta, mostra la sua gemella.
- Ogni suggerimento conta come 2 mosse nell'efficienza.

### Misure a fine partita
- **Efficienza** = mosse ideali / (mosse + 2 × suggerimenti). Mosse ideali con memoria perfetta ≈ (3 − 2 ln 2) × coppie ≈ 1,61 × coppie (Velleman & Warrington, 2013).
- **Richiamo** = quando la gemella della prima carta girata era già stata vista, percentuale di volte in cui la si prende al primo colpo. È la misura più vicina al legame oggetto–posizione, quello che cala di più con l'età (Naveh-Benjamin, 2000).
- Nessun tempo di riferimento né soglie per età: il tempo dipende da mani, schermo e impostazioni più che dalla memoria, e un limite trasformerebbe il gioco in una verifica.
- Lo storico serve a confrontare la persona con se stessa nel tempo, non con altri.

### Aspetto
- Palette western: sabbia, ocra, cuoio, legno. Plancia di legno con venature, dorso delle carte in cuoio con stella ocra. Tema scuro con gli stessi toni.
- Evitare i verdi salvia / verde acqua "da default" per l'interfaccia.

## Dati salvati (localStorage, solo sul dispositivo)
- `mf-settings`: griglia scelta, tempo di visione, nomi on/off.
- `mf-hist-<4|6|8|10>`: ultime 20 partite per griglia (data, mosse, tempo, aiuti, efficienza, richiamo).
- I dati sono legati all'indirizzo: la versione su GitHub Pages e quella condivisa come artifact non condividono storico né sblocchi.
