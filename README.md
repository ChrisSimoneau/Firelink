# Firelink Frontend

Firelink is a web application that uses generative AI to detect and visualize fire hotspots from satellite or UAV multispectral images.

## Quickstart

To run the project locally, follow these steps:

1. Clone the repository using `git clone https://github.com/Spaceapps-Firewatch/FireLink-Backend.git`.
2. Navigate to the project directory using `cd FireLink-Backend`.
3. Install the dependencies using `npm install`.
4. Run the front end application using `npm run start`.
5. Open your browser and go to `http://localhost:3000`.
6. Upload a multispectral image and wait for the processing to finish.
7. See the fire hotspots overlaid on the map according to the correct coordinates.

## How it works

The MVP takes a satellite or UAV multispectral image, sends it to the backend for processing using a generative AI (U-Net) and overlays the image according to the correct coordinates calculated in the backend.

The generative AI model is trained on a dataset of multispectral images with fire labels. It takes an input image and outputs a binary mask that indicates the presence or absence of fire in each pixel.

The backend also calculates the geographic coordinates of the image corners based on the metadata of the image. It then converts the coordinates to a format that can be used by Leaflet, a JavaScript library for interactive maps.

The front end application displays the original image and the fire mask on a Leaflet map, using the coordinates provided by the backend. The user can zoom in and out, pan, and toggle the layers to see the fire hotspots more clearly.

## Credit

- **Aishik Sanyal** ([@Xcellect](https://github.com/Xcellect))
- **Jasper Grant** ([@JasperGrant](https://github.com/JasperGrant))
- **Aniq Elahi** ([@Aniq-byte](https://github.com/Aniq-byte))
- **Paras Nath Seth** ([@parass05](https://github.com/parass05))
- **Christian Simoneau** ([@ChrisSimoneau](https://github.com/ChrisSimoneau))
