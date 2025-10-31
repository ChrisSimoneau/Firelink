# Firelink Frontend
Firelink (formermly known as Firewatch) is a web application that uses generative AI to detect and visualize fire hotspots from satellite or UAV multispectral images.

## Quickstart
To run the project locally, follow these steps:

Clone the repository using git clone https://github.com/Spaceapps-Firewatch/Firewatch-Frontend.
Navigate to the project directory using cd Firewatch-Frontend.
Install the dependencies using npm install.
Run the front end application using npm run start.
Open your browser and go to http://localhost:3000.
Upload a multispectral image and wait for the processing to finish.
See the fire hotspots overlaid on the map according to the correct coordinates.
How it works
The MVP takes a satellite or UAV multispectral image, sends it to the backend for processing using a generative AI (U-Net) and overlays the image according to the correct coordinates calculated in the backend.

The generative AI model is trained on a dataset of multispectral images with fire labels. It takes an input image and outputs a binary mask that indicates the presence or absence of fire in each pixel.

The backend also calculates the geographic coordinates of the image corners based on the metadata of the image. It then converts the coordinates to a format that can be used by Leaflet, a JavaScript library for interactive maps.

The front end application displays the original image and the fire mask on a Leaflet map, using the coordinates provided by the backend. The user can zoom in and out, pan, and toggle the layers to see the fire hotspots more clearly.

## Firelink Backend
Firelink Backend is a Python application that provides the core functionality for the Firelink web application. It uses generative AI to detect and visualize fire hotspots from satellite or UAV multispectral images.

## Quickstart
To run the project locally, follow these steps:

Clone the repository using git clone https://github.com/Spaceapps-Firewatch/FireLink-Backend.git.
Navigate to the app directory using cd app.
Install the dependencies using pip install -r requirements.txt.
Run the B2B (Gov/Enterprise) dashboard using streamlit run app.py. This will launch a web interface where you can upload and process multispectral images.
Run the B2C (End User App) API endpoint for inference using python api-server.py. This will start a Flask server that exposes an API endpoint for receiving and processing multispectral images from the front end application.
How it works
The MVP takes a satellite or UAV multispectral image from the frontend dashboard, sends it to the backend for processing using a generative AI (U-Net) and overlays the image according to the correct coordinates calculated in the backend.

The generative AI model is trained on a dataset of multispectral images with fire labels. It takes an input image and outputs a binary mask that indicates the presence or absence of fire in each pixel.

The backend also calculates the geographic coordinates of the image corners based on the metadata of the image. It then converts the coordinates to a format that can be used by Leaflet, a JavaScript library for interactive maps.

The backend can either display the original image and the fire mask on a Streamlit dashboard, or return them as JSON data to the front end application via the API endpoint. The user can zoom in and out, pan, and toggle the layers to see the fire hotspots more clearly.

## Credit
ML model: https://github.com/yueureka/WildFireDetection (Used with permissions)

## Team Firelink
Aishik Sanyal (@Xcellect)
Jasper Grant (@JasperGrant)
Aniq Elahi (@Aniq-byte)
Paras Nath Seth (@parass05)
Christian Simoneau (@ChrisSimoneau)
