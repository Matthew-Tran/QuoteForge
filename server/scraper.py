from selenium import webdriver
from selenium.webdriver.common.by import By
from seleniumbase import SB
from flask import Flask, request, jsonify
from flask_cors import CORS
import random


app = Flask(__name__)

cors = CORS(app, origins='*')


@app.route("/quotes/<query>")

def get_user(query):
    website = 'https://www.brainyquote.com/search_results?q='+query

    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach", True)
    cService = webdriver.ChromeService(executable_path="chromedriver.exe")
    driver = webdriver.Chrome(service = cService, options=options)
    driver.get(website)

    quotes = []
    authors = []

    numpages = driver.find_elements(By.CSS_SELECTOR, "li.page-item")

        
    matches = driver.find_elements(By.CSS_SELECTOR, "div > .grid-item.qb > a")
    
    for i in range (0, len(matches)):
        if (i % 2 == 0):
            quotes.append(matches[i].text)
        else:
            authors.append(matches[i].text)


    driver.quit()
    if (len(quotes) > 0):
        chosenQuote = random.randint(0, len(quotes) - 1)
        print(chosenQuote)
        user_data = {
            "quote": quotes[chosenQuote],
            "author": authors[chosenQuote]
        }
        return jsonify(user_data), 200
    else: 
        user_data = {
            "quote": "not found"
        }
        return jsonify(user_data), 404

if __name__ == "__main__":
     app.run(debug=True, port=8080)