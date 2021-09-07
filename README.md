# Guidelines for Project 3

This document contains guidelines, requirements, and suggestions for Project 3.

Your visualization must include a Python Flask–powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.). 
Your project should fall into one of the below four tracks: 
A custom “creative” D3.js project (i.e., a nonstandard graph or chart)
A combination of web scraping and Leaflet or Plotly
A dashboard page with multiple charts that update from the same data
A “thick” server that performs multiple manipulations on data in a database prior to visualization (must be approved)
Your project should include at least one JS library that we did not cover.
Your project must be powered by a data set with at least 100 records.
Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).
Your final visualization should ideally include at least three views. 


## Team Effort

Due to the short project timeline, our team Worked closely through all phases of the project.  The team met daily via zoom to discuss progress, address issues. The platform was also used to work on one tasks such as loading data on sql database.

## Outline of the ETL Project
 
## Finding Data

This is a pre ETL research and data sceening stage.  Our team used two sources of data namely:

* [data.world](https://data.world/)

* [Kaggle](https://www.kaggle.com/)

## Data Cleanup & Analysis

Our team identified three csv files as our datasets, and performed ETL on the data. 
Below is the documentation of the steps taken:

### Extracting Files into DataFrames

* We inspected CSV files to identify possible flaws including: different column titles, format, and dates.
* Selected files were stored in the "Resources" folder.
* On Jupyter Notebook we atarted by importing dependencies.
* A pathway for csv files was created and csv files were read into DataFrames.

### Transforming DataFrames

#### Athletes DataFrame
* Created a Medals DataFrame and split DataFrame to three groupby medal categories: Gold, Silver, and Bronze. Concatinated the three DataFrames into a single DataFrame and created additional column for medals count. 
* Merged the medals table with the athletes table, filtered columns, renamed columns, dropped empty rows and duplicate values, and formatted data.
* Changed the language for several cities to English

#### Costs DataFrames
* Filtered desired columns and renamed them.
* Standardized  NaN values
* Merged the two cost DataFrames based on year and city.

### Data Loading

* Used an ERD tool to depict relationships between Tables.
* Initialized engine to connect to postgress (pgAdmin) and confirmed a connection to tables.
* Created tables, and determined Primary Keys.
* Populated tables with data.  

### Query Results

* Obtained desired results.

## Project Report

Written report included with this submission.

