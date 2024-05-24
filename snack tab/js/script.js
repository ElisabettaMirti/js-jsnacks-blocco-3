// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

const memoriaInUso = [
    {
        "tab": ["Facebook", "GitHub", "Gmail"],
        "activeTab": 0
    },
    {
        "tab": ["Google Drive", "Twitter", "Gmail"],
        "activeTab": 1
    },
    {
        "tab": ["Facebook", "Spotify", "Instagram"],
        "activeTab": 2
    },
    {
        "tab": ["Telegram", "GitHub", "Gmail"],
        "activeTab": 1
    },
    {
        "tab": ["Twitter", "GitHub", "BOS"],
        "activeTab": 0
    },
];

memoriaInUso.forEach((tab, index) => {
    if ((tab.tab).includes("Facebook") && tab.activeTab == index) {
        tab.activeTab = activeTab + 1;
    }
});