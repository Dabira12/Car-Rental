import React, { Component } from 'react'

class Faq extends Component{
    state={
        lang:"eng"
    }
    componentDidMount(){
        const M = window.M;
        
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elemsB = document.querySelectorAll('.fixed-action-btn');
        //     var instances= M.FloatingActionButton.init(elemsB, {});
        //   });
        M.AutoInit();
    }
    updateState = (lang) => {
        this.setState({
          lang: lang
        },() => { console.log('new state', this.state.lang); })
      }
    render(){
        const fr=[
            {title:"Questions fréquemment posées"},
            {bigText:"Que se passe-t-il si j'obtiens un billet?", smallText:"Le locataire est entièrement responsable de tous les excès de vitesse, circulation, stationnement ou autres contraventions et infractions émises pendant que le véhicule est en sa possession. Vous devez payer toutes les pénalités, frais, frais de remorquage ou frais de fourrière."},
            {bigText:"Quel est l'âge minimum pour louer une voiture de luxe?", smallText:"Quel est l'âge minimum pour louer une voiture de luxe?"},
            {bigText:"Quelles sont les conditions pour louer une voiture?",smallText:"Pour louer une voiture, vous devrez présenter à la fois un permis de conduire valide et une carte de crédit majeure, à votre nom, lors de la prise en charge ou de la livraison du véhicule. Si vous utilisez votre propre assurance pour couvrir la location, vous devez soumettre une preuve de couverture avant la prise en charge du véhicule."},
            {bigText:"Comment puis-je louer une voiture?",smallText:"Pour louer une voiture, sélectionnez une voiture de votre choix dans nos listes de location et sélectionnez une date disponible. Votre voiture sera alors réservée."}
        ]

       
        var lang = null
        

        
        if(this.state.lang=="eng"){
            return(
                <div className="container">
                    <h3 className="center blue-text text-darken-4"> Frequently Asked Questions </h3>
                    <div className="divider"></div>

                    <div class="section">
                        <h5>What happens if I get a ticket?</h5>
                        <p>The renter is fully responsible for all speeding, traffic, parking, or other tickets and violations issued while the vehicle is their possession. You must pay for any and all penalties, fees, towing charges, or impound costs.</p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>Whats the minimum age to rent a luxury car?</h5>
                        <p>Our policy mandates that all renters must be 25 years or older.</p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>What the requirements to rent a car?</h5>
                        <p>To rent a car, you will need to present both a valid driver’s license and a major credit card, in your own name, upon pick-up or delivery of the vehicle. If you are using your own insurance to cover the rental, then you must submit proof of coverage prior to pick up of the vehicle.</p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>How can I rent a car?</h5>
                        <p>To rent a car, select a car of your choice in our rental listings and select an available date. Your car will then be reserved.</p>
                    </div>

                    <div class="fixed-action-btn">
                        <a class="btn-floating btn-large blue-text text-darken-4">
                            <i class="large material-icons">language</i>
                        </a>
                        <ul>
                            <li> <button className="btn-floating btn-large" onClick={()=>this.updateState("eng")}>ENG</button> </li>
                            <li> <button className="btn-floating btn-large" onClick={()=>this.updateState("fr")}> FR</button> </li>
                        </ul>
                    </div>
                </div>

            

            )
        }
        else{
            
            return(
                
                <div className="container">
                    <h3 className="center blue-text text-darken-4"> {fr[0].title} </h3>
                    <div className="divider"></div>

                    <div class="section">
                        <h5>{fr[1].bigText}</h5>
                        <p>{fr[1].smallText}</p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>{fr[2].bigText}</h5>
                        <p>{fr[2].smallText}</p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>{fr[3].bigText}</h5>
                        <p>{fr[3].smallText}</p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>{fr[4].bigText}</h5>
                        <p>{fr[4].smallText}</p>
                    </div>

                    <div class="fixed-action-btn">
                        <a class="btn-floating btn-large blue-text text-darken-4">
                            <i class="large material-icons">language</i>
                        </a>
                        <ul>
                            <li> <button className="btn-floating btn-large" onClick={()=>this.updateState("eng")}>ENG</button> </li>
                            <li> <button className="btn-floating btn-large" onClick={()=>this.updateState("fr")}> FR</button> </li>
                        
                        </ul>
                    </div>
                </div>

            

            )

        }
    };
}



export default Faq;