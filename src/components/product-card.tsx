export default function ProductCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition border border-border">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-accent">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
