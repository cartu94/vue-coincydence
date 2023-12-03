# VUE COINCYDENCE

Applicazione web che, previa autenticazione attraverso account google, visualizza una lista di item con apertura dettaglio al click.

Ogni item è caratterizzato dai seguenti attributi:

* Immagine (url internet)
* Titolo
* Descrizione
* Lista di tag

L'applicazione utilizza le seguenti tecnologie:

* Vue3
* Autenticazione Google tramite firebase
* Database Firestore (Firebase)
* Tailwind CSS

## Project Setup

```sh
npm install
```

## Compile and Hot-Reload

( sembra funzionare solo su Chrome :cold_sweat: )

```sh
npm run dev
```

## Usage

* Esegui l'accesso utilizzando il tuo account Google, premendo il pulsante verrai reindirizzato per l'autenticazione;
* Una volta autenticato, dopo un breve caricamento, verrà visualizzata una serie di oggetti (card) che possiedono un effetto on hover e on click;
* Cliccando l'oggetto sarà possibile visualizzare i dettagli nella loro completezza e verrà disabilitato l'effetto hover, cliccando nuovamente lo stesso oggetto tornerà al suo stato iniziale;
* Nell'header è presente un pulsante per effettuare il logout.
