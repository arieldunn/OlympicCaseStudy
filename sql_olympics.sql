
CREATE TABLE new_athletes(
	city_id VARCHAR NOT NULL,
	year_id INT NOT NULL,
	season VARCHAR,
	country_team VARCHAR,
	tot_Gold INT,
	tot_Silver INT,
	tot_Bronze INT,
	PRIMARY KEY (city_id, year_id)	
);

CREATE TABLE olympic_games(
	city_id INT NOT NULL,
	year_id INT NOT NULL,
	country VARCHAR,
	season VARCHAR,
	cost_per_event INT,
	cost_per_athlete INT,
	athletes VARCHAR,
	cost_billions INT,
	PRIMARY KEY (city_id, year_id)
);


SELECT OG.year_olympics, OG.city_olympics, A.country_team, season, event_cost_b_usd, tot_gold, tot_silver, tot_bronze FROM olympic_games as OG
LEFT JOIN new_athletes as A
on OG.city_olympics = A.city_olympics
AND OG.year_olympics = A.year_olympics
where A.country_team = 'USA' and OG.country = 'United States'
group by OG.year_olympics, OG.city_olympics, A.country_team, season, event_cost_b_usd, tot_gold, tot_silver, tot_bronze;

