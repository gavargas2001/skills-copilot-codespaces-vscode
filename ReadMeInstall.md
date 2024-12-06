# Installation Instructions

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install express
   ```

3. **Run the server**:
   ```bash
   node comments.js
   ```

4. **Test the endpoints**:
   You can use a tool like `curl` or Postman to test the endpoints. For example, to get all comments:
   ```bash
   curl http://localhost:3000/
   ```

## Endpoints

- `GET /` - Display all comments
- `GET /:id` - Display a comment by ID
- `GET /author/:author` - Display comments by author
- `GET /date/:date` - Display comments by date

## Example

To get all comments:
```bash
curl http://localhost:3000/
```

To get a comment by ID:
```bash
curl http://localhost:3000/1
```

To get comments by author:
```bash
curl http://localhost:3000/author/john
```

To get comments by date:
```bash
curl http://localhost:3000/date/2021-01-01
```

   