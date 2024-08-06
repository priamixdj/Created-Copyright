

// crea elemento
  const sponsor = document.createElement('created');
        sponsor.style.width ='fit-content'
        sponsor.style.height ='fit-content'
        sponsor.style.color = 'black';
        // contenuto del div
        sponsor.innerHTML = '<p>Created by <a id="ref_priamixCopy" target="_blank" href=""></a></p>';
        
        
    sponsor.style = 'mix-blend-mode: difference;';
    // style
        sponsor.style.position = 'fixed';
        sponsor.style.bottom   = '10px'; 
        sponsor.style.right    = '10px';

    
    
    // aggiungere il div
        document.body.appendChild(sponsor);


    
// CREATO DA -------------------------------------------------
    // inserisci il link da google sheets creato da priamix
    
    document.addEventListener('DOMContentLoaded', function() {
        let indirizzo = document.getElementById('ref_priamixCopy');
            indirizzo.style = 'color: black;';

        // URL API di Google Sheets
        const apiURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=JiJFfW3oXfNLLzkoTxymTujpTRBegs2TFm1uMV85iAmIUraRoIcvRWzNY217K6dXOoRoUsLiDhsIyv30vhFbKkvdgsdpvB1im5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPRnDGE0_GJ_Lh7L2qNonHRaoZqAkMmAIUuTeoGkXZjekOz_3VUVXIzZsOkOqY_q4EmjqVin44L7-Ga74LdY8TjWqQlcapPVVNz9Jw9Md8uu&lib=MWvKr22n0E0WarSzrpnmixcV0aEdPLK-8';
        
        // Fetch dati dall'API
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                console.log('Created by ' + data); // logga l'intera risposta del json

                // assicurati che 'data' contenga un array con almeno un oggetto
                if (data && data.length > 0 && data[0].indirizzi) {
                    const indirizzo = data[0].indirizzi; // estrai il valore di 'indirizzi' dal primo oggetto
                    const name = data[0].nome; // estrai il valore di 'indirizzi' dal primo oggetto
                    let element = document.getElementById('ref_priamixCopy');
                    
                    element.href = indirizzo;
                    console.log(name + ', '+ indirizzo);


                    // in head 
                    const meta = document.createElement('meta');
                                
                    // Impostare gli attributi del meta tag
                    meta.name = 'Created by ';
                    meta.content = name + ', ' + indirizzo;

                    // Aggiungere il meta tag all'elemento head
                    document.head.appendChild(meta);

                    let afterText = element;
                    afterText.textContent = name;
                    afterText.style.display = 'inline-block'; // Assicurati che sia visibile e inline
                    element.appendChild(afterText);
                } else {
                    console.error('La risposta non contiene dati validi');
                }
            })
            .catch(error => {
                console.error('Errore nel recupero dei dati:', error);
            });
    });
// --------------------------------------------------------