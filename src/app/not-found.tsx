// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center text-center p-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
        <p className="text-lg mb-4">La page que vous recherchez n'existe pas.</p>
        <a href="/" className="text-blue-600 underline">Retour à l'accueil</a>
      </div>
    </div>
  );
}
