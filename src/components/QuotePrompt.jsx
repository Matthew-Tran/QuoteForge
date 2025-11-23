import React from "react";
import axios from 'axios';

function QuotePrompt(){
    const [entry, setEntry] = React.useState("");
    const [quote, setQuote] = React.useState("");

    function promptEntry(formData){
        const entry = formData.get("prompt");
        setEntry(oldEntry => entry);
    }

    const fetchAPI = async () => {
        try {
            const response = await axios.get("localhost:8080/quotes/" + entry)
            console.log(response.data.quote, response.data.author)
            alert(response.data.quote)
            setEntry(oldEntry => "")
        } catch (err){
            console.error(err)
        }
    }
    React.useEffect(() => {
        if (entry !== ""){
            fetchAPI()
        }
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