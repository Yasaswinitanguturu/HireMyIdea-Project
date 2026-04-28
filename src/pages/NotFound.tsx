import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="text-center">
      <h1 className="font-serif text-6xl font-bold text-primary">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found</p>
      <Link to="/" className="mt-6 inline-block text-primary underline">
        Back to home
      </Link>
    </div>
  </div>
);

export default NotFound;
