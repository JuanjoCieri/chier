### Chieri Library

Chieri is a library that allows you to make HTTP requests using popular methods such as GET, POST, PUT, and PATCH. In addition, it comes with caching functionality that can help optimize performance.

## Installation

You can install Chieri using npm:

npm install chieri

# Usage

To use Chieri, you first need to import it into your project:

const chieri = require('chieri');

Once you have imported the library, you can make HTTP requests using the following methods:

# GET

chieri.get(url, options);

The get method sends an HTTP GET request to the specified URL. You can also pass in options such as headers, query parameters, and timeout.

# POST

chieri.post(url, data, options);

The post method sends an HTTP POST request to the specified URL. You can also pass in data to be sent with the request, as well as options such as headers, query parameters, and timeout.

# PUT

chieri.put(url, data, options);

The put method sends an HTTP PUT request to the specified URL. You can also pass in data to be sent with the request, as well as options such as headers, query parameters, and timeout.

# PATCH

chieri.patch(url, data, options);

The patch method sends an HTTP PATCH request to the specified URL. You can also pass in data to be sent with the request, as well as options such as headers, query parameters, and timeout.

# Caching

Chieri also comes with caching functionality that can help optimize performance. When you make an HTTP request, Chieri stores the response data in cache. If you make the same request again, Chieri returns the cached data instead of making a new request.

You can control the cache behavior using the following options:

{
  useCache: true, // enables caching
  cacheDuration: 60000 // cache duration in milliseconds (default is 5 minutes)
}

To disable caching for a specific request, you can pass in the useCache option with a value of false:

chieri.get(url, { useCache: false });

# License

Chieri is licensed under the MIT License. See LICENSE for more information.

# Contributions

Contributions to Chieri are welcome! If you have an issue or a feature request, please open an issue on the GitHub repository. If you would like to contribute code, please fork the repository and submit a pull request.