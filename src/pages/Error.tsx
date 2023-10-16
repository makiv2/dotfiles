import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as { statusText: string; message: string } | undefined;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText as string || error?.message as string}</i>
      </p>
    </div>
  );
}