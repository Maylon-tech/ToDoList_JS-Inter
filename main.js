
const Main = {
    /*THIS --> informa que o cacheSelectors está dentro do main.. - que está no pai..)com contextos diferentes no JS(*/
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },



    cacheSelectors: function() { /*Responsáveis por criar as variáveis*/
       this.checkButtons = document.querySelectorAll('.check')
    },

    bindEvents: function() {
        const self = this
        this.checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
            
        })
    },


    /*Funções relacionadas a Eventos*/
    Events: {
        checkButton_click: function() {
            button.classList.add('checou')
        }
    }
}

Main.init()