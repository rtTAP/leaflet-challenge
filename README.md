# Overview of Module 15 Challenge

In this challenge, we are tasked with leveraging data provided by the United States Geological Survey (USGS) to create an interactive visualisation of recent earthquake activity around the world. The primary goal is to develop a map-based tool that can effectively display earthquake data, helping to inform the public and government organizations about seismic activity.

## Key Objectives:
1. **Data Retrieval:**
   - Obtain real-time earthquake data from the USGS GeoJSON Feed, which provides updates on seismic activity every five minutes.

2. **Data Visualization:**
   - Use Leaflet.js, an open-source JavaScript library for interactive maps, to plot earthquake data on a map.
   - Customize the map to visually represent earthquake magnitudes and depths through marker size and color.

3. **Interactive Features:**
   - Implement popups on each marker to display detailed information about each earthquake, including location, magnitude, and depth.
   - Create a legend to help users understand the color-coding of earthquake depths.


## Steps to Complete the Challenge:
1. **Repository Setup:**
   - Create a new GitHub repository named `leaflet-challenge`.
   - Clone the repository locally and set up the necessary directory structure.

2. **Map Creation:**
   - Initialize a Leaflet map centered on the United States with an appropriate zoom level.
   - Add a tile layer from OpenStreetMap for the map's background.

3. **Data Processing and Visualization:**
   - Fetch earthquake data in GeoJSON format from the USGS API.
   - Use the `L.geoJson` method to parse and add this data to the map.
   - Customize markers to reflect earthquake magnitude and depth.

4. **Interactive Elements:**
   - Implement popups on markers to display relevant earthquake information.
   - Add a legend to the map to indicate depth ranges with corresponding colors.

5. **Optional Enhancements:**
   - Integrate tectonic plate boundary data from an external source.
   - Allow users to toggle different data layers and base maps.


By completing this challenge, I have gained practical experience in working with real-world geospatial data, using Leaflet for map-based visualisations, and creating interactive web applications that can effectively communicate complex information to a broad audience.
"""


# Module 15 Challenge - Mapping

## Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualise USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Before You Begin

1. Create a new repository for this project called `Leaflet-Challenge`. Do not add this Challenge to an existing repository.
2. Clone the new repository to your computer.
3. Inside your local git repository, create a directory for the Leaflet Challenge. Use the folder name: `Leaflet-Visualisation`
4. This Challenge uses both HTML and JavaScript, so be sure to add all the necessary files. These will be the main files to run for analysis.
5. Push the above changes to GitHub.

## Instructions
### Create the Earthquake Visualization

Your first task is to visualise an earthquake dataset. Complete the following steps:

1. **Get your dataset.** To do so, follow these steps:
    - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualise.

    - When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualisation.

2. **Import and visualise the data by doing the following:**
    - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
    - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
        - *Hint:* The depth of the earth can be found as the third coordinate for each earthquake.
    - Include popups that provide additional information about the earthquake when its associated marker is clicked.
    - Create a legend that will provide context for your map data.
    - Your visualisation should look something like the preceding map.

## Requirements

Create the Earthquake Visualisation

### Map (60 points)
- TileLayer loads without error (20 points)
- Connects to geojson API using D3 without error (20 points)
- Markers with size corresponding to earthquake magnitude (10 points)
- A legend showing the depth and their corresponding color (10 points)

### Data Points (40 points)
- Data points scale with magnitude level (10 points)
- Data points colors change with depth level (10 points)
- Each point has a tooltip with the Magnitude, the location and depth (10 points)
- All data points load in the correct locations (10 points)

## Grading

This assignment will be evaluated against the requirements and assigned a grade according to the following table:

| Grade | Points |
|-------|--------|
| A (+/-) | 90+ |
| B (+/-) | 80–89 |
| C (+/-) | 70–79 |
| D (+/-) | 60–69 |
| F (+/-) | < 60 |

## Submission

To submit your Challenge assignment, click Submit, and then provide the URL of your GitHub repository for grading.


## References

Dataset created by the [United States Geological Survey](https://example.com).
