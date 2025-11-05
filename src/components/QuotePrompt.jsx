import React from "react";


function QuotePrompt(){
    

    return (
        <section className="quoteprompt">
            <h1 className="promptlogo">
                <span className="purpletext">Quote</span>
                <span className="redtext">Forge</span>
            </h1>
            <form className="promptform">
                <input 
                type="text" 
                id="prompt" 
                name="prompt"
                placeholder="motivation, science, moon"
                />
                <div id="submitbtns">
                    <button type="submit" id="search">Search</button>
                    <button type="submit" id="lucky">I'm Feeling Lucky</button>
                </div>
                
            </form>
        </section>
    );
}

export default QuotePrompt;