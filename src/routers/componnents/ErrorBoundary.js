import React, { useState } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  function handleOnError(error, errorInfo) {
    // Vous pouvez aussi enregistrer l'erreur dans un service de journalisation
    console.error(error, errorInfo);
    setHasError(true);
  }

  if (hasError) {
    // Vous pouvez retourner un composant d'erreur personnalisé ici
    return <div>Quelque chose s'est mal passé. globalement veuillez reesseyer</div>;
  }

  return (
    <React.Fragment>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          onError: handleOnError
        });
      })}
    </React.Fragment>
  );
}

export default ErrorBoundary;
