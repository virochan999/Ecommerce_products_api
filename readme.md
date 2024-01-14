# Product API

This API provides endpoints for managing products, categories, and filters.

## Routes

### Products

#### Get all products

- **Endpoint:** `/products`
- **Method:** `GET`
- **Description:** Get all products available.

#### Get products with pagination

- **Endpoint:** `/products/:category/pagination`
- **Method:** `GET`
- **Parameters:**
  - `category` (string): Category name.
- **Query Parameters:**
  - `offset` (optional, number): Offset for pagination.
  - `limit` (optional, number): Limit for pagination.
- **Description:** Get paginated products for a specific category.

#### Get a single product by ID

- **Endpoint:** `/products/:category/:id`
- **Method:** `GET`
- **Parameters:**
  - `category` (string): Category name.
  - `id` (string): Product ID.
- **Description:** Get details of a single product by ID.

#### Filter products by title

- **Endpoint:** `/products/filter/title`
- **Method:** `GET`
- **Query Parameters:**
  - `title` (string): Title to filter products.
- **Description:** Filter products by title.

#### Join filters (title, price range, categoryId)

- **Endpoint:** `/products/:category/filter`
- **Method:** `GET`
- **Query Parameters:**
  - `title` (string): Title to filter products.
  - `price_min` (number): Minimum price for filtering.
  - `price_max` (number): Maximum price for filtering.
- **Description:** Filter products based on title, price range, and category.

#### Filter products by price range

- **Endpoint:** `/products/:category/filter/price`
- **Method:** `GET`
- **Query Parameters:**
  - `price_min` (number): Minimum price for filtering.
  - `price_max` (number): Maximum price for filtering.
- **Description:** Filter products by price range.

#### Send all the products for the category

- **Endpoint:** `/products/:category`
- **Method:** `GET`
- **Parameters:**
  - `category` (string): Category name.
- **Description:** Get all products for a specific category.

### Home

#### Get all deals

- **Endpoint:** `/home/deals`
- **Method:** `GET`
- **Description:** Get all deals available.

#### Get trending products

- **Endpoint:** `/home/trending`
- **Method:** `GET`
- **Description:** Get trending products.

### Filters

#### Get filters for a category

- **Endpoint:** `/filters/:category`
- **Method:** `GET`
- **Parameters:**
  - `category` (string): Category name.
- **Description:** Get filters for a specific category.

### Categories

#### Get all categories

- **Endpoint:** `/category`
- **Method:** `GET`
- **Description:** Get all available categories.
