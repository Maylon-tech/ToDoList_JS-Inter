
const Main = {
    /*THIS --> informa que o cacheSelectors está dentro do main.. 
    - que está no pai..com contextos diferentes no JS*/
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() { /*Responsáveis por criar as variáveis*/
       this.$checkButtons = document.querySelectorAll('.check')
       this.$inputTask = document.querySelector('#inputTask')
       this.$list = document.querySelector('#list')
       this.$removerBTN = document.querySelectorAll('.remove')     
    },

    bindEvents: function() {
        const self = this
        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)
        /*--> tem como objetivo levar o this(Main) para o keypress.*/

        this.$removerBTN.forEach(function(button) {
            button.onclick = self.Events.removeBtn_click
        })    
    },

    /*Funções relacionadas a Eventos*/
    Events: {
        checkButton_click: function(e) {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')
            
            if(isDone) {
                li.classList.remove('done')
            } else {

                li.classList.add('done')
            }
                        
            /*  BOA PRÁTICA DE JS-SENTENÇA LÓGICA
            if(!isDone) {
                return li.classList.remove('done')
            }  
            li.classList.add('done')*/
        },

        removeBtn_click: function(e) {
            let li = e.target.parentElement
            li.classList.add('removed')

            setTimeout(function() {
                li.classList.add('hidden')
            }, 300)
        },

        /*O THIS dentro de um elemento sempre será o próprio ELEMENTO.*/

        inputTask_keypress: function(e) {
            const key = e.key
            const value = e.target.value

            if(key === 'Enter') {
                this.$list.innerHTML += `
                    <li>

                        <div class="check"></div>
                            <label class="task">
                                ${value}
                            </label>

                        <button class="remove"></button>

                    </li>
                `
                e.target.value = '' /* Limpa o espaço após digitar no campo*/

                this.cacheSelectors()
                this.bindEvents()
            }
        }        
    }
}

Main.init()