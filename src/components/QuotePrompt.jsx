import React from "react";
import axios from 'axios';

function QuotePrompt(){
    const [entry, setEntry] = React.useState("");
    const [quote, setQuote] = React.useState("");

    function promptEntry(formData){
        const entry = formData.get("prompt");
        setEntry(oldEntry => entry);
    }
    let myAPIkey = process.env.APIkey
    console.log(myAPIkey)
    React.useEffect(() => {
        const options = {
            method: "GET",
            url: "http://localhost:8000/quotes",
            params: {categories: entry}
        }   
            axios.request(options).then((response) => {
                console.log(response.data[0].quote)
            }).catch(err => {
                console.error(err)
            })
    }, [entry])
 

    return (
        <section className="quoteprompt">
            <h1 className="promptlogo">
                <span className="purpletext">Quote</span>
                <span className="redtext">Forge</span>
            </h1>
            <form action={promptEntry} className="promptform">
                <input 
                type="text" 
                id="prompt" 
                name="prompt"
                placeholder="motivation, science, moon"
                />
                <div id="submitbtns">
                    <button type="submit" id="search" name="search">Search</button>
                    <button type="submit" id="lucky" name="lucky">I'm Feeling Lucky</button>
                </div>
                
            </form>
        </section>
    );
}

export default QuotePrompt;