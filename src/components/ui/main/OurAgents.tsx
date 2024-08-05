import { Employee } from "@/types";
import { Title } from "./Title";
import { getAgentList } from "@/services";
import { AgentsCarousel } from "@/components/agents/AgentsCarousel";

export const OurAgents = async () => {
  const agents: Employee[] = await getAgentList();

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto pb-28">
      <Title title="Nuestros asesores inmobiliarios" />
      <AgentsCarousel agents={agents} />
    </div>
  );
};
