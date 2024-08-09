"use client";
import { AgentTopFilters } from "./AgentTopFilters";
import { AgentCard } from "./AgentCard";
import { useAgentsContext } from "@/app/(main)/agentes/layout";

export const AgentList = () => {
  const { agents } = useAgentsContext();

  return (
    <>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Nuestros Agentes</h1>
        <AgentTopFilters count={agents.count} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:!gap-5 xl:!gap-10">
        {!!agents.results && agents.results.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </>
  );
};
