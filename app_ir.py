import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from config import pw

#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///titanic.sqlite")

engine = create_engine(f'postgresql+psycopg2://postgres:{pw}@localhost:5432/Olympics')

connection = engine.connect()

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
#Passenger = Base.classes.passenger
#olympic_games = Base.classes.olympic_games
new_games_coor = pd.read_sql('select * from new_games_coor', connection)
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/city_olympics<br/>"
        f"/api/v1.0/Irina<br/>"
        f"/api/v1.0/Ariel<br/>"
    )


@app.route("/api/v1.0/city_olympics")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all olympic_games names"""
    # Query all passengers
    #results = session.query(olympic_games.city_olympics).all()

    city_olympics = pd.read_sql('select city_olympics from new_games_coor', connection)

    session.close()

    print(city_olympics )
    # Convert list of tuples into normal list
    all_cities = list(np.ravel(city_olympics ))

    return jsonify(all_cities)


@app.route("/api/v1.0/Irina")
def passengers():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each olympic_games"""
    # Query all olympic_games
    #results = session.query(new_games_coor.city_olympics, olympic_games.country, olympic_games.year_olympics, olympic_games.season).all()
    results = pd.read_sql('select city_olympics, country, year_olympics, season, latit, longi from new_games_coor', connection).to_dict('records')
    session.close()



    # Create a dictionary from the row data and append to a list of all_passengers
    # all_olympic_games = []
    # for city_olympics, country, year_olympics, season in results:
    #     olympic_games_dict = {}
    #     olympic_games_dict["city_olympics"] = city_olympics
    #     olympic_games_dict["country"] = country
    #     olympic_games_dict["year_olympics"] = year_olympics
    #     olympic_games_dict["season"] = season
    #     all_olympic_games.append(olympic_games_dict)

    #return jsonify(all_olympic_games)
    return jsonify(results)
    

if __name__ == '__main__':
    app.run(debug=True)
