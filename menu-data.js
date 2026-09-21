// ============================================================
// DA PEANUTS — MENÙ
// ============================================================
// PER MODIFICARE IL MENÙ:
// cambia solo nome, descrizione o prezzo nelle righe qui sotto.
// I prezzi presenti sono PROVVISORI e puoi sostituirli liberamente.
// Esempio: prezzo: "€ 8,00"
// ============================================================

const MENU = {
  "Colazione": [
    { nome: "Caffè", descrizione: "Normale o decaffeinato", prezzo: "€ 1,50" },
    { nome: "Cappuccino", descrizione: "Normale, avena o senza lattosio", prezzo: "€ 2,00" },
    { nome: "Succo di frutta", descrizione: "Arancia o ACE", prezzo: "€ 3,00" },
    { nome: "Gocciole Extra Dark", descrizione: "Intere o in briciole", prezzo: "€ 3,50" },
    { nome: "Cereali vari", descrizione: "Muesli al cioccolato o frutti rossi", prezzo: "€ 4,00" },
    { nome: "Pancake", descrizione: "Con marmellate, Nutella, mirtilli e banana", prezzo: "€ 6,50" }
  ],

  "Primi": [
    { nome: "Testaroli", descrizione: "A scelta: pesto • parmigiano e olio • ragù • sugo di noci", prezzo: "€ 10,00" },
    { nome: "Spaghetti al pomodoro", descrizione: "Con pomodori ciliegino o datterino", prezzo: "€ 9,00" },
    { nome: "Spaghetti alla carbonara", descrizione: "La nostra carbonara", prezzo: "€ 11,00" },
    { nome: "Carbonara di zucchine", descrizione: "Alternativa vegetariana", prezzo: "€ 11,00" },
    { nome: "Spaghetti ai muscoli", descrizione: "Con muscoli e profumi del mare", prezzo: "€ 13,00" }
  ],

  "Secondi": [
    { nome: "Focaccia", descrizione: "Proposta variabile in base alla disponibilità dei prodotti", prezzo: "€ 9,00" },
    { nome: "Pizza", descrizione: "Proposta variabile in base alla disponibilità dei prodotti", prezzo: "€ 10,00" },
    { nome: "Muscoli alla marinara", descrizione: "In umido, alla marinara", prezzo: "€ 12,00" }
  ],

  "Aperitivo": [
    { nome: "Cestino misto", descrizione: "Patatine, olive, taralli e formaggi", prezzo: "€ 7,00" },
    { nome: "Sgabei", descrizione: "Da accompagnare con le nostre proposte da aperitivo", prezzo: "€ 6,00" }
  ],

  "Vini": [
    { nome: "Vino al calice", descrizione: "Selezione disponibile al momento", prezzo: "da € 4,50" },
    { nome: "Vino in bottiglia", descrizione: "Selezione di etichette disponibili al momento", prezzo: "da € 18,00" }
  ]
};
