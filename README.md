# Guidelines for ETL Project

This document contains guidelines, requirements, and suggestions for Project 2.

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

