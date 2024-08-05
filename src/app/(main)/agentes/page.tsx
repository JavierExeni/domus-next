import { AgentList } from "@/components";

export default async function AgentsPage() {
  return (
    <div className="w-[90%] md:w-[80%] m-auto py-4 lg:!mb-10">
      <AgentList />
    </div>
  );
}
