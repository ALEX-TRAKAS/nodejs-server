# Places API Node.js Service

This is a simple Node.js and Express service that provides endpoints to interact with Google Places API for autocomplete suggestions and place details. The service includes CORS support and is configured to use API keys through environment variables.

## Features

* Fetch autocomplete suggestions for regions in Greece using the Google Places API.
* Fetch detailed information about a specific place.
* Support for Cross-Origin Resource Sharing (CORS).
* Environment variable-based configuration for the API key.

## API Endpoints
### 1. Get Autocomplete Suggestions
* **URL:** `/places`
* Method: GET
* **Query Parameters:**
  * `input` (string): The input text for which autocomplete suggestions are required.
* **Response:** JSON object containing autocomplete suggestions.

### 2. Get Place Details
* **URL:** `/place`
* **Method:** GET
* **Query Parameters:**
  * `input` (string): The `place_id` of the location you want details for.
* **Response:** JSON object containing place details such as name, address, and geometry.
