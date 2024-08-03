interface Props {
  params: {
    id: number;
  };
}

export default function AgentPage({ params }: Props) {
  const { id } = params;
  return (
    <div>
      <h1>Hello Single Agent</h1>
    </div>
  );
}
