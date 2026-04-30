interface Props {
  params: { id: string };
}

export default async function CafeDetailPage({ params }: Props) {
  return (
    <div className="p-6">
      <h1>Cafe ID: {params.id}</h1>
    </div>
  );
}
