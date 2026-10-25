// DA PEANUTS — MENÙ DIGITALE
// Prezzi indicativi: modificabili in base al listino del locale.

const MENU = {
  "Colazione": [
    { nome: "Caffè", descrizione: "Normale o decaffeinato", prezzo: "€ 1,50" },
    { nome: "Cappuccino", descrizione: "Normale, avena o senza lattosio", prezzo: "€ 2,00" },
    { nome: "Succhi di frutta", descrizione: "ACE, arancia, pera, ananas o mela", prezzo: "€ 3,00" },
    { nome: "Gocciole Extra Dark", descrizione: "Intere o in briciole", prezzo: "€ 3,50" },
    { nome: "Cereali vari", descrizione: "Muesli al cioccolato o frutti rossi", prezzo: "€ 4,00" },
    { nome: "Pancake", descrizione: "Con marmellate, Nutella, mirtilli e banana", prezzo: "€ 6,50" },
    { nome: "Croissant", descrizione: "Con Nutella o marmellata", prezzo: "€ 2,50" }
  ],

  "Primi": [
    { nome: "Testaroli", descrizione: "A scelta: pesto • parmigiano e olio • ragù • sugo di noci", prezzo: "€ 10,00" },
    { nome: "Spaghetti al pomodoro", descrizione: "Con pomodori ciliegino o datterino", prezzo: "€ 9,00" },
    { nome: "Spaghetti alla carbonara", descrizione: "Con pancetta", prezzo: "€ 11,00" },
    { nome: "Carbonara vegetariana di zucchine", descrizione: "🥬 Vegetariana • con zucchine", prezzo: "€ 11,00" },
    { nome: "Spaghetti ai muscoli", descrizione: "Con muscoli e pomodorino ciliegino", prezzo: "€ 13,00" }
  ],

  "Secondi": [
    { nome: "Focaccia", descrizione: "Proposta variabile in base alla disponibilità dei prodotti", prezzo: "€ 9,00" },
    { nome: "Pizza", descrizione: "Proposta variabile in base alla disponibilità dei prodotti", prezzo: "€ 10,00" },
    { nome: "Muscoli alla marinara", descrizione: "Con pepe", prezzo: "€ 12,00" }
  ],

  "Aperitivo": [
    { nome: "Box Peanuts", descrizione: "La nostra box per l’aperitivo", prezzo: "€ 7,00" },
    { nome: "Sgabei", descrizione: "Da accompagnare con le nostre proposte da aperitivo", prezzo: "€ 6,00" }
  ],

  "Dolci": [
    { nome: "Maxibon", descrizione: "", prezzo: "€ 3,50" },
    { nome: "Tortino al cioccolato", descrizione: "", prezzo: "€ 5,00" }
  ],

  "Experience": [
    { nome: "Sunset Jacuzzi", descrizione: "Jacuzzi al tramonto con drink a piacere", prezzo: "Su richiesta" },
    { nome: "Fire Pit Night", descrizione: "Fuoco a legna con marshmallow da arrostire", prezzo: "Su richiesta" },
    { nome: "Movie Night", descrizione: "Serata cinema sotto le stelle", prezzo: "Su richiesta" }
  ],

  "Cocktail": [
    { nome: "Spritz", descrizione: "Aperol, Prosecco e soda", prezzo: "€ 7,00" },
    { nome: "Campari Spritz", descrizione: "Campari, Prosecco e soda", prezzo: "€ 7,00" },
    { nome: "Piña Spritz", descrizione: "Sarti Rosa, Prosecco e soda, con nota tropicale all’ananas", prezzo: "€ 8,00" },
    { nome: "Hugo", descrizione: "Prosecco, sciroppo di sambuco, soda e menta", prezzo: "€ 7,00" },
    { nome: "Americano", descrizione: "Bitter, vermouth rosso e soda", prezzo: "€ 8,00" },
    { nome: "Negroni", descrizione: "Gin, bitter e vermouth rosso", prezzo: "€ 8,00" },
    { nome: "Gin Tonic", descrizione: "Gin e acqua tonica", prezzo: "€ 8,00" },
    { nome: "Moscow Mule", descrizione: "Vodka, ginger beer e lime", prezzo: "€ 8,00" },
    { nome: "Analcolico", descrizione: "Cocktail analcolico della casa", prezzo: "€ 6,00" }
  ],

  "Vini": [
    { nome: "Vino al calice", descrizione: "Selezione disponibile al momento", prezzo: "da € 4,50" },
    { nome: "Vino in bottiglia", descrizione: "Selezione di etichette disponibili al momento", prezzo: "da € 18,00" }
  ]
};
