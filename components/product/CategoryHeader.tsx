type CategoryHeaderProps = {
  title: string;
  description?: string;
};

export default function CategoryHeader({ title, description }: CategoryHeaderProps) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
}
