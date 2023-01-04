let vieille_dame = {
    age: 98,
    nom: {
        prenom: 'jacqueline',
        nomDeFamille: 'ber',
    },
    moral: 'mal',
    objet: 'canne',

    parler(){
        if (this.moral==='mal') {
            alert(`Vous me dérangez et je vais vous frapper avec ma ${this.objet} !`);
        }
        else{
            alert(`Bonjour ${vieil_homme.nom}`)
        }
    }

}


let vieil_homme = {
    nom: 'Gerard',
    adoucir() {
        vieille_dame.moral = 'bien';
    }
}
vieille_dame.parler();
vieil_homme.adoucir();
vieille_dame.parler();
