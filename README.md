# Memory della Frontiera

Un gioco del memory che ho fatto per mio padre.

Le figure richiamano le cose che gli piacciono: il western, le auto d'epoca e la musica (Morricone, Dire Straits, Phil Collins). Il gioco è pensato per un uso tranquillo e quotidiano, senza fretta e senza giudizi.

**[Gioca](https://MikeBonWebDev.github.io/memory-frontiera/)**

## Cosa fa

- Quattro griglie: 4×4, 6×6, 8×8 e 10×10. Ogni griglia si sblocca finendo quella prima.
- Pulsante **?** per un suggerimento: mostra per un attimo una coppia, o la gemella della carta appena girata.
- Tempo di visione delle carte regolabile (1,5 / 2,5 / 4 secondi), nomi sotto le figure attivabili.
- Sul telefono la plancia si dispone in modo che tutte le carte stiano nello schermo senza scorrere.
- Alla fine della partita: mosse, tempo, **efficienza** (confronto con un giocatore a memoria perfetta) e **richiamo** (quante volte si prende la gemella al primo colpo dopo averla già vista).
- Storico delle partite per griglia, salvato solo sul dispositivo.
- Si installa sul telefono come app e funziona anche offline.

## Le basi

I livelli e le misure si appoggiano a un po' di letteratura sulla memoria:

- Luck & Vogel, *Nature*, 1997; Cowan, *Behavioral and Brain Sciences*, 2001: capacità della memoria di lavoro visiva (circa 3–4 oggetti).
- Naveh-Benjamin, *J. Exp. Psychol.: LMC*, 2000: con l'età cala soprattutto il legame tra oggetto e posizione.
- Velleman & Warrington, *American Mathematical Monthly*, 2013: numero atteso di mosse con memoria perfetta, circa (3 − 2 ln 2) × coppie.

È un gioco, non uno strumento diagnostico.

## Tecnica

HTML, CSS e JavaScript in un solo file, senza dipendenze né build. PWA con manifest e service worker. Grafica delle carte in SVG disegnata a mano nel codice.

Sviluppato con l'aiuto di Claude (Anthropic).

## Font

[Rye](https://fonts.google.com/specimen/Rye) e [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible), entrambi con licenza SIL Open Font License 1.1 (vedi la cartella `fonts`).
