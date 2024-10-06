# Landsat Reflectance Data: On the Fly and at Your Fingertips

[Space Apps Challenge](https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/landsat-reflectance-data-on-the-fly-and-at-your-fingertips/?tab=details)

# Details

Landsat missions have provided the longest continuous dataset of remotely sensed measurements of Earth’s land surface. Comparing ground-based spectral measurements with Landsat Surface Reflectance (SR) data collected at the same time can facilitate experiential learning, encourage scientific exploration with satellite data, foster interdisciplinary and spatial thinking skills, and empower individuals to become informed global citizens. But to compare ground-based measurements with Landsat data, you need to know when Landsat will be passing over a specific land area, and then be able to access the Landsat data collected at that place and time. This specialized and labor-intensive task has yet to be integrated into a single, cohesive application. Your challenge is to develop a web-based application that supports the comparison of ground-based observations with Landsat data by allowing users to define a target location, receive notifications when Landsat is to pass over that location, and then access and display the corresponding Landsat SR data.

## **Background**

[https://www.youtube.com/watch?v=uyxwwpJ1aMM&embeds_referring_euri=https://www.spaceappschallenge.org/](https://www.youtube.com/watch?v=uyxwwpJ1aMM&embeds_referring_euri=https://www.spaceappschallenge.org/)

The Landsat Program, administered by NASA and the U.S. Geological Survey, has improved our understanding of Earth systems, helped monitor environmental change, and informed decision-making about our planet’s natural resources. Landsat’s data archive provides the longest continuous remotely sensed record of multispectral, highly calibrated, medium spatial resolution (15 ⎼ 100 m) measurements of Earth’s land surface. The two most recent missions, Landsat 8 (launched in 2013) and Landsat 9 (launched in 2021), collectively deliver complete coverage of Earth’s land surface every eight days.

Free and open data from Landsat offers over fifty years of satellite-based Earth observations to engage members of the public and enable them to learn how Earth is changing. For example, students can compare Landsat data with ground-based spectral measurements from low-cost, educational tools they build themselves (e.g., the Science and Technology Education for Land/Life Assessment [STELLA spectrometer](https://landsat.gsfc.nasa.gov/stella/)). Comparing ground-based measurements with Landsat data can help students connect satellite observations with the landscape, enhance remote sensing education, and cultivate an understanding of data validation. Validation is the process of evaluating the accuracy of satellite-derived data through comparisons with ground reference data. This practice ensures that measurements collected by space-based sensors accurately represent what is happening on the ground. Validation is an essential component of any Earth observation program since it enables the independent verification of physical measurements.

To compare ground-based spectral data with Landsat data, it is necessary to know when Landsat will pass over a certain land area. An application that notifies users when Landsat will pass over a designated area and allows them to download the corresponding Landsat spectral data can inspire experiential learning activities to encourage scientific exploration, foster interdisciplinary and spatial thinking skills, and empower individuals to become informed global citizens.

While such an application could primarily serve as an educational tool, it could also support scientists, citizen scientists, and land managers. For example, it could facilitate the acquisition of near-real-time Landsat SR measurements, which could then be accessed, downloaded, and applied by other Landsat data users. Additionally, this application could support scientists in the collection of ground reference data to further Landsat data validation.

## **Objectives**

Your challenge is to develop an easy-to-use, web-based application that supports the comparison of ground-based observations with Landsat data by allowing users to define a target location, receive notifications when Landsat is to pass over that location, and then access and display the corresponding Landsat SR data.

Think about how your tool can:

1. Allow users to define the target location. Will they specify the place name, latitude and longitude, or select a location on a map?
2. Determine when a Landsat satellite is passing over the defined target location.
3. Enable users to select the appropriate lead time for notifications about the overpass time and the method of notification.
4. Display a 3x3 grid including a total of 9 Landsat pixels centered on the user-defined location (target pixel).
5. Determine which Landsat scene contains the target pixel using the Worldwide Reference System-2 (WRS-2) and display the Landsat scene extent on a map.
6. Allow users to set a threshold for cloud coverage (e.g., only return data with less than 15% land cloud cover).
7. Permit users to specify whether they want access to only the most recent Landsat acquisition or acquisitions spanning a particular time span.
8. Acquire scene metadata such as acquisition satellite, date, time, latitude/longitude, Worldwide Reference System path and row, percent cloud cover, and image quality.
9. Access and acquire Landsat SR data values (and possibly display the surface temperature data from the thermal infrared bands) for the target pixel by leveraging cloud data catalogs and existing applications.
10. Display a graph of the Landsat SR data along the spectrum (i.e., the spectral signature) in addition to scene metadata.
11. Allow users to download or share data in a useful format (e.g., csv).

These are only some of the functions your tool could perform. Feel free to be creative and add expanded functionalities to create an even more effective and integrated application!

## **Potential Considerations**

Y*ou may (but are not required to) consider the following:*

- **Use and Accessibility:** Think about how to ensure your application can be optimized for and responsive to mobile devices. Don’t forget to be mindful of load times and follow basic 508 compliance requirements.
- **Location selection:** Your tool could allow users to select a target location based on their current location or select multiple locations prior to going into the field where cell phone service might be weak or non-existent.
- **Target location:** The target location represents the location of the target pixel set by the user. Your tool could include a reference base map (see the Mapping Resources listed in the Resources) and allow the user to define the target location by either entering latitude and longitude, place name, or by placing a pin on a map. See the example below.

![https://assets.spaceappschallenge.org/media/images/Challenge1example.width-500.png](https://assets.spaceappschallenge.org/media/images/Challenge1example.width-500.png)

- **Mapping location with target pixel:** As shown in the example image below, your tool could display:
  - the target pixel within a reference grid map of 3x3 pixels surrounding the target pixel.
  - the Landsat scene metadata.
  - the SR data in graphical form.

![https://assets.spaceappschallenge.org/media/images/challenge1example2.width-500.jpg](https://assets.spaceappschallenge.org/media/images/challenge1example2.width-500.jpg)

- **Landsat Scene Extents (WRS-2):** Each Landsat scene measures 185 kilometers (115 miles) by 180 km (112 miles) and is arranged into paths and rows based on the Worldwide Reference System-2 (WRS-2). Paths are separated into rows based on lines of latitude as Landsat satellites move along a near-vertical path from pole to pole in a descending (daytime) pass. The United States Geological Survey (USGS) Landsat Acquisition Tool (see the Satellite Tracking Resources in the Resources) displays the Landsat acquisition calendar and pending Landsat acquisitions and provides an option to convert WRS paths and rows to points of latitude and longitude.
- **Landsat Acquisitions:** Landsat 8 and Landsat 9 orbit Earth at an altitude of 705 kilometers (438 miles). Each satellite makes a complete orbit every 99 minutes, completes about 14 full orbits each day, crosses the equator at 10:00 am ± 15 minutes (mean local time), and crosses every point on Earth once every 16 days. Combined measurements from Landsat 8 and 9 provide for repeat measurements over the same location every 8 days.
- **Data Processing Times:** Think about how your application can combine the capability of the Landsat acquisition tools with data processing tools to derive SR values for defined target locations. Newly acquired Level-1 Landsat 8 and Landsat 9 scenes become available for download typically less than 12 hours after data acquisition. The USGS Level-2 SR products are made available within 3 days for Landsat 9 and within 4 to 11 days for Landsat 8. For more information, you can access the Landsat Collection 2 Generation Timeline (see Resources).
- **Add-on functionality - Harmonized Landsat Sentinel-2 (see Resources):** A more robust application could allow users to acquire ESA’s Sentinel-2 data. Harmonization of the Landsat and Sentinel-2 data is of paramount importance for the scientific community. The Harmonized Landsat Sentinel-2 (HLS) project provides consistent surface reflectance (SR) data from the Operational Land Imager (OLI) onboard the joint NASA/USGS Landsat 8 and Landsat 9 satellites and the Multi-Spectral Instrument (MSI) onboard Europe’s Copernicus Sentinel-2A and Sentinel-2B satellites. The combined measurements enable global observations of the land every 2–3 days at 30 meter (m) spatial resolution. The HLSS30 and HLSL30 products are gridded to the same resolution and [Military Grid Reference System (MGRS)](https://hls.gsfc.nasa.gov/products-description/tiling-system/) tiling and are “stackable” for time series analysis.

*For data and resources related to this challenge, refer to the Resources tab at the top of the page. More resources may be added before the hackathon begins.*

# Resources

## **Example Resources:**

*NASA does not endorse any non-U.S. Government entity and is not responsible for information contained on non-U.S. Government websites. For non-U.S. Government websites, participants must comply with any data use parameters of that specific website.*

## **NASA Resources**

### **NASA Satellite Resources**

[**Landsat 9](https://landsat.gsfc.nasa.gov/satellites/landsat-9/):** Landsat 9, a partnership between NASA and the U.S. Geological Survey, launched September 26, 2021, and continues the Landsat program’s critical role of monitoring, understanding, and managing the land resources needed to sustain human life. This site provides an overview of Landsat 9 mission details, instrument descriptions, spectral bands, and latest news.

[**Landsat 8](https://landsat.gsfc.nasa.gov/satellites/landsat-8/):** Landsat 8 launched on February 11, 2013, from Vandenberg Air Force Base, California, on an Atlas-V 401 rocket, with the extended payload fairing from United Launch Alliance, LLC. This site provides an overview of Landsat 8 mission details, spacecraft and instrument descriptions, spectral bands, and latest news.

[**Harmonized Landsat Sentinel-2](https://hls.gsfc.nasa.gov/):** The NASA Harmonized Landsat Sentinel-2 (HLS) project provides consistent surface reflectance data from the Operational Land Imager (OLI) onboard the joint NASA/USGS Landsat 8 satellite and the MultiSpectral Instrument (MSI) onboard Europe’s Copernicus Sentinel-2A and Sentinel-2B satellites. The combined measurements enable global observations of the land every 2–3 days at 30-meter (m) spatial resolution. The HLS project has created seamless data products that can be used together, accounting for atmospheric correction, cloud and cloud-shadow, spatial co-registration, illumination and view angle normalization, and spectral bandpass adjustment.

[**Landsat Collection 2 Generation Timeline](https://www.usgs.gov/media/images/landsat-collection-2-generation-timeline):** This graphic displays the timeline of generating Level-1 and Level-2 Landsat products.

### **Satellite Tracking Resources**

[**Landsat Acquisition Tool](https://landsat.usgs.gov/landsat_acq):** The USGS Landsat Acquisition Tool displays the Landsat acquisition calendar and schedule of pending acquisitions. It also provides an option to convert WRS paths and rows to coordinates of latitude and longitude. The information on the website is updated daily and the calendar displays acquisition up to two days in advance.

### **Mapping Resources**

[**Landsat Shapefiles and Keyhole Markup Language (KML) Files](https://www.usgs.gov/landsat-missions/landsat-shapefiles-and-kml-files):** The USGS provides Landsat shapefiles and KML files for the WRS grids. Developers will want to download the files for WRS-2 (Landsat 4 – Landsat 9) descending (daytime) files.

### **NASA Data Resources**

[**Landsat Data Access](https://www.usgs.gov/landsat-missions/landsat-data-access):** This page provides information about accessing and downloading Landsat data and science products.

[**USGS Landsat Collection 2](https://www.usgs.gov/landsat-missions/landsat-collection-2):** Landsat Collection 2 data, released in early 2021, marked the second major reprocessing of the Landsat archive by the U.S. Geological Survey. Collection 2 includes Level-1 data products, Level-2 science products, and U.S. Analysis Ready Data (ARD). For this challenge, the primary data product of interest is the Landsat Surface Reflectance product.

[**Landsat Collection 2 Surface Reflectance](https://www.usgs.gov/landsat-missions/landsat-collection-2-surface-reflectance):** The Landsat Surface Reflectance represents the amount of light reflected by Earth’s surface. Surface reflectance improves the comparison between multiple Landsat images over the same region by accounting for atmospheric effects and enhances the characterization of features and changes on Earth’s surface.

[**Landsat Collection 2 Metadata](https://www.usgs.gov/landsat-missions/landsat-collection-2-metadata):** Landsat data downloads include metadata files. Metadata files include important collection attributes, such as path and row information, processing level, image quality, and cloud cover. See also the [Landsat Collection 2 Level 2 Guide](https://www.usgs.gov/landsat-missions/landsat-collection-2-level-2-science-products).

[**Harmonized Landsat Sentinel-2 Data](https://lpdaac.usgs.gov/data/get-started-data/collection-overview/missions/harmonized-landsat-sentinel-2-hls-overview/):** The Harmonized Landsat Sentinel-2 (HLS) project provides consistent surface reflectance (SR) data from the Operational Land Imager (OLI) onboard the joint NASA/USGS Landsat 8 and Landsat 9 satellites and the Multi-Spectral Instrument (MSI) onboard Europe’s Copernicus Sentinel-2A and Sentinel-2B satellites. The combined measurement enables global observations of the land every 2–3 days at 30 meter (m) spatial resolution. The HLSS30 and HLSL30 products are gridded to the same resolution and [Military Grid Reference System (MGRS)](https://hls.gsfc.nasa.gov/products-description/tiling-system/?_ga=2.9199477.151671410.1721868311-733739730.1721868311&_gl=1*13bf0x6*_ga*NzMzNzM5NzMwLjE3MjE4NjgzMTE.*_ga_0YWDZEJ295*MTcyMTkyMDAwNi4xLjEuMTcyMTkyMDAxMC4wLjAuMA..) tiling and are “stackable” for time series analysis.

[**Landsat Normalized Difference Vegetation Index](https://www.usgs.gov/landsat-missions/landsat-normalized-difference-vegetation-index):** The Landsat Normalized Difference Vegetation Index (NDVI) is used to quantify vegetation greenness and is useful in understanding vegetation density and assessing changes in plant health.

## **Space Agency Partner Resources**

### **European Space Agency (ESA)**

[**ADAM Surface Reflectance Database](https://earth.esa.int/eogateway/catalog/adam-surface-reflectance-database-v4-0):** ADAM enables generating typical monthly variations of the global Earth surface reflectance at 0.1° spatial resolution (Plate Carree projection) and over the spectral range 240-4000 nm.

### **For additional resources you could conduct an internet search to gather relevant information that may be useful. Potential search keywords could include:**

- CelesTrak
- Two-Line Element (TLE)
- Spectator Earth
- National Agriculture Imagery Program
- OpenStreetMap
- Google Earth Engine Data Catalog Landsat Collections
- LandTrendr Pixel Time Series plotter
