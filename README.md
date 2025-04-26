# NanoBlog

The world's least customisable blogging platform. Create posts no more than 500 words long. There's no themes, no images, and nothing longer than 500 words.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sjustintaylor/nanoblog.git
cd nanoblog
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Run database migrations:

```bash
node ace migration:run
```

## Usage

### Development

Start the development server with hot module replacement:

```bash
pnpm run dev
# or
node ace serve --hmr
```

### Building for Production

Build the application for production:

```bash
pnpm run build
# or
node ace build
```

Start the production server:

```bash
pnpm start
```

### Commands

- **Lint:** `pnpm run lint`
- **Format:** `pnpm run format`
- **Typecheck:** `pnpm run typecheck`
- **Test:** `pnpm run test` or `node ace test`
- **Run single test:** `node ace test tests/path/to/test.ts -f "test name"`

## License

This project is licensed under the Mozilla Public License Version 2.0 (MPL-2.0). See the [LICENSE](LICENSE) file for details.
