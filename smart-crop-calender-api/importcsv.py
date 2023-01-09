#Here we import the three models we need to import data into
from project import settings
from crop.models import Crop
#Here we import the python build in csv library(no need to pip install it)
import csv

#We define a function.... to upload the csv..
def uploadCSV():
	
	#We open the csv using open(--which is part of csv library) and asign it a variable 'f'
    f = open("Crop_Calendar_Data.csv")
	
	#with csv.reader(f) --we read from it... and asign what we read to a variable called 'reader'
    reader = csv.reader(f)
	
	#we create a For-loop to loop through our data..
	#during the looping we asign each column in our csv to a variable..
    for name, agro_ecological_zone, season, early_sowing_month, late_sowing_month, sowing_value, sowing_unit, growing_period, water_needed, challenges in reader:
        Crop.objects.create(name = name, agro_ecological_zone = agro_ecological_zone, season = season, early_sowing_month = early_sowing_month, late_sowing_month = late_sowing_month, sowing_value = sowing_value, sowing_unit = sowing_unit, growing_period = growing_period, water_needed = water_needed, challenges = challenges)
        print(f"added {name}")

#Call the function so the we import it it will automatically run
uploadCSV()